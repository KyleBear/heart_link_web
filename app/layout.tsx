import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HeartLink — Find Your Person. Swipe, Match, Connect.",
  description:
    "HeartLink is the dating app where real connections happen. Swipe to discover, match with people who get you, and chat or call in real time. Join 10,000+ users finding meaningful relationships.",
  keywords: [
    "dating app",
    "match",
    "chat",
    "voice call",
    "relationship",
    "HeartLink",
    "swipe",
  ],
  openGraph: {
    title: "HeartLink — Find Your Person",
    description:
      "Swipe, match, and connect with real people. Chat and voice call built in. Join thousands finding love.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HeartLink — Find Your Person",
    description: "Swipe, match, connect. Real dating, real conversations.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
