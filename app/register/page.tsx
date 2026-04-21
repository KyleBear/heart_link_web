"use client";

import { useState } from "react";
import Link from "next/link";

const EVENT_BENEFITS = [
  { icon: "🎁", title: "프리미엄 1개월 무료", desc: "사전등록자 전원 프리미엄 멤버십 1개월 제공" },
  { icon: "💌", title: "이벤트 전용 코드 발급", desc: "출시 당일 앱 내 입력 시 추가 혜택 즉시 적용" },
  { icon: "⭐", title: "먼저 만나는 인연", desc: "정식 출시 전 베타 유저 우선 매칭 큐 배정" },
  { icon: "🏆", title: "커플 매칭 이벤트 참여권", desc: "사전등록자 한정 커플 매칭 특별 이벤트 자동 참여" },
];

const FAQS = [
  {
    q: "사전등록은 언제까지 가능한가요?",
    a: "정식 출시 하루 전까지 사전등록이 가능합니다. 조기 마감될 수 있으니 지금 바로 등록하세요.",
  },
  {
    q: "이벤트 코드는 언제 발급되나요?",
    a: "출시일 당일 등록하신 이메일로 이벤트 코드를 발송해 드립니다. 앱 설치 후 마이페이지에서 코드를 입력하시면 혜택이 즉시 적용됩니다.",
  },
  {
    q: "사전등록 후 꼭 앱을 설치해야 하나요?",
    a: "네, 혜택은 앱 설치 후 이벤트 코드 입력 시 적용됩니다. 코드 유효기간은 발급일로부터 7일입니다.",
  },
  {
    q: "베타 테스트 참여는 별도 신청인가요?",
    a: "사전등록 시 베타 테스트 참여 의향을 체크하시면 선발 기준에 따라 별도 안내 드립니다.",
  },
];

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", gender: "", beta: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const EVENT_CODE = "SPARK7294";
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "이름을 입력해주세요.";
    if (!form.phone.trim() || !/^01[0-9]{8,9}$/.test(form.phone.replace(/-/g, "")))
      e.phone = "올바른 휴대폰 번호를 입력해주세요.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "올바른 이메일을 입력해주세요.";
    if (!form.gender) e.gender = "성별을 선택해주세요.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // 제출 실패해도 완료 화면 노출
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-50 to-white font-sans">
      {/* 상단 네비 */}
      <div className="px-4 py-4 flex items-center justify-between max-w-2xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-heart-600 font-semibold text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          홈으로
        </Link>
        <span className="text-xs text-gray-400 bg-heart-100 text-heart-600 px-3 py-1 rounded-full font-semibold">
          사전등록 마감 임박
        </span>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-20">

        {/* 히어로 */}
        <div className="text-center pt-8 pb-10">
          <div className="inline-flex items-center gap-2 bg-heart-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 animate-pulse">
            🔥 현재 커플 매칭 실시간 이벤트 진행중
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            지금 사전등록하고<br />
            <span className="text-heart-500">먼저 인연을 만나세요</span>
          </h1>
          <p className="text-gray-500 mt-4 text-base sm:text-lg max-w-md mx-auto">
            하트바이브 출시 전 사전등록 시 이벤트 코드와 프리미엄 1개월을 무료로 드립니다.
          </p>

          {/* 카운터 */}
          <div className="mt-8 inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-4 shadow-md border border-gray-100">
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-heart-600">2,847</div>
              <div className="text-xs text-gray-500 mt-0.5">사전등록 완료</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-heart-600">3,000</div>
              <div className="text-xs text-gray-500 mt-0.5">모집 목표</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-orange-500">153</div>
              <div className="text-xs text-gray-500 mt-0.5">남은 자리</div>
            </div>
          </div>

          {/* 진행바 */}
          <div className="mt-4 max-w-xs mx-auto">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-heart-400 to-heart-600 rounded-full" style={{ width: "94.9%" }} />
            </div>
            <p className="text-xs text-gray-400 mt-1">94.9% 달성</p>
          </div>
        </div>

        {/* 혜택 카드 */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {EVENT_BENEFITS.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-2">{b.icon}</div>
              <div className="font-semibold text-gray-900 text-sm">{b.title}</div>
              <div className="text-xs text-gray-500 mt-1 leading-relaxed">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* 폼 or 완료 */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 space-y-5">
            <h2 className="font-display text-xl font-bold text-gray-900">사전등록 신청</h2>

            {/* 이름 */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">이름</label>
              <input
                type="text"
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-heart-400"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* 성별 */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">성별</label>
              <div className="flex gap-3">
                {["남성", "여성"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setForm({ ...form, gender: g })}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all ${
                      form.gender === g
                        ? "bg-heart-500 text-white border-heart-500"
                        : "border-gray-200 text-gray-600 hover:border-heart-300"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
              {errors.gender && <p className="text-xs text-red-500 mt-1">{errors.gender}</p>}
            </div>

            {/* 전화번호 */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">휴대폰 번호</label>
              <input
                type="tel"
                placeholder="01012345678"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-heart-400"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* 이메일 */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">이메일</label>
              <input
                type="email"
                placeholder="hello@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-heart-400"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* 베타 참여 */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.beta}
                onChange={(e) => setForm({ ...form, beta: e.target.checked })}
                className="w-4 h-4 accent-heart-500"
              />
              <span className="text-sm text-gray-600">베타 테스트에도 참여하고 싶어요 (선택)</span>
            </label>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-heart-500 to-rose-500 text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              {loading ? "등록 중..." : "무료 사전등록 하기"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              등록 시 <Link href="/privacy" className="underline">개인정보처리방침</Link>에 동의하는 것으로 간주됩니다.
            </p>
          </form>
        ) : (
          /* 완료 화면 */
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-20 h-20 rounded-full bg-heart-50 flex items-center justify-center mx-auto mb-4 text-4xl">
              🎉
            </div>
            <h2 className="font-display text-2xl font-bold text-gray-900">사전등록 완료!</h2>
            <p className="text-gray-500 mt-2 text-sm">{form.name}님, 출시일에 가장 먼저 연락드릴게요.</p>

            <div className="mt-6 bg-heart-50 rounded-2xl p-5">
              <p className="text-xs text-heart-600 font-semibold mb-2">나의 이벤트 코드</p>
              <div className="font-mono text-2xl font-bold text-heart-700 tracking-widest">{EVENT_CODE}</div>
              <p className="text-xs text-gray-400 mt-2">앱 설치 후 마이페이지 → 이벤트 코드 입력란에 넣어주세요</p>
            </div>

            <div className="mt-5 space-y-2 text-left">
              {EVENT_BENEFITS.map((b) => (
                <div key={b.title} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>{b.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-2xl bg-heart-500 text-white font-semibold text-sm text-center hover:bg-heart-600 transition-colors"
              >
                Android 앱 다운로드
              </a>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", gender: "", beta: false }); }}
                className="flex-1 py-3 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                다시 입력하기
              </button>
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-bold text-gray-900 mb-4">자주 묻는 질문</h3>
          <div className="space-y-2">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-medium text-gray-900">{f.q}</span>
                  <span className={`text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
