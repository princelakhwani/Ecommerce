// ====== EXISTING NAVBAR TOGGLE (your original code) ======
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// ====== NEW FEATURES ADDED BELOW ======

// === ACTIVE LINK HIGHLIGHT ===
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// === HERO TEXT ANIMATION ===
const hero = document.querySelector('#hero');
if (hero) {
  const heroText = hero.querySelectorAll('h4, h2, h1, p, button');
  heroText.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'all 0.6s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, i * 200);
  });
}

// === SCROLL TO TOP BUTTON ===
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
scrollBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) scrollBtn.classList.add('show');
  else scrollBtn.classList.remove('show');
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === DARK/LIGHT MODE TOGGLE ===
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
themeToggle.classList.add('theme-toggle');
document.body.appendChild(themeToggle);

let darkMode = false;
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkMode = !darkMode;
  themeToggle.innerHTML = darkMode
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});

// === DYNAMIC CART COUNTER ===
let cartCount = 0;
const cartIcons = document.querySelectorAll('.fa-cart-shopping');
const cartBadge = document.createElement('span');
cartBadge.classList.add('cart-badge');
cartBadge.textContent = cartCount;

const bagIcon = document.querySelector('#lg-bag');
if (bagIcon) bagIcon.appendChild(cartBadge);

cartIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    cartCount++;
    cartBadge.textContent = cartCount;
    cartBadge.classList.add('pulse');
    setTimeout(() => cartBadge.classList.remove('pulse'), 300);
  });
});

// === DYNAMIC STYLE INJECTION ===
const style = document.createElement('style');
style.textContent = `
/* Scroll to top button */
.scroll-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1000;
}
.scroll-top-btn.show {
  display: flex;
  opacity: 0.9;
}
.scroll-top-btn:hover {
  transform: scale(1.1);
}

/* Theme toggle button */
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 80px;
  background: black;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  z-index: 1000;
}

/* Dark mode styling */
body.dark-mode {
  background-color: #121212;
  color: #f5f5f5;
}
body.dark-mode header,
body.dark-mode footer {
  background: #1f1f1f;
}
body.dark-mode button,
body.dark-mode .white {
  background: #f5f5f5;
  color: black;
}

/* Cart badge */
.cart-badge {
  background: red;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -10px;
  font-weight: bold;
}
.cart-badge.pulse {
  animation: pulse 0.3s ease;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.4); }
  100% { transform: scale(1); }
}
`;
document.head.appendChild(style);
