import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "아동 성 착취·학대(CSAE) 방지 기준 — 하트바이브",
  description:
    "하트바이브의 아동 성적 학대 및 착취(CSAE) 방지를 위한 표준 정책 및 신고 절차를 안내합니다.",
};

const standards = [
  {
    number: "01",
    title: "성인 전용 서비스",
    body: "하트바이브는 만 18세 이상 성인만 가입 및 이용할 수 있습니다. 가입 절차에서 연령 확인을 실시하며, 미성년자로 확인되는 경우 즉시 계정을 정지하고 관련 데이터를 삭제합니다.",
  },
  {
    number: "02",
    title: "CSAE 콘텐츠 무관용 원칙",
    body: "아동 성적 학대·착취(CSAE) 관련 콘텐츠의 생성, 업로드, 공유, 배포를 엄격히 금지합니다. 해당 콘텐츠가 발견되는 즉시 삭제하고, 계정을 영구 정지하며 관련 법령에 따라 당국에 신고합니다.",
  },
  {
    number: "03",
    title: "NCMEC 및 관련 기관 신고",
    body: "CSAE 콘텐츠가 확인되는 경우 미국 실종·착취아동센터(NCMEC) CyberTipline 및 국내 방송통신심의위원회·경찰청 사이버수사대에 즉시 신고합니다.",
  },
  {
    number: "04",
    title: "사용자 신고 체계",
    body: "모든 이용자는 앱 내 신고 기능을 통해 CSAE 의심 콘텐츠 또는 행동을 즉시 신고할 수 있습니다. 신고된 사안은 24시간 이내에 검토됩니다.",
  },
  {
    number: "05",
    title: "임직원 교육",
    body: "콘텐츠 검토 담당 임직원은 CSAE 식별 및 신고 절차에 관한 정기 교육을 이수합니다. 교육 내용은 최신 법령 및 업계 기준에 맞춰 주기적으로 업데이트됩니다.",
  },
];

export default function CsaeStandardsPage() {
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
          아동 성 착취·학대(CSAE) 방지 기준
        </h1>
        <p className="text-gray-500 mt-2">Child Safety Standards — HeartVibe</p>

        {/* 핵심 원칙 배너 */}
        <div
          className="mt-6 rounded-2xl border border-heart-200 bg-heart-50 px-4 py-4 sm:px-5 text-gray-800 text-sm leading-relaxed"
          role="note"
        >
          <p className="font-semibold text-gray-900 mb-1">
            하트바이브의 핵심 원칙
          </p>
          <p>
            하트바이브는 아동의 안전을 최우선 가치로 삼습니다. CSAE 콘텐츠에
            대한 무관용 원칙을 적용하며, 관련 법령 및 Google Play 아동 안전
            정책을 완전히 준수합니다.
          </p>
        </div>

        {/* 목차 */}
        <nav className="mt-8 flex flex-wrap gap-3" aria-label="기준 목차">
          {standards.map((s) => (
            <a
              key={s.number}
              href={`#std-${s.number}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-800 font-medium text-sm hover:bg-heart-100 hover:text-heart-700 transition-colors"
            >
              <span className="text-heart-600 font-semibold">{s.number}</span>
              {s.title}
            </a>
          ))}
        </nav>

        {/* 기준 본문 */}
        <div className="mt-14 space-y-10">
          {standards.map((s) => (
            <section key={s.number} id={`std-${s.number}`} className="scroll-mt-24">
              <h2 className="font-display text-xl font-semibold text-gray-900 flex items-center gap-3">
                <span className="text-heart-500 text-base font-bold">
                  {s.number}
                </span>
                {s.title}
              </h2>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {s.body}
              </p>
            </section>
          ))}
        </div>

        {/* 신고 연락처 */}
        <section className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-6">
          <h2 className="font-display text-lg font-semibold text-gray-900 mb-4">
            CSAE 신고 연락처
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-semibold text-heart-600 w-36">
                운영팀 직접 신고
              </span>
              <a
                href="mailto:juongho1025@gmail.com?subject=CSAE 신고"
                className="text-heart-600 hover:underline break-all"
              >
                juongho1025@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-semibold text-heart-600 w-36">
                NCMEC CyberTipline
              </span>
              <span className="text-gray-600">
                www.missingkids.org/gethelpnow/cybertipline
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-semibold text-heart-600 w-36">
                방송통신심의위원회
              </span>
              <span className="text-gray-600">불법정보신고 1377</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 font-semibold text-heart-600 w-36">
                경찰청 사이버수사대
              </span>
              <span className="text-gray-600">ecrm.police.go.kr / 182</span>
            </li>
          </ul>
        </section>

        <p className="mt-4 text-xs text-gray-400">
          최종 수정일: 2026년 3월 · 본 정책은 Google Play Developer Program
          Policy(아동 안전) 요건을 충족하기 위해 작성되었습니다.
        </p>

        <p className="mt-10 pt-8 border-t border-gray-100">
          <Link href="/" className="text-heart-600 font-medium hover:underline">
            ← 하트바이브로 돌아가기
          </Link>
        </p>
      </article>
    </div>
  );
}
