export default function LatestStories() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-6">Latest Stories</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <div key={i} className="bg-gray-200 rounded-xl h-72" />
        ))}
      </div>
    </section>
  );
}
