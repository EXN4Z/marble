export default function TopDestinations() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-6">Top Destinations</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1,2,3,4].map((i) => (
          <div key={i} className="bg-gray-200 rounded-xl h-64" />
        ))}
      </div>
    </section>
  );
}
