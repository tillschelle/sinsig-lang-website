import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Gebrauchtwagen | Sinsig & Lang GmbH & Co. KG",
  description: "Geprüfte Gebrauchtfahrzeuge von Sinsig & Lang in Bingen am Rhein. Jedes Fahrzeug wird gründlich geprüft und aufbereitet.",
};

export default function GebrauchtwagenPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#161616] border-b border-[#c0c0c0]/10 py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#707070] text-xs tracking-[0.3em] uppercase mb-3">Geprüfte Qualität</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Gebrauchtwagen</h1>
            <p className="text-[#707070] mt-4 max-w-xl">
              Jedes Fahrzeug wird bei uns gründlich geprüft und aufbereitet. Transparenz und Qualität sind unser Anspruch.
            </p>
          </div>
        </section>

        {/* Placeholder */}
        <section className="bg-[#161616] py-10 px-6">
          <div className="max-w-7xl mx-auto text-center py-10">
            <div className="w-12 h-px bg-[#c0c0c0]/20 mx-auto mb-8" />
            <h2 className="text-white text-2xl font-bold mb-4">Fahrzeugangebote folgen in Kürze</h2>
            <p className="text-[#707070] text-sm mb-10 max-w-md mx-auto">
              Aktuelle Angebote werden hier angezeigt. In der Zwischenzeit können Sie uns gerne direkt kontaktieren.
            </p>
            <a
              href="https://wa.me/49672197410"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#c0c0c0]/20 text-[#c0c0c0] text-sm font-medium hover:bg-white hover:text-black transition-all"
            >
              Verfügbarkeit anfragen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
