"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Swipe that matters",
    description:
      "Discover people who fit what you’re looking for. Filter by age, region, and MBTI so every card feels worth your time.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Match & chat in real time",
    description:
      "When you both like each other, the conversation starts right away. No waiting, no “hey” and ghost—just real back-and-forth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Voice calls built in",
    description:
      "Ready to hear their voice? Tap to call over the app with WebRTC—crystal clear, private, and no need to swap numbers first.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "You’re in control",
    description:
      "Block or report anyone in one tap. We take safety seriously so you can focus on connecting with people you trust.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-heart-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Everything you need to connect
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            From first swipe to first call—all inside one app, built for real relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-heart-100 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-heart-100 text-heart-600 flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
