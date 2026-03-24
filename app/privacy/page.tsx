import type { Metadata } from "next";
import Link from "next/link";
import {
  PrivacyDocumentBody,
  TermsDocumentBody,
} from "@/components/legal/PolicyDocumentBodies";
import { LegalDocumentPdf } from "@/components/legal/LegalDocumentPdf";
import { LEGAL_PDF_URLS } from "@/components/legal/legalPdf";

export const metadata: Metadata = {
  title: "약관 및 정책 — Heart링크 (만 18세 이상 성인 전용)",
  description:
    "HeartLink는 만 18세 이상 성인 전용 서비스입니다. 이용약관, 개인정보처리방침 및 서비스 이용 규정 안내.",
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

        <div
          className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 sm:px-5 text-gray-800 text-sm leading-relaxed"
          role="note"
        >
          <p className="font-semibold text-gray-900 mb-2">이용 대상 (성인 전용)</p>
          <p>
            HeartLink는 만 18세 이상이며 법적 구속력 있는 계약을 체결할 수 있는 이용자만 이용할 수
            있습니다. 당사는 연령 요건 충족 여부를 확인하기 위한 절차를 운영할 수 있으며, 요건을
            충족하지 않는 경우 서비스 이용이 제한될 수 있습니다.
          </p>
        </div>

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
            <LegalDocumentPdf
              src={LEGAL_PDF_URLS.terms}
              title="이용약관 PDF"
              className="mt-10"
            />
          </section>

          <section id="privacy" className="scroll-mt-24">
            <PrivacyDocumentBody />
            <LegalDocumentPdf
              src={LEGAL_PDF_URLS.privacy}
              title="개인정보처리방침 PDF"
              className="mt-10"
            />
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
