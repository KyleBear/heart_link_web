"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-heart-600 font-medium text-sm uppercase tracking-wider mb-4"
          >
            Dating that feels real
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            Find your person.
            <br />
            <span className="text-heart-500">Not just another match.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Swipe with intention. Match with people who get you. Chat and call
            in real time—no games, no waiting. HeartLink is where connections
            turn into something more.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-heart-500 text-white font-semibold text-base hover:bg-heart-600 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-heart-500/25"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.003 1.003 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.636z" />
              </svg>
              Download for Android
            </a>
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-400 font-semibold text-base cursor-not-allowed"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              iOS Coming Soon
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-heart-200/50 to-heart-400/30 rounded-[3rem] blur-2xl" />
            <div className="relative w-[280px] sm:w-[300px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border border-gray-700">
              <div className="rounded-[2rem] overflow-hidden bg-gray-800 aspect-[9/19]">
                {/* Mock chat UI */}
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b border-gray-700 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-heart-500/80 flex items-center justify-center text-white font-bold text-sm">
                      J
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-20 bg-gray-600 rounded" />
                      <div className="h-2 w-16 bg-gray-700 rounded mt-1" />
                    </div>
                  </div>
                  <div className="flex-1 p-4 space-y-4">
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-gray-700 px-4 py-2">
                        <div className="h-2 w-32 bg-gray-500 rounded" />
                        <div className="h-2 w-24 bg-gray-500 rounded mt-2" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-br-md bg-heart-500 px-4 py-2">
                        <div className="h-2 w-28 bg-heart-400 rounded" />
                        <div className="h-2 w-20 bg-heart-400 rounded mt-2" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-br-md bg-heart-500 px-4 py-2">
                        <div className="h-2 w-36 bg-heart-400 rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-700 flex gap-2">
                    <div className="flex-1 h-10 bg-gray-700 rounded-full" />
                    <div className="w-10 h-10 rounded-full bg-heart-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
