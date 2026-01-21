"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const sections = ["home", "about", "service", "review", "contact"];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowArrow(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (id: string, label: string) => {
    const isActive = active === id;

    return (
      <a
        href={`#${id}`}
        className={`relative transition-colors
          hover:text-[#363636]
          ${isActive ? "text-black font-medium" : "text-black/70"}
          after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:bg-black after:transition-all
          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `}
        onClick={() => setOpen(false)}
      >
        {label}
      </a>
    );
  };

  return (
    <>
      <header className="">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo/black1.png"
              alt="CarV"
              width={150}
              height={40}
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 -mr-90">
            <li>{navItem("home", "Home")}</li>
            <li>{navItem("about", "About")}</li>
            <li>{navItem("service", "Service")}</li>
            <li>{navItem("review", "Review")}</li>
            <li>{navItem("contact", "Contact")}</li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <a href="/register" className="px-4 py-2 text-md">
              Sign Up
            </a>
            <a
              href="/login"
              className="px-4 py-2 rounded-full border border-black/40 hover:bg-[#3a2a1a] hover:text-white transition"
            >
              Log In
            </a>
          </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        </nav>

        <div
          className={`absolute top-16 right-6 bg-black/80 text-white backdrop-blur-md
          rounded-2xl p-6 flex flex-col gap-4 md:hidden transition-all duration-300
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#service" onClick={() => setOpen(false)}>Service</a>
          <a href="#review" onClick={() => setOpen(false)}>Review</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          
          <hr className="border-white/20" />
          
          <Link href="/register" onClick={() => setOpen(false)}>Sign Up</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Log In</Link>
        </div>

      </header>

      <div className="h-16" />

      <main>{children}</main>

      <footer className="bg-[#1c140d] text-white mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/logo/white1.png"
              alt="CarV"
              width={140}
              height={40}
            />
            <p className="mt-4 text-sm text-white/70">
              Handcrafted Wood, Timeless Art.  
              CarV brings handcrafted wood carving with passion and precision.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-white/70">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#review">Review</a></li>
              <li><a href="#contact">Contact</a></li>
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
      </footer>

      <a
        href="#home"
        className={`fixed bottom-6 right-6 z-50
          w-12 h-12 rounded-full
          bg-[#3a2a1a] text-white
          flex items-center justify-center
          shadow-lg
          transition-all duration-300
          hover:scale-110
          ${showArrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </a>
    </>
  );
}
