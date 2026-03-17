"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Active users" },
  { value: "5,000+", label: "Matches made" },
  { value: "50k+", label: "Messages sent" },
];

const testimonials = [
  {
    quote:
      "I was tired of endless small talk. HeartLink’s voice calls made it easy to actually get to know someone before meeting. Found my person in a month.",
    name: "Sarah M.",
    role: "Matched 3 months ago",
  },
  {
    quote:
      "The MBTI and region filters saved me so much time. Everyone on my feed actually felt relevant. First dating app that didn’t feel like a second job.",
    name: "James K.",
    role: "User since launch",
  },
  {
    quote:
      "Real-time chat and the option to call when we were both ready made everything feel safe and natural. No more waiting days for a reply.",
    name: "Alex T.",
    role: "In a relationship",
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
            Real people, real connections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-2 max-w-xl mx-auto"
          >
            Join thousands who are done with swipe fatigue and ready for something real.
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
      </div>
    </section>
  );
}
