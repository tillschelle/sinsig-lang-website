import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Über uns | Sinsig & Lang GmbH & Co. KG | Seit 1945",
  description: "Seit 1945 steht Sinsig & Lang in Bingen am Rhein für Mercedes-Benz Service auf höchstem Niveau. Erfahren Sie mehr über unsere Geschichte und Werte.",
};

const timeline = [
  {
    year: "1945",
    title: "Gründung",
    desc: "Hans Lang und Jakob Sinsig gründen die Sinsig & Lang KG am 1. Juni 1945 im Binger Technikum, der heutigen Fachhochschule Bingen. Der Anspruch von Anfang an: höchste Qualität und zuverlässiger Service.",
  },
  {
    year: "1948",
    title: "Erster Umzug",
    desc: "Bereits drei Jahre nach der Gründung zieht das Unternehmen in die Räumlichkeiten der ehemaligen Firma Lactum um und schafft damit die Basis für weiteres Wachstum.",
  },
  {
    year: "1949",
    title: "Mercedes-Benz Vertragshändler",
    desc: "Ein entscheidender Meilenstein: Mit dem Vertragsabschluss mit der Daimler-Benz AG beginnt die bis heute andauernde Partnerschaft mit dem Stuttgarter Automobilhersteller.",
  },
  {
    year: "1961",
    title: "Eigene Werksräume",
    desc: "Die heutigen Werksräume werden errichtet. Was klein begann, verdoppelt sich im Laufe der Zeit auf rund 11.500 m² als Basis für ein stetig wachsendes Leistungsangebot.",
  },
  {
    year: "1967–1992",
    title: "Generationenwechsel",
    desc: "Nach dem Tod von Jakob Sinsig 1967 und dem Rückzug von Hans Lang 1970 übernimmt Erhard Lang die Geschäftsführung bis 1984, gefolgt von Rudi Sinsig bis 1992. Unter Rudi Sinsig werden Verkaufs- und Büroräume weiter ausgebaut.",
  },
  {
    year: "1992",
    title: "Dritte Generation",
    desc: "Ab dem 1. Juni 1992 führt Volker Lang das Unternehmen in der dritten Generation und setzt die Tradition von Qualität und persönlichem Service konsequent fort.",
  },
  {
    year: "1998",
    title: '„Service mit Stern"',
    desc: 'Sinsig & Lang wird erstmals mit dem Prädikat „Service mit Stern" der Daimler-Benz AG ausgezeichnet: eine Anerkennung, die seitdem jährlich erneuert wird und die konstant hohe Servicequalität belegt.',
  },
  {
    year: "2005",
    title: "Auszeichnung als Ausbildungsbetrieb",
    desc: "Die Handwerkskammer Rheinhessen ehrt Sinsig & Lang für vorbildliches Engagement als Ausbildungsbetrieb. Die Ausbildung erfolgt nach gehobenem Mercedes-Benz Standard.",
  },
  {
    year: "2022",
    title: "Neues Kapitel",
    desc: "Nach dem frühen Tod von Volker Lang im Januar 2022 wird das Unternehmen in die Sinsig & Lang GmbH & Co. KG umfirmiert. Seit dem 1. März 2022 steht Martin Svoboda als Geschäftsführer an der Spitze und führt die Tradition des Hauses mit modernem Blick fort.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-[#111] border-b border-[#c0c0c0]/10 py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Seit 1945</p>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">Über uns</h1>
            <p className="text-[#555] text-base max-w-2xl leading-relaxed">
              Fast acht Jahrzehnte Mercedes-Benz Service in Bingen am Rhein. Was als Handwerksbetrieb zweier Gründer begann,
              ist heute ein etabliertes Fachunternehmen mit rund 30 Mitarbeiterinnen und Mitarbeitern, familiär im Charakter,
              professionell im Anspruch.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-[#111] py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Geschichte</p>
              <h2 className="text-3xl font-light text-white">Unsere Meilensteine</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">

              {/* Bilder – links */}
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="border border-[#c0c0c0]/10 bg-[#0d0d0d] flex flex-col items-center justify-center gap-3 text-center"
                    style={{ aspectRatio: "4/3" }}
                  >
                    <div className="w-8 h-px bg-[#c0c0c0]/20" />
                    <span className="text-[#333] text-xs tracking-[0.2em] uppercase">Bilder folgen</span>
                    <div className="w-8 h-px bg-[#c0c0c0]/20" />
                  </div>
                ))}
              </div>

              {/* Timeline – rechts */}
              <div className="relative">
                <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-[#c0c0c0]/10 hidden md:block" />
                <div className="space-y-0">
                  {timeline.map((item) => (
                    <div key={item.year} className="relative flex flex-col md:flex-row gap-4 md:gap-0 pb-12 last:pb-0">
                      <div className="md:w-36 flex-shrink-0 flex md:flex-col items-center md:items-start gap-3 md:gap-0">
                        <span className="text-[#c0c0c0]/40 text-xs font-mono tracking-widest md:pt-1">
                          {item.year}
                        </span>
                        <div className="hidden md:block absolute left-[5.5rem] top-1.5 w-2 h-2 rounded-full bg-[#c0c0c0]/30 -translate-x-1/2" />
                      </div>
                      <div className="md:pl-12 flex-1">
                        <h3 className="text-white font-medium text-base mb-2">{item.title}</h3>
                        <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Heute – Werte */}
        <section className="bg-[#1a1a1a] border-t border-[#c0c0c0]/10 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c0c0c0]/10">
              {[
                {
                  label: "~30 Mitarbeitende",
                  desc: "Kompetenz, Engagement und Leistungsbereitschaft: Menschen, die ihren Beruf mit Leidenschaft ausüben.",
                },
                {
                  label: "11.500 m² Fläche",
                  desc: "Moderne Werksräume in Bingen am Rhein, gewachsen über Jahrzehnte und ausgestattet für die Fahrzeuge von heute und morgen.",
                },
                {
                  label: '„Service mit Stern"',
                  desc: "Jährlich ausgezeichnet von Mercedes-Benz seit 1998: ein Maßstab, dem wir uns täglich neu verpflichten.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-[#1a1a1a] p-8 hover:bg-[#222] transition-colors">
                  <div className="text-white font-medium text-base mb-3">{item.label}</div>
                  <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#111] border-t border-[#c0c0c0]/10 py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-light text-white mb-3">Lernen Sie unser Team kennen</h2>
              <p className="text-[#555] text-sm max-w-md">
                Hinter jedem Meilenstein stehen Menschen. Erfahren Sie, wer heute für Sie da ist.
              </p>
            </div>
            <Link
              href="/team"
              className="flex-shrink-0 px-8 py-4 border border-[#c0c0c0]/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all"
            >
              Zum Team
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
