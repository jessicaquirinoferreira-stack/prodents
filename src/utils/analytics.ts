// Analytics and Ads conversion tracking helper (Google Ads & Meta Ads ready)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type ConversionEvent =
  | 'click_whatsapp'
  | 'click_agendamento_hero'
  | 'click_agendamento_header'
  | 'open_tratamento_modal'
  | 'submit_formulario_agendamento'
  | 'click_ligar_telefone'
  | 'click_como_chegar';

export function trackConversion(eventName: ConversionEvent, eventParams: Record<string, unknown> = {}) {
  try {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...eventParams,
    };

    // Google Tag Manager / Google Ads
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    }

    // Meta / Facebook Pixel
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (eventName === 'submit_formulario_agendamento') {
        window.fbq('track', 'Lead', payload);
      } else if (eventName === 'click_whatsapp') {
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
