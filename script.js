// Language toggle
const mnBtn = document.getElementById('mnBtn');
const enBtn = document.getElementById('enBtn');

if (mnBtn && enBtn) {
  mnBtn.addEventListener('click', function() {
    this.classList.add('active');
    enBtn.classList.remove('active');
  });

  enBtn.addEventListener('click', function() {
    this.classList.add('active');
    mnBtn.classList.remove('active');
  });
}

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
