import type { Metadata } from "next";
import { Inter, Lexend_Exa } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lexendExa = Lexend_Exa({
  subsets: ["latin"],
  variable: "--font-lexend-exa",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chasing Light Photography",
    template: "%s — Chasing Light Photography",
  },
  description:
    "Selected landscape, drone, and travel photographs. An editorial photography portfolio.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lexendExa.variable}`}>
      <body className="min-h-screen max-w-full overflow-x-hidden font-sans">
        <Header />
        <main className="min-w-0 max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
