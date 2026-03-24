"use client";

import Link from "next/link";
import { useLegalModal } from "@/components/LegalModalProvider";

export function Footer() {
  const { openTerms, openPrivacy } = useLegalModal();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="font-display font-semibold text-xl text-white"
            >
              Heart<span className="text-heart-400">Link</span>
            </Link>
            <p className="text-sm text-gray-400 mt-2 max-w-xs">
              나의 사람을 만나다. 스와이프, 매칭, 연결.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <button
              type="button"
              onClick={openTerms}
              className="text-sm hover:text-white transition-colors text-left"
            >
              이용약관
            </button>
            <button
              type="button"
              onClick={openPrivacy}
              className="text-sm hover:text-white transition-colors text-left"
            >
              개인정보처리방침
            </button>
            <a
              href="mailto:juongho1025@gmail.com"
              className="text-sm hover:text-white transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-sm text-gray-500">
          © {new Date().getFullYear()} Heart링크. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
