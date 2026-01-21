import Image from "next/image";
import Model3D from "@/components/Model3D";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-black"
    >
      <div
        className="
          pointer-events-none
          absolute
          top-[-20%]
          left-[-20%]
          right-[30%]
          sm:left-[-5%]
          sm:right-[-5%]
          md:left-[5%]
          md:right-[5%]
          bottom-0
          bg-[linear-gradient(to_right,rgba(140,124,77,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,124,77,0.15)_1px,transparent_1px)]
          bg-size-[90px_90px]
          rotate-12
        "
      />

      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover the <br /> Beauty of Carving
        </h1>

        <p className="mt-6 text-gray-500">
          Carv is a small business focused on handcrafted wood carving, where each piece is thoughtfully designed and carefully made by skilled artisans. Using high-quality wood and traditional carving techniques, Carv creates unique products that highlight natural textures, fine details, and lasting durability. Every item is crafted with attention to detail, ensuring not only aesthetic beauty but also functional value, making each creation feel personal, authentic, and timeless.
        </p>

        <a
          href="#about"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-[#3a2a1a] text-white shadow-xl"
        >
          Explore Now
        </a>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Model3D />

        <div className="flex items-center gap-2 text-black text-sm px-3 py-1 rounded-full pointer-events-none mt-10 border bg-transparent backdrop-blur-xl border-white/20 shadow-md">
          <Image
            src="/images/indicator.png"
            alt="Rotate indicator"
            width={20}
            height={20}
            className="animate-spin-slow"
          />
          <span>Drag to rotate</span>
        </div>
      </div>
    </section>
  );
}
