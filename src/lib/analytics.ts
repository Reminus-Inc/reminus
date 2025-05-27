"use client";

declare global {
  interface Window {
    gtag?: (command: string, target?: string, config?: {
      event_category?: string;
      event_label?: string;
      [key: string]: unknown;
    }) => void;
    twq?: (command: string, event: string, parameters?: {
      content_name?: string;
      event_name?: string;
      [key: string]: unknown;
    }) => void;
  }
}

interface EventParameters {
  cta_type?: "download" | "contact" | "spir";
  form_id?: "download" | "contact";
  event_category?: string;
  event_label?: string;
  [key: string]: unknown;
}

export const trackEvent = (
  eventName: string,
  parameters: EventParameters = {}
) => {
  // GA4 tracking
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      ...parameters,
      event_category: parameters.event_category || "custom",
      event_label: parameters.event_label || eventName,
    });
  }

  // X Pixel tracking
  if (typeof window !== "undefined" && window.twq) {
    // Map custom events to X Pixel events
    switch (eventName) {
      case "cta_click":
        window.twq("track", "ClickButton", { 
          content_name: parameters.cta_type,
          ...parameters 
        });
        break;
      case "form_start":
        window.twq("track", "StartTrial", {
          content_name: parameters.form_id,
          ...parameters
        });
        break;
      case "spir_page_view":
        window.twq("track", "PageView", {
          content_name: "spir_booking",
          ...parameters
        });
        break;
      case "generate_lead":
        window.twq("track", "Lead", {
          content_name: parameters.form_id,
          ...parameters
        });
        break;
      default:
        // For other custom events
        window.twq("track", "CustomEvent", {
          event_name: eventName,
          ...parameters
        });
    }
  }
};

// Specific event tracking functions
export const trackCTAClick = (ctaType: "download" | "contact" | "spir") => {
  trackEvent("cta_click", {
    cta_type: ctaType,
    event_category: "engagement",
    event_label: `cta_click_${ctaType}`,
  });
};

export const trackFormStart = (formId: "download" | "contact") => {
  trackEvent("form_start", {
    form_id: formId,
    event_category: "engagement",
    event_label: `form_start_${formId}`,
  });
};

export const trackSpirPageView = () => {
  trackEvent("spir_page_view", {
    event_category: "engagement",
    event_label: "spir_booking_page_view",
  });
};

export const trackGenerateLead = (formId: "download" | "contact") => {
  trackEvent("generate_lead", {
    form_id: formId,
    event_category: "conversion",
    event_label: `lead_${formId}`,
  });
};