'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 1945, start: 1920, prefix: "", suffix: "", label: "Gegründet", decimals: 0 },
  { end: 4.7,  start: 0,    prefix: "", suffix: "★", label: "Google Bewertung", decimals: 1 },
  { end: 4.8,  start: 0,    prefix: "", suffix: "★", label: "mobile.de Bewertung", decimals: 1 },
  { end: 80, start: 60, prefix: "", suffix: "+", label: "Jahre Erfahrung", decimals: 0 },
];

function Counter({ item, triggered }) {
  const [count, setCount] = useState(item.start);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1600;
    const startTime = performance.now();
    const range = item.end - item.start;

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function frame(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = item.start + range * easeOut(progress);
      setCount(value);
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }, [triggered]);

  const display = item.decimals > 0
    ? count.toFixed(item.decimals)
    : Math.floor(count).toString();

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl text-white mb-1 tabular-nums" style={{ fontWeight: 450 }}>
        {item.prefix}{display}{item.suffix}
      </div>
      <div className="text-[#707070] text-xs tracking-widest uppercase">{item.label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function isInView() {
      if (!ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }
    if (isInView()) {
      setTriggered(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#272727] border-y border-[#c0c0c0]/15 py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <Counter key={s.label} item={s} triggered={triggered} />
        ))}
      </div>
    </section>
  );
}
