import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import StatsCounter from "@/app/components/StatsCounter";
import HeroImage from "@/app/components/HeroImage";
import Testimonials from "@/app/components/Testimonials";
import BrandPromise from "@/app/components/BrandPromise";
import WorkshopGallery from "@/app/components/WorkshopGallery";

export const metadata = {
  title: "Sinsig & Lang GmbH & Co. KG | Ihr Mercedes-Benz Partner in Bingen",
  description: "Ihr Mercedes-Benz Vertragshändler und Vertragswerkstatt in Bingen am Rhein. PKW- und LKW-Service, Gebrauchtwagen und mehr seit 1945.",
};



const team = [
  { name: "Martin Svoboda", role: "Geschäftsführung", img: "240726_S&L_00587_pp_Martin_Svoboda.jpeg" },
  { name: "Dirk Weigand", role: "Serviceleiter", img: "240726_S&L_00573_pp_Dirk_Weigand.jpeg" },
  { name: "Marion Lang", role: "Marketing", img: "240726_S&L_00043_pp_Marion_Lang.jpeg" },
  { name: "Stephanie Könen", role: "PKW-Annahme · Assistenz GL", img: "240726_S&L_00207_pp_Stephanie_Könen.jpeg" },
  { name: "Erik Hittinger", role: "PKW-Annahme", img: "240726_S&L_00242_pp_Erik_Hittinger.jpeg" },
  { name: "Tobias Schaibel", role: "PKW-Annahme", img: "240726_S&L_00167_pp_Tobias_Schaibel.jpeg" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-start md:items-center overflow-hidden bg-[#161616]" style={{ paddingTop: "4rem" }}>
          {/* Hero-Bild: Firmengebäude */}
          <HeroImage />

          {/* Overlay – gleichmäßig dunkel, kein harter Übergang */}
          <div className="absolute inset-0 z-10 bg-black/55" />

          {/* Gradient unten */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#161616] to-transparent z-10" />

          {/* Content – links */}
          <div className="relative z-20 w-full">
            <div className="max-w-sm px-5 md:px-10 pt-10 md:pt-0">
              {/* Mercedes Stern */}
              <Image
                src="/img/mercedes.svg"
                alt="Mercedes-Benz"
                width={36}
                height={36}
                className="brightness-0 invert opacity-70 mb-5"
              />

              {/* Eyebrow */}
              <p className="text-[#8a8a8a] text-[10px] font-medium tracking-[0.25em] uppercase mb-5">
                Seit 1945 · Bingen am Rhein
              </p>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-5">
                <span className="text-white">Aus<br />Leidenschaft<br /></span>
                <span className="text-[#6b6b6b]">zum Stern.</span>
              </h1>

              {/* Subtext */}
              <p className="text-[#7a7a7a] text-sm font-light leading-relaxed mb-7">
                Alles für Ihr Fahrzeug. Alles an einem Ort.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-2.5 mb-6 w-fit">
                {/* WhatsApp – primär */}
                <a
                  href="#whatsapp"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 text-white text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
                  style={{ background: "#25D366" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Chat
                </a>
                {/* Telefon */}
                <a
                  href="tel:+49672197410"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2a2a2a] border border-[#c0c0c0]/20 text-white text-sm font-medium hover:bg-[#333] transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Anrufen
                </a>
                {/* Anfahrt */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Schulhei%C3%9F-Kollei-Stra%C3%9Fe+3%2C+55411+Bingen+am+Rhein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2a2a2a] border border-[#c0c0c0]/20 text-white text-sm font-medium hover:bg-[#333] transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Anfahrt
                </a>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] flex-shrink-0 mt-1" />
                <div className="text-[#8a8a8a] text-sm">
                  <div className="flex gap-3"><span className="w-12">Mo–Fr</span><span>07:30–18:00</span></div>
                  <div className="flex gap-3"><span className="w-12">Sa</span><span>08:00–12:00</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <StatsCounter />

        {/* ── WHATSAPP SCHNELLHILFE ── */}
        <section className="py-12 bg-[#161616]" id="whatsapp">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            {/* Header */}
            <div className="mb-8">
              <p className="text-[#25D366] text-xs tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Direktkontakt
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Schreiben Sie uns direkt.</h2>
              <p className="text-[#707070] text-sm max-w-lg">
                Foto von der Warnleuchte, Frage zum Fahrzeug oder Terminwunsch: einfach per WhatsApp an die richtige Abteilung. Kein Call-Center, keine Warteschleife, keine KI. Direkt zu uns.
              </p>
            </div>

            {/* 3 Kanäle */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c0c0c0]/10">
              {[
                { dept: "PKW", desc: "Service, Wartung & Reparatur", number: "49672197410", display: "06721 / 97410" },
                { dept: "LKW & Transporter", desc: "Nutzfahrzeuge & Transporter", number: "496721974127", display: "06721 / 974127" },
                { dept: "Teiledienst", desc: "Ersatzteile & Zubehör", number: "4915161643193", display: "0151 / 61643193" },
              ].map((ch) => (
                <a
                  key={ch.dept}
                  href={`https://wa.me/${ch.number.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#202020] p-7 flex flex-col gap-4 hover:bg-[#272727] transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{ch.dept}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" className="opacity-60 group-hover:opacity-100 transition-opacity">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <p className="text-[#707070] text-xs">{ch.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#c0c0c0]/10">
                    <span className="text-[#c0c0c0]/50 text-xs font-mono">{ch.display}</span>
                    <span className="text-[#25D366] text-xs font-medium group-hover:translate-x-0.5 transition-transform">
                      Chat öffnen →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── PKW / LKW PFADE ── */}
        <section className="py-12 bg-[#202020]" id="leistungen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Was wir bieten</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Unsere Leistungen</h2>
              <p className="text-[#707070] text-sm max-w-lg">
                Zugeschnittener Service statt Massenabfertigung. Egal ob Routineservice oder komplexe Reparatur: Jede Kundin und jeder Kunde bekommt die Lösung, die wirklich passt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c0c0c0]/15">
              {/* PKW */}
              <Link href="/pkw" className="group bg-[#202020] p-7 hover:bg-[#272727] transition-colors flex flex-col justify-between min-h-[220px]">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-4">PKW</h3>
                  <p className="text-[#8a8a8a] text-base leading-relaxed max-w-sm">
                    Wir decken alle Antriebsarten ab: vom Verbrenner über Hybrid bis zum Battery Electric Vehicle. Persönlicher Service für Ihren Mercedes-Benz Pkw.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#c0c0c0]/10">
                  <div className="flex flex-wrap gap-2">
                    {["Wartung", "Diagnose", "Garantie & Kulanz", "Elektro & Hybrid", "Oldtimer"].map((tag) => (
                      <span key={tag} className="text-[#707070] text-[10px] tracking-wider uppercase border border-[#c0c0c0]/10 px-2 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <span className="text-[#c0c0c0] text-sm group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4">→</span>
                </div>
              </Link>

              {/* LKW */}
              <Link href="/lkw" className="group bg-[#202020] p-7 hover:bg-[#272727] transition-colors flex flex-col justify-between min-h-[220px]">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-4">LKW & Transporter</h3>
                  <p className="text-[#8a8a8a] text-base leading-relaxed max-w-sm">
                    Wartung, Reparatur und Prüfung für LKW, Transporter und Auflieger. Ob Einzelfahrer oder Flotte, wir sind für Sie da.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#c0c0c0]/10">
                  <div className="flex flex-wrap gap-2">
                    {["Wartung", "Reparatur", "HU & SP", "Elektro", "Flotte"].map((tag) => (
                      <span key={tag} className="text-[#707070] text-[10px] tracking-wider uppercase border border-[#c0c0c0]/10 px-2 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <span className="text-[#c0c0c0] text-sm group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4">→</span>
                </div>
              </Link>

              {/* Teiledienst */}
              <Link href="/teiledienst" className="group bg-[#202020] p-7 hover:bg-[#272727] transition-colors flex flex-col justify-between min-h-[220px]">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-4">Teiledienst</h3>
                  <p className="text-[#8a8a8a] text-base leading-relaxed max-w-sm">
                    Original Mercedes-Benz Ersatzteile und Zubehör, kurzfristig verfügbar und fair berechnet. Auch für Privatkunden.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#c0c0c0]/10">
                  <div className="flex flex-wrap gap-2">
                    {["Ersatzteile", "Zubehör", "Privatkunden", "Original MB", "Kurzfristig"].map((tag) => (
                      <span key={tag} className="text-[#707070] text-[10px] tracking-wider uppercase border border-[#c0c0c0]/10 px-2 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <span className="text-[#c0c0c0] text-sm group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4">→</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── WARUM ERFOLGREICH + BEWERTUNGEN ── */}
        <BrandPromise />
        <Testimonials />

        {/* ── WERKSTATT-GALERIE ── */}
        <WorkshopGallery />

        {/* ── TEAM ── */}
        <section className="py-14 bg-[#272727]" id="team">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[#707070] text-xs tracking-[0.3em] uppercase mb-3">Menschen hinter dem Stern</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Unser Team</h2>
              </div>
              <Link
                href="/team"
                className="hidden md:inline-flex items-center gap-2 text-[#707070] hover:text-white text-sm transition-colors group"
              >
                Alle ansehen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {team.map((member) => (
                <div key={member.name} className="group relative">
                  {/* Portrait */}
                  <div className="relative overflow-hidden bg-[#2a2a2a]" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src={`/img/team/${member.img}`}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Name overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="text-white font-medium text-sm">{member.name}</div>
                      <div className="text-[#c0c0c0] text-xs mt-0.5">{member.role}</div>
                    </div>
                  </div>
                  {/* Name below (always visible) */}
                  <div className="mt-3">
                    <div className="text-white text-sm font-medium leading-tight">{member.name}</div>
                    <div className="text-[#707070] text-xs mt-0.5 leading-tight">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 md:hidden text-right">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-[#707070] hover:text-white text-sm transition-colors group"
              >
                Alle ansehen
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── KONTAKT CTA ── */}
        <section className="py-14 bg-[#202020] border-t border-[#c0c0c0]/15">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <Image
              src="/img/mercedes.svg"
              alt="Mercedes-Benz"
              width={48}
              height={48}
              className="brightness-0 invert opacity-20 mx-auto mb-6"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Wie können wir helfen?
            </h2>
            <p className="text-[#707070] text-lg mb-8 max-w-xl mx-auto">
              Bei uns steht der Mensch im Vordergrund, nicht die Auslastung. Ob alt oder neu, einfach oder komplex: Sie bekommen, was Sie brauchen. Ohne Überraschungen.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              <a
                href="https://wa.me/49672197410"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 text-white text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
                style={{ background: "#25D366" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp schreiben
              </a>
              <a
                href="tel:+49672197410"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2a2a2a] border border-[#c0c0c0]/20 text-white text-sm font-medium hover:bg-[#333] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Anrufen
              </a>
              <a
                href="https://www.mercedes-benz.de/passengercars/services/online-appointment-booking.html#/dealer?oabDealerGroup=GS0000422"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold hover:bg-[#c0c0c0] transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.196 7.5L12 16.5 6.804 7.5h2.078L12 13.044 15.118 7.5h2.078z"/>
                </svg>
                Termin buchen
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-60">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
