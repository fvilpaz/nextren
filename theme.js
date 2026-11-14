/* Tema claro/oscuro. Se carga en el <head> para pintar con el tema correcto desde el primer momento (sin parpadeo).
   Oscuro por defecto; si se elige el claro, se recuerda en este aparato. */
const TEMAS = { dark: "#0b1220", light: "#f3f6fc" }; // color de la barra del móvil
function temaGuardado(){
  try { return localStorage.getItem("nextren-tema") === "light" ? "light" : "dark"; }
  catch { return "dark"; }
}
function aplicarTema(t){
  document.documentElement.dataset.theme = t;
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.content = TEMAS[t];
}
aplicarTema(temaGuardado());
