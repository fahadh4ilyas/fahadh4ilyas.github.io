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
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h5 class="font-mono font-bold text-violet-400 mb-3">~/fahadh</h5>
        <p class="text-gray-500 text-sm">Created by Ahmad Fahadh Ilyas.</p>
        <p class="text-gray-500 text-sm">Free to use for learning.</p>
      </div>
      <div>
        <h5 class="font-mono font-bold text-violet-400 mb-3">links</h5>
        <ul class="space-y-1 text-sm font-mono">
          <li><a href="./" class="text-gray-500 hover:text-violet-400 transition-colors">/home</a></li>
          <li><a href="./about.html" class="text-gray-500 hover:text-violet-400 transition-colors">/about</a></li>
          <li><a href="./repos.html" class="text-gray-500 hover:text-violet-400 transition-colors">/repos</a></li>
        </ul>
      </div>
      <div>
        <h5 class="font-mono font-bold text-violet-400 mb-3">docs</h5>
        <ul class="space-y-1 text-sm font-mono">
          <li><a href="./docs.html" class="text-gray-500 hover:text-violet-400 transition-colors">kubernetes</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-6 pt-4 border-t border-gray-800 text-center text-xs text-gray-600 font-mono">
      built with <span class="text-violet-500">&hearts;</span> and help from <a href="https://deepseek.com" class="text-gray-500 hover:text-violet-400 transition-colors" target="_blank" rel="noopener">DeepSeek</a>
    </div>
  </div>
</footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadFooter();
});
