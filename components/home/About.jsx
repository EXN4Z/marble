"use client";

import Image from "next/image";
import { useState } from "react";

const contents = [
  {
    title: "Who We Are",
    desc1:
      "We are a team of dedicated craftsmen who specialize in handcrafted wood carving and custom furniture. Every piece we create is made with attention to detail, patience, and deep respect for traditional woodworking techniques.",
    desc2:
      "Our workshop combines years of experience with a passion for natural materials, transforming raw wood into functional art that carries character, warmth, and authenticity in every curve and texture.",
  },
  {
    title: "What We Do",
    desc1:
      "We design and produce a wide range of wooden products, from decorative carvings and furniture to custom-made interior elements tailored to your needs.",
    desc2:
      "Each project is carefully planned, shaped, and finished by hand, ensuring durability, beauty, and uniqueness that mass-produced items can never replicate.",
  },
  {
    title: "Our Vision",
    desc1:
      "Our vision is to preserve the art of traditional wood carving while blending it with modern design and functionality.",
    desc2:
      "We aim to create timeless pieces that not only enhance living spaces but also tell a story of craftsmanship, culture, and dedication passed down through generations.",
  },
];


export default function About() {
  const [index, setIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-15" id="about">
      <h2 className="text-3xl font-bold">About Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="mx-auto">
          <Image
            src="/images/about2.png"
            alt="About Image"
            width={500}
            height={400}
            className="rounded-lg h-92 w-92"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            {contents[index].title}
          </h3>

          <p className="text-gray-600 mb-4">
            {contents[index].desc1}
          </p>

          <p className="text-gray-600 mb-6">
            {contents[index].desc2}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setIndex(index === 0 ? contents.length - 1 : index - 1)
              }
              className="w-10 h-10 rounded-full border border-black/40 hover:bg-[#3a2a1a] hover:text-white transition"
            >
              ←
            </button>

            <button
              onClick={() =>
                setIndex((index + 1) % contents.length)
              }
              className="w-10 h-10 rounded-full border border-black/40 hover:bg-[#3a2a1a] hover:text-white transition"
            >
              →
            </button>

            <div className="flex gap-2 ml-4">
              {contents.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === i
                      ? "bg-[#3a2a1a] scale-110"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
