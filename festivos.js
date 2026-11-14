/* ===== FESTIVOS (solo datos) =====
   Fiestas laborales de ÁMBITO AUTONÓMICO de Andalucía (nacionales + Día de Andalucía + Jueves/Viernes Santo).
   NO incluye las fiestas locales de cada municipio (Málaga, Torremolinos, Benalmádena, Fuengirola...).
   Fuente oficial:
     2026 · Decreto 101/2025, de 14 de mayo (BOJA nº 93, 19/05/2025), anexo.
     2027 · Decreto 84/2026, de 29 de abril (BOJA nº 84, 05/05/2026), anexo.
   Las fechas ya están con los traslados a lunes aplicados.
   RENOVAR CADA DICIEMBRE: añadir el año siguiente y subir FESTIVOS_HASTA. */
const FESTIVOS_HASTA = 2027;
const FESTIVOS = {
  "2026-01-01": { es: "Año Nuevo",                      en: "New Year's Day" },
  "2026-01-06": { es: "Epifanía del Señor",             en: "Epiphany" },
  "2026-02-28": { es: "Día de Andalucía",               en: "Andalusia Day" },
  "2026-04-02": { es: "Jueves Santo",                   en: "Maundy Thursday" },
  "2026-04-03": { es: "Viernes Santo",                  en: "Good Friday" },
  "2026-05-01": { es: "Fiesta del Trabajo",             en: "Labour Day" },
  "2026-08-15": { es: "Asunción de la Virgen",          en: "Assumption of Mary" },
  "2026-10-12": { es: "Fiesta Nacional de España",      en: "National Day of Spain" },
  "2026-11-02": { es: "Todos los Santos",               en: "All Saints' Day" },
  "2026-12-07": { es: "Día de la Constitución",         en: "Constitution Day" },
  "2026-12-08": { es: "Inmaculada Concepción",          en: "Immaculate Conception" },
  "2026-12-25": { es: "Natividad del Señor",            en: "Christmas Day" },

  "2027-01-01": { es: "Año Nuevo",                      en: "New Year's Day" },
  "2027-01-06": { es: "Epifanía del Señor",             en: "Epiphany" },
  "2027-03-01": { es: "Día de Andalucía",               en: "Andalusia Day" },
  "2027-03-25": { es: "Jueves Santo",                   en: "Maundy Thursday" },
  "2027-03-26": { es: "Viernes Santo",                  en: "Good Friday" },
  "2027-05-01": { es: "Fiesta del Trabajo",             en: "Labour Day" },
  "2027-08-16": { es: "Asunción de la Virgen",          en: "Assumption of Mary" },
  "2027-10-12": { es: "Fiesta Nacional de España",      en: "National Day of Spain" },
  "2027-11-01": { es: "Todos los Santos",               en: "All Saints' Day" },
  "2027-12-06": { es: "Día de la Constitución",         en: "Constitution Day" },
  "2027-12-08": { es: "Inmaculada Concepción",          en: "Immaculate Conception" },
  "2027-12-25": { es: "Natividad del Señor",            en: "Christmas Day" }
};
