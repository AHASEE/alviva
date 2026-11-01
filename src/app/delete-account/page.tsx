import type { Metadata } from "next";
import Link from "next/link";
import DeleteAccountRequestForm from "@/components/DeleteAccountRequestForm";

export const metadata: Metadata = {
  title: "Delete Account | Alviva",
  description: "Request permanent deletion of your Alviva account and associated app data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-800">
            Alviva account controls
          </p>
          <h1 className="text-4xl font-bold text-gray-900">Delete your Alviva account</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            You can permanently delete your account and associated app data either directly in the
            Alviva app or by submitting the web request below.
          </p>
        </div>

        <section className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-emerald-950">Fastest option: delete in the app</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-emerald-950">
            <li>Open Alviva and sign in.</li>
            <li>Open <strong>Profile</strong>.</li>
            <li>Tap <strong>Delete account</strong>.</li>
            <li>Follow the confirmation steps shown in the app.</li>
          </ol>
          <p className="mt-4 text-sm leading-6 text-emerald-900">
            The in-app flow permanently removes the Alviva authentication account and associated
            profile, food-scan, and water-history data handled by our application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">No longer have the app?</h2>
          <p className="mb-5 leading-7 text-gray-700">
            Submit a request below using the email address connected to your Alviva account. We may
            contact that address to verify account ownership before completing the request. You do not
            need to reinstall the app.
          </p>
          <DeleteAccountRequestForm />
        </section>

        <section className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 text-gray-700">
          <h2 className="text-xl font-bold text-gray-900">What is deleted?</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Your Alviva authentication account.</li>
            <li>Your profile information stored by Alviva.</li>
            <li>Your saved food scans and nutrition history.</li>
            <li>Your saved water history.</li>
            <li>Streak information stored with your profile.</li>
          </ul>
          <p>
            Limited information may be retained only where required for legal, security,
            fraud-prevention, or dispute-resolution purposes. See our{" "}
            <Link href="/privacy" className="font-semibold text-emerald-800 underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <p>
            Need help? Email{" "}
            <a className="underline" href="mailto:abdulhaseeb1.dev@gmail.com">
              abdulhaseeb1.dev@gmail.com
            </a>
            . Never send your password.
          </p>
        </section>
      </div>
    </main>
  );
}
