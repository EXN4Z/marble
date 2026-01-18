import Model3D from "@/components/Model3D";

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-12 text-black">
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
          Carv is a small business focused on handcrafted wood carving. It blends traditional carving skills with modern design to create unique and artistic wooden products.
          Using selected woods like teak and mahogany, each piece is carefully carved by hand. Carv produces wall art, wooden reliefs, plaques, frames, souvenirs, and custom-made carvings.
          Carv aims to preserve traditional wood carving while adapting it to modern style and needs.
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-[#3a2a1a] text-white shadow-xl transition">
          Explore Now
        </button>
      </div>

      <div className="flex items-center justify-center">
        <Model3D />
      </div>
    </section>
  );
}
