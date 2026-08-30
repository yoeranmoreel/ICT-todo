const CACHE_NAME = 'ict-planner-v3';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// App shell: cache-first. Firebase calls (firestore/googleapis/gstatic) always go to the network.
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (url.includes('googleapis.com') || url.includes('gstatic.com') || url.includes('firebaseio.com')) {
    return; // let these pass straight through to the network
  }
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
