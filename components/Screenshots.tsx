"use client";

import { motion } from "framer-motion";

const screens = [
  {
    label: "발견",
    ui: (
      <div className="h-full flex flex-col bg-gray-900 rounded-2xl overflow-hidden">
        <div className="p-4 flex gap-2">
          <div className="flex-1 h-9 bg-gray-700 rounded-full" />
          <div className="w-9 h-9 rounded-full bg-heart-500" />
        </div>
        <div className="flex-1 p-4 space-y-3">
          {[
            { img: "/avatars/korean/p_3775529.jpg", name: "지수", age: 24, loc: "서울" },
            { img: "/avatars/korean/p_2387400.jpg", name: "민지", age: 26, loc: "경기" },
            { img: "/avatars/korean/pm_11297502.jpg", name: "준호", age: 27, loc: "서울" },
          ].map((person, i) => (
            <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-gray-800">
              <img
                src={person.img}
                className="w-12 h-12 rounded-full object-cover"
                alt={person.name}
              />
              <div className="flex-1">
                <div className="text-white text-sm font-medium">
                  {person.name}, {person.age}
                </div>
                <div className="text-gray-400 text-xs">{person.loc}</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-heart-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-heart-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "매칭",
    ui: (
      <div className="h-full flex flex-col bg-gray-900 rounded-2xl overflow-hidden items-center justify-center p-6">
        <div className="w-full max-w-[200px] aspect-[3/4] rounded-2xl overflow-hidden relative">
          <img
            src="/avatars/korean/p_3237719.jpg"
            className="w-full h-full object-cover"
            alt="매칭 프로필"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="text-white font-medium text-sm">수현, 25</div>
            <div className="text-white/70 text-xs">서울 · ENFJ</div>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="w-14 h-14 rounded-full border-2 border-gray-500 flex items-center justify-center">
            <span className="text-2xl text-gray-500">✕</span>
          </div>
          <div className="w-14 h-14 rounded-full bg-heart-500 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "채팅 & 통화",
    ui: (
      <div className="h-full flex flex-col bg-gray-900 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex items-center gap-3">
          <img
            src="/avatars/korean/p_3775541.jpg"
            className="w-10 h-10 rounded-full object-cover"
            alt="채팅 상대"
          />
          <div className="flex-1">
            <div className="text-white text-sm font-medium">수현</div>
            <div className="text-green-400 text-xs">온라인</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-heart-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="flex justify-start gap-2 items-end">
            <img
              src="/avatars/korean/p_3775541.jpg"
              className="w-7 h-7 rounded-full object-cover flex-shrink-0"
              alt=""
            />
            <div className="rounded-2xl rounded-bl-md bg-gray-700 px-3 py-2">
              <div className="text-white text-xs">안녕하세요! 😊</div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-br-md bg-heart-500 px-3 py-2">
              <div className="text-white text-xs">반가워요! 어디 사세요?</div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-br-md bg-heart-500 px-3 py-2">
              <div className="text-white text-xs">저는 강남 쪽이에요 ☺️</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function Screenshots() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-heart-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            데이팅 방식에 맞춘 앱
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            발견, 매칭, 채팅&amp;통화—모두 한곳에서.
          </p>
          <p className="text-heart-600 font-semibold mt-2 text-base sm:text-lg">
            100% 무료매칭, 피드 작성으로 나에게 맞는 이성에게 어필
          </p>
        </motion.div>

        {/* 이벤트 배너 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 mx-auto max-w-xl"
        >
          <div className="bg-gradient-to-r from-heart-500 to-rose-500 rounded-2xl px-6 py-4 flex items-center justify-center gap-3 shadow-lg">
            <span className="text-xl">💑</span>
            <p className="text-white text-sm sm:text-base text-center leading-snug">
              현재 커플 매칭 실시간 이벤트 진행중&nbsp;
              <strong className="text-yellow-300">마감 임박</strong>
            </p>
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-300" />
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {screens.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-[240px] mx-auto">
                <div className="relative bg-gray-800 rounded-[2.5rem] p-2 shadow-xl border border-gray-700">
                  <div className="rounded-[2rem] overflow-hidden aspect-[9/19]">
                    {s.ui}
                  </div>
                </div>
              </div>
              <p className="font-medium text-gray-700 mt-4">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
