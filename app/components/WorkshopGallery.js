export default function WorkshopGallery() {
  return (
    <section className="py-14 bg-[#202020] border-t border-[#c0c0c0]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-[#707070] text-xs tracking-[0.3em] uppercase mb-3">Alltag bei uns</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Mitten in der Werkstatt</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="border border-[#c0c0c0]/10 bg-[#0d0d0d] flex flex-col items-center justify-center gap-3 text-center"
              style={{ aspectRatio: "4/3" }}
            >
              <div className="w-8 h-px bg-[#c0c0c0]/20" />
              <span className="text-[#333] text-xs tracking-[0.2em] uppercase">Bilder folgen</span>
              <div className="w-8 h-px bg-[#c0c0c0]/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
