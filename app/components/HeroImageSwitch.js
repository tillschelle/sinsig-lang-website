'use client';
import { useState } from "react";
import Image from "next/image";

export default function HeroImageSwitch() {
  const [mode, setMode] = useState("silhouette");

  return (
    <>
      {/* Bild – volle Breite mobil, rechte 75% am Desktop */}
      <div className="absolute right-0 top-0 h-full w-full md:w-[75%] z-0">
        {mode === "silhouette" ? (
          <Image
            src="/img/hero-silhouette.webp"
            alt="Mercedes-Benz C-Klasse"
            fill
            className="object-cover object-center md:object-left select-none opacity-80"
            priority
          />
        ) : (
          <Image
            src="/img/hero-gebaeude.jpg"
            alt="Sinsig & Lang Firmengebäude"
            fill
            className="object-cover object-center md:object-left select-none opacity-80 grayscale"
            priority
          />
        )}
      </div>

      {/* Umschalter */}
      <div className="absolute top-20 right-4 md:top-24 md:right-8 z-30 flex bg-[#111]/70 border border-[#c0c0c0]/20 rounded-full p-1 gap-1 backdrop-blur-sm">
        <button
          onClick={() => setMode("silhouette")}
          aria-label="Fahrzeug anzeigen"
          className={`px-3 py-1.5 rounded-full text-[10px] tracking-wide uppercase transition-colors ${
            mode === "silhouette" ? "bg-white text-black" : "text-[#aaa] hover:text-white"
          }`}
        >
          Fahrzeug
        </button>
        <button
          onClick={() => setMode("gebaeude")}
          aria-label="Firmengebäude anzeigen"
          className={`px-3 py-1.5 rounded-full text-[10px] tracking-wide uppercase transition-colors ${
            mode === "gebaeude" ? "bg-white text-black" : "text-[#aaa] hover:text-white"
          }`}
        >
          Gebäude
        </button>
      </div>
    </>
  );
}
