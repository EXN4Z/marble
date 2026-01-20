"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Service() {
  const products = [
    {
      id: 1,
      name: "Furniture",
      desc: "Premium crafted design",
      price: "$10",
      images: [
        "/service/furniture/service1.jpg",
        "/service/furniture/service2.jpg",
        "/service/furniture/service3.jpg",
      ],
    },
    {
      id: 2,
      name: "Door",
      desc: "Spacious & elegant dining",
      price: "$30",
      images: [
        "/service/door/1.jpg",
        "/service/door/2.jpg",
        "/service/door/3.png",
      ],
    },
    {
      id: 3,
      name: "Table",
      desc: "Perfect compact style",
      price: "$25",
      images: [
        "/service/table/1.jpg",
        "/service/table/2.jpg",
        "/service/table/3.jpg",
      ],
    },
    {
      id: 4,
      name: "Chair",
      desc: "Comfortable quality seating",
      price: "$15",
      images: [
        "/service/chair/1.jpg",
        "/service/chair/2.jpg",
        "/service/chair/3.jpg",
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  const galleryRef = useRef(null);

  const openGallery = (imgs) => {
    setImages(imgs);
    setIndex(0);
    setOpen(true);
  };

  const closeGallery = () => setOpen(false);

  const scrollToIndex = (i) => {
    const el = galleryRef.current;
    if (!el) return;

    const width = el.clientWidth;
    el.scrollTo({
      left: width * i,
      behavior: "smooth",
    });

    setIndex(i);
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="service" className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Service</h2>

      <div
        className="
          flex lg:grid gap-8 overflow-x-auto
          lg:grid-cols-4 lg:overflow-visible
          p-6 bg-[#8c7c4d]/40 rounded-sm backdrop-blur-md
          border border-black/10
        "
      >
        {products.map((product) => (
          <div key={product.id} className="shrink-0 w-64 lg:w-auto">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={250}
              height={300}
              onClick={() => openGallery(product.images)}
              className="
                w-full h-64 object-cover rounded-lg cursor-pointer
                transition-transform hover:scale-[1.03]
              "
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

      {open && (
        <div
          onClick={closeGallery}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl px-4"
          >

            <div
              ref={galleryRef}
              className="
                flex overflow-x-auto
                snap-x snap-mandatory scroll-smooth
                no-scrollbar
              "
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="shrink-0 w-full snap-center flex justify-center"
                >
                  <Image
                    src={img}
                    alt="Gallery"
                    width={700}
                    height={535}
                    className="
                      w-full
                      max-w-175
                      max-h-133.75
                      object-contain
                      rounded-xl
                    "
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToIndex(Math.max(index - 1, 0))}
              className="
                hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2
                w-10 h-10 rounded-full
                border border-white/40 text-white
                items-center justify-center
                hover:bg-[#3a2a1a]
              "
            >
              ‹
            </button>

            <button
              onClick={() =>
                scrollToIndex(Math.min(index + 1, images.length - 1))
              }
              className="
                hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2
                w-10 h-10 rounded-full
                border border-white/40 text-white
                items-center justify-center
                hover:bg-[#3a2a1a]
              "
            >
              ›
            </button>

            <button
              onClick={closeGallery}
              className="
                absolute md:top-4 hidden right-8 
                w-9 h-9 rounded-full
                border border-white/40 text-white
                hover:bg-[#3a2a1a]
              "
            >
              ✕
            </button>

            <button
              onClick={() => scrollToIndex(Math.max(index - 1, 0))}
              className="
                md:hidden
                absolute
                left-6
                -bottom-4
                w-9 h-9
                rounded-full
                border border-white/40 text-white
                flex items-center justify-center
                active:scale-95
              "
            >
              ‹
            </button>
                        
            <button
              onClick={() =>
                scrollToIndex(Math.min(index + 1, images.length - 1))
              }
              className="
                md:hidden
                absolute
                right-6
                -bottom-4
                w-9 h-9
                rounded-full
                border border-white/40 text-white
                flex items-center justify-center
                active:scale-95
              "
            >
              ›
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
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
