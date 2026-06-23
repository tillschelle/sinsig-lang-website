const points = [
  {
    title: "Breite Technologieabdeckung",
    desc: "Wir decken alle Antriebsarten ab, vom Verbrenner bis zum vollelektrischen Fahrzeug, und bilden uns stetig weiter, um den höchsten Standards gerecht zu werden.",
  },
  {
    title: "Mensch im Vordergrund, Digitalisierung im Hintergrund",
    desc: "Im Kontakt mit Ihnen zählt der Mensch. Damit das funktioniert, laufen unsere Abläufe im Hintergrund hoch digitalisiert: Termine, Bestellungen, Dokumentation, alles vernetzt, damit am Telefon und vor Ort sofort jemand für Sie da ist.",
  },
  {
    title: "Feste Ansprechpartner",
    desc: "Dieselbe Ansprechperson über Jahre. Ihre Vorgeschichte und Ihr Fahrzeug sind bekannt.",
  },
  {
    title: "Kundenorientierte Lösungen",
    desc: "Statt Standardpaketen finden wir die Lösung, die wirklich zu Ihrem Fahrzeug, Ihrem Anliegen und Ihrem Geldbeutel passt.",
  },
];

export default function BrandPromise() {
  return (
    <section className="py-12 bg-[#202020] border-t border-[#c0c0c0]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Unser Anspruch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Warum wir seit Jahren erfolgreich sind</h2>
          <p className="text-[#707070] text-sm max-w-lg">
            Vier Gründe, warum Kundinnen und Kunden uns seit Jahrzehnten ihr Fahrzeug anvertrauen.
          </p>
        </div>

        <div className="divide-y divide-[#c0c0c0]/10 border-t border-[#c0c0c0]/10 max-w-4xl">
          {points.map((p) => (
            <div key={p.title} className="flex flex-col md:flex-row md:items-baseline gap-1.5 md:gap-8 py-5">
              <h3 className="text-white font-medium text-base md:w-64 flex-shrink-0">{p.title}</h3>
              <p className="text-[#707070] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
