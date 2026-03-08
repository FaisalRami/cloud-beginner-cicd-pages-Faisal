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