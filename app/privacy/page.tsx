import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — HeartLink",
  description:
    "HeartLink Privacy Policy. How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/"
            className="font-display font-semibold text-lg text-gray-900"
          >
            Heart<span className="text-heart-500">Link</span>
          </Link>
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mt-2">Last updated: March 2025</p>

        <div className="prose prose-gray mt-10 space-y-8 text-gray-700">
          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Introduction
            </h2>
            <p className="leading-relaxed">
              HeartLink (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use
              our dating and social application.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Information we collect
            </h2>
            <p className="leading-relaxed mb-3">
              We may collect information you provide directly, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account details (email, name, profile information)</li>
              <li>Photos and preferences you add to your profile</li>
              <li>Messages and call data within the app</li>
              <li>Preferences such as age range, region, and MBTI</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We also collect certain information automatically, such as device
              type, IP address, and usage data, to improve our services and
              security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              How we use your information
            </h2>
            <p className="leading-relaxed">
              We use your information to operate HeartLink, including matching
              you with other users, enabling chat and voice calls, personalizing
              your experience, enforcing our terms and safety policies, and
              communicating with you. We do not sell your personal data to third
              parties for advertising.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Data security
            </h2>
            <p className="leading-relaxed">
              We use industry-standard security measures, including encryption
              and secure infrastructure (e.g., Firebase), to protect your data.
              Despite our efforts, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Your choices
            </h2>
            <p className="leading-relaxed">
              You can update your profile, adjust privacy settings, block or
              report other users, and request deletion of your account and
              associated data by contacting us at{" "}
              <a
                href="mailto:privacy@heartlink.app"
                className="text-heart-600 hover:underline"
              >
                privacy@heartlink.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Contact
            </h2>
            <p className="leading-relaxed">
              For questions about this Privacy Policy or our practices, contact
              us at{" "}
              <a
                href="mailto:hello@heartlink.app"
                className="text-heart-600 hover:underline"
              >
                hello@heartlink.app
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-heart-600 font-medium hover:underline">
            ← Back to HeartLink
          </Link>
        </p>
      </article>
    </div>
  );
}
