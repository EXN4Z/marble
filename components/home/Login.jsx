import Image from "next/image";

export default function Login() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-4">
      <div className="max-w-270 h-130 mx-auto bg-white p-8 rounded-4xl shadow-lg flex flex-row items-center gap-12">
        <Image
          className="rounded-4xl max-w-80"
          src="/images/gambar.jpg"
          alt="Hero Image"
          width={400}
          height={400}
        />

        <form className="space-y-4 mx-auto text-black text-center">
          <h2 className="text-3xl font-bold mb-6">Sign Up Now</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Email
            </label>
            <input
              type="text"
              placeholder="Example@gmail.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Username
            </label>
            <input
              type="text"
              placeholder="Example_User"
              className="mt-1 block w-120 px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Checklist Info */}
          <div className="space-y-2 text-sm text-gray-600 text-left">
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

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
