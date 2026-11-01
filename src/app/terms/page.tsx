import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Alviva",
  description: "Terms governing use of the Alviva nutrition and wellness app.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mb-12 text-gray-600">Last updated: November 1, 2026</p>

        <div className="space-y-9 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Acceptance</h2>
            <p>
              By creating an Alviva account or using the Alviva app or website, you agree to these
              Terms of Service and our{" "}
              <Link href="/privacy" className="underline">Privacy Policy</Link>. If you do not agree,
              do not use Alviva.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">2. What Alviva provides</h2>
            <p>
              Alviva provides tools for food recognition, calorie and macro estimates, meal logging,
              water tracking, streaks, wellness content, and related nutrition features. Features may
              change, improve, or be removed as the service evolves.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">3. Nutrition and medical disclaimer</h2>
            <div className="mb-4 border-l-4 border-amber-500 bg-amber-50 p-4 text-amber-950">
              <p className="font-bold">Alviva is not medical advice.</p>
              <p className="mt-2">
                Calorie, macro, BMI, portion, and food-recognition results are estimates for general
                informational use and can be inaccurate.
              </p>
            </div>
            <p>
              Do not use Alviva to diagnose or treat a medical condition or as a substitute for a
              qualified healthcare professional. People with allergies, eating disorders, pregnancy,
              medical conditions, or medically prescribed diets should use appropriate professional
              guidance rather than relying on Alviva estimates.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Your account</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>You must provide accurate account information.</li>
              <li>You are responsible for protecting access to your account and device.</li>
              <li>You may not use another person&apos;s account without permission.</li>
              <li>You must be at least 13 years old to create an Alviva account.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">5. AI and nutrition estimates</h2>
            <p>
              Food recognition and nutrition calculations may use AI models and third-party nutrition
              databases. Images can be misidentified, serving sizes can differ, and restaurant or
              homemade recipes can vary substantially. You are responsible for reviewing the detected
              food name and portion before saving a meal.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Learn content and third-party services</h2>
            <p>
              Alviva may display articles, videos, or information supplied by third parties. Third-party
              content is provided for convenience and does not mean Alviva endorses every statement,
              product, or service in that content. Availability can change without notice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Acceptable use</h2>
            <p>You may not:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Use Alviva for unlawful, abusive, fraudulent, or harmful activity.</li>
              <li>Attempt to bypass security, rate limits, authentication, or access controls.</li>
              <li>Interfere with the service or intentionally overload its infrastructure.</li>
              <li>Reverse engineer the service except where applicable law expressly allows it.</li>
              <li>Use automated access in a way that harms the service or other users.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Account deletion</h2>
            <p>
              You may delete your account in the app under <strong>Profile → Delete account</strong>.
              If you no longer have access to the app, use our{" "}
              <Link href="/delete-account" className="underline">Delete Account page</Link>. Account
              deletion is permanent and cannot be undone after completion.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Intellectual property</h2>
            <p>
              Alviva&apos;s software, brand assets, designs, and original materials are owned by Alviva
              or its licensors and are protected by applicable intellectual-property laws. These Terms
              do not transfer ownership of Alviva intellectual property to you.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">10. Service availability</h2>
            <p>
              We work to keep Alviva available, but we do not guarantee uninterrupted operation. AI,
              nutrition, hosting, authentication, article, and video services can be temporarily
              unavailable because Alviva depends on external providers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">11. Disclaimer of warranties</h2>
            <p>
              To the extent permitted by law, Alviva is provided on an &quot;as is&quot; and
              &quot;as available&quot; basis without warranties that estimates will be perfectly
              accurate, that all content will remain available, or that the service will be error-free.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">12. Limitation of liability</h2>
            <p>
              To the extent permitted by applicable law, Alviva and its operators will not be liable
              for indirect, incidental, special, consequential, or punitive damages arising from use of
              the service. Nothing in these Terms excludes liability that cannot legally be excluded.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">13. Suspension or termination</h2>
            <p>
              We may restrict or terminate access where reasonably necessary to protect users, prevent
              abuse or fraud, comply with law, or respond to serious violations of these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">14. Governing law</h2>
            <p>
              These Terms are governed by the laws of Pakistan, subject to any mandatory consumer rights
              that apply in your country of residence.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">15. Changes</h2>
            <p>
              We may update these Terms as the service changes. The updated date will appear at the top
              of this page. If a change materially affects your rights, we may provide additional notice
              where appropriate.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">16. Contact</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a className="underline" href="mailto:abdulhaseeb1.dev@gmail.com">
                abdulhaseeb1.dev@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
