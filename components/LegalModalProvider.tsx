"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  PrivacyDocumentBody,
  TermsDocumentBody,
} from "@/components/legal/PolicyDocumentBodies";

type LegalModal = "terms" | "privacy" | null;

const LegalModalContext = createContext<{
  openTerms: () => void;
  openPrivacy: () => void;
} | null>(null);

export function useLegalModal() {
  const ctx = useContext(LegalModalContext);
  if (!ctx) {
    throw new Error("useLegalModal must be used within LegalModalProvider");
  }
  return ctx;
}

export function LegalModalProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<LegalModal>(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (active) {
      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
      };
    }
  }, [active, close]);

  const value = {
    openTerms: () => setActive("terms"),
    openPrivacy: () => setActive("privacy"),
  };

  const modal =
    mounted &&
    createPortal(
      <AnimatePresence>
        {active && (
          <>
            <motion.button
              type="button"
              key="legal-backdrop"
              aria-label="닫기"
              className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />
            <div
              className="fixed inset-0 z-[210] flex items-end justify-center sm:items-center p-0 sm:p-4 pointer-events-none"
              role="presentation"
            >
              <motion.div
                key="legal-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="pointer-events-auto relative w-full sm:max-w-3xl max-h-[min(92vh,880px)] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
              >
                <span id={titleId} className="sr-only">
                  {active === "terms" ? "이용약관" : "개인정보처리방침"}
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                  aria-label="닫기"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="overflow-y-auto overscroll-contain px-5 sm:px-8 pt-14 pb-8 text-left">
                  <p className="text-gray-500 text-sm mb-4">
                    최종 수정일: 2025년 3월
                  </p>
                  {active === "terms" ? (
                    <TermsDocumentBody />
                  ) : (
                    <PrivacyDocumentBody />
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <LegalModalContext.Provider value={value}>
      {children}
      {modal}
    </LegalModalContext.Provider>
  );
}
