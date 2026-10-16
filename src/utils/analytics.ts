// Analytics and Ads conversion tracking helper (Google Ads & Meta Ads ready)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type ConversionEvent = string;

export function trackConversion(eventName: ConversionEvent, eventParams: Record<string, unknown> | string | number | undefined = {}) {
  try {
    const params = typeof eventParams === 'object' && eventParams !== null ? eventParams : { value: eventParams };
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params,
    };

    // Google Tag Manager / Google Ads
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    }

    // Meta / Facebook Pixel
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (eventName.includes('submit') || eventName.includes('lead')) {
        window.fbq('track', 'Lead', payload);
      } else if (eventName.includes('whatsapp')) {
        window.fbq('track', 'Contact', payload);
      } else {
        window.fbq('trackCustom', eventName, payload);
      }
    }

    // Development & Ad Tracking inspection feedback
    if (import.meta.env.DEV) {
      console.log(`[AdConversion Tracked] ${eventName}:`, payload);
    }
  } catch (err) {
    console.warn('[Analytics] tracking error:', err);
  }
}
