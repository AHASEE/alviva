export const GA_MEASUREMENT_ID = "G-EPDZLCRBZ4";
export const ANALYTICS_CONSENT_KEY = "alviva_analytics_consent_v1";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Send only the form category, never name, email or other personal details. */
export function trackLead(type: "affiliate" | "early-access") {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem(ANALYTICS_CONSENT_KEY) !== "accepted") return;
    window.gtag?.("event", "generate_lead", {
      lead_type: type === "affiliate" ? "affiliate" : "early_access",
    });
  } catch {
    // Tracking must never affect successful form submissions.
  }
}
