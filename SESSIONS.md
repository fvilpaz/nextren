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
- **Prueba sin conexión** en Chrome de escritorio: servidor local, service worker instalado, servidor apagado de verdad, recarga →
  3 tarjetas, 50 filas, estilos, i18n y festivos cargados; control negativo (página inexistente) falla como debe.
  **Confirmado en el móvil real** (Nando, 11:51, sin datos ni wifi): abre con la cabecera nueva y muestra 12:10 «sale en 19 min»,
  es decir, recalcula con la hora del teléfono (cortó la conexión a las 11:45, cuando el próximo habría sido el de las 11:50).
- SEO y redes: `description`, canonical, 11 etiquetas `og`, Twitter Card, JSON-LD, `og-image.png` 1200×630 (con captura real) y `sitemap.xml`;
  comprobado en la web publicada. README en inglés y español.
- Documentación del proyecto (`CLAUDE.md`, `PLAN.md`, `SESSIONS.md`, `docs/datos-y-fuentes.md`); original de las notas respaldado.
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
- Para probar «sin conexión» de verdad no basta emular la red de la página: el service worker tiene su propia red. Se sirve la app en local y se **apaga el servidor**.
- `robots.txt` solo lo lee el rastreador en la **raíz del dominio**; en una subruta de `github.io` no sirve de nada.
- Las ventanas modales (`<dialog>`) van en la capa superior: para que un cursor de grabación se vea encima hay que usar `popover`.

**Siguiente**
1. Decidir lo del **Bizum a la vista** (mostrarlo solo al copiar / enlace de Revolut) y aplicarlo en landing, Nextren y David Planner.
2. Café en David Planner.
3. Autobuses (mirar primero si el Consorcio publica los horarios) y, si se quiere, el enlace «Otros proyectos» en los demás footers.
