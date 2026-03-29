import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "계정 및 데이터 삭제 요청 — 하트바이브",
  description:
    "하트바이브 계정 및 관련 개인 데이터 삭제를 요청하는 방법을 안내합니다.",
  robots: "noindex",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/"
            className="font-display font-semibold text-lg text-gray-900"
          >
            Heart<span className="text-heart-500">Vibe</span>
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          계정 및 데이터 삭제 요청
        </h1>
        <p className="text-gray-500 mt-2">
          개인정보 보호법 및 하트바이브 개인정보처리방침에 따른 삭제 절차
        </p>

        {/* 안내 배너 */}
        <div
          className="mt-6 rounded-2xl border border-heart-200 bg-heart-50 px-4 py-4 sm:px-5 text-gray-800 text-sm leading-relaxed"
          role="note"
        >
          <p className="font-semibold text-gray-900 mb-1">
            삭제 요청 전 확인하세요
          </p>
          <p>
            계정 삭제 시 프로필, 매칭 이력, 채팅, 결제 정보 등 모든 데이터가
            영구적으로 삭제되며 복구할 수 없습니다.
          </p>
        </div>

        {/* 삭제 대상 데이터 */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-gray-900 mb-4">
            삭제되는 데이터
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "계정 정보 (이름, 이메일, 전화번호 등)",
              "프로필 사진 및 소개 내용",
              "스와이프·매칭 이력",
              "채팅 메시지 및 통화 기록",
              "결제 및 구독 이력",
              "앱 내 활동 로그 및 기기 정보",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-heart-100 text-heart-600 flex items-center justify-center text-xs font-bold"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 처리 절차 */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-gray-900 mb-4">
            삭제 요청 절차
          </h2>
          <ol className="space-y-4 text-sm text-gray-700">
            <li className="flex gap-4">
              <span className="shrink-0 w-7 h-7 rounded-full bg-heart-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </span>
              <div>
                <p className="font-medium text-gray-900">이메일로 요청 접수</p>
                <p className="mt-0.5 text-gray-500">
                  아래 이메일로 &ldquo;계정 삭제 요청&rdquo; 제목으로 메일을
                  보내주세요. 가입 시 사용한 이메일 주소 또는 전화번호를 함께
                  기재해 주세요.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-7 h-7 rounded-full bg-heart-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </span>
              <div>
                <p className="font-medium text-gray-900">본인 확인</p>
                <p className="mt-0.5 text-gray-500">
                  담당자가 본인 확인을 위해 회신 드릴 수 있습니다. 영업일 기준
                  2일 이내에 응답됩니다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 w-7 h-7 rounded-full bg-heart-600 text-white flex items-center justify-center text-xs font-bold">
                3
              </span>
              <div>
                <p className="font-medium text-gray-900">삭제 처리 완료</p>
                <p className="mt-0.5 text-gray-500">
                  확인 후 영업일 기준 7일 이내에 모든 데이터가 삭제되며,
                  완료 안내 메일이 발송됩니다.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* 이메일 CTA */}
        <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-6 text-center">
          <p className="text-sm text-gray-600 mb-3">
            삭제 요청 이메일을 보내주세요
          </p>
          <a
            href="mailto:juongho1025@gmail.com?subject=계정 삭제 요청"
            className="inline-flex items-center gap-2 rounded-xl bg-heart-600 px-6 py-3 text-sm font-semibold text-white hover:bg-heart-700 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            juongho1025@gmail.com
          </a>
          <p className="text-xs text-gray-400 mt-3">
            제목: &ldquo;계정 삭제 요청&rdquo; · 가입 이메일 또는 전화번호 기재
          </p>
        </section>

        {/* 법적 보존 항목 안내 */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">
            법적 의무로 보존되는 정보
          </h2>
          <p className="text-sm text-gray-600">
            전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법령에 따라
            일부 거래 기록은 법정 보존 기간(최대 5년) 동안 보관될 수
            있습니다. 해당 기간 이후에는 완전히 파기됩니다.
          </p>
        </section>

        <p className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-heart-600 font-medium hover:underline">
            ← 하트바이브로 돌아가기
          </Link>
        </p>
      </article>
    </div>
  );
}
