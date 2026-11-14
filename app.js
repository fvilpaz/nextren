/* ===== DATOS (CTAN, línea 160) ===== */
const STOPS = {
  ida:    [["Alameda",0],["M. Zambrano",3],["Victoria Kent",6],["Guadalhorce",9],["Aeropuerto",11],["Pl. Mayor",15],["Los Álamos",17],["La Colina",18],["Torremolinos",22],["Montemar Alto",25],["El Pinillo",27],["Arroyo de la Miel",30],["Torremuelle",34],["Carvajal",37],["Torreblanca",39],["Los Boliches",42],["Fuengirola",46]],
  vuelta: [["Fuengirola",0],["Los Boliches",2],["Torreblanca",4],["Carvajal",6],["Torremuelle",9],["Arroyo de la Miel",13],["El Pinillo",18],["Montemar Alto",20],["Torremolinos",23],["La Colina",26],["Los Álamos",27],["Pl. Mayor",29],["Aeropuerto",34],["Guadalhorce",36],["Victoria Kent",39],["M. Zambrano",42],["Alameda",46]]
};
const m = s => { const [h,mi]=s.split(":").map(Number); return h*60+mi; };
function build(first, lvOnly, every, last, tail){
  const out = first.map(t => [m(t.replace("*","")), t.endsWith("*")]);
  for(let t=every; t<=m(last); t+=20) out.push([t,false]);
  tail.forEach(t => out.push([m(t)<180?m(t)+1440:m(t),false]));
  return out;
}
const TRAINS = {
  ida: build(["05:20","05:55","06:30","06:50*","07:10","07:30*","07:50","08:10*","08:30"], 0, m("08:50"), "21:30", ["22:00","22:30","23:00","23:30"]),
  vuelta: build(["06:10","06:45","07:20","07:40*","08:00","08:20*","08:40","09:00*","09:20"], 0, m("09:40"), "22:20", ["22:50","23:20","23:50","00:20"])
};
/* ===== UI ===== */
const $ = id => document.getElementById(id);
const hhmm = x => { x%=1440; return String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0"); };
const ALL = STOPS.ida.map(([n])=>n); // orden geográfico Alameda → Fuengirola
/* Festivo del "día de servicio": de 00:00 a 03:00 sigue el servicio de ayer (igual que nowMin/render). */
function festivoHoy(){
  if (location.search.includes("festivo")) return { es: "día de prueba", en: "test day" }; // vista previa: abrir con ?festivo
  const d = new Date(); if (d.getHours() < 3) d.setDate(d.getDate() - 1);
  const k = d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  return FESTIVOS[k] || null;
}
const st = { d:"ida", w:(()=>{const g=new Date().getDay();return (g==0||g==6||festivoHoy())?"fs":"lv";})(), from:"Alameda", to:"Fuengirola", stop:0 };
const offOf = (d,name) => STOPS[d].find(([n])=>n===name)[1];

function fillStops(){
  ["from","to"].forEach(k=>{
    const sel=$(k); sel.innerHTML="";
    ALL.forEach(n=>{ const o=document.createElement("option"); o.value=n; o.textContent=n; sel.appendChild(o); });
    sel.value = st[k];
  });
}
function rows(){
  return TRAINS[st.d].filter(([t,lv])=>st.w==="lv"||!lv);
}
function nowMin(){ const d=new Date(); return d.getHours()*60+d.getMinutes(); }
function render(){
  document.querySelectorAll("#dayseg button").forEach(b=>b.classList.toggle("on",b.dataset.w===st.w));
  const fest = festivoHoy(), av = $("aviso");
  av.hidden = !fest;
  if (fest) av.innerHTML = `<strong>Hoy es festivo (${fest.es}).</strong> Se muestra el horario de sábado, domingo y festivo, pero Renfe puede modificar trenes: asegúrate antes de salir.<br><a href="https://www.renfe.com/es/es/cercanias/cercanias-malaga/horarios" target="_blank" rel="noopener">Comprobar en Renfe ↗</a>`;
  $("tab-ida").classList.toggle("on",st.from==="Alameda"&&st.to==="Fuengirola");
  $("tab-vuelta").classList.toggle("on",st.from==="Fuengirola"&&st.to==="Alameda");
  if(st.from===st.to){
    $("next").innerHTML=`<div class="n"><div class="t">—</div><div class="s">Elige una parada de origen y otra de destino distintas.</div></div>`;
    $("tbl").innerHTML=""; return;
  }
  // el sentido se deduce: origen antes que destino en la línea = ida (Alameda→Fuengirola)
  st.d = ALL.indexOf(st.from) < ALL.indexOf(st.to) ? "ida" : "vuelta";
  const stops=STOPS[st.d];
  st.stop = stops.findIndex(([n])=>n===st.from);
  const off=offOf(st.d,st.from), offTo=offOf(st.d,st.to), trip=offTo-off;
  let now=nowMin(); if(now<180) now+=1440; // madrugada: sigue el servicio de ayer
  const list=rows();
  const upcoming=list.map(([t])=>t+off).filter(t=>t>=now);
  const nxt=upcoming[0];
  // próximos
  $("next").innerHTML = upcoming.length ? upcoming.slice(0,3).map((t,i)=>{
    const d=t-now, txt = d===0?"¡ahora!":(d<60? d+" min" : Math.floor(d/60)+" h "+(d%60)+" min");
    return `<div class="n ${i?"":"first"}"><div class="t">${hhmm(t)} → ${hhmm(t+trip)}</div><div class="m">sale en ${txt}</div><div class="a">viaje ${trip} min</div><div class="s">${st.from} → ${st.to}</div></div>`;
  }).join("") : `<div class="n"><div class="t">—</div><div class="s">No quedan más trenes hoy. El primero de mañana sale a las ${hhmm(list[0][0]+off)}.</div></div>`;
  // tabla
  let h="<tr><th>#</th>"+stops.map(([n],i)=>`<th class="${n===st.from||n===st.to?"key":""}">${n}</th>`).join("")+"<th></th></tr>";
  list.forEach(([t,lv],i)=>{
    const cls = (t+off)<now ? "past" : ((t+off)===nxt?"nx":"");
    h+=`<tr class="${cls}" ${(t+off)===nxt?'id="nxrow"':''}><td>${i+1}</td>`+stops.map(([n,o])=>`<td class="${n===st.from||n===st.to?"key":""}">${hhmm(t+o)}</td>`).join("")+`<td class="lv">${lv?"<span>L-V</span>":""}</td></tr>`;
  });
  $("tbl").innerHTML=h;
}
function tick(){
  const d=new Date();
  $("clock").textContent=d.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"});
  $("date").textContent=d.toLocaleDateString("es-ES",{weekday:"long",day:"numeric",month:"long"});
  render();
}
document.querySelectorAll("#dayseg button").forEach(b=>b.onclick=()=>{st.w=b.dataset.w;render();scrollNext();});
$("tab-ida").onclick=()=>{st.from="Alameda";st.to="Fuengirola";fillStops();render();scrollNext();};
$("tab-vuelta").onclick=()=>{st.from="Fuengirola";st.to="Alameda";fillStops();render();scrollNext();};
$("from").onchange=e=>{st.from=e.target.value;render();scrollNext();};
$("to").onchange=e=>{st.to=e.target.value;render();scrollNext();};
function scrollNext(){
  const r=$("nxrow"), w=document.querySelector(".tablewrap");
  if(r) w.scrollTop = Math.max(0, r.offsetTop - w.clientHeight/2 + r.offsetHeight/2);
}
fillStops(); tick(); scrollNext(); setInterval(tick,30000);
/* ===== Café ===== */
const dlg = $("cafe-dlg");
$("cafe-btn").onclick = () => dlg.showModal();
$("cafe-close").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); }); // clic fuera = cerrar
document.querySelectorAll(".cafe-copy").forEach(b => b.onclick = async () => {
  const txt = b.textContent;
  try { await navigator.clipboard.writeText(b.dataset.addr); b.textContent = "¡Copiado!"; }
  catch { b.textContent = "No se pudo copiar"; }
  setTimeout(() => { b.textContent = txt; }, 1600);
});
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
