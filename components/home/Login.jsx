import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 md:py-4">
      <div className="max-w-270 h-150 mx-auto bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-4xl shadow-2xl flex flex-row items-center gap-12">
        <Image
          className="rounded-4xl max-w-90 hidden md:block"
          src="/images/gambar.jpg"
          alt="Hero Image"
          width={400}
          height={400}
        />

        <form className="space-y-5 mx-auto text-white text-center md:w-full">
          <h2 className="text-3xl font-bold mb-6">Sign Up Now</h2>

          <div>
            <label className="block text-sm font-medium text-gray-400 text-left">
              Email
            </label>
            <input
              type="text"
              placeholder="Example@gmail.com"
              className="mt-1 block px-3 py-2 border border-gray-300 rounded-3xl w-70 md:w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 text-left">
              Username
            </label>
            <input
              type="text"
              placeholder="Example_User"
              className="mt-1 block px-3 py-2 border border-gray-300 rounded-3xl w-70 md:w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 text-left">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 block px-3 py-2 border border-gray-300 rounded-3xl w-70 md:w-full"
            />
          </div>

          {/* Checklist Info */}
          <div className="space-y-2 text-sm text-gray-400 text-left">
            <div className="flex items-center gap-2">
              <input type="checkbox" disabled />
              <span>Username minimal 5 karakter</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" disabled />
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
          <Link href="/" className="text-white hover:text-gray-300 text-left">Back to home page</Link>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md text-white bg-[#191818] hover:bg-[#131212] transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
