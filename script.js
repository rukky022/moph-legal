// ===== MOBILE NAV TOGGLE =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  });
});

// ===== DESIGN PREVIEW TOGGLES =====
// Persists state in localStorage so refreshing doesn't reset your view.
// Both toggles are independent and combine into 4 possible views.

const themeToggle  = document.getElementById('theme-toggle');
const photosToggle = document.getElementById('photos-toggle');
const body         = document.body;

function applyTheme(isDark) {
  body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeToggle.setAttribute('aria-pressed', !isDark);
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.querySelector('span').textContent = isDark ? 'Light' : 'Dark';
  localStorage.setItem('ml-theme', isDark ? 'dark' : 'light');
}

function applyPhotos(showPhotos) {
  body.setAttribute('data-photos', showPhotos ? 'on' : 'off');
  photosToggle.setAttribute('aria-pressed', showPhotos);
  photosToggle.setAttribute('aria-label', showPhotos ? 'Hide photos' : 'Show photos');
  photosToggle.querySelector('span').textContent = showPhotos ? 'No Photos' : 'Photos';
  localStorage.setItem('ml-photos', showPhotos ? 'on' : 'off');
}

// Restore saved state on load
const savedTheme  = localStorage.getItem('ml-theme')  || 'dark';
const savedPhotos = localStorage.getItem('ml-photos') || 'off';
applyTheme(savedTheme === 'dark');
applyPhotos(savedPhotos === 'on');

themeToggle.addEventListener('click', () => {
  applyTheme(body.getAttribute('data-theme') === 'light');
});

photosToggle.addEventListener('click', () => {
  applyPhotos(body.getAttribute('data-photos') !== 'on');
});

// ===== CONTACT FORM =====
// No-op: validates required fields and checks honeypot.
// Submission will be wired to Squarespace hosting later.

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Honeypot check — if filled, silently reject (bot detected)
  const honeypot = form.querySelector('#hp-website');
  if (honeypot && honeypot.value.trim() !== '') {
    return;
  }

  // Required field validation
  const requiredFields = form.querySelectorAll('[required]');
  let valid = true;

  requiredFields.forEach(field => {
    const isEmpty = !field.value.trim();
    field.style.borderColor = isEmpty ? '#e05c5c' : '';
    field.setAttribute('aria-invalid', isEmpty ? 'true' : 'false');
    if (isEmpty) valid = false;
  });

  if (valid) {
    // Placeholder — wire to Squarespace form handler when hosting is set up
    console.log('Form passed validation. Ready for submission integration.');
  }
});
