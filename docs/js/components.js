/**
 * Shared UI components loaded into placeholder elements on each page.
 * All internal links use relative paths (./) to work at any base path depth.
 */

function loadNavbar() {
  const navbar = document.getElementById('navbar-placeholder');
  if (!navbar) return;

  const currentPath = window.location.pathname;
  const isHome = currentPath.endsWith('/') || currentPath.endsWith('/index.html');
  const isAbout = currentPath.endsWith('/about.html');
  const isRepos = currentPath.endsWith('/repos.html');
  const isDocs = currentPath.endsWith('/docs.html');

  navbar.innerHTML = `
<nav class="bg-gray-950 border-b border-violet-900/50 sticky top-0 z-50">
  <div class="max-w-4xl mx-auto px-4">
    <div class="flex items-center justify-between h-14">
      <a href="./" class="flex items-center gap-2 font-mono font-bold text-violet-400 hover:text-violet-300 transition-colors">
        ~/fahadh
      </a>
      <div class="flex items-center gap-1">
        <div id="navbar-menu" class="hidden md:flex md:items-center md:gap-1 font-mono text-sm">
          <a href="./" class="block px-3 py-2 rounded transition-colors ${isHome ? 'text-violet-400 bg-violet-950/50' : 'text-gray-400 hover:text-violet-400'}">/home</a>
          <a href="./about.html" class="block px-3 py-2 rounded transition-colors ${isAbout ? 'text-violet-400 bg-violet-950/50' : 'text-gray-400 hover:text-violet-400'}">/about</a>
          <a href="./repos.html" class="block px-3 py-2 rounded transition-colors ${isRepos ? 'text-violet-400 bg-violet-950/50' : 'text-gray-400 hover:text-violet-400'}">/repos</a>
          <a href="./docs.html" class="block px-3 py-2 rounded transition-colors ${isDocs ? 'text-violet-400 bg-violet-950/50' : 'text-gray-400 hover:text-violet-400'}">/docs</a>
          <a href="./assets/pdfs/cv.pdf" class="block px-3 py-2 rounded transition-colors text-gray-400 hover:text-violet-400">/cv</a>
        </div>
        <button onclick="toggleTheme()" class="p-1.5 rounded text-gray-400 hover:text-violet-400 transition-colors" aria-label="Toggle theme">
          <svg id="theme-icon-dark" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
          <svg id="theme-icon-light" class="w-4 h-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </button>
        <button id="navbar-toggler" class="md:hidden p-1 text-gray-400 hover:text-violet-400 transition-colors" aria-label="Toggle navigation">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div id="navbar-mobile" class="hidden md:hidden border-t border-gray-800 font-mono text-sm">
    <a href="./" class="block px-4 py-2 text-gray-400 hover:text-violet-400 transition-colors">/home</a>
    <a href="./about.html" class="block px-4 py-2 text-gray-400 hover:text-violet-400 transition-colors">/about</a>
    <a href="./repos.html" class="block px-4 py-2 text-gray-400 hover:text-violet-400 transition-colors">/repos</a>
    <a href="./docs.html" class="block px-4 py-2 text-gray-400 hover:text-violet-400 transition-colors">/docs</a>
    <a href="./assets/pdfs/cv.pdf" class="block px-4 py-2 text-gray-400 hover:text-violet-400 transition-colors">/cv</a>
  </div>
</nav>`;

  document.getElementById('navbar-toggler').addEventListener('click', () => {
    document.getElementById('navbar-mobile').classList.toggle('hidden');
  });

  // Sync theme icons — theme.js may have run before navbar was in DOM
  if (window.syncThemeIcons) window.syncThemeIcons();
}

function loadFooter() {
  const footer = document.getElementById('footer-placeholder');
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-gray-950 border-t border-violet-900/50 mt-auto">
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h5 class="font-mono font-bold text-violet-400 mb-3">~/fahadh</h5>
        <p class="text-gray-500 text-sm">Created by Ahmad Fahadh Ilyas.</p>
        <p class="text-gray-500 text-sm">Free to use for learning.</p>
      </div>
      <div>
        <h5 class="font-mono font-bold text-violet-400 mb-3">links</h5>
        <ul class="space-y-1 text-sm font-mono columns-2">
          <li><a href="./" class="text-gray-500 hover:text-violet-400 transition-colors">/home</a></li>
          <li><a href="./about.html" class="text-gray-500 hover:text-violet-400 transition-colors">/about</a></li>
          <li><a href="./repos.html" class="text-gray-500 hover:text-violet-400 transition-colors">/repos</a></li>
          <li><a href="./docs.html" class="text-gray-500 hover:text-violet-400 transition-colors">/docs</a></li>
          <li><a href="./assets/pdfs/cv.pdf" class="text-gray-500 hover:text-violet-400 transition-colors">/cv</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-6 pt-4 border-t border-gray-800 text-center text-xs text-gray-600 font-mono">
      built with <span class="text-violet-500">&hearts;</span> and help from <a href="https://deepseek.com" class="text-gray-500 hover:text-violet-400 transition-colors" target="_blank" rel="noopener">DeepSeek</a>
    </div>
  </div>
</footer>`;
}

function loadContactFab() {
  document.body.insertAdjacentHTML('beforeend', '<button id="contact-fab" class="fixed bottom-6 z-40 w-14 h-14 rounded-full bg-violet-600 hover:bg-violet-500 border border-violet-400/30 text-white shadow-lg shadow-violet-900/50 hover:shadow-violet-700/50 transition-all flex items-center justify-center" style="right:max(1.5rem,calc((100vw - 48rem) / 2 + 1.5rem))" aria-label="Open contact form" title="Contact"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></button><div id="contact-overlay" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm items-center justify-center p-4" style="display:none;"><div class="relative w-full max-w-md border border-gray-700 rounded-lg bg-gray-900 shadow-2xl shadow-violet-900/20"><button id="contact-close" class="absolute top-3 right-3 text-gray-500 hover:text-violet-400 transition-colors" aria-label="Close"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button><div class="p-6"><h2 class="font-mono text-violet-400 text-lg mb-4">&gt; ./contact.sh</h2><form id="contact-form" action="https://script.google.com/macros/s/AKfycbxCaGnCDQWGk_B4g9egMt3FMwi_EseWhxwaONPrgWIG2o6TVtBD7HTRmx0crPH_28AU0g/exec" method="POST" class="space-y-4"><div><label for="contact-email" class="block font-mono text-xs text-gray-500 mb-1.5">email</label><input type="email" id="contact-email" name="email" required placeholder="you@example.com" pattern="[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$" title="Enter a valid email (e.g. you@example.com)" class="w-full bg-gray-950 border border-gray-700 rounded px-3 py-2 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-violet-700 focus:ring-1 focus:ring-violet-500/30 transition-colors"></div><div><label for="contact-title" class="block font-mono text-xs text-gray-500 mb-1.5">title</label><input type="text" id="contact-title" name="title" required placeholder="subject line" class="w-full bg-gray-950 border border-gray-700 rounded px-3 py-2 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-violet-700 focus:ring-1 focus:ring-violet-500/30 transition-colors"></div><div><label for="contact-message" class="block font-mono text-xs text-gray-500 mb-1.5">message</label><textarea id="contact-message" name="message" required rows="4" placeholder="your message..." class="w-full bg-gray-950 border border-gray-700 rounded px-3 py-2 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-violet-700 focus:ring-1 focus:ring-violet-500/30 transition-colors resize-none"></textarea></div><div style="position:absolute;left:-9999px" aria-hidden="true"><input type="checkbox" name="_honey" value="1" tabindex="-1" autocomplete="off"></div><div id="turnstile-widget" data-sitekey="0x4AAAAAADo8vPHeIGaZQCwF"></div><input type="hidden" name="load_time" id="load-time"><button type="submit" id="contact-submit-btn" class="font-mono text-sm px-5 py-2 border border-violet-700 text-violet-400 rounded hover:bg-violet-950/50 hover:border-violet-500 transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed">$ send</button></form><p id="contact-result" class="mt-3 font-mono text-sm hidden"></p></div></div></div>');
}

function initContactForm() {
  var fab = document.getElementById('contact-fab');
  var overlay = document.getElementById('contact-overlay');
  var close = document.getElementById('contact-close');
  var widgetEl = document.getElementById('turnstile-widget');
  var widgetId = null;
  if (!fab || !overlay) return;

  function openModal() {
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (widgetEl && typeof turnstile !== 'undefined') {
      if (widgetId) {
        turnstile.remove(widgetId);
        widgetEl.innerHTML = '';
      }
      var theme = document.documentElement.getAttribute('data-theme') || 'light';
      widgetId = turnstile.render(widgetEl, { sitekey: widgetEl.dataset.sitekey, theme: theme });
    }
  }
  function closeModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    if (widgetId && typeof turnstile !== 'undefined') turnstile.reset(widgetId);
  }

  fab.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.style.display === 'flex') closeModal();
  });

  window.closeContactModal = closeModal;

  // Speed trap
  var lt = document.getElementById('load-time');
  if (lt) lt.value = Date.now();

  // Form submission
  var form = document.getElementById('contact-form');
  var result = document.getElementById('contact-result');
  var btn = document.getElementById('contact-submit-btn');
  if (!form || !result) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var token = (typeof turnstile !== 'undefined') ? turnstile.getResponse() : '';
    if (!token) {
      result.textContent = '=> please complete the captcha';
      result.className = 'mt-3 font-mono text-sm text-red-400';
      return;
    }

    btn.disabled = true;
    btn.textContent = '$ sending...';
    result.classList.add('hidden');

    var data = new FormData(form);
    data.append('cf-turnstile-response', token);

    fetch(form.action, { method: 'POST', body: data })
      .then(function(res) { return res.json(); })
      .then(function(json) {
        if (json.result === 'success') {
          result.textContent = '=> success';
          result.className = 'mt-3 font-mono text-sm text-green-400';
          form.reset();
          if (window.closeContactModal) window.closeContactModal();
        } else {
          result.textContent = '=> ' + (json.message || 'error');
          result.className = 'mt-3 font-mono text-sm text-red-400';
        }
        result.classList.remove('hidden');
      })
      .catch(function() {
        result.textContent = '=> network error';
        result.className = 'mt-3 font-mono text-sm text-red-400';
        result.classList.remove('hidden');
      })
      .finally(function() {
        btn.disabled = false;
        btn.textContent = '$ send';
      });
  });
}

function initAll() {
  loadNavbar();
  loadFooter();
  loadContactFab();
  initContactForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
