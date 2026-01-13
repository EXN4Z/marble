import "./globals.css";

export const metadata = {
  title: "CarV - Wood Carving",
  description: "Make your wood crafts very interesting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
