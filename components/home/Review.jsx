"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Michael Anderson",
    avatar: "/profile/profile1.png",
    rating: 5,
    photo: "/images/rev1.png",
    category: "Table",
    desc: "High-quality marble with a smooth finish. Very professional work.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    avatar: "/profile/profile2.png",
    rating: 4,
    photo: "/images/rev2.png",
    category: "Chair",
    desc: "The craftsmanship is exceptional and very detailed.",
  },
  {
    id: 3,
    name: "Daniel Thompson",
    avatar: "/profile/profile3.png",
    rating: 4,
    photo: "/images/rev3.jpg",
    category: "Furniture",
    desc: "They followed my custom design perfectly.",
  },
  {
    id: 4,
    name: "Ronald Smith",
    avatar: "/profile/profile4.png",
    rating: 4,
    photo: "/images/rev4.jpg",
    category: "Custom",
    desc: "Solid work with premium materials.",
  },
  {
    id: 5,
    name: "Sophia Williams",
    avatar: "/profile/profile5.png",
    rating: 4,
    photo: "/images/rev5.png",
    category: "Table",
    desc: "The handmade details are stunning. It adds a natural and elegant touch to my space.",
  },
  {
    id: 6,
    name: "Sophia Williams",
    avatar: "/profile/profile6.png",
    rating: 5,
    photo: "/images/rev6.png",
    category: "Door",
    desc: "Even better than the photos. The carving feels alive and truly artistic.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Review() {
  const [showMore, setShowMore] = useState(false);
  const visibleReviews = showMore ? reviews : reviews.slice(0, 4);

  return (
    <section id="review" className="max-w-7xl mx-auto px-6 py-25">
      <h2 className="text-3xl font-bold mb-10">Customer Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1 justify-center">
          <div className="bg-[#8c7c4d]/40 backdrop-blur-md border border-black/10 p-6 rounded-sm h-full flex flex-col justify-center">
            <Image
              className="rounded-3xl mx-auto"
              src="/images/rate.png"
              alt="Hero Image"
              width={300}
              height={300}
            />
            <h3 className="text-xl font-semibold mb-3">
              What Our Customers Say
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Honest feedback from customers who experienced our
              marble and wood carving craftsmanship.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Each piece is handmade with precision, care, and
              premium materials.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div
            className={`
              grid grid-cols-1 sm:grid-cols-2 gap-6
              transition-all duration-500
              ${showMore ? "opacity-100 translate-y-0" : "opacity-95 translate-y-2"}
            `}
          >
            {visibleReviews.map((item) => (
              <div
                key={item.id}
                className="
                  bg-[#8c7c4d]/40 backdrop-blur-md border border-black/10
                  p-4 flex rounded-sm gap-4
                  transition-all duration-300
                "
              >
                <div className="relative w-24 h-24 overflow-hidden shrink-0">
                  <Image
                    src={item.photo}
                    alt={item.category}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-sm font-semibold mt-1">
                    {item.category}
                  </h4>

                  <div className="flex items-center gap-2 mt-2 mb-1">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                    <span className="text-xs font-medium text-gray-700">
                      {item.name}
                    </span>
                  </div>

                  <StarRating rating={item.rating} />

                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {reviews.length > 3 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 text-sm px-5 py-2 rounded-full transition flex items-center gap-2 cursor-pointer hover:text-[#3a2a1a]"
            >
              {showMore ? (
                <>
                  Show less reviews <span>↑</span>
                </>
              ) : (
                <>
                  Show more reviews <span>↓</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
