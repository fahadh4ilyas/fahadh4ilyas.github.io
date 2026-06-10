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

  navbar.innerHTML = `
<nav class="bg-gray-950 border-b border-emerald-900/50 sticky top-0 z-50">
  <div class="max-w-4xl mx-auto px-4">
    <div class="flex items-center justify-between h-14">
      <a href="./" class="flex items-center gap-2 font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
        <span class="text-emerald-500">~/</span>fahadh
      </a>
      <button id="navbar-toggler" class="md:hidden p-1 text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Toggle navigation">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <div id="navbar-menu" class="hidden md:flex md:items-center md:gap-1 font-mono text-sm">
        <a href="./" class="block px-3 py-2 rounded transition-colors ${isHome ? 'text-emerald-400 bg-emerald-950/50' : 'text-gray-400 hover:text-emerald-400'}">/home</a>
        <a href="./about.html" class="block px-3 py-2 rounded transition-colors ${isAbout ? 'text-emerald-400 bg-emerald-950/50' : 'text-gray-400 hover:text-emerald-400'}">/about</a>
        <a href="./repos.html" class="block px-3 py-2 rounded transition-colors ${isRepos ? 'text-emerald-400 bg-emerald-950/50' : 'text-gray-400 hover:text-emerald-400'}">/repos</a>
        <div class="relative group">
          <button class="flex items-center gap-1 px-3 py-2 rounded text-gray-400 hover:text-emerald-400 transition-colors">
            /docs
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div class="absolute right-0 mt-1 w-64 bg-gray-900 border border-gray-800 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
            <a href="/kubernetes-documentation/" class="block px-4 py-2 text-gray-400 hover:text-emerald-400 hover:bg-gray-800 transition-colors font-mono text-sm">kubernetes-docs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="navbar-mobile" class="hidden md:hidden border-t border-gray-800 font-mono text-sm">
    <a href="./" class="block px-4 py-2 text-gray-400 hover:text-emerald-400 transition-colors">/home</a>
    <a href="./about.html" class="block px-4 py-2 text-gray-400 hover:text-emerald-400 transition-colors">/about</a>
    <a href="./repos.html" class="block px-4 py-2 text-gray-400 hover:text-emerald-400 transition-colors">/repos</a>
    <details class="group">
      <summary class="px-4 py-2 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer list-none">/docs ▾</summary>
      <div class="pl-6 pb-1">
        <a href="/kubernetes-documentation/" class="block px-4 py-2 text-gray-400 hover:text-emerald-400 transition-colors">kubernetes-docs</a>
      </div>
    </details>
  </div>
</nav>`;

  document.getElementById('navbar-toggler').addEventListener('click', () => {
    document.getElementById('navbar-mobile').classList.toggle('hidden');
  });
}

function loadFooter() {
  const footer = document.getElementById('footer-placeholder');
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-gray-950 border-t border-emerald-900/50 mt-auto">
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h5 class="font-mono font-bold text-emerald-400 mb-3">~/fahadh</h5>
        <p class="text-gray-500 text-sm">Created by Ahmad Fahadh Ilyas.</p>
        <p class="text-gray-500 text-sm">Free to use for learning.</p>
      </div>
      <div>
        <h5 class="font-mono font-bold text-emerald-400 mb-3">links</h5>
        <ul class="space-y-1 text-sm font-mono">
          <li><a href="./" class="text-gray-500 hover:text-emerald-400 transition-colors">/home</a></li>
          <li><a href="./about.html" class="text-gray-500 hover:text-emerald-400 transition-colors">/about</a></li>
          <li><a href="./repos.html" class="text-gray-500 hover:text-emerald-400 transition-colors">/repos</a></li>
        </ul>
      </div>
      <div>
        <h5 class="font-mono font-bold text-emerald-400 mb-3">docs</h5>
        <ul class="space-y-1 text-sm font-mono">
          <li><a href="/kubernetes-documentation/" class="text-gray-500 hover:text-emerald-400 transition-colors">kubernetes</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-6 pt-4 border-t border-gray-800 text-center text-xs text-gray-600 font-mono">
      built with <span class="text-emerald-500">&hearts;</span> and help from <a href="https://deepseek.com" class="text-gray-500 hover:text-emerald-400 transition-colors" target="_blank" rel="noopener">DeepSeek</a>
    </div>
  </div>
</footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadFooter();
});
