/**
 * Theme toggle — switches between dark and light mode.
 * Persists to localStorage. Applies to <html data-theme="...">.
 */
(function() {
  const KEY = 'fahadh-theme';
  const stored = localStorage.getItem(KEY) || 'light';
  applyTheme(stored);

  function updateIcons(theme) {
    const iconDark = document.getElementById('theme-icon-dark');
    const iconLight = document.getElementById('theme-icon-light');
    if (iconDark && iconLight) {
      iconDark.classList.toggle('hidden', theme === 'light');
      iconLight.classList.toggle('hidden', theme === 'dark');
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    updateIcons(theme);

    // Sync Turnstile widget theme
    var widget = document.getElementById('turnstile-widget');
    if (widget && window.turnstile) {
      var id = widget.getAttribute('data-widget-id');
      if (id) window.turnstile.reset(id);
      widget.removeAttribute('data-widget-id');
      window.turnstile.render(widget, {
        sitekey: widget.getAttribute('data-sitekey'),
        theme: theme
      });
    }
  }

  // Called by components.js after navbar icons are injected into DOM
  window.syncThemeIcons = function() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateIcons(theme);
  };

  window.toggleTheme = function() {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };
})();
