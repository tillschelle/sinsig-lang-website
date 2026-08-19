import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Unser Team | Sinsig & Lang GmbH & Co. KG",
  description: "Lernen Sie das Team von Sinsig & Lang kennen: erfahrene Fachleute aus Service, Werkstatt und Verwaltung, die täglich für Sie da sind.",
};

const departments = [
  {
    name: "Serviceberater PKW",
    members: [
      { name: "Larissa Baumgarten", role: "Serviceassistentin", img: "Larissa-Baumgarten-2026-05-05.jpg", pos: "80% top" },
      { name: "Claudia Klingler-Baumgarten", role: "Serviceassistentin", img: "Claudia-Klingler-Baumgarten-2026-05-05.jpg", pos: "75% top", sortKey: "Baumgarten-Claudia" },
      { name: "Erik Hittinger", role: "Serviceberater", img: "240726_S&L_00242_pp_Erik_Hittinger.jpeg", pos: "40% top" },
      { name: "Stephanie Könen", role: "Serviceberaterin · Assistenz der Geschäftsleitung", img: "240726_S&L_00207_pp_Stephanie_Könen.jpeg", pos: "35% top" },
      { name: "Tobias Schaibel", role: "Serviceberater", img: "240726_S&L_00167_pp_Tobias_Schaibel.jpeg", pos: "60% top" },
    ],
  },
  {
    name: "Serviceberater LKW",
    members: [
      { name: "Dirk Biedenbender", role: "Serviceberater", img: "240726_S&L_00116_pp_Dirk_Biedenbender.jpeg", pos: "55% top" },
      { name: "Werner Klumb", role: "Werkstattleiter", img: "240726_S&L_00075_pp_Werner_Klumb.jpeg", pos: "65% top" },
    ],
  },
  {
    name: "PKW-Werkstatt",
    members: [
      { name: "Marcel Erb", role: "Kraftfahrzeugmechaniker", img: "240726_S&L_00357_pp_Marcel_Erb.jpeg", pos: "60% top" },
      { name: "Christian Lorenz", role: "Kraftfahrzeugelektriker", img: "Christian-Lorenz-2026-05-05.jpg", pos: "70% top" },
      { name: "Sascha Rappolt", role: "Kraftfahrzeugmechaniker", img: "Sascha-Rappolt-2026-05-05.jpg", pos: "75% top" },
      { name: "Till Schellenberger", role: "Kraftfahrzeugtechnikermeister", img: "Till-Schellenberger-2026-05-05.jpg", pos: "70% top" },
      { name: "Orcun Topuzkanamis", role: "Kraftfahrzeugmechatroniker", img: "240726_S&L_00356_pp_Orcun_Topuzkanamis.jpeg", pos: "70% top" },
      { name: "Alessandro Ehlers", role: "Kraftfahrzeugmechatroniker", img: "240726_S&L_00324_pp_Alessandro_Ehlers.jpeg", pos: "50% top" },
    ],
  },
  {
    name: "Lager & Teile",
    members: [
      { name: "Nedin Caplja", role: "Teiledienstmitarbeiter", img: "240726_S&L_00152_pp_Nedin_Caplja.jpeg", pos: "70% top" },
      { name: "Thomas Korbach", role: "Teiledienstmitarbeiter", img: "240726_S&L_00132_pp_Thomas_Korbach.jpeg", pos: "center top" },
      { name: "Knut Liesche", role: "Teiledienstmitarbeiter" },
    ],
  },
  {
    name: "LKW-Werkstatt",
    members: [
      { name: "Frank Diemer", role: "Nutzfahrzeugmechatroniker" },
      { name: "Nouredine El Ghadi", role: "Nutzfahrzeugmechatroniker", img: "Nuri-2026-05-05.jpg", pos: "70% top" },
      { name: "Mike Magiera", role: "Nutzfahrzeugmechatroniker" },
      { name: "Andreas Schneeberger", role: "Nutzfahrzeugmechatroniker", img: "240726_S&L_00408_pp_Andreas_Schneeberger.jpeg", pos: "50% top" },
      { name: "Iron Fischer", role: "Nutzfahrzeugmechatroniker", img: "240726_S&L_00460_pp_Iron_Fischer.jpeg", pos: "55% top" },
    ],
  },
  {
    name: "Auszubildende",
    members: [
      { name: "Robin B.", role: "Auszubildender" },
      { name: "Kai B.", role: "Auszubildender" },
      { name: "Tim H.", role: "Auszubildender" },
      { name: "Louis J.", role: "Auszubildender" },
      { name: "Justin R.", role: "Auszubildender" },
      { name: "Jawad S.", role: "Auszubildender" },
    ],
  },
  {
    name: "Service & Verwaltung",
    members: [
      { name: "Dirk Weigand", role: "Serviceleiter", img: "240726_S&L_00573_pp_Dirk_Weigand.jpeg", pos: "center top" },
      { name: "Marion Lang", role: "Gesellschafterin · Marketing", img: "240726_S&L_00043_pp_Marion_Lang.jpeg", pos: "55% top" },
      { name: "Sabrina Trautmann", role: "Buchhaltung", img: "240726_S&L_00103_pp_Sabrina_Trautmann.jpeg", pos: "55% top" },
    ],
  },
  {
    name: "Geschäftsleitung",
    members: [
      { name: "Martin Svoboda", role: "Geschäftsführung", img: "240726_S&L_00587_pp_Martin_Svoboda.jpeg", pos: "center top" },
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#161616] border-b border-[#c0c0c0]/10 py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Menschen hinter dem Stern</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Unser Team</h1>
            <p className="text-[#707070] mt-4 max-w-xl text-sm leading-relaxed">
              Rund 30 Mitarbeiterinnen und Mitarbeiter arbeiten täglich dafür, dass Ihr Fahrzeug in besten Händen ist.
            </p>
          </div>
        </section>

        {/* Team nach Abteilung */}
        <section className="bg-[#202020] py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {departments.map((dept) => (
              <div key={dept.name}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[#707070] text-[11px] tracking-[0.3em] uppercase">{dept.name}</span>
                  <div className="flex-1 h-px bg-[#c0c0c0]/10" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {[...dept.members].sort((a, b) => {
                    const lastName = (m) => m.sortKey || m.name.trim().split(" ").pop();
                    return lastName(a).localeCompare(lastName(b), "de");
                  }).map((m) => (
                    <div key={m.name} className="bg-[#202020] border border-[#c0c0c0]/10 overflow-hidden">
                      <div className="relative bg-[#2a2a2a]" style={{ aspectRatio: "1/1" }}>
                        {m.img ? (
                          <Image
                            src={`/img/team/${m.img}`}
                            alt={m.name}
                            fill
                            className="object-cover"
                            style={{ objectPosition: m.pos || "center top" }}
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#444] text-lg font-medium">
                            {m.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <div className="text-white text-xs font-medium leading-snug">{m.name}</div>
                        <div className="text-[#707070] text-[10px] mt-0.5 leading-snug">{m.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Karriere CTA */}
        <section className="bg-[#202020] border-t border-[#c0c0c0]/10 py-14 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#707070] text-xs tracking-[0.3em] uppercase mb-3">Werde Teil des Teams</p>
              <h2 className="text-3xl font-bold text-white">Du willst Teil sein von unserem Team?<br />Bewirb dich noch heute.</h2>
            </div>
            <Link
              href="/karriere"
              className="flex-shrink-0 px-8 py-4 bg-white text-black text-sm font-medium hover:bg-[#c0c0c0] transition-colors"
            >
              Zur Karriereseite
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
