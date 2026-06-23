'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) {
      window.dispatchEvent(new CustomEvent("cookiebanner", { detail: { height: 0 } }));
      return;
    }
    function reportHeight() {
      if (ref.current) {
        window.dispatchEvent(new CustomEvent("cookiebanner", { detail: { height: ref.current.offsetHeight } }));
      }
    }
    reportHeight();
    window.addEventListener("resize", reportHeight);
    return () => window.removeEventListener("resize", reportHeight);
  }, [visible]);

  function accept() {
    localStorage.setItem("cookieConsent", "accepted");
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: { consent: "accepted" } }));
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookieConsent", "declined");
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: { consent: "declined" } }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div ref={ref} className="fixed bottom-0 left-0 right-0 z-[100] bg-[#202020] border-t border-[#c0c0c0]/15 px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-[#707070] text-sm leading-relaxed max-w-2xl">
          Wir verwenden technisch notwendige Cookies sowie optionale Analyse-Cookies zur Verbesserung unserer Website.{" "}
          <Link href="/cookies" className="text-[#c0c0c0]/70 hover:text-[#c0c0c0] underline underline-offset-2 transition-colors">
            Cookie-Richtlinie
          </Link>{" "}
          ·{" "}
          <Link href="/datenschutz" className="text-[#c0c0c0]/70 hover:text-[#c0c0c0] underline underline-offset-2 transition-colors">
            Datenschutz
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm text-[#707070] border border-[#c0c0c0]/15 hover:border-[#c0c0c0]/30 hover:text-[#c0c0c0] transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm bg-white text-black font-medium hover:bg-[#c0c0c0] transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
