import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Datenschutz | Sinsig & Lang GmbH & Co. KG",
  description: "Datenschutzerklärung der Sinsig & Lang GmbH & Co. KG gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-[#111] border-b border-[#c0c0c0]/10 py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Rechtliches</p>
            <h1 className="text-5xl font-light text-white mb-16">Datenschutz&shy;erklärung</h1>

            <div className="space-y-12 text-sm text-[#555] leading-relaxed">

              <div>
                <h2 className="text-white text-base font-medium mb-4">1. Verantwortlicher</h2>
                <p>
                  Sinsig & Lang GmbH & Co. KG<br />
                  Schulheiß-Kollei-Straße 3<br />
                  55411 Bingen am Rhein<br /><br />
                  Telefon: <a href="tel:+49672197410" className="hover:text-[#c0c0c0] transition-colors">06721 9741-0</a><br />
                  E-Mail: <a href="mailto:info@sinsig-lang.de" className="hover:text-[#c0c0c0] transition-colors">info@sinsig-lang.de</a>
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">2. Grundsätze der Datenverarbeitung</h2>
                <p>
                  Wir verarbeiten personenbezogene Daten nur, soweit dies gesetzlich erlaubt ist oder Sie in die
                  Datenverarbeitung eingewilligt haben. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a
                  (Einwilligung), lit. b (Vertragserfüllung) und lit. f (berechtigtes Interesse) DSGVO.
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">3. Hosting & Server-Logfiles</h2>
                <p>
                  Diese Website wird über Cloudflare Pages gehostet. Beim Abruf unserer Seiten werden automatisch
                  Server-Logfiles erfasst, die Ihr Browser übermittelt. Dies sind: IP-Adresse (anonymisiert),
                  Browsertyp und -version, Betriebssystem, Referrer-URL, Datum und Uhrzeit des Zugriffs.
                </p>
                <p className="mt-4">
                  Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb).
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">4. Kontaktaufnahme</h2>
                <p>
                  Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, werden Ihre Angaben zum Zweck der
                  Bearbeitung Ihrer Anfrage und für eventuelle Anschlussfragen gespeichert. Diese Daten geben wir
                  nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                  (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">5. WhatsApp</h2>
                <p>
                  Auf unserer Website sind Links zu WhatsApp-Chats eingebunden. Wenn Sie auf einen dieser Links
                  klicken, werden Sie zur WhatsApp-Plattform weitergeleitet. WhatsApp ist ein Dienst der WhatsApp
                  Ireland Limited (EU) bzw. Meta Platforms, Inc. (USA). Bitte beachten Sie die Datenschutzrichtlinie
                  von WhatsApp unter{" "}
                  <a
                    href="https://www.whatsapp.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#c0c0c0] transition-colors underline underline-offset-2"
                  >
                    whatsapp.com/legal/privacy-policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">6. Google Maps</h2>
                <p>
                  Auf der Kontaktseite binden wir Google Maps ein (Google Ireland Limited, Gordon House, Barrow
                  Street, Dublin 4, Irland). Dabei werden Daten an Google übertragen, auch wenn Sie nicht in einem
                  Google-Konto eingeloggt sind. Google Maps wird nur geladen, wenn Sie unsere Kontaktseite aufrufen.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#c0c0c0] transition-colors underline underline-offset-2"
                  >
                    policies.google.com/privacy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">7. Cookies</h2>
                <p>
                  Unsere Website verwendet Cookies. Technisch notwendige Cookies werden ohne Einwilligung gesetzt
                  (Art. 6 Abs. 1 lit. f DSGVO). Alle weiteren Cookies werden nur nach Ihrer ausdrücklichen
                  Einwilligung gesetzt (Art. 6 Abs. 1 lit. a DSGVO). Detaillierte Informationen zu den eingesetzten
                  Cookies finden Sie in unserer{" "}
                  <a href="/cookies" className="hover:text-[#c0c0c0] transition-colors underline underline-offset-2">
                    Cookie-Richtlinie
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">8. Ihre Rechte</h2>
                <p>
                  Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
                </p>
                <ul className="mt-3 space-y-1 list-none">
                  {[
                    "Recht auf Auskunft (Art. 15 DSGVO)",
                    "Recht auf Berichtigung (Art. 16 DSGVO)",
                    "Recht auf Löschung (Art. 17 DSGVO)",
                    "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                    "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                    "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                    "Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)",
                  ].map((right) => (
                    <li key={right} className="flex items-start gap-2">
                      <span className="text-[#c0c0c0]/30 mt-0.5">–</span>
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                  <a href="mailto:info@sinsig-lang.de" className="hover:text-[#c0c0c0] transition-colors">
                    info@sinsig-lang.de
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">9. Beschwerderecht</h2>
                <p>
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist
                  der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz (LfDI):
                </p>
                <p className="mt-3">
                  Hintere Bleiche 34<br />
                  55116 Mainz<br />
                  <a
                    href="https://www.datenschutz.rlp.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#c0c0c0] transition-colors underline underline-offset-2"
                  >
                    www.datenschutz.rlp.de
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-white text-base font-medium mb-4">10. Aktualität</h2>
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2025. Durch die
                  Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher
                  Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
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
