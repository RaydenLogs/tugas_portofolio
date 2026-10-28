import { Drawer } from 'https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js';

document.addEventListener('DOMContentLoaded', () => {
  const navbarDrawer = document.getElementById('navbarNav');
  const contactForm = document.getElementById('contactForm');
  const contactAlert = document.getElementById('contactAlert');

  if (navbarDrawer) {
    navbarDrawer.addEventListener('click', async (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a[href^="#"]')) {
        await Drawer.getOrCreateInstance(navbarDrawer).hide();
      }
    });
  }

  // Handle client-side form validation and feedback
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        event.stopPropagation();
        contactAlert.classList.add('d-none');
      } else {
        contactAlert.classList.remove('d-none');
        contactForm.reset();
      }
    });
  }
});
