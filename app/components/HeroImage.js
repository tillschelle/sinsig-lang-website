import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="absolute right-0 top-0 h-full w-full md:w-[75%] z-0">
      <Image
        src="/img/hero-gebaeude.jpg"
        alt="Sinsig & Lang Firmengebäude"
        fill
        className="object-cover object-center md:object-left select-none opacity-80 grayscale"
        priority
      />
    </div>
  );
}
