'use client';
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const areas = ["PKW-Werkstatt", "LKW & Transporter Werkstatt", "Teile & Lager", "Büro & Verwaltung", "Noch nicht sicher"];
const experiences = [
  "Ohne Ausbildung",
  "Berufserfahrung ohne Abschluss",
  "Abgeschlossene Berufsausbildung",
  "Quereinsteiger",
];

function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 border border-[#c0c0c0]/20 text-[#c0c0c0] text-sm hover:bg-white hover:text-black transition-all relative"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
        <path d="M3 6l9 7 9-7M3 6h18v12H3V6z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {email}
      {copied && (
        <span className="absolute -top-9 right-0 bg-white text-black text-xs px-3 py-1.5 whitespace-nowrap shadow-lg">
          E-Mail kopiert!
        </span>
      )}
    </button>
  );
}

function Funnel() {
  const [step, setStep] = useState(0);
  const [area, setArea] = useState(null);
  const [experience, setExperience] = useState(null);
  const [customExp, setCustomExp] = useState("");

  const subject = area ? `Initiativbewerbung: ${area}` : "Initiativbewerbung";
  const body = `Hallo,\n\nich interessiere mich für eine Stelle im Bereich: ${area ?? "–"}\nErfahrung: ${experience ?? "–"}\n\nÜber eine Rückmeldung würde ich mich sehr freuen.\n\nMit freundlichen Grüßen`;

  return (
    <div>
      {/* Schritt-Anzeige */}
      <p className="text-[#333] text-xs font-mono mb-8 tracking-widest">0{step + 1} / 03</p>

      {/* Step 0 – Bereich */}
      {step === 0 && (
        <div>
          <p className="text-white text-lg font-light mb-8">In welchem Bereich möchtest du arbeiten?</p>
          <div className="divide-y divide-[#c0c0c0]/10 border-t border-[#c0c0c0]/10">
            {areas.map((a) => (
              <button
                key={a}
                onClick={() => { setArea(a); setStep(1); }}
                className="w-full flex items-center justify-between py-4 text-left text-[#8a8a8a] hover:text-white text-sm transition-colors group"
              >
                <span>{a}</span>
                <span className="text-[#333] group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1 – Erfahrung */}
      {step === 1 && (
        <div>
          <p className="text-white text-lg font-light mb-8">Was bringst du mit?</p>
          <div className="divide-y divide-[#c0c0c0]/10 border-t border-[#c0c0c0]/10 mb-6">
            {experiences.map((e) => (
              <button
                key={e}
                onClick={() => { setExperience(e); setStep(2); }}
                className="w-full flex items-center justify-between py-4 text-left text-[#8a8a8a] hover:text-white text-sm transition-colors group"
              >
                <span>{e}</span>
                <span className="text-[#333] group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
              </button>
            ))}
            <div className="py-4 flex items-center gap-3">
              <input
                type="text"
                placeholder="Oder selbst beschreiben …"
                value={customExp}
                onChange={(e) => setCustomExp(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && customExp.trim()) { setExperience(customExp.trim()); setStep(2); }}}
                className="flex-1 bg-transparent text-[#8a8a8a] placeholder-[#333] text-sm outline-none focus:text-white transition-colors"
              />
              {customExp.trim() && (
                <button
                  onClick={() => { setExperience(customExp.trim()); setStep(2); }}
                  className="text-[#555] hover:text-white text-sm transition-colors flex-shrink-0"
                >
                  →
                </button>
              )}
            </div>
          </div>
          <button onClick={() => setStep(0)} className="text-[#333] hover:text-[#555] text-xs transition-colors">← zurück</button>
        </div>
      )}

      {/* Step 2 – Abschluss */}
      {step === 2 && (
        <div>
          <p className="text-white text-lg font-light mb-2">Passt.</p>
          <div className="flex gap-6 text-xs text-[#555] mb-8 mt-3">
            <span>{area}</span>
            <span className="text-[#333]">·</span>
            <span>{experience}</span>
          </div>
          <a
            href={`https://wa.me/49672197410?text=${encodeURIComponent(`Hallo, ich interessiere mich für eine Stelle im Bereich ${area}. Mein Hintergrund: ${experience}. Ich würde mich über eine Rückmeldung freuen.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-white text-sm font-medium hover:opacity-90 transition-opacity mb-6"
            style={{ background: "#25D366" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Jetzt per WhatsApp bewerben
          </a>
          <p className="text-[#555] text-xs leading-relaxed mt-5 max-w-sm">
            Wir melden uns persönlich. Kein Callcenter, keine Absage-Vorlage. Einfach ein kurzes Gespräch, um zu schauen, ob es passt.
          </p>
          <button onClick={() => { setStep(0); setArea(null); setExperience(null); }} className="text-[#333] hover:text-[#555] text-xs transition-colors mt-6 block">← von vorne</button>
        </div>
      )}
    </div>
  );
}


const jobs = [
  {
    title: "KFZ-Mechatroniker (m/w/d)",
    type: "Vollzeit",
    dept: "Werkstatt",
    desc: "Diagnose, Wartung und Reparatur von Mercedes-Benz PKW und LKW. Erfahrung mit Elektro- und Hybridfahrzeugen von Vorteil.",
  },
  {
    title: "Teiledienstmitarbeiter (m/w/d)",
    type: "Vollzeit",
    dept: "Lager",
    desc: "Verkauf und Ausgabe von Original-Ersatzteilen und Zubehör. Beratung von Kundinnen und Kunden sowie Kolleginnen und Kollegen in der Werkstatt.",
  },
];

export default function KarrierePage() {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#111] border-b border-[#c0c0c0]/10 py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#c0c0c0]/50 text-xs tracking-[0.3em] uppercase mb-3">Wachse mit uns</p>
            <h1 className="text-5xl md:text-6xl font-light text-white">Karriere</h1>
            <p className="text-[#555] mt-4 max-w-xl">
              Werde Teil eines leidenschaftlichen Teams. Bei Sinsig & Lang findest du ein familiäres Umfeld mit professionellen Standards.
            </p>
          </div>
        </section>

        {/* Jobs */}
        <section className="bg-[#111] py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl font-light mb-8">Aktuelle Stellen</h2>
            <div className="space-y-px">
              {jobs.map((job) => (
                <div key={job.title} className="bg-[#0d0d0d] hover:bg-[#111] transition-colors p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-white font-medium">{job.title}</h3>
                      <span className="text-[10px] tracking-widest uppercase border border-[#c0c0c0]/20 text-[#c0c0c0] px-2 py-0.5">
                        {job.type}
                      </span>
                      <span className="text-[10px] tracking-widest uppercase text-[#555]">
                        {job.dept}
                      </span>
                    </div>
                    <p className="text-[#555] text-sm leading-relaxed">{job.desc}</p>
                  </div>
                  <CopyEmailButton email="jobs@sinsig-lang.de" />
                </div>
              ))}
            </div>

            {/* Funnel */}
            <div className="mt-12 bg-[#0d0d0d] border border-[#c0c0c0]/10 p-8 md:p-12">
              <p className="text-[#555] text-xs tracking-[0.3em] uppercase mb-4">Initiativbewerbung</p>
              <h3 className="text-white text-2xl md:text-3xl font-light mb-3">Wir geben jedem eine Chance.</h3>
              <p className="text-[#555] text-sm mb-8 max-w-xl">
                Bei uns zählt der Mensch, nicht nur der Lebenslauf. Kein passendes Angebot gefunden? Meld dich trotzdem. Wir finden gemeinsam heraus, wo du reinpasst.
              </p>

              {!funnelOpen ? (
                <button
                  onClick={() => setFunnelOpen(true)}
                  className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-[#c0c0c0] transition-colors"
                >
                  Initiativbewerbung →
                </button>
              ) : (
                <Funnel />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
