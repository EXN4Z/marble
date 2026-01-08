export default function Newsletter() {
  return (
    <section className="bg-gray-900 text-white py-20 text-center">
      <h2 className="text-3xl font-semibold">
        Get Your Travel Inspiration Straight to Your Inbox
      </h2>

      <div className="mt-8 flex justify-center gap-4">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-3 rounded-full text-black w-64"
        />
        <button className="px-6 py-3 rounded-full bg-white text-black">
          Subscribe
        </button>
      </div>
    </section>
  );
}
