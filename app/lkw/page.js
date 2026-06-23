import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "LKW & Transporter Service | Sinsig & Lang | Mercedes-Benz Bingen",
  description: "LKW- und Transporter-Werkstatt in Bingen am Rhein: Tachographenprüfung, HU & SP, Kühlaggregate-Service, eSprinter & eActros. Für Einzelfahrer und Flotten.",
};

const services = [
  {
    number: "01",
    title: "Wartung & Inspektion",
    desc: "Streckenwartung und Zeitwartung nach ASSYST-Vorgabe für Actros, Arocs, Atego, Sprinter und Vito. Fremdmarken auf Anfrage möglich.",
  },
  {
    number: "02",
    title: "eSprinter & eActros",
    desc: "Hochvoltservice für elektrische Nutzfahrzeuge: Diagnose, Wartung und Inspektion von Antriebsstrang, Batteriesystem und Ladetechnik (CCS/Combo) durch MB-zertifizierte HV-Techniker.",
  },
  {
    number: "03",
    title: "Tachographenprüfung",
    desc: "Gesetzlich vorgeschriebene Prüfung, Kalibrierung und Versiegelung digitaler und analoger Fahrtenschreiber. Wir führen Tachographenprüfungen täglich durch.",
  },
  {
    number: "04",
    title: "HU, AU & Sicherheitsprüfung",
    desc: "HU, AU und jährliche SP nach § 29 StVZO für LKW, Transporter und Auflieger. Geprüft durch unseren Partner Ingenieurbüro Cagrici.",
  },
  {
    number: "05",
    title: "Kühlaggregate",
    desc: "Carrier-Partnerbetrieb für Wartung, Reparatur und Prüfung von Kühlaggregaten. Auch andere gängige Systeme decken wir ab.",
  },
  {
    number: "06",
    title: "Trailer-Service & Auflieger",
    desc: "Wartung, Reparatur, HU und SP für Auflieger aller Art: Kühlauflieger, Curtainsider, Planenauflieger. Egal was hinten dran hängt, wir kümmern uns drum.",
  },
  {
    number: "07",
    title: "Aufbau & Karosserie",
    desc: "Koordination und Abnahme von Fahrzeugaufbauten (Koffer, Ladebordwände, Kühlaufbauten) sowie Schnittstelle zu Aufbauherstellern und Flottenmanagement.",
  },
  {
    number: "08",
    title: "Flotte & Telematik",
    desc: "Flottenlösungen für Speditionen: Aktivierung und Betreuung von Mercedes-Benz Fleetboard und dem Uptime-Dienst für vorausschauende Wartung und weniger Standzeiten.",
  },
];

const highlights = [
  { label: "Wartung & Inspektion", sub: "LKW, Transporter, Nutzfahrzeuge, Auflieger" },
  { label: "Reparatur & Diagnose", sub: "Vom Routine-Check bis zur komplexen Diagnose" },
  { label: "HU, SP & Tachoprüfung", sub: "Täglich durchgeführt" },
];

export default function LKWPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[55vh] flex items-end bg-[#161616] overflow-hidden" style={{ paddingTop: "4rem" }}>
          {/* Actros Hero Foto – nach unten versetzt, oben bleibt dunkel */}
          <div className="absolute bottom-0 left-0 right-0 h-[85%] z-0">
            <Image
              src="/actros-hero.jpg"
              alt="Mercedes-Benz Actros"
              fill
              className="object-cover grayscale opacity-60 select-none"
              style={{ objectPosition: "center 30%" }}
              priority
            />
          </div>
          {/* Gradient unten */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/60 to-transparent z-10" />
          {/* Gradient oben – weicher Übergang statt harter Kante */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#161616] via-[#161616]/40 to-transparent z-10" />
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-16">
            <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-4">LKW · Transporter · Nutzfahrzeuge</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-5">
              LKW &<br />Transporter
            </h1>
            <p className="text-[#707070] text-base max-w-xl leading-relaxed">
              Ob Einzelfahrer oder Flotte: Wir sind für Sie da. Persönlich, zuverlässig und mit dem Fachwissen, das auf der Straße zählt.
            </p>
          </div>
        </section>

        {/* ── HIGHLIGHT BADGES ── */}
        <section className="bg-[#202020] border-b border-[#c0c0c0]/10">
          <div className="max-w-7xl mx-auto px-6 py-0 flex flex-col md:flex-row items-stretch">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#c0c0c0]/10">
              {highlights.map((h) => (
                <div key={h.label} className="px-6 py-6 flex items-center gap-4">
                  <div className="w-1.5 h-8 bg-[#c0c0c0]/20 flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium">{h.label}</div>
                    <div className="text-[#8a8a8a] text-sm mt-0.5">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t md:border-t-0 md:border-l border-[#c0c0c0]/10 flex items-center px-6 py-4 md:py-0">
              <a
                href="https://wa.me/496721974127"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ background: "#25D366" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                LKW/Transporter Termin anfragen
              </a>
            </div>
          </div>
        </section>

        {/* ── LEISTUNGEN GRID ── */}
        <section className="py-24 bg-[#161616]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Leistungsübersicht</p>
              <h2 className="text-4xl font-bold text-white">Was wir für Sie tun</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#c0c0c0]/10">
              {services.map((s) => (
                <div key={s.number} className="bg-[#161616] p-8 hover:bg-[#202020] transition-colors">
                  <h3 className="text-white font-medium text-base mb-3">{s.title}</h3>
                  <p className="text-[#707070] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#161616] border-t border-[#c0c0c0]/10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Direkt zum LKW-Team</h2>
              <p className="text-[#707070] text-sm max-w-md">
                Tachographenprüfung, SP-Termin oder Frage zum Kühlaufbau: Schreiben Sie uns direkt.
                Kein Callcenter, kein Formular.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://wa.me/496721974127"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                style={{ background: "#25D366" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp LKW
              </a>
              <a
                href="tel:+496721974127"
                className="flex items-center gap-2 px-8 py-4 border border-[#c0c0c0]/20 text-white text-sm font-medium hover:border-[#c0c0c0]/50 transition-colors"
              >
                06721 974127
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
