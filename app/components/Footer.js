import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-[#c0c0c0]/15 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Marke */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/img/mercedes.svg"
                alt="Mercedes-Benz"
                width={32}
                height={32}
                className="brightness-0 invert opacity-70"
              />
              <div>
                <div className="text-white font-semibold text-sm tracking-widest uppercase">
                  Sinsig & Lang
                </div>
                <div className="text-[#707070] text-[10px] tracking-wider uppercase">
                  seit 1945
                </div>
              </div>
            </div>
            <p className="text-[#707070] text-xs leading-relaxed">
              Ihr Mercedes-Benz Vertragshändler und Vertragswerkstatt. Kompetenz und Leidenschaft seit über 80 Jahren.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Leistungen</h4>
            <ul className="space-y-2">
              {[
                { href: "/pkw", label: "PKW Service" },
                { href: "/lkw", label: "LKW & Transporter" },
                { href: "/teiledienst", label: "Teiledienst" },
                { href: "/gebrauchtwagen", label: "Gebrauchtwagen" },
                { href: "/pkw", label: "Oldtimer & Klassiker" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#707070] hover:text-[#c0c0c0] text-xs transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              {[
                { href: "/team", label: "Unser Team" },
                { href: "/karriere", label: "Karriere" },
                { href: "/kontakt", label: "Kontakt & Anfahrt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#707070] hover:text-[#c0c0c0] text-xs transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+49672197410" className="text-[#707070] hover:text-[#c0c0c0] text-xs transition-colors flex items-start gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#c0c0c0] mt-0.5 flex-shrink-0">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  06721 9741-0
                </a>
              </li>
              <li>
                <Link href="/#whatsapp" className="text-[#707070] hover:text-[#c0c0c0] text-xs transition-colors flex items-start gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366] mt-0.5 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Kontakt
                </Link>
              </li>
            </ul>
            {/* Social Media */}
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/sinsig_lang/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[#c0c0c0]/20 flex items-center justify-center text-[#707070] hover:text-white hover:border-[#c0c0c0]/50 transition-all text-xs">
                IG
              </a>
              <a href="https://www.facebook.com/Sinsig.Lang.KG/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-[#c0c0c0]/20 flex items-center justify-center text-[#707070] hover:text-white hover:border-[#c0c0c0]/50 transition-all text-xs">
                FB
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c0c0c0]/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#333] text-xs">
            © {new Date().getFullYear()} Sinsig & Lang GmbH & Co. KG
          </p>
          <div className="flex gap-5">
            <Link href="/impressum" className="text-[#333] hover:text-[#707070] text-xs transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-[#333] hover:text-[#707070] text-xs transition-colors">Datenschutz</Link>
            <Link href="/cookies" className="text-[#333] hover:text-[#707070] text-xs transition-colors">Cookies</Link>
          </div>
        </div>

        <p className="text-[#272727] text-[10px] text-center mt-6">
          Seite erstellt von Till Schellenberger
        </p>
      </div>
    </footer>
  );
}
