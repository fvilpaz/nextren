/* ===== IDIOMA (ES / EN) =====
   El HTML lleva el texto en español; aquí están las dos versiones y la función tx().
   Los nombres de las paradas no se traducen (son nombres propios). */
const LANG_KEY = "nextren-lang";
const RENFE = "https://www.renfe.com/es/es/cercanias/cercanias-malaga/horarios";
const TXT = {
  es: {
    "title": "Nextren · Cercanías C-1 Fuengirola ⇄ Málaga",
    "tab.idaSub": "sale de Alameda",
    "tab.vueltaSub": "sale de Fuengirola",
    "lbl.from": "Desde:",
    "lbl.to": "Hasta:",
    "seg.lv": "Lun–Vie",
    "seg.fs": "Sáb / Dom / Festivo",
    "sec.next": "Próximos trenes",
    "sec.full": "Horario completo",
    "now": "¡ahora!",
    "dep": "sale en {x}",
    "trip": "viaje {n} min",
    "noMore": "No quedan más trenes hoy. El primero de mañana sale a las {h}.",
    "pickDiff": "Elige una parada de origen y otra de destino distintas.",
    "chip.lv": "L-V",
    "aviso": `<strong>Hoy es festivo ({name}).</strong> Se muestra el horario de sábado, domingo y festivo, pero Renfe puede modificar trenes: asegúrate antes de salir.<br><a href="${RENFE}" target="_blank" rel="noopener">Comprobar en Renfe ↗</a>`,
    "foot.1": `<strong>Horario teórico:</strong> no incluye retrasos, obras ni cancelaciones, y las horas pueden presentar desviaciones respecto al servicio real.`,
    "foot.2": `<strong>Salidas de cabecera:</strong> <a href="https://siu.ctmam.ctan.es/es/movil/horarios_lineas_tabla.php?linea=160">Consorcio de Transportes Málaga · línea 160 (C-1)</a>, válido desde 23/08/2026. Solo distingue «diario» y «L-V», así que sábados, domingos y festivos muestran los trenes diarios.`,
    "foot.3": `<strong>Paradas intermedias</strong> (17 por sentido): itinerario de <a href="${RENFE}">Renfe Cercanías Málaga</a>, con el mismo desfase desde la cabecera para todos los trenes y contrastado con Google Maps.`,
    "foot.4": `<strong>Festivos:</strong> calendario de fiestas laborales de Andalucía <a href="https://www.juntadeandalucia.es/boja/2025/93/1">2026</a> y <a href="https://www.juntadeandalucia.es/eboja/2026/84/BOJA26-084-00002-5812-01_00337048.pdf">2027</a> (BOJA), sin festivos locales. En festivo se usa el horario de sábado y domingo; Renfe puede cambiarlo, compruébalo antes de salir. Zonas A–E.`,
    "link.projects": "Otros proyectos",
    "cafe.btn": "Invítame a un café",
    "cafe.p": "Nextren es gratis. Si te ha sido útil y quieres apoyarlo, puedes mandarme un café. Sin cuenta y sin registro.",
    "cafe.pp": "Desde cualquier país",
    "cafe.go": "Invitar ☕",
    "cafe.easy": "Lo más fácil",
    "cafe.fee1": "Fees mínimas",
    "cafe.fee2": "Fees casi 0",
    "copy.num": "Copiar número",
    "copy.addr": "Copiar dirección",
    "copied": "¡Copiado!",
    "copyFail": "No se pudo copiar",
    "close": "Cerrar",
    "theme.toLight": "Cambiar a tema claro",
    "theme.toDark": "Cambiar a tema oscuro",
    "lang.aria": "Cambiar idioma a inglés"
  },
  en: {
    "title": "Nextren · C-1 Commuter Rail Fuengirola ⇄ Málaga",
    "tab.idaSub": "departs from Alameda",
    "tab.vueltaSub": "departs from Fuengirola",
    "lbl.from": "From:",
    "lbl.to": "To:",
    "seg.lv": "Mon–Fri",
    "seg.fs": "Sat / Sun / Holiday",
    "sec.next": "Next trains",
    "sec.full": "Full timetable",
    "now": "now!",
    "dep": "departs in {x}",
    "trip": "trip {n} min",
    "noMore": "No more trains today. The first one tomorrow leaves at {h}.",
    "pickDiff": "Pick two different stops for origin and destination.",
    "chip.lv": "M-F",
    "aviso": `<strong>Today is a public holiday ({name}).</strong> The Saturday, Sunday and holiday timetable is shown, but Renfe may change trains: make sure before you leave.<br><a href="${RENFE}" target="_blank" rel="noopener">Check on Renfe ↗</a>`,
    "foot.1": `<strong>Theoretical timetable:</strong> it does not include delays, works or cancellations, and times may deviate from the real service.`,
    "foot.2": `<strong>Terminus departures:</strong> <a href="https://siu.ctmam.ctan.es/es/movil/horarios_lineas_tabla.php?linea=160">Consorcio de Transportes Málaga · line 160 (C-1)</a>, valid from 23/08/2026. It only distinguishes “daily” and “Mon–Fri”, so Saturdays, Sundays and holidays show the daily trains.`,
    "foot.3": `<strong>Intermediate stops</strong> (17 per direction): itinerary from <a href="${RENFE}">Renfe Cercanías Málaga</a>, using the same offset from the terminus for every train, cross-checked with Google Maps.`,
    "foot.4": `<strong>Holidays:</strong> Andalusia public holidays calendar <a href="https://www.juntadeandalucia.es/boja/2025/93/1">2026</a> and <a href="https://www.juntadeandalucia.es/eboja/2026/84/BOJA26-084-00002-5812-01_00337048.pdf">2027</a> (BOJA), without local holidays. On a holiday the Saturday and Sunday timetable is used; Renfe may change it, so check before you travel. Zones A–E.`,
    "link.projects": "Other projects",
    "cafe.btn": "Buy me a coffee",
    "cafe.p": "Nextren is free. If it has been useful and you want to support it, you can send me a coffee. No account, no sign-up.",
    "cafe.pp": "From any country",
    "cafe.go": "Treat me ☕",
    "cafe.easy": "Easiest (Spain)",
    "cafe.fee1": "Minimal fees",
    "cafe.fee2": "Almost zero fees",
    "copy.num": "Copy number",
    "copy.addr": "Copy address",
    "copied": "Copied!",
    "copyFail": "Could not copy",
    "close": "Close",
    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "lang.aria": "Cambiar idioma a español"
  }
};

let lang = (() => { try { return localStorage.getItem(LANG_KEY) === "en" ? "en" : "es"; } catch { return "es"; } })();
const tx = (k, v = {}) => (TXT[lang][k] ?? TXT.es[k] ?? k).replace(/\{(\w+)\}/g, (_, n) => v[n]);

function aplicarIdioma(l){
  lang = l;
  document.documentElement.lang = l;
  document.title = tx("title");
  document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = tx(e.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(e => { e.innerHTML = tx(e.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-aria]").forEach(e => { e.setAttribute("aria-label", tx(e.dataset.i18nAria)); });
  document.querySelectorAll("[data-i18n-title]").forEach(e => { e.setAttribute("title", tx(e.dataset.i18nTitle)); });
  document.querySelectorAll("#lang-btn [data-l]").forEach(s => s.classList.toggle("on", s.dataset.l === l));
}
