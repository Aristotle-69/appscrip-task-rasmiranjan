import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "Discover Our Products | Appscrip",
  description:
    "Explore our collection of fashion, jewellery, electronics and lifestyle products.",
  keywords: [
    "products",
    "fashion",
    "jewellery",
    "electronics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}