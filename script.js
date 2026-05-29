// Language System
const translations = {
  mn: {
    'nav.home': 'Нүүр',
    'nav.about': 'Бидний тухай',
    'nav.products': 'Бүтээгдэхүүн',
    'nav.recipes': 'Жор',
    'nav.steaklodge': 'Steak Lodge',
    'nav.contact': 'Холбоо барих',
    'banner.shipping': "100'000₮ дээш худалдан авалтад хүргэлт үнэгүй",
    'hero.title': 'Эрүүл ахуйн шаардлага хангасан-Эрүүл хүнс',
    'hero.subtitle': 'Шилмэл Сүрэг нь Монгол үхрийн шилмэл мах, steak бүтээгдэхүүнийг чанарын баталгаатайгаар танд хүргэнэ.',
    'hero.cta.products': 'Бүтээгдэхүүн харах',
    'hero.cta.about': 'Дэлгэрэнгүй',
    'hero.stat.organic': '100% Монгол үхрийн мах',
    'hero.stat.haccp': 'HACCP Чанар баталгаа',
    'hero.stat.delivery': '24 цаг Хүргэлт',
    'about.label': 'БИДНИЙ ТУХАЙ',
    'about.title': 'Монгол үхрийн шилмэл махыг чанарын баталгаатайгаар',
    'about.desc': 'Шилмэл Сүрэг нь Монгол үхрийн шилмэл мах, steak бүтээгдэхүүнийг эрүүл ахуйн шаардлага хангасан, чанарын баталгаатайгаар хүргэх зорилготой.',
    'about.feature.haccp': 'HACCP Чанар баталгаа',
    'about.feature.organic': '100% Монгол үхрийн мах',
    'about.feature.online': '24/7 Онлайн захиалга',
    'butchery.label': 'МАХНЫ ДЭЛГҮҮР',
    'butchery.title': 'Шилмэл сүрэг Махны дэлгүүр',
    'butchery.desc': 'Фермийнхээ урд байрлах махны дэлгүүртээ тавтай морил. Шинэхэн махыг амталж, чанарыг нь өөрөө мэдэр.',
    'butchery.hours': 'Ажлын цаг',
    'butchery.sat': 'Бямба, Ням',
    'butchery.weekdays': 'Даваа - Баасан',
    'butchery.open': 'Нээлттэй',
    'butchery.closed': 'Хаалттай',
    'butchery.note': 'Зөвхөн амралтын өдрүүдэд нээгдэнэ',
    'contact.label': 'ХОЛБОО БАРИХ',
    'contact.title': 'Бидэнтэй холбогдох',
    'contact.desc': 'Бүтээгдэхүүн, захиалга, хүргэлттэй холбоотой асуулт байвал бидэнтэй холбогдоно уу.',
    'contact.phone': 'Утас',
    'contact.email': 'Имэйл',
    'contact.address': 'Хаяг',
    'contact.form.name': 'Нэр',
    'contact.form.phone': 'Утас',
    'contact.form.email': 'Имэйл',
    'contact.form.message': 'Мессеж',
    'contact.form.submit': 'Илгээх',
    'products.label': 'БҮТЭЭГДЭХҮҮН',
    'products.title': 'Бүтээгдэхүүн',
    'products.featured': 'ОНЦЛОХ БҮТЭЭГДЭХҮҮН',
    'products.featuredtitle': 'Шилмэл сонголт',
    'products.details': 'БҮТЭЭГДЭХҮҮНИЙ ДЭЛГЭРЭНГҮЙ',
    'products.detailstitle': 'Бидний бүтээгдэхүүн',
    'products.order': 'Захиалах',
    'filter.sort': 'ЭРЭМБЭЛЭХ',
    'filter.priceLow': 'Үнэ багаас их',
    'filter.priceHigh': 'Үнэ ихээс бага',
    'filter.category': 'АНГИЛАЛ',
    'filter.weight': 'ЖИН',
    'cart.title': 'Таны сагс',
    'cart.empty': 'Сагс хоосон байна',
    'cart.total': 'Нийт:',
    'cart.checkout': 'Захиалах',
    'cart.add': 'Сагсанд нэмэх',
    'cart.success': 'Захиалга амжилттай!',
    'cart.thanks': 'Танд баярлалаа!',
    'recipes.title': 'Амтат Жорууд',
    'recipes.subtitle': 'Шилмэл сүргийн махаар хийсэн Монгол болон Европ хоолны жорууд',
    'recipes.view': 'Жор харах',
    'recipes.ingredients': '📝 Орц',
    'recipes.steps': '👨‍🍳 Хийх дараалал',
    'recipes.tips': '💡 Зөвлөгөө',
    'footer.help': 'Тусламж',
    'footer.links': 'Холбоос',
    'footer.contact': 'Холбоо барих',
    'footer.terms': 'Үйлчилгээний нөхцөл',
    'footer.privacy': 'Нууцлалын бодлого',
    'footer.delivery': 'Хүргэлтийн нөхцөл',
    'footer.feedback': 'Санал гомдол',
    'footer.rights': '© 2026 Шилмэл сүрэг. Бүх эрх хуулиар хамгаалагдсан.',
    'footer.powered': 'Powered by Шилмэл сүрэг',
    'recipe.tag.mongolian': 'Монгол',
    'recipe.tag.european': 'Европ',
    'recipe.time': 'мин',
    'recipe.people': 'хүн',
    'recipe.difficulty.easy': 'Хялбар',
    'recipe.difficulty.medium': 'Дунд зэрэг',
    'recipe.difficulty.hard': 'Хүнд',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.recipes': 'Recipes',
    'nav.steaklodge': 'Steak Lodge',
    'nav.contact': 'Contact',
    'banner.shipping': 'Free shipping on orders over 100,000₮',
    'hero.title': 'Meeting Hygiene Standards - Healthy Food',
    'hero.subtitle': 'Shilmel Sureg delivers premium Mongolian beef and steak products with quality assurance.',
    'hero.cta.products': 'View Products',
    'hero.cta.about': 'Learn More',
    'hero.stat.organic': '100% Mongolian Beef',
    'hero.stat.haccp': 'HACCP Quality Assurance',
    'hero.stat.delivery': '24h Delivery',
    'about.label': 'ABOUT US',
    'about.title': 'Premium Mongolian Beef with Quality Assurance',
    'about.desc': 'Shilmel Sureg aims to deliver premium Mongolian beef and steak products meeting hygiene standards with quality assurance.',
    'about.feature.haccp': 'HACCP Quality Assurance',
    'about.feature.organic': '100% Mongolian Beef',
    'about.feature.online': '24/7 Online Ordering',
    'butchery.label': 'BUTCHERY STORE',
    'butchery.title': 'Shilmel Sureg Butchery Store',
    'butchery.desc': 'Visit our butchery store located in front of our farm. Taste and experience the quality of fresh meat.',
    'butchery.hours': 'Opening Hours',
    'butchery.sat': 'Saturday, Sunday',
    'butchery.weekdays': 'Monday - Friday',
    'butchery.open': 'Open',
    'butchery.closed': 'Closed',
    'butchery.note': 'Open only on weekends',
    'contact.label': 'CONTACT',
    'contact.title': 'Contact Us',
    'contact.desc': 'If you have any questions about products, orders, or delivery, please contact us.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'products.label': 'PRODUCTS',
    'products.title': 'Products',
    'products.featured': 'FEATURED PRODUCTS',
    'products.featuredtitle': 'Premium Selection',
    'products.details': 'PRODUCT DETAILS',
    'products.detailstitle': 'Our Products',
    'products.order': 'Order',
    'filter.sort': 'SORT BY',
    'filter.priceLow': 'Price: Low to High',
    'filter.priceHigh': 'Price: High to Low',
    'filter.category': 'CATEGORY',
    'filter.weight': 'WEIGHT',
    'cart.title': 'Your Cart',
    'cart.empty': 'Cart is empty',
    'cart.total': 'Total:',
    'cart.checkout': 'Place Order',
    'cart.add': 'Add to Cart',
    'cart.success': 'Order successful!',
    'cart.thanks': 'Thank you!',
    'recipes.title': 'Delicious Recipes',
    'recipes.subtitle': 'Mongolian and European recipes made with Shilmel Sureg beef',
    'recipes.view': 'View Recipe',
    'recipes.ingredients': '📝 Ingredients',
    'recipes.steps': '👨‍🍳 Instructions',
    'recipes.tips': '💡 Tips',
    'footer.help': 'Help',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.delivery': 'Delivery Terms',
    'footer.feedback': 'Feedback',
    'footer.rights': '© 2026 Shilmel Sureg. All rights reserved.',
    'footer.powered': 'Powered by Shilmel Sureg',
    'recipe.tag.mongolian': 'Mongolian',
    'recipe.tag.european': 'European',
    'recipe.time': 'min',
    'recipe.people': 'people',
    'recipe.difficulty.easy': 'Easy',
    'recipe.difficulty.medium': 'Medium',
    'recipe.difficulty.hard': 'Hard',
  }
};

let currentLang = localStorage.getItem('shilmelLang') || 'mn';

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('shilmelLang', lang);
  
  // Update buttons
  const mnBtn = document.getElementById('mnBtn');
  const enBtn = document.getElementById('enBtn');
  if (mnBtn && enBtn) {
    if (lang === 'mn') {
      mnBtn.classList.add('active');
      enBtn.classList.remove('active');
    } else {
      enBtn.classList.add('active');
      mnBtn.classList.remove('active');
    }
  }
  
  // Update all elements with data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  
  // Update document language
  document.documentElement.lang = lang === 'mn' ? 'mn' : 'en';
}

// Language toggle
const mnBtn = document.getElementById('mnBtn');
const enBtn = document.getElementById('enBtn');

if (mnBtn && enBtn) {
  mnBtn.addEventListener('click', function() {
    updateLanguage('mn');
  });

  enBtn.addEventListener('click', function() {
    updateLanguage('en');
  });
}

// Apply saved language on load
updateLanguage(currentLang);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Shopping Cart Functionality
let cart = JSON.parse(localStorage.getItem('shilmelCart')) || [];

function saveCart() {
  localStorage.setItem('shilmelCart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(name, price, weight) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, weight, quantity: 1 });
  }
  saveCart();
  openCart();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  saveCart();
}

function updateQuantity(name, change) {
  const item = cart.find(item => item.name === name);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(name);
    } else {
      saveCart();
    }
  }
}

function updateCartUI() {
  const cartBadge = document.querySelector('.cart-badge');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (cartBadge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
  }
  
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = '<p class="cart-empty">Сагс хоосон байна</p>';
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-weight">${item.weight}</span>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
            <span class="cart-item-price">${(item.price * item.quantity).toLocaleString()}₮</span>
          </div>
        </div>
      `).join('');
    }
  }
  
  if (cartTotal) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString() + '₮';
  }
}

function openCart() {
  const modal = document.getElementById('cartModal');
  if (modal) modal.classList.add('open');
}

function closeCart() {
  const modal = document.getElementById('cartModal');
  if (modal) modal.classList.remove('open');
}

// Cart event listeners
const cartBtn = document.querySelector('.cart-btn');
const cartClose = document.getElementById('cartClose');
const checkoutBtn = document.getElementById('checkoutBtn');

if (cartBtn) cartBtn.addEventListener('click', openCart);
if (cartClose) cartClose.addEventListener('click', closeCart);
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) {
      alert('Сагс хоосон байна!');
      return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Захиалга амжилттай!\nНийт: ${total.toLocaleString()}₮\n\nТанд баярлалаа!`);
    cart = [];
    saveCart();
    closeCart();
  });
}

// Product Filtering
const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
const productCards = document.querySelectorAll('.product-card');

function filterProducts() {
  const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
  const selectedWeights = Array.from(document.querySelectorAll('.weight-filter:checked')).map(cb => cb.value);
  const sortValue = document.querySelector('input[name="sort"]:checked')?.value;
  
  let visibleCards = Array.from(productCards);
  
  if (selectedCategories.length > 0) {
    visibleCards = visibleCards.filter(card => {
      const category = card.dataset.category;
      return selectedCategories.includes(category);
    });
  }
  
  if (selectedWeights.length > 0) {
    visibleCards = visibleCards.filter(card => {
      const weight = card.querySelector('.product-weight')?.textContent || '';
      return selectedWeights.some(w => weight.includes(w));
    });
  }
  
  if (sortValue === 'price-asc') {
    visibleCards.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
  } else if (sortValue === 'price-desc') {
    visibleCards.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
  }
  
  productCards.forEach(card => {
    card.style.display = 'none';
  });
  
  visibleCards.forEach(card => {
    card.style.display = 'block';
  });
}

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterProducts);
});

// Initialize
updateCartUI();
