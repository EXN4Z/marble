import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Travel Explorer",
  description: "Discover the world's hidden wonders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {/* NAVBAR */}
        <header className="border-b">
          <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>

            {/* Menu */}
            <ul className="hidden md:flex items-center gap-8 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-600">
                  Discover
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600">
                  About
                </Link>
              </li>
            </ul>

            {/* Action */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-sm">
                Sign in
              </button>
              <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
                Explore
              </button>
            </div>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER (placeholder dulu) */}
        <footer className="mt-24 py-10 text-center text-sm text-gray-500">
          © 2026 Travel Explorer
        </footer>
      </body>
    </html>
  );
}
