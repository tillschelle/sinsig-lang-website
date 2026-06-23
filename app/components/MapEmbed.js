'use client';
import { useState, useEffect } from "react";

export default function MapEmbed() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(localStorage.getItem("cookieConsent") === "accepted");
    function handleConsentChange(e) {
      setConsent(e.detail.consent === "accepted");
    }
    window.addEventListener("cookieConsentChanged", handleConsentChange);
    return () => window.removeEventListener("cookieConsentChanged", handleConsentChange);
  }, []);

  function acceptAndLoad() {
    localStorage.setItem("cookieConsent", "accepted");
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: { consent: "accepted" } }));
    window.dispatchEvent(new CustomEvent("cookiebanner", { detail: { height: 0 } }));
    setConsent(true);
  }

  if (!consent) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 text-center p-8" style={{ minHeight: 320 }}>
        <p className="text-[#8a8a8a] text-sm max-w-xs">
          Die Karte wird von Google Maps geladen. Dafür ist Ihre Zustimmung zu Cookies erforderlich.
        </p>
        <button
          onClick={acceptAndLoad}
          className="px-6 py-2.5 bg-white text-black text-sm font-medium hover:bg-[#c0c0c0] transition-colors"
        >
          Cookies akzeptieren & Karte laden
        </button>
      </div>
    );
  }

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2579.3!2d7.8998274!3d49.9521139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdef9c54e29a5d%3A0xac9250f127741129!2sSinsig+%26+Lang+GmbH+%26+Co.+KG!5e0!3m2!1sde!2sde!4v1700000000000"
      width="100%"
      height="100%"
      style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.8)", display: "block", minHeight: 320 }}
      allowFullScreen
      loading="lazy"
      title="Standort Sinsig & Lang"
    />
  );
}
