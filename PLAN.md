# PLAN — Nextren

> 🔲 pendiente · ✅ hecho. Cada paso termina con algo que se ve funcionando y un commit.

| # | Paso | Estado |
|---|---|---|
| 1 | Convertir el HTML del Escritorio en proyecto + repo + GitHub Pages | ✅ 14-nov |
| 2 | Origen y destino libres entre las 17 paradas, con hora de llegada y duración | ✅ |
| 3 | CSS y JS fuera del HTML; botones de 48 px en móvil | ✅ |
| 4 | PWA: manifest, iconos, service worker (red primero, `no-cache`) | ✅ (offline **sin probar en móvil**) |
| 5 | Footer con créditos y ventana de café propia (Bizum + USDC) | ✅ |
| 6 | Aviso de festivo + calendario BOJA 2026-2027 + `?festivo` | ✅ |
| 7 | Tema claro/oscuro (oscuro por defecto, recordado) | ✅ |
| 8 | Idioma ES/EN con `i18n.js` | ✅ |
| 9 | Cabecera: reloj centrado, píldora ES\|EN + taza + luna del mismo tipo | ✅ |
| 10 | Añadido al CV, al README del perfil y `preview.png` en los 8 repos de proyectos | ✅ |
| 11 | Vídeo promo (EN + subtítulos ES, voz Ryan, datos de pago difuminados) | ✅ |
| 12 | Probar sin conexión: ✅ en Chrome de escritorio con el servidor apagado (3 URLs + control negativo) y ✅ en el **móvil real** (Nando, 14-nov 11:51, sin datos ni wifi: abre y recalcula los trenes con la hora actual; el de las 11:50 ya no sale) | ✅ |
| 13 | Meta SEO + Open Graph: `description`, `canonical`, `og:*`, `twitter:card`, JSON-LD, imagen 1200×630 y `sitemap.xml` (sin `hreflang`: es una sola URL con idioma por botón; `robots.txt` en subruta no lo lee nadie) | ✅ |
| 14 | `README.md` (EN) y `README.es.md` del repo | ✅ |
| 15 | Café propio en **David Planner** (tiene `lang-es/en`, tests y CLAUDE.md propios: leerlos antes) | 🔲 |
| 16 | Decidir qué hacer con el **Bizum a la vista** (mostrarlo solo al copiar / sustituirlo por enlace de Revolut) — en landing, Nextren y David Planner | 🔲 |
| 17 | Cerrar lagunas de `docs/datos-y-fuentes.md` (domingo noche, festivos entre semana, sábado noche Málaga→Fuengirola) | 🔲 |
| 18 | **Autobuses** (Consorcio: Fuengirola, Mijas…). Primero mirar si los horarios son accesibles; solo horarios oficiales, sin tiempo real | 🔲 |

## Rutina
- Cada diciembre: añadir el año siguiente a `festivos.js` y subir `FESTIVOS_HASTA`.

## 💡 Aparcado (ideas, no pedidas)
- Botón para intercambiar origen y destino.
- Recordar la última ruta elegida.
- Festivos locales de Málaga y Fuengirola.
- Columna de la parada elegida fija a la izquierda en la tabla (en móvil se desliza mucho).
- Vídeo vertical 9:16 y un `.srt` aparte para LinkedIn.
- Guardar los scripts que generan el vídeo (grabación con Chrome sin ventana + voz + subtítulos) por si hay que rehacerlo.
- Que el idioma inicial siga al del navegador.
- Enviar `sitemap.xml` a Google Search Console (lo decide Nando; hace falta su cuenta).
- Si se vuelve a compartir el enlace en WhatsApp: usar `?v=2` al final para saltarse la vista previa vieja que WhatsApp guarda por dirección.
