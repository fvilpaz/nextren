# Datos y fuentes — C-1 Fuengirola ⇄ Málaga

> De dónde salen las horas, qué está verificado y qué no. Original de las notas: 13-nov-2026; actualizado el 14-nov-2026.
> Es **horario teórico**: no gestiona retrasos, obras ni cancelaciones. Decisión de Nando: es para días normales, ±1 o ±5 min no importa.

## Cómo está construido (datos)
- En `app.js` solo se guardan las **salidas de cabecera** (`TRAINS`) y un **desfase fijo en minutos** por parada (`STOPS`); el resto se calcula.
- Salidas Alameda (ida): 05:20, 05:55, 06:30, 06:50*, 07:10, 07:30*, 07:50, 08:10*, 08:30, luego cada 20 min hasta 21:30, y 22:00, 22:30, 23:00, 23:30.
- Salidas Fuengirola (vuelta): 06:10, 06:45, 07:20, 07:40*, 08:00, 08:20*, 08:40, 09:00*, 09:20, luego cada 20 min hasta 22:20, y 22:50, 23:20, 23:50, 00:20.
- `*` = solo **L-V**. Sáb/Dom/Festivo muestran solo los «diarios».
- Desfases (min desde cabecera):
  - **Ida:** Alameda 0, M. Zambrano 3, Victoria Kent 6, Guadalhorce 9, Aeropuerto 11, Pl. Mayor 15, Los Álamos 17, La Colina 18, Torremolinos 22, Montemar Alto 25, El Pinillo 27, Arroyo de la Miel 30, Torremuelle 34, Carvajal 37, Torreblanca 39, Los Boliches 42, Fuengirola 46.
  - **Vuelta:** Fuengirola 0, Los Boliches 2, Torreblanca 4, Carvajal 6, Torremuelle 9, Arroyo de la Miel 13, El Pinillo 18, Montemar Alto 20, Torremolinos 23, La Colina 26, Los Álamos 27, Pl. Mayor 29, Aeropuerto 34, Guadalhorce 36, Victoria Kent 39, M. Zambrano 42, Alameda 46.
- Con origen y destino libres: salida = cabecera + desfase del origen; llegada = cabecera + desfase del destino; viaje = diferencia.
- Ajustes hechos tras contrastar: vuelta Torremolinos 22→23 y Aeropuerto 33→34; ida M. Zambrano 2→3 y Victoria Kent 5→6.
- **Festivos:** `festivos.js` (BOJA: Decreto 101/2025 para 2026 y Decreto 84/2026 para 2027). Sin festivos locales.

## Fuentes (y qué dio cada una)
| Fuente | Aportó |
|---|---|
| Consorcio (CTAN) `https://siu.ctmam.ctan.es/es/movil/horarios_lineas_tabla.php?linea=160` | Salidas de cabecera y etiqueta diario / L-V. **Solo 9 paradas** (y sin Victoria Kent en la vuelta). Válido desde 23/08/2026. Sin horario aparte para sáb/festivo. |
| Renfe Cercanías Málaga `https://www.renfe.com/es/es/cercanias/cercanias-malaga/horarios` | Itinerario completo con las **17 paradas** (botón «Ver detalle» de cada tren). Es la fuente oficial. |
| Google Maps (transporte público, Fuengirola ↔ M. Zambrano, día y hora a elegir) | Contraste por tren: paradas y horas de un tren concreto, sáb/dom/lun. |
| RedTransporte / malagaweb.com | Copias de lo del consorcio; malagaweb confirma las 18 estaciones (San Julián figura como no operativa y no está en la app). |
| BOJA (Junta de Andalucía) | Festivos 2026 y 2027, con los traslados a lunes ya aplicados. |

## Qué está verificado
- **Primer tren del día, los dos sentidos, sábado + domingo + lunes**: Fuengirola 06:10 → M. Zambrano 06:52 (42 min) y M. Zambrano 05:23 → Fuengirola 06:06 (43 min).
- Vuelta 06:10 (sáb y lun): las 16 paradas coinciden hora por hora con Maps.
- **Sábado, Fuengirola→Málaga, primeros 8 trenes** (Renfe): 06:10, 06:45, 07:20, 08:00, 08:40, 09:20, 09:40, 10:00 = exactamente los «diarios».
- Lunes Zambrano→Fuengirola: 05:23, 05:58, 06:33, 06:53 (este último es el L-V) → coincide.
- **Sábado por la tarde-noche, Fuengirola→Málaga (13-nov-2026):** Renfe 20:00→20:46 … 22:00→22:46 (46 min) y Maps (a M. Zambrano, 42 min) 22:50→23:32, 23:20→00:02, 23:50→00:32, 00:20→01:02. Coincide.
- **Sábado 06:45 desde Fuengirola**: Maps 07:27 en M. Zambrano (42 min) = lo normal. El «51 min» de Renfe fue un caso aislado.
- **Festivos (14-nov-2026):** 20 de las 24 fechas comprobadas contra el día de la semana que dicen los decretos; Jueves/Viernes Santo caen en jueves/viernes.

## Sin verificar / dudas abiertas
- **Domingo por la tarde-noche** (los dos sentidos) y **sábado tarde-noche Málaga→Fuengirola**: se asume el mismo patrón. Sin ver.
- **Festivos entre semana**: se asume = domingo (el aviso de la app lo dice y manda a comprobar en Renfe). Sin ver.
- Málaga→Fuengirola, paradas intermedias contrastadas con Maps en el tren 05:23 desde M. Zambrano: coinciden salvo ±1 min en Aeropuerto (Maps +12, app +11), Montemar Alto (+24 vs +25) y El Pinillo (+26 vs +27); se dejaron.
- El desfase real varía ±1 min según el tren; la app usa uno fijo para todos.
- **«Funciona sin conexión»** (CV, perfil de GitHub): el service worker está publicado pero **no se ha probado en un móvil real**.

## Trucos para retomar
- Para ajustar: `STOPS` (desfases) y `TRAINS` (salidas) están al principio de `app.js`.
- **Renfe, búsqueda por fecha (URL directa)**, ids: Fuengirola `100054516`, Málaga Centro `100054517`:
  `https://www.renfe.com/es/es/cercanias/cercanias-malaga/horarios#/listado?tripType=station&originInputValue=<ID>&originInputText=<NOMBRE>&destinationInputValue=<ID>&destinationInputText=<NOMBRE>&tripPreferences=todos&whenToDepartType=3&deptDate=DD-MM-AAAA&deptTime=HH%3AMM`
  (un día dio «Error, estamos teniendo problemas»; reintentar más tarde).
- El texto de las listas de Renfe **no sale en el DOM** (hay que leerlo en captura). «Descargar listado» genera un PDF que es solo una captura de los ~8 primeros trenes: no sirve para el día completo.
- Lo más rápido para verificar un día: pegar el texto de Google Maps (transporte público, «Salir a las» + día) con la lista de paradas abierta.
- Maps por URL: la hora va como `!8j<epoch>`, donde epoch = la hora LOCAL tratada como UTC (`date -u -d "2026-11-14 22:50:00" +%s`).
  URL directa: `.../maps/dir/<origen>/<destino>/data=!4m6!4m5!2m3!6e0!7e2!8j<epoch>!3e3`.
- Cuidado en Google Maps: al cambiar a transporte público el panel se mueve; mirar captura antes de pulsar (un clic erróneo envió una ruta al móvil de Nando).
- La extensión de Chrome **no abre `file://`**. Para ver la página en local: Chrome sin ventana con `--screenshot` (ancho mínimo ~500 px).
