import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kontour Studios — Clarity first. Then the system.",
  description:
    "Kontour Studios is a marketing agency and creative studio building clear brand systems for modern market presence. Strategy, identity and communication shaped into one clear brand system.",
  keywords: [
    "brand strategy",
    "visual identity",
    "marketing agency",
    "creative studio",
    "brand system",
  ],
  openGraph: {
    title: "Kontour Studios — Clarity first. Then the system.",
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
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-kontour-black text-soft-white antialiased selection:bg-signal-red selection:text-soft-white">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
