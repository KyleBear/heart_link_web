"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Secure by design",
    description:
      "HeartLink runs on Firebase—industry-standard security, encrypted data, and reliable infrastructure so your conversations stay private.",
  },
  {
    title: "Block & report",
    description:
      "Unwanted attention? Block or report in one tap. Our team reviews reports quickly so the community stays safe and respectful.",
  },
  {
    title: "Privacy-first messaging",
    description:
      "Chat and call within the app. You choose when—or if—to share your number. We don’t sell your data to third parties.",
  },
];

export function SafetyTrust() {
  return (
    <section id="safety" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Safety & trust
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We take your safety seriously so you can focus on connecting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-heart-100 text-heart-600 flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
