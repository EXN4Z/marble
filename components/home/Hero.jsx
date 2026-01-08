export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-12">
      {/* Text */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover the World’s <br /> Hidden Wonders
        </h1>

        <p className="mt-6 text-gray-600">
          Find unique moments and hidden gems that ignite unforgettable
          experiences. From rare encounters to remarkable destinations,
          we help you uncover the spark that turns every trip into a
          cherished story.
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-black text-white">
          Explore Now
        </button>
      </div>

      {/* Image placeholder */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 rounded-xl h-40" />
        <div className="bg-gray-200 rounded-xl h-56" />
        <div className="bg-gray-200 rounded-xl h-56" />
        <div className="bg-gray-200 rounded-xl h-40" />
      </div>
    </section>
  );
}
