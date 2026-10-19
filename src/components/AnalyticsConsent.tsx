"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ANALYTICS_CONSENT_KEY, GA_MEASUREMENT_ID } from "../lib/analytics";

type Decision = "accepted" | "rejected";
const SETTINGS_EVENT = "alviva-open-analytics-preferences";

function startGoogleAnalytics() {
  if (document.getElementById("alviva-ga4-script")) return;

  // Analytics is opt-in. Advertising signals remain denied.
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.id = "alviva-ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

function stopGoogleAnalytics() {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });

  // Remove first-party GA cookies when permission is withdrawn.
  const host = window.location.hostname;
  const domains = ["", host, host.startsWith("www.") ? host.slice(4) : `.${host}`];
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`;
    }
  }
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-cookie-button"
      onClick={() => window.dispatchEvent(new Event(SETTINGS_EVENT))}
    >
      Cookie settings
    </button>
  );
}

export default function AnalyticsConsent() {
  const [decision, setDecision] = useState<Decision | null | "loading">("loading");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    } catch {
      // If storage is unavailable, ask on every visit instead.
    }

    if (stored === "accepted") startGoogleAnalytics();
    setDecision(stored === "accepted" || stored === "rejected" ? stored : null);

    const openPreferences = () => setDecision(null);
    window.addEventListener(SETTINGS_EVENT, openPreferences);
    return () => window.removeEventListener(SETTINGS_EVENT, openPreferences);
  }, []);

  function choose(value: Decision) {
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
    } catch {
      // Respect this choice for the current page even without persistence.
      if (value === "accepted") startGoogleAnalytics();
      if (value === "rejected") stopGoogleAnalytics();
      setDecision(value);
      return;
    }

    if (value === "rejected") stopGoogleAnalytics();
    // Reload to ensure a previously loaded GA tag is never active after rejection,
    // or initializes correctly when users newly accept.
    window.location.reload();
  }

  if (decision !== null) return null;

  return (
    <section className="analytics-consent" aria-label="Optional analytics preferences">
      <div className="analytics-consent-content">
        <strong>Help us improve Alviva?</strong>
        <p>
          With your permission, Google Analytics helps us understand website
          visits and interest in Alviva. Optional analytics stays off until
          you accept. Read our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" className="consent-decline" onClick={() => choose("rejected")}>
          Reject
        </button>
        <button type="button" className="consent-accept" onClick={() => choose("accepted")}>
          Accept analytics
        </button>
      </div>
    </section>
  );
}
