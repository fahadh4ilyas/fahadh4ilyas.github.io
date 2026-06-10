/**
 * Theme toggle — switches between dark and light mode.
 * Persists to localStorage. Applies to <html data-theme="...">.
 */
(function() {
  const KEY = 'fahadh-theme';
  const stored = localStorage.getItem(KEY) || 'dark';
  applyTheme(stored);

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    const iconDark = document.getElementById('theme-icon-dark');
    const iconLight = document.getElementById('theme-icon-light');
    if (iconDark && iconLight) {
      iconDark.classList.toggle('hidden', theme === 'light');
      iconLight.classList.toggle('hidden', theme === 'dark');
    }
  }

  window.toggleTheme = function() {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };
})();
