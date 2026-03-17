"use client";

import { motion } from "framer-motion";

const screens = [
  {
    label: "Discover",
    ui: (
      <div className="h-full flex flex-col bg-gray-900 rounded-2xl overflow-hidden">
        <div className="p-4 flex gap-2">
          <div className="flex-1 h-9 bg-gray-700 rounded-full" />
          <div className="w-9 h-9 rounded-full bg-heart-500" />
        </div>
        <div className="flex-1 p-4 space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-gray-800">
              <div className="w-12 h-12 rounded-full bg-heart-400/50" />
              <div className="flex-1">
                <div className="h-2.5 w-24 bg-gray-600 rounded" />
                <div className="h-2 w-16 bg-gray-700 rounded mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Swipe",
    ui: (
      <div className="h-full flex flex-col bg-gray-900 rounded-2xl overflow-hidden items-center justify-center p-6">
        <div className="w-full max-w-[200px] aspect-[3/4] rounded-2xl bg-gradient-to-b from-heart-400/30 to-heart-600/30 border-2 border-heart-500/50 flex flex-col items-center justify-end p-4">
          <div className="w-16 h-16 rounded-full bg-gray-700 mb-4" />
          <div className="h-3 w-20 bg-gray-600 rounded mb-2" />
          <div className="h-2 w-14 bg-gray-600 rounded" />
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
    label: "Chat & call",
    ui: (
      <div className="h-full flex flex-col bg-gray-900 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-heart-500/80" />
          <div className="flex-1">
            <div className="h-3 w-24 bg-gray-600 rounded" />
            <div className="h-2 w-16 bg-gray-700 rounded mt-1" />
          </div>
          <div className="w-10 h-10 rounded-full bg-heart-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-gray-700 px-4 py-2 max-w-[85%]">
              <div className="h-2 w-28 bg-gray-500 rounded" />
              <div className="h-2 w-20 bg-gray-500 rounded mt-2" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-br-md bg-heart-500 px-4 py-2 max-w-[85%]">
              <div className="h-2 w-24 bg-heart-400 rounded" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-br-md bg-heart-500 px-4 py-2 max-w-[85%]">
              <div className="h-2 w-32 bg-heart-400 rounded" />
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
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Built for the way you date
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Discover, swipe, match, and talk—all in one place.
          </p>
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
