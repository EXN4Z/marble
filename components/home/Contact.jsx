"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);

    // optional: auto hide setelah 3 detik
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="px-4 md:px-0 py-5">
      <div className="max-w-5xl mx-auto bg-[#8c7c4d]/40 backdrop-blur-md border border-black/10 rounded-lg shadow-md p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Custom Wood Carving Order
          </h2>

          <div className="space-y-4 text-sm text-gray-600">
            <p>
              We create handcrafted wood carvings based on your ideas and needs.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Custom name, logo, and pattern carving</li>
              <li>Home decoration and interior pieces</li>
              <li>Souvenirs, plaques, and gift items</li>
            </ul>

            <p>
              <span className="font-semibold text-black">Production Time:</span><br />
              3–7 days (small size) • 1–3 weeks (large size)
            </p>

            <p>
              <span className="font-semibold text-black">Wood Options:</span><br />
              Teak • Mahogany • Trembesi
            </p>

            <p className="text-black font-medium">
              Fill in the form to start your custom wood carving order.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-md bg-[#d2d2d2] outline-none"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-md bg-[#d2d2d2] outline-none"
            />
          </div>

          <textarea
            rows={5}
            placeholder="Describe your order..."
            className="w-full px-4 py-3 rounded-md bg-[#d2d2d2] outline-none mb-4"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-[#3a2a1a] hover:bg-[#4a3824] text-white py-3 rounded-md hover:opacity-90 transition cursor-pointer"
          >
            Send Order Request
          </button>

          {/* ALERT */}
          {sent && (
            <p className="mt-4 text-green-700 bg-green-100 border border-green-300 px-4 py-2 rounded-md text-sm text-center">
              Order sended!
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
