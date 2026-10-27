export type ValoraAnalyticsEvent = "form_start" | "form_submit" | "whatsapp_click" | "demo_interaction" | "primary_cta_click";

/** Emits a browser event for a future analytics adapter; no vendor IDs are embedded. */
export function trackValoraEvent(eventName: ValoraAnalyticsEvent, detail?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("valora:analytics", { detail: { event: eventName, ...detail } }));
  // No vendor is loaded and no personal form data is emitted. A consent-aware adapter can subscribe later.
  if (window.analyticsConsent === true) window.gtag?.("event", eventName, detail);
}

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: Record<string, unknown>) => void;
    analyticsConsent?: boolean;
  }
}

