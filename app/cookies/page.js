import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Cookie-Richtlinie | Sinsig & Lang GmbH & Co. KG",
  description: "Informationen zu den auf unserer Website verwendeten Cookies und wie Sie diese verwalten können.",
};

const cookieCategories = [
  {
    title: "Technisch notwendige Cookies",
    required: true,
    desc: "Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Ohne sie kann die Website nicht korrekt funktionieren. Sie können nicht deaktiviert werden.",
    cookies: [
      { name: "session", purpose: "Sitzungsverwaltung", duration: "Sitzung" },
      { name: "consent", purpose: "Speicherung Ihrer Cookie-Einstellungen", duration: "12 Monate" },
    ],
  },
  {
    title: "Analyse & Statistik",
    required: false,
    desc: "Diese Cookies helfen uns zu verstehen, wie Besucherinnen und Besucher unsere Website nutzen. Alle Daten werden anonymisiert erhoben.",
    cookies: [
      { name: "_ga", purpose: "Google Analytics (Besucherstatistik)", duration: "24 Monate" },
      { name: "_gid", purpose: "Google Analytics (Seitenaufrufe)", duration: "24 Stunden" },
    ],
  },
];

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#111] border-b border-[#c0c0c0]/10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Transparenz</p>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4">Cookie-Richtlinie</h1>
            <p className="text-[#555] max-w-xl text-sm leading-relaxed">
              Wir setzen Cookies ein, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen.
              Hier erfahren Sie, welche Cookies wir verwenden und warum.
            </p>
          </div>
        </section>

        {/* Erklärung */}
        <section className="bg-[#1a1a1a] py-16 px-6 border-b border-[#c0c0c0]/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl font-light mb-4">Was sind Cookies?</h2>
            <p className="text-[#555] text-sm leading-relaxed max-w-3xl">
              Cookies sind kleine Textdateien, die beim Besuch unserer Website auf Ihrem Gerät gespeichert werden.
              Sie ermöglichen es uns, Ihre Einstellungen zu speichern und die Website für Sie zu verbessern.
              Sie haben jederzeit die Möglichkeit, Cookies in Ihrem Browser zu deaktivieren oder zu löschen.
            </p>
          </div>
        </section>

        {/* Cookie-Kategorien */}
        <section className="bg-[#111] py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-px">
            {cookieCategories.map((cat) => (
              <div key={cat.title} className="bg-[#1a1a1a] p-8">
                <div className="flex items-start justify-between gap-6 mb-4">
                  <div>
                    <h3 className="text-white font-medium text-lg mb-2">{cat.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed max-w-2xl">{cat.desc}</p>
                  </div>
                  <span className={`flex-shrink-0 text-[10px] tracking-widest uppercase border px-3 py-1 ${
                    cat.required
                      ? "border-[#c0c0c0]/30 text-[#c0c0c0]"
                      : "border-[#555]/40 text-[#555]"
                  }`}>
                    {cat.required ? "Erforderlich" : "Optional"}
                  </span>
                </div>

                {/* Cookie-Tabelle */}
                <div className="mt-6 border-t border-[#c0c0c0]/10">
                  <table className="w-full text-sm mt-4">
                    <thead>
                      <tr className="text-[#555] text-xs tracking-wider uppercase">
                        <th className="text-left pb-3 font-normal">Name</th>
                        <th className="text-left pb-3 font-normal">Zweck</th>
                        <th className="text-left pb-3 font-normal">Laufzeit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#c0c0c0]/5">
                      {cat.cookies.map((cookie) => (
                        <tr key={cookie.name}>
                          <td className="py-3 text-[#c0c0c0] font-mono text-xs">{cookie.name}</td>
                          <td className="py-3 text-[#555]">{cookie.purpose}</td>
                          <td className="py-3 text-[#555]">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Browser-Einstellungen */}
        <section className="bg-[#1a1a1a] py-16 px-6 border-t border-[#c0c0c0]/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl font-light mb-4">Cookies verwalten</h2>
            <p className="text-[#555] text-sm leading-relaxed max-w-3xl mb-6">
              Sie können Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren oder löschen.
              Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität der Website einschränken kann.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#c0c0c0]/10">
              {["Chrome", "Firefox", "Safari", "Edge"].map((browser) => (
                <div key={browser} className="bg-[#1a1a1a] p-6 hover:bg-[#222] transition-colors">
                  <div className="text-white text-sm font-medium mb-1">{browser}</div>
                  <div className="text-[#555] text-xs">Einstellungen → Datenschutz → Cookies</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stand */}
        <section className="bg-[#111] py-10 px-6 border-t border-[#c0c0c0]/10">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#333] text-xs">
              Stand: Juni 2025 · Bei Fragen: <a href="mailto:info@sinsig-lang.de" className="hover:text-[#555] transition-colors">info@sinsig-lang.de</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
