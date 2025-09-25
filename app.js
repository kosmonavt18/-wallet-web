const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// Storage helpers
const LS_USERS = 'ww:users';
const LS_SESSION = 'ww:session';
const LS_CARDS = 'ww:cards';
const LS_PROFILE = 'ww:profile';
const BACKUP_KEY = 'ww:backup';

function save(key, val){ 
  localStorage.setItem(key, JSON.stringify(val)); 
  // Create backup
  createBackup();
}
function load(key, def){ 
  const v = localStorage.getItem(key); 
  return v? JSON.parse(v): def; 
}

// Backup system for data persistence
function createBackup() {
  const backup = {
    users: load(LS_USERS, {}),
    cards: load(LS_CARDS, []),
    profile: load(LS_PROFILE, {}),
    timestamp: Date.now()
  };
  localStorage.setItem(BACKUP_KEY, JSON.stringify(backup));
}

function restoreFromBackup() {
  const backup = localStorage.getItem(BACKUP_KEY);
  if (backup) {
    try {
      const data = JSON.parse(backup);
      // Only restore if current data is empty
      if (Object.keys(load(LS_USERS, {})).length === 0) {
        save(LS_USERS, data.users);
      }
      if (load(LS_CARDS, []).length === 0) {
        save(LS_CARDS, data.cards);
      }
      if (Object.keys(load(LS_PROFILE, {})).length === 0) {
        save(LS_PROFILE, data.profile);
      }
    } catch (e) {
      console.error('Backup restore failed:', e);
    }
  }
}

// Auto-save every 30 seconds
setInterval(createBackup, 30000);

// Save data before page unload
window.addEventListener('beforeunload', () => {
  createBackup();
});

// Save data on visibility change (when switching tabs)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    createBackup();
  }
});

// Auth
const authEl = $('#auth');
const appEl = $('#app');
const authError = $('#authError');
const authTitle = $('#authTitle');
const loginBtn = $('#loginBtn');
const registerBtn = $('#registerBtn');
const confirmRegisterBtn = $('#confirmRegisterBtn');
const backToLoginBtn = $('#backToLogin');

let isRegisterMode = false;

$('#loginBtn').onclick = () => login($('#email').value.trim(), $('#password').value);
$('#registerBtn').onclick = () => showRegister();
$('#confirmRegisterBtn').onclick = () => register($('#email').value.trim(), $('#password').value);
$('#backToLogin').onclick = () => showLogin();
$('#logout').onclick = () => { localStorage.removeItem(LS_SESSION); render(); };
$('#profileBtn').onclick = () => {
  const profile = load(LS_PROFILE, {});
  const currentUser = localStorage.getItem(LS_SESSION);
  const users = load(LS_USERS, {});
  
  $('#profileLogin').value = currentUser || '';
  $('#profilePassword').value = users[currentUser] || '';
  $('#profileName').value = profile.name || '';
  $('#profileSurname').value = profile.surname || '';
  $('#profileAge').value = profile.age || '';
  $('#profileModal').showModal();
};
$('#profileSave').onclick = (e) => {
  e.preventDefault();
  const profile = {
    name: $('#profileName').value,
    surname: $('#profileSurname').value,
    age: $('#profileAge').value
  };
  save(LS_PROFILE, profile);
  $('#profileModal').close();
};

// Export/Import functionality
$('#exportData').onclick = () => {
  const data = {
    users: load(LS_USERS, {}),
    cards: load(LS_CARDS, []),
    profile: load(LS_PROFILE, {}),
    timestamp: Date.now(),
    version: '1.0'
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `wallet-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  alert('Данные экспортированы! Сохраните файл в безопасном месте.');
};

$('#importData').onclick = () => {
  $('#importFile').click();
};

$('#importFile').onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      
      if (confirm('Это заменит все текущие данные. Продолжить?')) {
        save(LS_USERS, data.users || {});
        save(LS_CARDS, data.cards || []);
        save(LS_PROFILE, data.profile || {});
        
        alert('Данные успешно импортированы!');
        location.reload(); // Reload to apply changes
      }
    } catch (err) {
      alert('Ошибка при импорте файла. Проверьте формат файла.');
    }
  };
  reader.readAsText(file);
};

// Converter
$('#convertBtn').onclick = () => {
  const amount = parseFloat($('#convertFrom').value);
  const from = $('#fromCurrency').value;
  const to = $('#toCurrency').value;
  
  if(!amount || amount <= 0) {
    $('#convertResult').textContent = 'Введите корректную сумму';
    return;
  }
  
  // Курсы к сому
  const rates = {
    'KGS': 1,
    'USD': 95.50,
    'EUR': 103.20,
    'RUB': 1.05,
    'CNY': 13.00
  };
  
  const fromRate = rates[from];
  const toRate = rates[to];
  
  if(!fromRate || !toRate) {
    $('#convertResult').textContent = 'Ошибка курса';
    return;
  }
  
  // Конвертация через сом
  const somAmount = amount * fromRate;
  const result = somAmount / toRate;
  
  $('#convertResult').textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
};

function validateCreds(email, pass){
  authError.textContent = '';
  if(!email) { authError.textContent = 'Введите логин'; return false; }
  if(!pass || pass.length<5){ authError.textContent = 'Пароль должен быть не менее 5 символов'; return false; }
  return true;
}

function showRegister(){
  isRegisterMode = true;
  authTitle.textContent = 'Регистрация';
  loginBtn.style.display = 'none';
  registerBtn.style.display = 'none';
  confirmRegisterBtn.classList.remove('hidden');
  backToLoginBtn.classList.remove('hidden');
  clearAuthForm();
}

function showLogin(){
  isRegisterMode = false;
  authTitle.textContent = 'Войти';
  loginBtn.style.display = 'block';
  registerBtn.style.display = 'block';
  confirmRegisterBtn.classList.add('hidden');
  backToLoginBtn.classList.add('hidden');
  clearAuthForm();
}

function login(email, pass){
  if(!validateCreds(email, pass)) return;
  const users = load(LS_USERS, {});
  if(!users[email]) { authError.textContent = 'Нет аккаунта, зарегистрируйтесь'; return; }
  if(users[email]!==pass) { authError.textContent = 'Неверный пароль'; return; }
  localStorage.setItem(LS_SESSION, email);
  clearAuthForm();
  render();
}

function register(email, pass){
  if(!validateCreds(email, pass)) return;
  const users = load(LS_USERS, {});
  if(users[email]) { authError.textContent = 'Такой логин уже есть'; return; }
  users[email] = pass; save(LS_USERS, users);
  authError.textContent = 'Регистрация успешна! Теперь войдите.';
  showLogin();
}

function clearAuthForm(){ $('#email').value=''; $('#password').value=''; authError.textContent=''; }

// Tabs + hash routing
function switchTab(id){
  $$('.tabs a').forEach(b=>b.classList.toggle('active', b.dataset.tab===id));
  $$('.tab').forEach(t=>t.classList.toggle('active', t.id===id));
}
$$('.tabs a').forEach(a=>a.addEventListener('click',(e)=>{
  e.preventDefault();
  switchTab(a.dataset.tab);
  location.hash = a.dataset.tab;
}));
window.addEventListener('hashchange', ()=>{
  const id = location.hash.replace('#','') || 'wallet';
  switchTab(id);
});

// Cards
$('#addCard').onclick = ()=> $('#newCardModal').showModal();

// Scanner functionality
$('#ncScanBtn').onclick = () => startScanner('ncData');
$('#ecScanBtn').onclick = () => startScanner('ecData');

function startScanner(targetInputId) {
  // Check if camera is supported
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Камера не поддерживается в этом браузере');
    return;
  }

  // Create scanner modal
  const scannerModal = document.createElement('dialog');
  scannerModal.innerHTML = `
    <div class="card" style="max-width: 90vw; max-height: 90vh;">
      <h3>📷 Сканер QR/Штрих-кода</h3>
      <video id="scannerVideo" autoplay style="width: 100%; max-width: 400px; border-radius: 8px;"></video>
      <canvas id="scannerCanvas" style="display: none;"></canvas>
      <div style="margin: 16px 0; text-align: center;">
        <button id="stopScanner" style="background: #f44336; color: white; padding: 8px 16px; border: none; border-radius: 4px; margin-right: 8px;">Остановить</button>
        <button id="closeScanner" style="background: #666; color: white; padding: 8px 16px; border: none; border-radius: 4px;">Закрыть</button>
      </div>
      <div id="scannerResult" style="text-align: center; margin-top: 16px; font-weight: bold; color: #4caf50;"></div>
    </div>
  `;
  
  document.body.appendChild(scannerModal);
  scannerModal.showModal();

  const video = scannerModal.querySelector('#scannerVideo');
  const canvas = scannerModal.querySelector('#scannerCanvas');
  const resultDiv = scannerModal.querySelector('#scannerResult');
  let stream = null;

  // Start camera
  navigator.mediaDevices.getUserMedia({ 
    video: { 
      facingMode: 'environment', // Use back camera on mobile
      width: { ideal: 640 },
      height: { ideal: 480 }
    } 
  })
  .then(mediaStream => {
    stream = mediaStream;
    video.srcObject = stream;
    
    // Start scanning
    const scanInterval = setInterval(() => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        scanFrame(video, canvas, resultDiv, targetInputId, scannerModal, scanInterval);
      }
    }, 100);
  })
  .catch(err => {
    console.error('Camera error:', err);
    alert('Не удалось получить доступ к камере. Проверьте разрешения.');
    scannerModal.close();
  });

  // Stop scanner
  scannerModal.querySelector('#stopScanner').onclick = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    scannerModal.close();
  };

  // Close scanner
  scannerModal.querySelector('#closeScanner').onclick = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    scannerModal.close();
  };

  // Close on backdrop click
  scannerModal.onclick = (e) => {
    if (e.target === scannerModal) {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      scannerModal.close();
    }
  };
}

function scanFrame(video, canvas, resultDiv, targetInputId, modal, interval) {
  const ctx = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  // Simple QR code detection (this is a basic implementation)
  // In a real app, you'd use a library like QuaggaJS or ZXing
  try {
    // This is a simplified detection - in practice you'd use a proper library
    const result = detectQRCode(imageData);
    if (result) {
      resultDiv.textContent = `Найден код: ${result}`;
      resultDiv.style.color = '#4caf50';
      
      // Fill the target input
      document.getElementById(targetInputId).value = result;
      
      // Stop scanning after 2 seconds
      setTimeout(() => {
        if (modal.querySelector('video').srcObject) {
          modal.querySelector('video').srcObject.getTracks().forEach(track => track.stop());
        }
        modal.close();
      }, 2000);
      
      clearInterval(interval);
    }
  } catch (e) {
    // Continue scanning
  }
}

function detectQRCode(imageData) {
  // Use jsQR library for QR code detection
  if (typeof jsQR !== 'undefined') {
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      return code.data;
    }
  }
  return null;
}

// File handling
function fileToBase64(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

$('#ncSave').onclick = async (e)=>{
  e.preventDefault();
  const list = load(LS_CARDS, []);
  
  let codeData = $('#ncData').value;
  let codeImage = null;
  let bgImage = null;
  
  // Handle code file
  const codeFile = $('#ncCodeFile').files[0];
  if(codeFile) {
    codeImage = await fileToBase64(codeFile);
  }
  
  // Handle background file
  const bgFile = $('#ncBgFile').files[0];
  if(bgFile) {
    bgImage = await fileToBase64(bgFile);
  }
  
  list.unshift({ 
    id: Date.now().toString(), 
    name: $('#ncName').value, 
    category: $('#ncCategory').value, 
    data: codeData,
    codeImage: codeImage,
    bgImage: bgImage,
    bank: $('#ncBank').value 
  });
  save(LS_CARDS, list);
  $('#newCardModal').close();
  renderCards(); renderWallet();
};

let editId = null;
$('#ecSave').onclick = async (e)=>{
  e.preventDefault();
  const list = load(LS_CARDS, []);
  const i = list.findIndex(x=>x.id===editId);
  if(i>=0){
    let codeData = $('#ecData').value;
    let codeImage = list[i].codeImage;
    let bgImage = list[i].bgImage;
    
    // Handle code file
    const codeFile = $('#ecCodeFile').files[0];
    if(codeFile) {
      codeImage = await fileToBase64(codeFile);
    }
    
    // Handle background file
    const bgFile = $('#ecBgFile').files[0];
    if(bgFile) {
      bgImage = await fileToBase64(bgFile);
    }
    
    list[i] = { 
      ...list[i], 
      name: $('#ecName').value, 
      category: $('#ecCategory').value, 
      cardNumber: $('#ecCardNumber').value,
      expiry: $('#ecExpiry').value,
      data: codeData,
      codeImage: codeImage,
      bgImage: bgImage,
      bank: $('#ecBank').value 
    };
    save(LS_CARDS, list);
    $('#editCardModal').close();
    renderCards(); renderWallet();
  }
};

function clearAllData(){
  localStorage.removeItem(LS_USERS);
  localStorage.removeItem(LS_SESSION);
  localStorage.removeItem(LS_CARDS);
  localStorage.removeItem(LS_PROFILE);
}

function render(){
  const email = localStorage.getItem(LS_SESSION);
  const logged = !!email;
  
  // Принудительно скрываем/показываем элементы
  if(logged) {
    authEl.style.display = 'none';
    appEl.style.display = 'block';
    renderCards(); 
    renderWallet(); 
    renderRates();
    switchTab((location.hash||'#wallet').replace('#','')); 
  } else {
    authEl.style.display = 'block';
    appEl.style.display = 'none';
    // Очищаем URL от хешей если не авторизован
    if(location.hash) history.replaceState(null, '', location.pathname);
  }
}

function renderCards(){
  const list = load(LS_CARDS, []);
  const root = $('#cardsList');
  root.innerHTML = '';
  
  // Group cards by category
  const categories = {
    'e-wallet': { name: 'Электронные кошельки', items: [] },
    'bonus': { name: 'Бонусные карты', items: [] },
    'other': { name: 'Другое', items: [] }
  };
  
  // Sort cards into categories
  for(const item of list){
    const category = item.category || 'other';
    if(categories[category]) {
      categories[category].items.push(item);
    }
  }
  
  // Render each category
  for(const [key, category] of Object.entries(categories)){
    if(category.items.length === 0) continue;
    
    const categoryEl = document.createElement('div');
    categoryEl.className = 'category-section';
    categoryEl.innerHTML = `<div class="category-title">${category.name}</div>`;
    
    const gridEl = document.createElement('div');
    gridEl.className = 'grid';
    
    for(const item of category.items){
      const el = document.createElement('div');
      el.className = 'card-item';
      
      // Show code image or generate QR
      let codeDisplay = '';
      if(item.codeImage) {
        codeDisplay = `<img src="${item.codeImage}" style="max-width:120px;max-height:120px" alt="code" />`;
      } else if(item.data) {
        codeDisplay = makeQrSvg(item.data,120);
      }
      
      el.innerHTML = `<div class="bg" style="background-image:url('${item.bgImage||''}')"></div>
        <div class="content">
          <div class="row between">
            <strong>${item.name}</strong>
            <span class="small">${item.category}</span>
          </div>
          ${item.cardNumber ? `<div class="small">${item.cardNumber}</div>` : ''}
          ${item.expiry ? `<div class="small">${item.expiry}</div>` : ''}
          <div style="margin-top:8px">${codeDisplay}</div>
          <div class="row" style="margin-top:8px">
            <button class="edit">Изменить</button>
            ${item.bank? `<a class="icon-link" target="_blank" href="${item.bank}">Открыть банк</a>`: ''}
          </div>
        </div>`;
      el.querySelector('.edit').onclick = ()=> openEdit(item);
      gridEl.appendChild(el);
    }
    
    categoryEl.appendChild(gridEl);
    root.appendChild(categoryEl);
  }
}

function openEdit(item){
  editId = item.id;
  $('#ecName').value = item.name || '';
  $('#ecCategory').value = item.category || 'other';
  $('#ecCardNumber').value = item.cardNumber || '';
  $('#ecExpiry').value = item.expiry || '';
  $('#ecData').value = item.data || '';
  $('#ecBank').value = item.bank || '';
  $('#editCardModal').showModal();
}

function renderWallet(){
  const list = load(LS_CARDS, []);
  const root = $('#walletList');
  root.innerHTML = '';
  for(const item of list){
    const el = document.createElement('div');
    el.className = 'wallet-card';
    
    // Show code image or generate QR
    let codeDisplay = '';
    if(item.codeImage) {
      codeDisplay = `<img src="${item.codeImage}" style="max-width:120px;max-height:120px" alt="code" />`;
    } else if(item.data) {
      codeDisplay = makeQrSvg(item.data,120);
    }
    
    el.innerHTML = `<div class="bg" style="background-image:url('${item.bgImage||''}')"></div>
      <div class="content">
        <div class="row between">
          <strong style="font-size:18px">${item.name}</strong>
          ${item.bank? `<a class="bank-icon" target="_blank" href="${item.bank}" title="Открыть банк">🏦</a>`: ''}
        </div>
        <div style="display:flex;justify-content:center;align-items:center;flex:1">${codeDisplay}</div>
        <div style="text-align:center;font-size:12px;opacity:0.8">${item.cardNumber || ''}</div>
      </div>`;
    root.appendChild(el);
  }
}

function renderRates(){
  const now = new Date();
  const dateStr = now.toLocaleDateString('ru-RU') + ' ' + now.toLocaleTimeString('ru-RU');
  $('#ratesDate').textContent = dateStr;
  
  const root = $('#ratesList');
  root.innerHTML = '';
  
  // Курсы валют к сому (покупка/продажа)
  const rates = [
    { currency: 'USD', buy: '95.50', sell: '96.20', name: 'Доллар' },
    { currency: 'EUR', buy: '103.20', sell: '104.10', name: 'Евро' },
    { currency: 'RUB', buy: '1.05', sell: '1.08', name: 'Рубль' },
    { currency: 'CNY', value: '13.15', buy: '13.00', sell: '13.30', name: 'Юань' }
  ];
  
  for(const rate of rates){
    const el = document.createElement('div');
    el.className = 'rate-item';
    el.innerHTML = `
      <div class="rate-currency">${rate.currency}</div>
      <div class="rate-value">${rate.buy}</div>
      <div class="rate-buy">Покупка: ${rate.buy}</div>
      <div class="rate-sell">Продажа: ${rate.sell}</div>
      <div class="small">${rate.name}</div>
    `;
    root.appendChild(el);
  }
}

function makeQrSvg(text, size){
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
  return `<img src="${url}" width="${size}" height="${size}" alt="qr" />`;
}

// Сброс всех данных при загрузке (для тестирования)
// clearAllData(); // Отключено для сохранения данных
restoreFromBackup(); // Восстанавливаем данные из резервной копии
render();
