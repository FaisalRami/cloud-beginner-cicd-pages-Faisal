function toggleTheme() {
    const body = document.body;
    const btn  = document.getElementById('themeBtn');

    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      btn.textContent = 'Dark mode 🌙';
    } else {
      body.classList.add('dark');
      btn.textContent = 'Light mode ☀️';
    }
  }

  
window.addEventListener('scroll', function() {
  const btn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 200) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
