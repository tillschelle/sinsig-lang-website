'use client';
import { useState } from "react";

const reviews = [
  {
    name: "Lichtleitner Maria",
    time: "vor einem Monat",
    text: "Unser ML hatte die Motorkontrolllampe am leuchten, ohne Termin hingefahren, super nette Leute haben schnell geholfen, haben uns auf den Campingplatz gebracht und am nächsten Tag war das Auto wieder fit. Haben uns vom Campingplatz wieder abgeholt. Super zufrieden und ein super nettes Team, noch 1000 mal danke, das ist heute nicht mehr selbstverständlich. Danke, Gruß Fam. Lichtleitner",
  },
  {
    name: "Jens Krüper",
    time: "vor 4 Monaten",
    text: "Wir waren heute morgen mit unserem Sprinter bei euch im Autohaus. Schnelle und unkomplizierte Lösung des Problems. Danke an das ganze Team.",
  },
  {
    name: "Andreas Hönig",
    time: "vor 2 Jahren",
    text: "Direkte und konkrete Hilfe bei allen Problemen. Auch die Empathie stimmt und zeigt sich immer in der Freundlichkeit und dem Eingehen in jeder Situation. Man fühlt sich stets in guten Händen und man merkt die Expertise. Vielen Dank vor allem an den Serviceleiter Dirk Weigand.",
  },
  {
    name: "Ali Koyupinar",
    time: "vor 2 Jahren",
    text: "Vor allem herzlichen Dank an Herrn Hittinger, sehr nett! Sehr netter, zuverlässiger Service und sehr netter Herr an der Beratung. Sehr schnelle und reibungslose Online-Terminvergabe, freundliches Personal sowie tadelloser Service inklusive Außen- sowie grober Innenreinigung. Vielen vielen Dank.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#f5b400]">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#202020] p-5">
      <Stars />
      <p className={`text-[#8a8a8a] text-xs leading-relaxed mt-3 mb-2 ${expanded ? "" : "line-clamp-4"}`}>
        {r.text}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[#707070] hover:text-[#c0c0c0] text-[10px] tracking-wide uppercase mb-3 transition-colors"
      >
        {expanded ? "Weniger anzeigen" : "Mehr anzeigen"}
      </button>
      <div className="flex items-center justify-between pt-2 border-t border-[#c0c0c0]/10">
        <span className="text-white text-xs font-medium">{r.name}</span>
        <span className="text-[#707070] text-[10px]">{r.time}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="pb-14 bg-[#202020]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <p className="text-[#707070] text-xs tracking-[0.3em] uppercase">Das sagen unsere Kunden</p>
          <a
            href="https://www.google.com/maps/place/Sinsig+%26+Lang+GmbH+%26+Co.+KG/@49.9521139,7.8998274,16z/data=!4m8!3m7!1s0x47bdef9c54e29a5d:0xac9250f127741129!8m2!3d49.9521139!4d7.9024023!9m1!1b1!16s%2Fg%2F1tgyvv2x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#707070] hover:text-white text-xs transition-colors group"
          >
            Alle Bewertungen auf Google
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#c0c0c0]/10">
          {reviews.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
