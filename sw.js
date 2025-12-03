const CACHE_NAME = 'ambulante-todo-v1';

// Cache alleen de HTML pagina zelf
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(['./index.html']);
    })
  );
});

// Probeer altijd network eerst, val terug op cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});
