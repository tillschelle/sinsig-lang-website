'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/pkw", label: "PKW" },
  { href: "/lkw", label: "LKW & Transporter" },
  { href: "/gebrauchtwagen", label: "Gebrauchtwagen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/team", label: "Team" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#161616] border-b border-[#c0c0c0]/10"
    >
      <div className="w-full px-5 md:px-10 flex items-center justify-between h-16">

        {/* Logo – ganz links */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Sinsig & Lang"
            width={10160}
            height={1863}
            className="h-8 w-auto max-w-[180px]"
            priority
            unoptimized
          />
        </Link>

        {/* Nav + Button – rechts */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#c0c0c0] hover:text-white text-sm tracking-wide transition-colors duration-200 relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c0c0c0] group-hover:w-full transition-all duration-200" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#161616]/98 border-t border-[#c0c0c0]/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#c0c0c0] hover:text-white text-base py-2 border-b border-[#c0c0c0]/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 border border-white text-white text-sm tracking-wide text-center hover:bg-white hover:text-black transition-all duration-200"
          >
            Termin anfragen
          </Link>
        </div>
      )}
    </header>
  );
}
