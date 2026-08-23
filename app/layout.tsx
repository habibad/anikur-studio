import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "anikur Studios — Clarity first. Then the system.",
  description:
    "anikur Studios is a marketing agency and creative studio building clear brand systems for modern market presence. Strategy, identity and communication shaped into one clear brand system.",
  keywords: [
    "brand strategy",
    "visual identity",
    "marketing agency",
    "creative studio",
    "brand system",
  ],
  openGraph: {
    title: "anikur Studios — Clarity first. Then the system.",
    description:
      "Strategy, identity and communication shaped into one clear brand system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-anikur-black text-soft-white antialiased selection:bg-signal-red selection:text-soft-white" suppressHydrationWarning>
        <div className="grain-overlay" />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
