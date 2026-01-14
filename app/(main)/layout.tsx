"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
            <Image src="/images/logo.png" alt="" width={150} height={40} />
          </Link>

          <ul className="hidden md:flex items-center gap-8 ml-100">
            <li><Link href="/">Discover</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/">Stories</Link></li>
            <li><Link href="/">About</Link></li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-4 py-2 text-md">Sign Up</Link>
            <Link href="/login" className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">Log In</Link>
          </div>

          <button className="md:hidden text-2xl"onClick={() => setOpen(!open)}>☰</button>
        </nav>

        <div className={`absolute top-16 right-6 bg-black/80 text-white backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 md:hidden transition-all duration-300 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
          <Link href="/" onClick={() => setOpen(false)}>Discover</Link>
          <Link href="/service" onClick={() => setOpen(false)}>Service</Link>
          <Link href="/" onClick={() => setOpen(false)}>Stories</Link>
          <Link href="/" onClick={() => setOpen(false)}>About</Link>
          <hr className="border-white/20" />
          <Link href="/login" onClick={() => setOpen(false)}>Sign Up</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Log In</Link>
        </div>
      </header>

      <main>{children}</main>

    </>
  );
}
