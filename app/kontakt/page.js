import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import MapEmbed from "@/app/components/MapEmbed";

export const metadata = {
  title: "Kontakt | Sinsig & Lang GmbH & Co. KG | Bingen am Rhein",
  description: "Kontaktieren Sie uns per WhatsApp, Telefon oder E-Mail. Sinsig & Lang GmbH & Co. KG, Schulheiß-Kollei-Straße 3, 55411 Bingen am Rhein.",
};

const contacts = [
  {
    dept: "PKW Service & Beratung",
    phone: "06721 9741-0",
    whatsapp: "49672197410",
    email: "pkw@sinsig-lang.de",
  },
  {
    dept: "LKW & Transporter",
    phone: "06721 974127",
    whatsapp: "496721974127",
    email: "lkw@sinsig-lang.de",
  },
  {
    dept: "Teilehandel / Lager",
    phone: "0151 61643193",
    whatsapp: "4915161643193",
    email: "teile@sinsig-lang.de",
  },
];

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#161616] border-b border-[#c0c0c0]/10 py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Wir sind für Sie da</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Kontakt</h1>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="bg-[#161616] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c0c0c0]/10 mb-16">
              {contacts.map((c) => (
                <div key={c.dept} className="bg-[#161616] p-8">
                  <h3 className="text-white font-medium mb-5 pb-4 border-b border-[#c0c0c0]/10">{c.dept}</h3>
                  <div className="space-y-3">
                    <a href={`tel:+${c.whatsapp}`} className="flex items-center gap-3 text-[#8a8a8a] hover:text-white text-sm transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#c0c0c0] flex-shrink-0">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      {c.phone}
                    </a>
                    <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#8a8a8a] hover:text-white text-sm transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366] flex-shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-[#8a8a8a] hover:text-white text-sm transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#c0c0c0] flex-shrink-0">
                        <path d="M3 6l9 7 9-7M3 6h18v12H3V6z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {c.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Öffnungszeiten + Karte */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Öffnungszeiten */}
              <div className="bg-[#0d0d0d] border border-[#c0c0c0]/10 p-8">
                <h3 className="text-white font-medium mb-6 pb-3 border-b border-[#c0c0c0]/10">Öffnungszeiten</h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#c0c0c0]/5">
                    {[
                      ["Montag", "07:00–18:00 Uhr"],
                      ["Dienstag", "07:00–18:00 Uhr"],
                      ["Mittwoch", "07:00–18:00 Uhr"],
                      ["Donnerstag", "07:00–18:00 Uhr"],
                      ["Freitag", "07:00–18:00 Uhr"],
                      ["Samstag", "08:00–12:00 Uhr"],
                      ["Sonntag", "Geschlossen"],
                    ].map(([day, time]) => (
                      <tr key={day}>
                        <td className="py-2.5 text-[#c0c0c0]">{day}</td>
                        <td className="py-2.5 text-white text-right">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-6 pt-4 border-t border-[#c0c0c0]/5">
                  <p className="text-[#707070] text-xs">Adresse:</p>
                  <p className="text-[#8a8a8a] text-sm mt-1">Schulheiß-Kollei-Straße 3<br />55411 Bingen am Rhein</p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-[#0d0d0d] border border-[#c0c0c0]/10 overflow-hidden" style={{ minHeight: 320 }}>
                <MapEmbed />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
