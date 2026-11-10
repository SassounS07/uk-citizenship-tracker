// Network-first service worker.
// Online: always fetches the latest files (so changes pushed to GitHub show up straight away)
// and keeps a copy. Offline: serves the last copy it saved.
const CACHE = 'citizenship-v2';
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(CORE))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!sameOrigin && !isFont) return;

  event.respondWith(
    fetch(sameOrigin ? new Request(req, { cache: 'no-cache' }) : req)
      .then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: sameOrigin }).then((hit) => {
          if (hit) return hit;
          if (req.mode === 'navigate') return caches.match('./index.html').then((r) => r || caches.match('./'));
          return Response.error();
        })
      )
  );
});
