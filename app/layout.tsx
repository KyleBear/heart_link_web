import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import { LegalModalProvider } from "@/components/LegalModalProvider";
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
  title: "Heart링크 — 나의 사람을 만나다. 스와이프, 매칭, 연결.",
  description:
    "Heart링크는 진짜 인연이 만들어지는 데이팅 앱입니다. 스와이프로 발견하고, 나를 알아주는 사람과 매칭되고, 실시간으로 채팅·통화하세요. 의미 있는 관계를 찾는 1만 명 이상과 함께하세요.",
  keywords: [
    "데이팅 앱",
    "매칭",
    "채팅",
    "음성 통화",
    "연애",
    "Heart링크",
    "스와이프",
  ],
  openGraph: {
    title: "Heart링크 — 나의 사람을 만나다",
    description:
      "진짜 사람과 스와이프, 매칭, 연결. 채팅과 음성 통화가 앱 안에. 사랑을 찾는 수천 명과 함께하세요.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heart링크 — 나의 사람을 만나다",
    description: "스와이프, 매칭, 연결. 진짜 데이팅, 진짜 대화.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-sans min-h-screen">
        <LegalModalProvider>{children}</LegalModalProvider>
      </body>
    </html>
  );
}
