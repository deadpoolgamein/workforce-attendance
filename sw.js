self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Pass-through for live attendance data
  e.respondWith(fetch(e.request).catch(() => new Response("Offline - Check Internet Connection")));
});
