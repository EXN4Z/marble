"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b border-transparent mt-2 relative">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <Image src="/images/logo3.png" alt="CarV" width={150} height={40} />
          </Link>

          <ul className="hidden md:flex items-center gap-8 -mr-90">
            <li><a href="#home" className="hover:text-[#363636]">Home</a></li>
            <li><a href="#about" className="hover:text-[#363636]">About</a></li>
            <li><a href="#service" className="hover:text-[#363636]">Service</a></li>
            <li><a href="#review" className="hover:text-[#363636]">Review</a></li>
            <li><a href="#contact" className="hover:text-[#363636]">Contact</a></li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-4 py-2 text-md">Sign Up</Link>
            <Link
              href="/login"
              className="px-4 py-2 rounded-full border border-black/40 hover:bg-[#3a2a1a] hover:text-white transition"
            >
              Log In
            </Link>
          </div>

          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
        </nav>

        <div
          className={`absolute top-16 right-6 bg-black/80 text-white backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 md:hidden transition-all duration-300 ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#service" onClick={() => setOpen(false)}>Service</a>
          <a href="#review" onClick={() => setOpen(false)}>Review</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <hr className="border-white/20" />
          <Link href="/login" onClick={() => setOpen(false)}>Sign Up</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Log In</Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-[#1c140d] text-white mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <Image src="/images/logo_white.png" alt="CarV" width={140} height={40} />
            <p className="mt-4 text-sm text-white/70">
              Handcrafted Wood, Timeless Art.  
              CarV brings handcrafted wood carving with passion and precision.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-white/70">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#service" className="hover:text-white">Service</a></li>
              <li><a href="#review" className="hover:text-white">Review</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Workshop</h3>
            <p className="text-white/70 text-sm">
              Semarang, Indonesia  
              <br />
              Mon – Sat | 08.00 – 17.00
            </p>
            <div className="flex gap-4 mt-4 text-sm text-white/70">
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3a2a1a] hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3a2a1a] hover:scale-110 transition">
                <FaFacebookF />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3a2a1a] hover:scale-110 transition">
                <FaTiktok />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3a2a1a] hover:scale-110 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 text-center py-6 text-sm text-white/50">
          © 2026 CarV Wood Carving. All rights reserved.
        </div>
      </footer>
    </>
  );
}
