import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Impressum | Sinsig & Lang GmbH & Co. KG",
  description: "Impressum und rechtliche Angaben der Sinsig & Lang GmbH & Co. KG, Bingen am Rhein.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-[#161616] border-b border-[#c0c0c0]/10 py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Rechtliches</p>
            <h1 className="text-5xl font-bold text-white mb-16">Impressum</h1>

            <div className="space-y-12 text-sm text-[#707070] leading-relaxed">

              <div>
                <h2 className="text-white text-base font-medium mb-4">Angaben gemäß § 5 TMG</h2>
                <p>
                  Sinsig & Lang GmbH & Co. KG<br />
                  Schulheiß-Kollei-Straße 3<br />
                  55411 Bingen am Rhein
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">Kontakt</h2>
                <p>
                  Telefon: <a href="tel:+49672197410" className="hover:text-[#c0c0c0] transition-colors">06721 9741-0</a><br />
                  E-Mail: <a href="mailto:info@sinsig-lang.de" className="hover:text-[#c0c0c0] transition-colors">info@sinsig-lang.de</a>
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">Handelsregister</h2>
                <p>
                  Registergericht: Amtsgericht Mainz<br />
                  Registernummer: [wird ergänzt]
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
                  [wird ergänzt]
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">Geschäftsführung</h2>
                <p>Martin Svoboda</p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">Berufsbezeichnung</h2>
                <p>
                  Mercedes-Benz Vertragshändler und Vertragswerkstatt<br />
                  Carrier-Partnerbetrieb für Kühlaggregate
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
                    className="hover:text-[#c0c0c0] transition-colors underline underline-offset-2">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br /><br />
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
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
