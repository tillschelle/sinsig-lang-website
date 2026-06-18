'use client';
import { useState, useEffect } from "react";

const channels = [
  {
    label: "PKW",
    desc: "Pkw Service & Annahme",
    number: "49672197410",
  },
  {
    label: "LKW & Transporter",
    desc: "Nutzfahrzeuge & Transporter",
    number: "496721974127",
  },
  {
    label: "Teiledienst",
    desc: "Ersatzteile & Zubehör",
    number: "4915161643193",
  },
];

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    function handleBanner(e) {
      setBannerHeight(e.detail.height);
    }
    window.addEventListener("cookiebanner", handleBanner);
    return () => window.removeEventListener("cookiebanner", handleBanner);
  }, []);

  const bottomOffset = bannerHeight > 0 ? bannerHeight + 16 : 20;

  return (
    <div
      className="fixed right-5 z-50 flex flex-col items-end gap-2 transition-all duration-300"
      style={{ bottom: `${bottomOffset}px` }}
    >
      {/* Popup */}
      {open && (
        <div className="bg-[#1a1a1a] border border-[#c0c0c0]/20 rounded-lg shadow-2xl overflow-hidden w-64">
          <div className="px-4 py-3 border-b border-[#c0c0c0]/10">
            <p className="text-white text-xs font-semibold tracking-wide">Abteilung wählen</p>
            <p className="text-[#555] text-[11px] mt-0.5">Direkt per WhatsApp schreiben</p>
          </div>
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={`https://wa.me/${ch.number.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#222] transition-colors border-b border-[#c0c0c0]/10 last:border-b-0"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="text-white text-xs font-medium">{ch.label}</div>
                <div className="text-[#555] text-[11px]">{ch.desc}</div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Grüner Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ background: "#25D366" }}
        aria-label="WhatsApp"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
