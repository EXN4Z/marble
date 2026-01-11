export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-12 bg-">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover the <br /> Beauty of Carving
        </h1>

        <p className="mt-6 text-gray-600">
          Carv is a small business focused on handcrafted wood carving. It blends traditional carving skills with modern design to create unique and artistic wooden products.
          Using selected woods like teak and mahogany, each piece is carefully carved by hand. Carv produces wall art, wooden reliefs, plaques, frames, souvenirs, and custom-made carvings.
          Carv aims to preserve traditional wood carving while adapting it to modern style and needs.
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-black text-white">
          Explore Now
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 relative">
      <div className="bg-gray-300 rounded-3xl h-96 translate-y-3"></div>

        <div className="relative">
          <div className="bg-gray-300 rounded-3xl h-72 transform -translate-y-8"></div>
          <div className="bg-gray-300 rounded-3xl h-48 transform translate-y-1"></div>
        </div>

      </div>
    </section>
  );
}
