"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Service() {
  const products = [
    {
      id: 1,
      name: "Furniture",
      desc: "Premium crafted design",
      price: "$10",
      images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
    },
    {
      id: 2,
      name: "Door",
      desc: "Spacious & elegant dining",
      price: "$30",
      images: ["/images/5.jpg", "/images/6.jpg", "/images/7.jpg"],
    },
    {
      id: 3,
      name: "Table",
      desc: "Perfect compact style",
      price: "$25",
      images: ["/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
    },
    {
      id: 4,
      name: "Chair",
      desc: "Comfortable quality seating",
      price: "$15",
      images: ["/images/4.jpg", "/images/1.jpg", "/images/5.jpg"],
    },
  ];

  // ===== GALLERY STATE =====
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const openGallery = (imgs) => {
    setImages(imgs);
    setIndex(0);
    setOpen(true);
  };

  const closeGallery = () => setOpen(false);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="service" className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Service</h2>

      <div className="flex lg:grid gap-8 overflow-x-auto lg:grid-cols-4 p-6 bg-[#8c7c4d]/40 rounded-sm backdrop-blur-md border border-black/10">
        {products.map((product) => (
          <div key={product.id} className="shrink-0 w-64 lg:w-auto">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={250}
              height={300}
              onClick={() => openGallery(product.images)}
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-[1.03] transition"
            />

            <div className="p-4 -mx-3">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.desc}</p>

              <span className="inline-block mt-3 text-white text-sm bg-[#3a2a1a] px-4 py-2 rounded-full">
                Start {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ===== MODERN GALLERY MODAL ===== */}
      {open && (
        <div
          onClick={closeGallery}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-2xl"
          >
            <Image
              src={images[index]}
              alt="Gallery"
              width={800}
              height={500}
              className="w-full h-105 object-cover rounded-xl shadow-xl transition-all"
            />

            {/* NAV BUTTONS */}
            <button
              onClick={prev}
              className="absolute -left-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-[#3a2a1a] transition"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute -right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-[#3a2a1a] transition"
            >
              ›
            </button>

            {/* CLOSE */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 w-9 h-9 rounded-full text-white border border-white/40 hover:bg-[#3a2a1a] transition"
            >
              ✕
            </button>

            {/* DOT INDICATOR */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === index
                      ? "bg-white scale-125"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
