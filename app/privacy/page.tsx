import type { Metadata } from "next";
import Link from "next/link";
import {
  PrivacyDocumentBody,
  TermsDocumentBody,
} from "@/components/legal/PolicyDocumentBodies";

export const metadata: Metadata = {
  title: "약관 및 정책 — Heart링크",
  description:
    "Heart링크 이용약관, 개인정보처리방침. 서비스 이용 규정 및 개인정보 수집·이용·보호 안내.",
};

const navItems = [
  { id: "terms", number: "01", label: "이용약관" },
  { id: "privacy", number: "02", label: "개인정보처리방침" },
] as const;

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/"
            className="font-display font-semibold text-lg text-gray-900"
          >
            Heart<span className="text-heart-500">Link</span>
          </Link>
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          약관 및 정책
        </h1>
        <p className="text-gray-500 mt-2">최종 수정일: 2025년 3월</p>

        <nav className="mt-8 flex flex-wrap gap-3" aria-label="정책 목차">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-800 font-medium text-sm hover:bg-heart-100 hover:text-heart-700 transition-colors"
            >
              <span className="text-heart-600 font-semibold">{item.number}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-16">
          <section id="terms" className="scroll-mt-24">
            <TermsDocumentBody />
          </section>

          <section id="privacy" className="scroll-mt-24">
            <PrivacyDocumentBody />
          </section>
        </div>

        <p className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-heart-600 font-medium hover:underline">
            ← Heart링크로 돌아가기
          </Link>
        </p>
      </article>
    </div>
  );
}
