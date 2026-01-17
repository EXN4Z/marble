"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const isUsernameValid = username.length >= 5;
  const isPasswordValid = password.length >= 8;

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      <div
        className="
          pointer-events-none
          absolute inset-[-50%]
          bg-[linear-gradient(to_right,rgba(140,124,77,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,124,77,0.15)_1px,transparent_1px)]
          bg-size-[90px_90px]
          rotate-12
        "
      />
      <div className="relative z-10 max-w-5xl w-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-4xl p-8 flex flex-row items-center gap-12 overflow-hidden">
        <div
          className="
            pointer-events-none
            absolute
            -top-40 -left-40
            md:w-205 md:h-155
            w-190.5 h-115.5
            bg-linear-to-b
            from-[#d6c28f]/90
            via-[#8c7c4d]/70
            to-transparent
            blur-[60px]
            rounded-full
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-50
            -right-50
            md:w-155 md:h-90
            w-190.5 h-65.5
            bg-linear-to-br
            from-[#6b5e3c]/90
            via-[#3a2a1a]/70
            to-transparent
            blur-[120px]
            rounded-full
          "
        />

        <div className="
          pointer-events-none
          absolute inset-0
          bg-linear-to-tr
          from-white/25
          via-white/10
          to-transparent
          rounded-4xl
        " />

        <div className="relative z-10 flex flex-row items-center gap-12 w-full">
          <Image
            className="rounded-4xl w-125 hidden md:block"
            src="/images/image.png"
            alt="Hero Image"
            width={400}
            height={400}
          />

          <form className="space-y-5 mx-auto md:w-full text-center" onSubmit={(e) => { e.preventDefault(); router.push('/'); }}>
            <Image
              className="w-50 mb-5 mx-auto"
              src="/images/logo3.png"
              alt="Logo"
              width={200}
              height={200}
            />

            <div>
              <label className="block text-sm font-medium text-black text-left">
                Email
              </label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="mt-1 block px-3 py-2 border border-black/30 bg-white/10 text-black rounded-3xl w-full focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black text-left">
                Username
              </label>
              <input
                type="text"
                placeholder="Example_User"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block px-3 py-2 border border-black/30 bg-white/10 text-black rounded-3xl w-full focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black text-left">
                Password
              </label>
              <input
                type="password"
                placeholder="• • • • • • • • "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block px-3 py-2 border border-black/30 bg-white/10 text-black rounded-3xl w-full focus:outline-none"
              />
            </div>

            <div className="space-y-2 text-sm text-gray-500 text-left">
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={isUsernameValid} readOnly />
                <span>Username minimal 5 karakter</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={isPasswordValid} readOnly />
                <span>Password minimal 8 karakter</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span>
                  Saya setuju dengan <b>Privacy Policy</b>
                </span>
              </div>
            </div>

            <div className="my-4 text-left">
              <Link href="/" className="text-[#3a2a1a] hover:text-[#4a3824] transition">
                Back to home page
              </Link>
            </div>

            <button
              type="submit"
              className="
                w-full py-2 px-4 rounded-md
                text-white
                bg-[#3a2a1a]
                hover:bg-[#4a3824]
                transition
                cursor-pointer
              "
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
