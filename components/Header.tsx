"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link
            href="/"
            className="font-display font-semibold text-xl text-gray-900 tracking-tight"
          >
            Heart<span className="text-heart-500">Vibe</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-heart-600 transition-colors text-sm font-medium"
            >
              기능
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-heart-600 transition-colors text-sm font-medium"
            >
              이용 방법
            </Link>
            <Link
              href="#safety"
              className="text-gray-600 hover:text-heart-600 transition-colors text-sm font-medium"
            >
              안전
            </Link>
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-heart-500 text-white text-sm font-medium hover:bg-heart-600 transition-colors"
            >
              다운로드
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-4 border-t border-gray-100">
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-heart-600 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  기능
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-gray-600 hover:text-heart-600 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  이용 방법
                </Link>
                <Link
                  href="#safety"
                  className="text-gray-600 hover:text-heart-600 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  안전
                </Link>
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-heart-500 text-white font-medium"
                >
                  Android 다운로드
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
