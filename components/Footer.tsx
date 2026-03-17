import Link from "next/link";


export function Footer() {
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
              Find your person. Swipe, match, connect.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <Link
              href="/privacy"
              className="text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:hello@heartlink.app"
              className="text-sm hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-sm text-gray-500">
          © {new Date().getFullYear()} HeartLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
