import Image from "next/image";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-transparent mt-2">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <Image src="/images/logo.png" alt="" width={150} height={40} />
          </Link>

          <ul className="hidden md:flex items-center gap-8 ml-100">
            <li><Link href="/" className="hover:text-gray-600">Discover</Link></li>
            <li><Link href="/" className="hover:text-gray-600">Destinations</Link></li>
            <li><Link href="/" className="hover:text-gray-600">Stories</Link></li>
            <li><Link href="/" className="hover:text-gray-600">About</Link></li>
          </ul>

          <div className="flex items-center gap-6">
            <button className="hidden md:block text-sm">Sign in</button>
            <button className="px-4 py-2 rounded-full bg-white text-black text-sm">
              Log in
            </button>
          </div>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}
