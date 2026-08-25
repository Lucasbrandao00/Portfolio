window.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav && window.bootstrap) {
    new bootstrap.ScrollSpy(document.body, { target: '#sideNav', offset: 80 });
  }
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  document.querySelectorAll('#navbarResponsive .nav-link').forEach(item => {
    item.addEventListener('click', () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') navbarToggler.click();
    });
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const year = document.querySelector('#currentYear');
  if (year) year.textContent = new Date().getFullYear();
});
