
self.addEventListener('install', event => {
  // Attiva subito il nuovo service worker
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Prende subito il controllo della pagina
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Strategia: sempre rete (aggiornato), fallback cache
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});
