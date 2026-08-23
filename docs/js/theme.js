/**
 * Theme toggle — switches between dark and light mode.
 * Persists to a .fahadh.dev cookie (shared across subdomains) and localStorage (same-origin fallback).
 * Applies to <html data-theme="...">.
 */
(function() {
  const KEY = 'fahadh-theme';
  const COOKIE_DOMAIN = '.fahadh.dev';

  function onFahadhDomain() {
    const host = window.location.hostname;
    return host === 'fahadh.dev' || host.endsWith('.fahadh.dev');
  }

  function readCookie() {
    const match = document.cookie.match(new RegExp('(?:^|;\\s*)' + KEY + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function writeCookie(theme) {
    if (!onFahadhDomain()) return;
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    document.cookie = KEY + '=' + encodeURIComponent(theme) + '; Domain=' + COOKIE_DOMAIN + '; Path=/; SameSite=Lax; Max-Age=' + maxAge;
  }

  const stored = readCookie() || localStorage.getItem(KEY) || 'light';
  applyTheme(stored);

  function updateIcons(theme) {
    const iconDark = document.getElementById('theme-icon-dark');
    const iconLight = document.getElementById('theme-icon-light');
    if (iconDark && iconLight) {
      iconDark.classList.toggle('hidden', theme === 'light');
      iconLight.classList.toggle('hidden', theme === 'dark');
    }
  }

  function renderTurnstile(theme) {
    var widget = document.getElementById('turnstile-widget');
    if (!widget) return;
    // Skip if widget is hidden (inside closed modal)
    if (!widget.offsetParent) return;
    var prevId = widget.getAttribute('data-widget-id');
    if (prevId && window.turnstile) {
      window.turnstile.remove(parseInt(prevId, 10));
    }
    // Clear any leftover iframe
    widget.innerHTML = '';
    widget.removeAttribute('data-widget-id');
    if (window.turnstile) {
      window.turnstile.render(widget, {
        sitekey: widget.getAttribute('data-sitekey'),
        theme: theme
      });
    } else {
      setTimeout(function() { renderTurnstile(theme); }, 200);
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    writeCookie(theme);
    updateIcons(theme);
    renderTurnstile(theme);
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
