const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// Language translations
const translations = {
  ru: {
    'nav.wallet': 'Кошелек',
    'nav.cards': 'Карты',
    'nav.rates': 'Курс валют',
    'nav.profile': 'Профиль',
    'nav.logout': 'Выйти',
    'auth.title': 'Войти',
    'auth.login': 'Логин:',
    'auth.password': 'Пароль:',
    'auth.loginBtn': 'Войти',
    'auth.register': 'Регистрация',
    'auth.confirmRegister': 'Зарегистрироваться',
    'auth.backToLogin': 'Назад к входу',
    'wallet.title': 'Кошелёк',
    'cards.title': 'Карты',
    'rates.title': 'Курс валют',
    'rates.date': 'Дата и время',
    'rates.converter': 'Калькулятор конвертации',
    'rates.convertBtn': 'Конвертировать',
    'profile.title': 'Профиль',
    'profile.login': 'Логин',
    'profile.password': 'Пароль',
    'profile.name': 'Имя',
    'profile.surname': 'Фамилия',
    'profile.age': 'Возраст',
    'profile.backup': 'Резервное копирование',
    'profile.export': 'Экспорт данных',
    'profile.import': 'Импорт данных',
    'card.add': 'Новая карта',
    'card.edit': 'Редактировать карту',
    'card.name': 'Название',
    'card.category': 'Тип',
    'card.qr': 'QR код или штрих-код',
    'card.scanner': 'Сканер',
    'card.manual': 'Или введите данные вручную',
    'card.background': 'Фон карты',
    'card.bank': 'Ссылка на приложение банка',
    'card.number': 'Номер карты',
    'card.expiry': 'Срок действия (ММ/ГГ)',
    'card.cancel': 'Отмена',
    'card.save': 'Сохранить',
    'card.editBtn': 'Изменить',
    'card.bankBtn': 'Открыть банк',
    'category.e-wallet': 'электронные кошельки',
    'category.bonus': 'бонусные карты',
    'category.other': 'другое',
    'scanner.title': 'Сканер QR/Штрих-кода',
    'scanner.stop': 'Остановить',
    'scanner.close': 'Закрыть',
    'scanner.found': 'Найден код:',
    'error.loginEmpty': 'Введите логин',
    'error.passwordShort': 'Пароль должен быть не менее 5 символов',
    'error.userExists': 'Такой логин уже есть',
    'error.userNotFound': 'Нет аккаунта, зарегистрируйтесь',
    'error.wrongPassword': 'Неверный пароль',
    'error.registrationSuccess': 'Регистрация успешна! Теперь войдите.',
    'error.cameraNotSupported': 'Камера не поддерживается в этом браузере',
    'error.cameraAccess': 'Не удалось получить доступ к камере. Проверьте разрешения.',
    'success.export': 'Данные экспортированы! Сохраните файл в безопасном месте.',
    'success.import': 'Данные успешно импортированы!',
    'confirm.replaceData': 'Это заменит все текущие данные. Продолжить?',
    'error.importFile': 'Ошибка при импорте файла. Проверьте формат файла.'
  },
  en: {
    'nav.wallet': 'Wallet',
    'nav.cards': 'Cards',
    'nav.rates': 'Exchange Rates',
    'nav.profile': 'Profile',
    'nav.logout': 'Logout',
    'auth.title': 'Login',
    'auth.login': 'Login:',
    'auth.password': 'Password:',
    'auth.loginBtn': 'Login',
    'auth.register': 'Register',
    'auth.confirmRegister': 'Register',
    'auth.backToLogin': 'Back to Login',
    'wallet.title': 'Wallet',
    'cards.title': 'Cards',
    'rates.title': 'Exchange Rates',
    'rates.date': 'Date and Time',
    'rates.converter': 'Currency Converter',
    'rates.convertBtn': 'Convert',
    'profile.title': 'Profile',
    'profile.login': 'Login',
    'profile.password': 'Password',
    'profile.name': 'Name',
    'profile.surname': 'Surname',
    'profile.age': 'Age',
    'profile.backup': 'Backup',
    'profile.export': 'Export Data',
    'profile.import': 'Import Data',
    'card.add': 'New Card',
    'card.edit': 'Edit Card',
    'card.name': 'Name',
    'card.category': 'Type',
    'card.qr': 'QR code or barcode',
    'card.scanner': 'Scanner',
    'card.manual': 'Or enter data manually',
    'card.background': 'Card background',
    'card.bank': 'Bank app link',
    'card.number': 'Card number',
    'card.expiry': 'Expiry (MM/YY)',
    'card.cancel': 'Cancel',
    'card.save': 'Save',
    'card.editBtn': 'Edit',
    'card.bankBtn': 'Open Bank',
    'category.e-wallet': 'e-wallets',
    'category.bonus': 'bonus cards',
    'category.other': 'other',
    'scanner.title': 'QR/Barcode Scanner',
    'scanner.stop': 'Stop',
    'scanner.close': 'Close',
    'scanner.found': 'Code found:',
    'error.loginEmpty': 'Enter login',
    'error.passwordShort': 'Password must be at least 5 characters',
    'error.userExists': 'This login already exists',
    'error.userNotFound': 'No account, please register',
    'error.wrongPassword': 'Wrong password',
    'error.registrationSuccess': 'Registration successful! Now login.',
    'error.cameraNotSupported': 'Camera not supported in this browser',
    'error.cameraAccess': 'Could not access camera. Check permissions.',
    'success.export': 'Data exported! Save the file in a safe place.',
    'success.import': 'Data successfully imported!',
    'confirm.replaceData': 'This will replace all current data. Continue?',
    'error.importFile': 'Error importing file. Check file format.'
  },
  ky: {
    'nav.wallet': 'Капчык',
    'nav.cards': 'Карталар',
    'nav.rates': 'Валюта курсу',
    'nav.profile': 'Профиль',
    'nav.logout': 'Чыгуу',
    'auth.title': 'Кирүү',
    'auth.login': 'Логин:',
    'auth.password': 'Пароль:',
    'auth.loginBtn': 'Кирүү',
    'auth.register': 'Катталуу',
    'auth.confirmRegister': 'Катталуу',
    'auth.backToLogin': 'Кирүүгө кайтуу',
    'wallet.title': 'Капчык',
    'cards.title': 'Карталар',
    'rates.title': 'Валюта курсу',
    'rates.date': 'Дата жана убакыт',
    'rates.converter': 'Валюта конвертер',
    'rates.convertBtn': 'Конверттөө',
    'profile.title': 'Профиль',
    'profile.login': 'Логин',
    'profile.password': 'Пароль',
    'profile.name': 'Аты',
    'profile.surname': 'Фамилиясы',
    'profile.age': 'Жашы',
    'profile.backup': 'Резервдик көчүрүү',
    'profile.export': 'Маалыматты экспорттоо',
    'profile.import': 'Маалыматты импорттоо',
    'card.add': 'Жаңы карта',
    'card.edit': 'Картаны түзөтүү',
    'card.name': 'Аты',
    'card.category': 'Түрү',
    'card.qr': 'QR код же штрих-код',
    'card.scanner': 'Сканер',
    'card.manual': 'Же маалыматты кол менен киргизиңиз',
    'card.background': 'Картанын фону',
    'card.bank': 'Банк колдонмосуна шилтеме',
    'card.number': 'Картанын номуру',
    'card.expiry': 'Жарактылык мөөнөтү (АА/ЖЖ)',
    'card.cancel': 'Жокко чыгаруу',
    'card.save': 'Сактоо',
    'card.editBtn': 'Түзөтүү',
    'card.bankBtn': 'Банкты ачуу',
    'category.e-wallet': 'электрондук капчыктар',
    'category.bonus': 'бонус карталары',
    'category.other': 'башка',
    'scanner.title': 'QR/Штрих-код сканер',
    'scanner.stop': 'Токтотуу',
    'scanner.close': 'Жабуу',
    'scanner.found': 'Код табылды:',
    'error.loginEmpty': 'Логинди киргизиңиз',
    'error.passwordShort': 'Пароль кеминде 5 символ болушу керек',
    'error.userExists': 'Мындай логин бар',
    'error.userNotFound': 'Аккаунт жок, катталыңыз',
    'error.wrongPassword': 'Туура эмес пароль',
    'error.registrationSuccess': 'Каттоо ийгиликтүү! Эми кириңиз.',
    'error.cameraNotSupported': 'Камера бул браузерде колдолбойт',
    'error.cameraAccess': 'Камерага кирүү мүмкүн болгон жок. Уруксаттарды текшериңиз.',
    'success.export': 'Маалымат экспорттолду! Файлды коопсуз жерде сактаңыз.',
    'success.import': 'Маалымат ийгиликтүү импорттолду!',
    'confirm.replaceData': 'Бул бардык учурдагы маалыматты алмаштырат. Улантуу керекби?',
    'error.importFile': 'Файлды импорттоодо ката. Файл форматын текшериңиз.'
  },
  tr: {
    'nav.wallet': 'Cüzdan',
    'nav.cards': 'Kartlar',
    'nav.rates': 'Döviz Kurları',
    'nav.profile': 'Profil',
    'nav.logout': 'Çıkış',
    'auth.title': 'Giriş',
    'auth.login': 'Kullanıcı Adı:',
    'auth.password': 'Şifre:',
    'auth.loginBtn': 'Giriş',
    'auth.register': 'Kayıt',
    'auth.confirmRegister': 'Kayıt Ol',
    'auth.backToLogin': 'Girişe Dön',
    'wallet.title': 'Cüzdan',
    'cards.title': 'Kartlar',
    'rates.title': 'Döviz Kurları',
    'rates.date': 'Tarih ve Saat',
    'rates.converter': 'Döviz Çevirici',
    'rates.convertBtn': 'Çevir',
    'profile.title': 'Profil',
    'profile.login': 'Kullanıcı Adı',
    'profile.password': 'Şifre',
    'profile.name': 'Ad',
    'profile.surname': 'Soyad',
    'profile.age': 'Yaş',
    'profile.backup': 'Yedekleme',
    'profile.export': 'Veri Dışa Aktar',
    'profile.import': 'Veri İçe Aktar',
    'card.add': 'Yeni Kart',
    'card.edit': 'Kartı Düzenle',
    'card.name': 'Ad',
    'card.category': 'Tür',
    'card.qr': 'QR kod veya barkod',
    'card.scanner': 'Tarayıcı',
    'card.manual': 'Veya veriyi manuel girin',
    'card.background': 'Kart arka planı',
    'card.bank': 'Banka uygulaması bağlantısı',
    'card.number': 'Kart numarası',
    'card.expiry': 'Son kullanma (AA/YY)',
    'card.cancel': 'İptal',
    'card.save': 'Kaydet',
    'card.editBtn': 'Düzenle',
    'card.bankBtn': 'Bankayı Aç',
    'category.e-wallet': 'e-cüzdanlar',
    'category.bonus': 'bonus kartları',
    'category.other': 'diğer',
    'scanner.title': 'QR/Barkod Tarayıcı',
    'scanner.stop': 'Durdur',
    'scanner.close': 'Kapat',
    'scanner.found': 'Kod bulundu:',
    'error.loginEmpty': 'Kullanıcı adını girin',
    'error.passwordShort': 'Şifre en az 5 karakter olmalı',
    'error.userExists': 'Bu kullanıcı adı zaten var',
    'error.userNotFound': 'Hesap yok, lütfen kayıt olun',
    'error.wrongPassword': 'Yanlış şifre',
    'error.registrationSuccess': 'Kayıt başarılı! Şimdi giriş yapın.',
    'error.cameraNotSupported': 'Kamera bu tarayıcıda desteklenmiyor',
    'error.cameraAccess': 'Kameraya erişilemedi. İzinleri kontrol edin.',
    'success.export': 'Veri dışa aktarıldı! Dosyayı güvenli bir yerde saklayın.',
    'success.import': 'Veri başarıyla içe aktarıldı!',
    'confirm.replaceData': 'Bu tüm mevcut verileri değiştirecek. Devam edilsin mi?',
    'error.importFile': 'Dosya içe aktarılırken hata. Dosya formatını kontrol edin.'
  }
};

// Current language
let currentLang = localStorage.getItem('wallet-lang') || 'ru';

// Translation function
function t(key) {
  return translations[currentLang][key] || key;
}

// Update all text elements
function updateLanguage() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (key) {
      el.textContent = t(key);
    }
  });
  
  // Update placeholders
  document.querySelectorAll('input[placeholder]').forEach(input => {
    const key = input.getAttribute('data-key');
    if (key) {
      input.placeholder = t(key);
    }
  });
  
  // Update select options
  document.querySelectorAll('select option[data-key]').forEach(option => {
    const key = option.getAttribute('data-key');
    if (key) {
      option.textContent = t(key);
    }
  });
  
  // Update labels
  document.querySelectorAll('label[data-key]').forEach(label => {
    const key = label.getAttribute('data-key');
    if (key) {
      label.textContent = t(key);
    }
  });
}

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
  
  alert(t('success.export'));
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
      
      if (confirm(t('confirm.replaceData'))) {
        save(LS_USERS, data.users || {});
        save(LS_CARDS, data.cards || []);
        save(LS_PROFILE, data.profile || {});
        
        alert(t('success.import'));
        location.reload(); // Reload to apply changes
      }
    } catch (err) {
      alert(t('error.importFile'));
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
  if(!email) { authError.textContent = t('error.loginEmpty'); return false; }
  if(!pass || pass.length<5){ authError.textContent = t('error.passwordShort'); return false; }
  return true;
}

function showRegister(){
  isRegisterMode = true;
  authTitle.textContent = t('auth.register');
  loginBtn.style.display = 'none';
  registerBtn.style.display = 'none';
  confirmRegisterBtn.classList.remove('hidden');
  backToLoginBtn.classList.remove('hidden');
  clearAuthForm();
}

function showLogin(){
  isRegisterMode = false;
  authTitle.textContent = t('auth.title');
  loginBtn.style.display = 'block';
  registerBtn.style.display = 'block';
  confirmRegisterBtn.classList.add('hidden');
  backToLoginBtn.classList.add('hidden');
  clearAuthForm();
}

function login(email, pass){
  if(!validateCreds(email, pass)) return;
  const users = load(LS_USERS, {});
  if(!users[email]) { authError.textContent = t('error.userNotFound'); return; }
  if(users[email]!==pass) { authError.textContent = t('error.wrongPassword'); return; }
  localStorage.setItem(LS_SESSION, email);
  clearAuthForm();
  render();
}

function register(email, pass){
  if(!validateCreds(email, pass)) return;
  const users = load(LS_USERS, {});
  if(users[email]) { authError.textContent = t('error.userExists'); return; }
  users[email] = pass; save(LS_USERS, users);
  authError.textContent = t('error.registrationSuccess');
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
    alert(t('error.cameraNotSupported'));
    return;
  }

  // Create scanner modal
  const scannerModal = document.createElement('dialog');
  scannerModal.innerHTML = `
    <div class="card" style="max-width: 90vw; max-height: 90vh;">
      <h3>📷 ${t('scanner.title')}</h3>
      <video id="scannerVideo" autoplay style="width: 100%; max-width: 400px; border-radius: 8px;"></video>
      <canvas id="scannerCanvas" style="display: none;"></canvas>
      <div style="margin: 16px 0; text-align: center;">
        <button id="stopScanner" style="background: #f44336; color: white; padding: 8px 16px; border: none; border-radius: 4px; margin-right: 8px;">${t('scanner.stop')}</button>
        <button id="closeScanner" style="background: #666; color: white; padding: 8px 16px; border: none; border-radius: 4px;">${t('scanner.close')}</button>
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
    alert(t('error.cameraAccess'));
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
      resultDiv.textContent = `${t('scanner.found')} ${result}`;
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
    'e-wallet': { name: t('category.e-wallet'), items: [] },
    'bonus': { name: t('category.bonus'), items: [] },
    'other': { name: t('category.other'), items: [] }
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
            <button class="edit">${t('card.editBtn')}</button>
            ${item.bank? `<a class="icon-link" target="_blank" href="${item.bank}">${t('card.bankBtn')}</a>`: ''}
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
      <div class="rate-buy">${currentLang === 'ru' ? 'Покупка' : currentLang === 'en' ? 'Buy' : currentLang === 'ky' ? 'Сатып алуу' : 'Alış'}: ${rate.buy}</div>
      <div class="rate-sell">${currentLang === 'ru' ? 'Продажа' : currentLang === 'en' ? 'Sell' : currentLang === 'ky' ? 'Сатуу' : 'Satış'}: ${rate.sell}</div>
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
// Language switcher
$('#languageSelect').onchange = (e) => {
  currentLang = e.target.value;
  localStorage.setItem('wallet-lang', currentLang);
  updateLanguage();
  // Update dynamic content
  renderCards();
  renderWallet();
  renderRates();
};

// Set initial language
$('#languageSelect').value = currentLang;

// clearAllData(); // Отключено для сохранения данных
restoreFromBackup(); // Восстанавливаем данные из резервной копии
updateLanguage(); // Update language on load
render();
