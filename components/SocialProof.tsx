"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "활성 사용자" },
  { value: "5,000+", label: "성사된 매칭" },
  { value: "50k+", label: "주고받은 메시지" },
];

const testimonials = [
  {
    quote:
      "끝없는 인사만 하다 지쳤는데, 하트바이브 음성 통화 덕분에 만나기 전에 진짜로 알아갈 수 있었어요. 한 달 만에 제 사람을 만났습니다.",
    name: "김서연",
    role: "3개월 전 매칭",
  },
  {
    quote:
      "MBTI랑 지역 필터가 진짜 시간을 아껴줘요. 피드에 나오는 사람들이 다 맞는 느낌이고, 처음으로 데이팅 앱이 부담스럽지 않았어요.",
    name: "이준호",
    role: "출시 때부터 이용 중",
  },
  {
    quote:
      "실시간 채팅하고 둘 다 준비됐을 때 통화할 수 있어서 안전하고 자연스러웠어요. 답장 며칠 기다리기 없이 좋았습니다.",
    name: "박지우",
    role: "연애 중",
  },
];

export function SocialProof() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-heart-600">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl font-bold text-gray-900"
          >
            진짜 사람, 진짜 인연
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-2 max-w-xl mx-auto"
          >
            스와이프 피로에서 벗어나 진짜 인연을 찾을 준비가 된 수천 명과 함께하세요.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100"
            >
              <p className="text-gray-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 커플 매칭 사진 배너 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl overflow-hidden relative h-64 sm:h-80"
        >
          <img
            src="/avatars/korean/couple1.jpg"
            alt="하트바이브 커플 매칭"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 sm:px-12">
            <p className="text-white/80 text-sm font-medium mb-1">실제 매칭 커플</p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              오늘도 누군가의<br />인연이 시작됩니다
            </h3>
            <p className="text-white/70 mt-2 text-sm">하트바이브에서 만난 실제 커플</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
