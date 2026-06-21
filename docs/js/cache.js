/**
 * Cached fetch — stores responses in localStorage with expiry.
 *
 * Options:
 *   expiry   — cache TTL in ms (default: 600000 = 10 min)
 *   cacheKey — custom localStorage key (default: 'gh-cache:' + url)
 *
 * Usage:
 *   cachedFetch(url).then(data => { ... });
 *   cachedFetch(url, { cacheKey: 'shared-key' }).then(data => { ... });
 *
 *   clearCache('shared-key');  // invalidate a specific cache entry
 */
function cachedFetch(url, options) {
  options = options || {};
  var expiry = options.expiry || 600000; // 10 min default
  var cacheKey = options.cacheKey || ('gh-cache:' + url);

  var cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      var entry = JSON.parse(cached);
      if (Date.now() - entry.timestamp < expiry) {
        return Promise.resolve(entry.data);
      }
    } catch (e) {
      // corrupted cache — fetch fresh
    }
  }

  return fetch(url).then(function(resp) {
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    return resp.json();
  }).then(function(data) {
    try {
      localStorage.setItem(cacheKey, JSON.stringify({
        timestamp: Date.now(),
        data: data
      }));
    } catch (e) {
      // localStorage full or unavailable — silently continue
    }
    return data;
  });
}

/**
 * Clear a cached entry by its cacheKey.
 */
function clearCache(cacheKey) {
  localStorage.removeItem(cacheKey);
}
