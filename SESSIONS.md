# SESIONES — Nextren

> Lo último arriba.

## 14-nov-2026 — de un HTML en el Escritorio a PWA publicada

**Hecho**
- Proyecto movido a `D:\Fernando\Coding\github\nextren`, repo público y Pages en https://fvilpaz.github.io/nextren/.
- Origen/destino libres con llegada y duración; sentido automático; pestañas como atajo; CSS y JS separados.
- PWA (manifest, iconos, service worker). Footer con créditos y ventana de café propia.
- Aviso de festivo con calendario BOJA 2026-27 (24 fechas, 20 comprobadas contra el día de la semana del decreto) y `?festivo`.
- Tema claro/oscuro, idioma ES/EN, cabecera rehecha (reloj al centro, tres botones iguales).
- CV y README del perfil con Nextren; `preview.png` subido a 8 repos; vídeo promo con voz Ryan y datos de pago difuminados.
- Verificado: 8 URLs de imagen en 200; tema y idioma se recuerdan (dos cargas seguidas en el mismo perfil);
  alineación de pestañas/selectores/conmutador medida (mismos bordes); huecos de botones medidos (8/8 px, iconos a 24 px).

**Decidido**
- Nombre **Nextren** (pronunciable en ES/EN). Café **propio** en cada app, no un enlace a MyCryptoFolio.
- El aviso de festivo usa calendario embebido y no una consulta en internet (la app funciona sin red y las webs bloquean esas peticiones).
- Sin festivos locales de momento: solo se pueden comprobar bien los autonómicos.
- Botones de la cabecera discretos y del mismo tipo; el reloj, grande y centrado.

**Aprendido**
- **Service worker «caché primero»** hace que cada actualización tarde dos cargas en verse. Mejor red primero con caché de respaldo.
- **GitHub Pages manda `max-age=600`**: un `fetch()` normal puede devolver hasta 10 min de CSS viejo. Con `cache:"no-cache"` revalida con el servidor (barato: solo comprueba el ETag).
- **Choque de nombres de clase**: `.cafe-top` (cabecera de las tarjetas, con `justify-content:space-between`) descentró el icono de la taza. Una caja puede medir bien y el icono estar mal colocado.
- En PowerShell `$w` y `$W` son la **misma variable**; un script se colgó en un bucle por eso.
- Un resultado **vacío no es un dato**: `--dump-dom` devolvió 0 caracteres y el «control» parecía un fallo de la app.
- Las ventanas modales (`<dialog>`) van en la capa superior: para que un cursor de grabación se vea encima hay que usar `popover`.

**Siguiente**
1. Probar la app **sin conexión en un móvil real** (modo avión) — el CV ya lo afirma.
2. Meta SEO + Open Graph con imagen 1200×630.
3. README del repo, café en David Planner y decidir lo del Bizum a la vista.
