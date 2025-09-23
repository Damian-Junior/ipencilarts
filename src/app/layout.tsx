import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(component)/(header)/header";
import Footer from "./(component)/(footer)/footer";
import { CartProvider } from "./(component)/(Cart)/cartContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ipencilarts",
  description:
    "Discover unique artworks, fine art prints, and original pieces at ipencilarts. We bring creativity to life with high-quality, hand-crafted art designed to inspire and elevate your space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
