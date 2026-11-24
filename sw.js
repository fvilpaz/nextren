// Service worker de Nextren: guarda la app para que abra sin conexión.
// Al cambiar cualquier archivo de la app, subir el número de VERSION.
const VERSION = "nextren-v22";
const FILES = ["./", "./index.html", "./style.css", "./app.js", "./theme.js", "./festivos.js", "./i18n.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Red primero (así cada actualización se ve a la primera); si no hay conexión, lo guardado.
// cache:"no-cache" = preguntar siempre al servidor si el archivo cambió. GitHub Pages manda max-age=600
// y, sin esto, el navegador podría servir el CSS/JS viejo hasta 10 minutos tras un despliegue.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request, { cache: "no-cache" })
      .then(r => {
        if (r.ok && new URL(e.request.url).origin === location.origin) {
          const copia = r.clone();
          caches.open(VERSION).then(c => c.put(e.request, copia));
        }
        return r;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
