"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "발견",
    description:
      "나이, 지역, MBTI로 필터링된 프로필을 스와이프하세요. 가까운 사람, 조건에 맞는 사람을 만나보세요.",
  },
  {
    number: "2",
    title: "매칭",
    description:
      "마음에 드는 사람에게 좋아요를 보내세요. 서로 좋아요를 누르면 매칭되고, 바로 대화가 열립니다.",
  },
  {
    number: "3",
    title: "채팅 & 통화",
    description:
      "실시간으로 메시지를 보내거나 탭 한 번으로 음성 통화를 시작하세요. 번호 교환 없이 앱 안에서 모두 해결됩니다.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            하트바이브 이용 방법
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            프로필에서 대화까지 세 단계. 심플하게 설계되었습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-heart-200 to-transparent" />
              )}
              <div className="inline-flex w-24 h-24 rounded-full bg-gradient-heart border-2 border-heart-200 items-center justify-center mb-6">
                <span className="font-display text-2xl font-bold text-heart-600">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
