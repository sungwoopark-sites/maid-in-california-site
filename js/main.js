// main.js – Maid In California
document.getElementById('year').textContent = new Date().getFullYear();
const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavClose = document.getElementById('mobile-nav-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
function openNav() { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeNav() { mobileNav.classList.remove('open'); document.body.style.overflow = ''; }
navToggle.addEventListener('click', openNav);
mobileNavClose.addEventListener('click', closeNav);
mobileNavLinks.forEach(link => link.addEventListener('click', closeNav));
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 20); }, { passive: true });
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('[type="submit"]');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    try {
      const response = await fetch(contactForm.action, { method: 'POST', body: new FormData(contactForm), headers: { 'Accept': 'application/json' } });
      if (response.ok) { contactForm.reset(); formSuccess.style.display = 'block'; submitBtn.textContent = 'Sent!'; }
      else { submitBtn.textContent = 'Get a Free Quote'; submitBtn.disabled = false; alert('Problem. Please call (714) 505-0900 or email maid@maidincalifornia.com'); }
    } catch { submitBtn.textContent = 'Get a Free Quote'; submitBtn.disabled = false; alert('Problem. Please call (714) 505-0900 or email maid@maidincalifornia.com'); }
  });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) { e.preventDefault(); window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }
  });
});
