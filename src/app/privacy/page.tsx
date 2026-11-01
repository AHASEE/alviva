import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Alviva",
  description: "How Alviva collects, uses, stores, and deletes personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mb-12 text-gray-600">Last updated: November 1, 2026</p>

        <div className="space-y-9 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">About this policy</h2>
            <p>
              This Privacy Policy explains how Alviva collects, uses, stores, shares, and deletes
              information when you use the Alviva mobile app or alviva.app. Alviva is a nutrition
              and wellness tracking service. It is not a medical service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">1. Information we collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Account information</h3>
                <p>
                  When you create an account, we process your email address, name, authentication
                  information, and sign-in provider. Passwords are handled by our authentication
                  provider and are not stored in readable form by Alviva.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Profile and wellness information</h3>
                <p>
                  You may choose to provide age, weight, height, gender, activity level, and a daily
                  calorie goal. We also store the water entries, food scan history, nutrition values,
                  and streak information that you create in the app.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Meal photos and AI processing</h3>
                <p>
                  When you choose a meal photo, the image is sent for food-identification processing.
                  Alviva does not add the meal photo itself to your saved meal-history record; the
                  resulting food name, nutrition estimate, portion information, and related values may
                  be saved when you confirm the scan.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Website forms</h3>
                <p>
                  Early-access, affiliate, and account-deletion forms may collect your name, email
                  address, and the information you voluntarily submit so we can respond to your request.
                  Never submit your password through a website form or support email.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Website analytics</h3>
                <p>
                  If you accept optional analytics on alviva.app, Google Analytics may process usage
                  information such as pages viewed, referral information, general device/browser
                  information, and approximate location derived from network information. We do not
                  intentionally send your account password, meal-photo contents, or form text to Google
                  Analytics.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">2. How we use information</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Authenticate your account and keep you signed in.</li>
              <li>Provide calorie, macro, water, streak, and history features.</li>
              <li>Process meal images and return food-identification and nutrition estimates.</li>
              <li>Personalize parts of the Learn experience using profile information you provide.</li>
              <li>Operate, secure, troubleshoot, and improve Alviva.</li>
              <li>Respond to support, affiliate, early-access, and deletion requests.</li>
              <li>Comply with applicable legal obligations and prevent abuse or fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">3. Services that may process data</h2>
            <p className="mb-4">
              We use service providers to operate Alviva. Depending on the feature you use, information
              may be processed by:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Supabase</strong> — authentication and application database services.</li>
              <li><strong>Groq</strong> — AI processing used for food identification and nutrition fallback estimates.</li>
              <li><strong>USDA FoodData Central</strong> — nutrition data lookup when available.</li>
              <li><strong>Render</strong> — hosting for Alviva backend services.</li>
              <li><strong>Vercel</strong> — hosting for alviva.app.</li>
              <li><strong>NewsAPI and YouTube/Google</strong> — Learn content discovery and video delivery.</li>
              <li><strong>Resend</strong> — delivery of website form submissions to our support inbox.</li>
              <li><strong>Google Analytics</strong> — optional website analytics after consent.</li>
            </ul>
            <p className="mt-4">
              These providers process information under their own terms and privacy policies. We do not
              sell your personal information to advertisers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Data security</h2>
            <p>
              We use HTTPS for network communication, authenticated API requests for account data, and
              server-side credentials for privileged database operations. Access to account data is
              restricted to what is needed to operate the service. No internet service can guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">5. Data retention</h2>
            <p>
              Account data is generally retained while your Alviva account remains active. Website
              enquiries are retained for as long as reasonably needed to handle the request and related
              follow-up. Service providers may retain limited operational or security logs under their
              own retention policies.
            </p>
          </section>

          <section id="delete-account">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">6. Account and data deletion</h2>
            <p>
              You can permanently delete your Alviva account from the app under
              <strong> Profile → Delete account</strong>. The in-app deletion flow deletes the Alviva
              authentication account and associated profile, food-scan, and water-history data handled
              by our application.
            </p>
            <p className="mt-4">
              If you no longer have the app, you can submit a deletion request on our public{" "}
              <Link className="font-semibold text-emerald-800 underline" href="/delete-account">
                Delete Account page
              </Link>
              . We may need to verify that you control the account email before completing a web request.
              We will never ask for your password.
            </p>
            <p className="mt-4">
              We may retain limited information only where required for legal, security, fraud-prevention,
              or dispute-resolution purposes. Any such retention is limited to the purpose that requires it.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">7. Your choices and rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, delete, or obtain a
              copy of personal information, or to object to certain processing. You can update profile
              information in the app and request account deletion at any time.
            </p>
          </section>

          <section id="cookies">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">8. Cookies and optional analytics</h2>
            <p>
              alviva.app uses optional analytics only after you accept analytics through the website
              consent controls. You can change that choice through Cookie settings in the website footer.
              Essential functionality does not require you to accept optional analytics.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">9. Children</h2>
            <p>
              Alviva is not intended for children under 13, and we do not knowingly create accounts for
              children under 13. If you believe a child under 13 has provided personal information,
              contact us so we can investigate and delete it where appropriate.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">10. International use</h2>
            <p>
              Alviva uses service providers that may process information in countries other than your
              own. Where required, we rely on appropriate legal mechanisms for international processing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">11. Contact</h2>
            <p>
              For privacy questions, data requests, or account-deletion help, email{" "}
              <a className="underline" href="mailto:abdulhaseeb1.dev@gmail.com">
                abdulhaseeb1.dev@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">12. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy as Alviva changes. We will update the date above and,
              where appropriate, provide additional notice of material changes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
