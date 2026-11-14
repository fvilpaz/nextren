# Nextren — horario de la C-1 Málaga ⇄ Fuengirola

> Si eres una IA que abre este proyecto: lee este archivo, `PLAN.md` y la última entrada de `SESSIONS.md`
> antes de nada. Las reglas generales de Nando (5 Tatuajes, metodología) están en `~/Nando.md` y `~/Metodologia.md`.

## Qué es
Una PWA que dice cuándo sale el próximo tren de Cercanías C-1 entre dos paradas cualesquiera de la línea (17
paradas), a qué hora llega y cuánto dura el viaje. Sin servidor, sin cuentas, sin base de datos: todo se calcula
en el aparato a partir de las salidas de cabecera y un desfase fijo por parada.
Vive en https://fvilpaz.github.io/nextren/ (repo público `fvilpaz/nextren`, rama `main`, GitHub Pages).
Origen: una web de un solo archivo en el Escritorio (13-nov-2026) que Nando convirtió en PWA el 14-nov-2026.

## Decisiones que NO se tocan (Nando)
| Tema | Decisión |
|---|---|
| Stack | HTML + CSS + JS **sin librerías**, sin build. CSS en `style.css`, JS en `app.js`/`i18n.js`/`theme.js`/`festivos.js`; nada en línea. |
| Datos | **Horario teórico**: no hay retrasos ni tiempo real. El pie lo dice sin dar cifra de desfase. Es para días normales. |
| Sentido | Se deduce solo: origen antes que destino en la línea = ida. Las pestañas Málaga→Fuengirola son **atajos**, no el mecanismo. |
| Festivos | `festivos.js` = calendario andaluz del BOJA (autonómico, **sin festivos locales**). Se **renueva cada diciembre** (+ `FESTIVOS_HASTA`). `?festivo` en la URL previsualiza el aviso. |
| Tema e idioma | Oscuro y español por defecto, se recuerdan en `localStorage` (`nextren-tema`, `nextren-lang`). Nombres de parada sin traducir. |
| Café | Ventana propia con Bizum + USDC (Polygon/Base y Solana). Los datos están **duplicados** en la landing de MyCryptoFolio y (cuando se haga) en David Planner: si cambian, cambiar en todos. |
| Nombre | **Nextren** (next + tren, se pronuncia igual en ES/EN). |

## Forma de trabajar
- Un cambio por commit, `git add` selectivo, `git diff --stat` antes de cada commit. Push directo a `main` (proyecto personal).
- **Cada cambio de archivos de la app sube `VERSION` en `sw.js`** (y añade a `FILES` los archivos nuevos). Sin eso el móvil
  puede servir lo viejo.
- El service worker es **red primero con `cache:"no-cache"`**: GitHub Pages manda `max-age=600` y sin eso el navegador
  servía CSS de hasta 10 min atrás.
- Verificar de verdad: Chrome sin ventana a 500 px mínimo; para anchos de móvil (360/412/432) usar un `<iframe>` de ese ancho.
  `--dump-dom` devuelve vacío si falla: probar con un control antes de fiarse.
- No reutilizar nombres de clase de otro bloque (`.cafe-top` de las tarjetas descentró el icono de la taza).

## Estructura
```
index.html  style.css  app.js  i18n.js  theme.js  festivos.js   ← la app
sw.js  manifest.webmanifest  icon-192.png  icon-512.png  preview.png   ← PWA
docs/datos-y-fuentes.md   ← de dónde salen las horas, qué está verificado y qué no
```
