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

// ===== CONTACT FORM =====
// No-op: validates required fields and checks honeypot.
// Submission will be wired to Squarespace hosting later.

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Honeypot check — if the hidden field has a value, it's a bot
  const honeypot = form.querySelector('[name="website"]');
  if (honeypot && honeypot.value.trim() !== '') return;

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
