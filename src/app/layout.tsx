import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Organic Fertilizer",
  description:
    "Global Organic Fertilizer provides sustainable, eco-friendly solutions for agriculture, promoting healthy soil and environmentally conscious farming.",
  keywords: "organic fertilizer, sustainable agriculture, eco-friendly farming",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images: `${process.env.NEXT_PUBLIC_DOMAIN}/images/meta-image.png`,
  },
  icons: {
    apple: `${process.env.NEXT_PUBLIC_DOMAIN}/apple-touch-icon.png`,
  },
  manifest: "/manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
