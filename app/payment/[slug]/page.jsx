"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const PRODUCTS = [
  { name: "Furniture", price: 10 },
  { name: "Door", price: 30 },
  { name: "Table", price: 25 },
  { name: "Chair", price: 15 },
];

export default function PaymentPage() {
  const searchParams = useSearchParams();

  const defaultProduct = searchParams.get("product") || "Furniture";
  const defaultPrice = Number(searchParams.get("price")) || 10;

  const [product, setProduct] = useState(defaultProduct);
  const [price, setPrice] = useState(defaultPrice);
  const [showChange, setShowChange] = useState(false);

  const handleChangeProduct = (item) => {
    setProduct(item.name);
    setPrice(item.price);
    setShowChange(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      <div
        className="pointer-events-none absolute inset-[-50%]
        bg-[linear-gradient(to_right,rgba(140,124,77,0.15)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(140,124,77,0.15)_1px,transparent_1px)]
        bg-size-[90px_90px] rotate-12"
      />

      <div className="w-full max-w-5xl bg-[#8c7c4d]/40 rounded-md backdrop-blur-md border border-black/10 shadow-2xl py-4 px-6 grid md:grid-cols-2 gap-10">

        <div>
          <a href="#service" className="text-sm">‹ Back</a>

          <h3 className="text-sm text-black mb-3 mt-3">
            Select Payment Method
          </h3>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#d2d2d2] border border-black/40">
              <span className="text-sm text-gray-500">Credit / Debit Card</span>
              <div className="w-3 h-3 rounded-full bg-[#3a2a1a]" />
            </button>

            <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#d2d2d2] border border-white/10">
              <span className="text-sm text-gray-500">PayPal</span>
            </button>
          </div>

          <div className="mt-6 bg-[#d2d2d2] rounded-xl p-5">
            <p className="text-sm text-gray-500">Total</p>
            <h2 className="text-3xl font-bold text-black mt-1">
              ${price}.00
            </h2>

            <div className="mt-4 text-sm text-gray-500">
              <p>✔ Payment & Invoice</p>
              <p>✔ Secure transaction</p>
            </div>

            <div className="mt-4 bg-[#b5b5b5] p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-black">{product}</p>
                  <p className="text-xs text-gray-500">${price}.00</p>
                </div>
                <button
                  onClick={() => setShowChange(!showChange)}
                  className="text-sm text-[#3a2a1a]"
                >
                  Change
                </button>
              </div>

              {showChange && (
                <div className="mt-3 space-y-2">
                  {PRODUCTS.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleChangeProduct(item)}
                      className="w-full text-left text-sm bg-[#d2d2d2] px-3 py-2 rounded hover:bg-[#c0c0c0]"
                    >
                      {item.name} — ${item.price}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-6">
            Payment
          </h2>

          <p className="mb-4 text-md">
            Complete your payment securely to proceed with your selected service.
          </p>

          <div className="space-y-4">
            <input
              placeholder="Card Holder"
              className="w-full bg-[#d2d2d2] border border-white/10 px-4 py-3 rounded-lg outline-none"
            />
            <input
              placeholder="Card Number"
              className="w-full bg-[#d2d2d2] border border-white/10 px-4 py-3 rounded-lg outline-none"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="MM / YY"
                className="bg-[#d2d2d2] border border-white/10 px-4 py-3 rounded-lg outline-none"
              />
              <input
                placeholder="CVV"
                className="bg-[#d2d2d2] border border-white/10 px-4 py-3 rounded-lg outline-none"
              />
            </div>

            <button className="w-full mt-4 bg-[#3a2a1a] hover:bg-[#4a3824] transition text-white py-3 rounded-lg font-medium">
              Pay now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
