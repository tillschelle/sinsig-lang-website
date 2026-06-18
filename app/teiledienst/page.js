import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Teiledienst | Sinsig & Lang GmbH & Co. KG | Original Mercedes-Benz Ersatzteile",
  description: "Original Mercedes-Benz Ersatzteile und Zubehör für PKW, LKW, Hybrid und Oldtimer. Kurzfristig verfügbar, fair berechnet. Sinsig & Lang in Bingen am Rhein.",
};

const categories = [
  {
    number: "01",
    title: "PKW",
    desc: "Original Ersatzteile für alle Mercedes-Benz PKW-Modelle, von der A-Klasse bis zur S-Klasse. Schnell verfügbar, direkt aus dem Lager.",
    items: ["Verschleißteile", "Bremsanlage", "Filter & Flüssigkeiten", "Karosserie & Anbauteile", "Innenraum & Zubehör"],
  },
  {
    number: "02",
    title: "LKW & Transporter",
    desc: "Ersatzteile für Actros, Sprinter, Atego und Co., inklusive Auflieger, Anhänger und Kühlaggregate. Damit Ihr Nutzfahrzeug schnell wieder einsatzbereit ist.",
    items: ["Antrieb & Getriebe", "Fahrwerk & Achsen", "Bremsanlage", "Auflieger & Anhänger", "Kühlaggregate"],
  },
  {
    number: "03",
    title: "Elektro & Hybrid",
    desc: "Hochvoltkomponenten, Ladetechnik und Zubehör für EQ-, EQC- und Hybridfahrzeuge, beschafft und verbaut von zertifizierten HV-Fachkräften.",
    items: ["Hochvoltbatterien", "Ladesysteme AC/DC", "Elektromotoren", "Steuergeräte", "Ladekabel & Adapter"],
  },
  {
    number: "04",
    title: "Oldtimer & Klassiker",
    desc: "Ersatzteile für klassische Mercedes-Benz Fahrzeuge, originalgetreu und mit dem nötigen Gespür fürs Detail. Auf Anfrage auch Sonderbestellungen.",
    items: ["Mechanische Teile", "Dichtungen & Gummis", "Chromteile & Zierleisten", "Polster & Innenausstattung", "Sonderbestellungen"],
  },
];

export default function TeiledienstPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#111] border-b border-[#c0c0c0]/10 py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#555] text-xs tracking-[0.3em] uppercase mb-3">Original Mercedes-Benz</p>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4">Teiledienst</h1>
            <p className="text-[#555] text-base max-w-xl leading-relaxed">
              Original Ersatzteile und Zubehör für PKW, LKW, Hybrid und Oldtimer. Kurzfristig verfügbar, fair berechnet. Kein Aufschlag ohne Grund.
            </p>
          </div>
        </section>

        {/* Kategorien */}
        <section className="bg-[#111] py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c0c0c0]/10">
              {categories.map((cat) => (
                <div key={cat.number} className="bg-[#111] p-8 hover:bg-[#1a1a1a] transition-colors">
                  <p className="text-[#c0c0c0]/30 text-xs font-mono tracking-widest mb-5">{cat.number}</p>
                  <h2 className="text-white text-2xl font-light mb-3">{cat.title}</h2>
                  <p className="text-[#555] text-sm leading-relaxed mb-6">{cat.desc}</p>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#555] text-xs">
                        <span className="w-1 h-1 bg-[#c0c0c0]/30 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hinweis */}
        <section className="bg-[#111] border-t border-[#c0c0c0]/10 py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c0c0c0]/10">
              <div className="bg-[#111] p-8">
                <h3 className="text-white font-medium mb-3">Direkte Anfrage</h3>
                <p className="text-[#555] text-sm leading-relaxed mb-6">
                  Teile­nummer zur Hand oder nur eine grobe Beschreibung? Wir helfen bei der Identifikation und prüfen die Verfügbarkeit. Einfach per WhatsApp oder Telefon.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/49672197410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    style={{ background: "#25D366" }}
                  >
                    WhatsApp Teiledienst
                  </a>
                  <a
                    href="tel:+49672197410"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#c0c0c0]/20 text-[#c0c0c0] text-sm font-medium hover:bg-white hover:text-black transition-all"
                  >
                    06721 9741-0
                  </a>
                </div>
              </div>
              <div className="bg-[#111] p-8">
                <h3 className="text-white font-medium mb-3">Öffnungszeiten Teilelager</h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#c0c0c0]/5">
                    {[
                      ["Mo–Fr", "07:30–18:00 Uhr"],
                      ["Samstag", "08:00–12:00 Uhr"],
                      ["Sonntag", "Geschlossen"],
                    ].map(([day, time]) => (
                      <tr key={day}>
                        <td className="py-2.5 text-[#555] text-xs">{day}</td>
                        <td className="py-2.5 text-white text-xs text-right">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[#333] text-xs mt-5">
                  Schulheiß-Kollei-Straße 3 · 55411 Bingen am Rhein
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
