import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — HeartLink",
  description: "HeartLink Terms of Service. Rules and guidelines for using our app.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-gray-500 mt-2">Last updated: March 2025</p>

        <div className="prose prose-gray mt-10 space-y-8 text-gray-700">
          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Agreement to terms
            </h2>
            <p className="leading-relaxed">
              By downloading, installing, or using HeartLink, you agree to these
              Terms of Service and our Privacy Policy. If you do not agree, do
              not use the app.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Eligibility
            </h2>
            <p className="leading-relaxed">
              You must be at least 18 years old and legally able to enter into a
              binding agreement to use HeartLink. By using the app, you
              represent that you meet these requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Acceptable use
            </h2>
            <p className="leading-relaxed mb-3">
              You agree to use HeartLink only for lawful purposes and in a way
              that does not infringe others&apos; rights or restrict their use of the
              service. You must not:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Harass, abuse, or harm other users</li>
              <li>Impersonate others or share false information</li>
              <li>Spam, scrape, or automate access to the service</li>
              <li>Use the app for commercial purposes without our consent</li>
              <li>Circumvent safety or moderation features</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We may suspend or terminate your account if you violate these
              terms or our community guidelines.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Safety and reporting
            </h2>
            <p className="leading-relaxed">
              You can block and report other users. We review reports and may
              take action including warnings, suspensions, or permanent bans. We
              may also report illegal activity to authorities.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Changes
            </h2>
            <p className="leading-relaxed">
              We may update these terms from time to time. We will notify you of
              material changes via the app or email. Continued use after changes
              constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-3">
              Contact
            </h2>
            <p className="leading-relaxed">
              For questions about these Terms of Service, contact us at{" "}
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
