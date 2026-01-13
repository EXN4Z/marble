import Image from "next/image";
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-12 bg-">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover the <br /> Beauty of Carving
        </h1>

        <p className="mt-6 text-gray-400">
          Carv is a small business focused on handcrafted wood carving. It blends traditional carving skills with modern design to create unique and artistic wooden products.
          Using selected woods like teak and mahogany, each piece is carefully carved by hand. Carv produces wall art, wooden reliefs, plaques, frames, souvenirs, and custom-made carvings.
          Carv aims to preserve traditional wood carving while adapting it to modern style and needs.
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-[#363636] text-white shadow-xl transition">
          Explore Now
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 relative">
      <div className="rounded-3xl h-86 translate-y-3">
        <Image className="rounded-3xl" src="/images/image1.png" alt="Hero Image" width={400} height={400} />
      </div>

        <div className="relative">
          <div className="rounded-3xl transform -translate-y-8">
            <Image className="rounded-3xl" src="/images/image2.png" alt="Hero Image" width={400} height={400} />
          </div>
          <div className="rounded-3xl transform translate-y-1 sm:mt-0">
            <Image className="rounded-3xl" src="/images/image3.png" alt="Hero Image" width={400} height={400} />
          </div>
        </div>

      </div>
    </section>
  );
}
