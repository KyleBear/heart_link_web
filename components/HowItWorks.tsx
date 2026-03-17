"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discover",
    description:
      "Swipe through profiles filtered by age, region, and MBTI. See who’s nearby and who fits what you’re looking for.",
  },
  {
    number: "2",
    title: "Match",
    description:
      "Like who you’re into. When they like you back, it’s a match—and the chat opens so you can say hi right away.",
  },
  {
    number: "3",
    title: "Chat & call",
    description:
      "Message in real time or tap to start a voice call. No need to exchange numbers—everything stays in the app.",
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
            How HeartLink works
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Three steps from profile to conversation. Simple by design.
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
