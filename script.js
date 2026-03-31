// ===== MOBILE NAV TOGGLE =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

// Close nav when a link is clicked (smooth scroll to section)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  });
});

// ===== CONTACT FORM — no-op with basic client-side validation =====
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const requiredFields = form.querySelectorAll('[required]');
  let valid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      valid = false;
      field.style.borderColor = '#e05c5c';
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.style.borderColor = '';
      field.removeAttribute('aria-invalid');
    }
  });

  if (valid) {
    // Placeholder — form submission will be wired to Squarespace later
    console.log('Form ready for submission integration.');
  }
});
