// Google Analytics 4 integration
export const initGA = (measurementId) => {
  if (typeof window !== 'undefined' && measurementId) {
    // Load gtag script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
      page_path: path,
    });
  }
};

// Track events
export const trackEvent = (action, category, label, value, additionalParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...additionalParams,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track CTA clicks
export const trackCTAClick = (ctaName, location) => {
  trackEvent('cta_click', 'engagement', ctaName, undefined, { location });
};

// Track search
export const trackSearch = (searchQuery) => {
  trackEvent('search', 'engagement', searchQuery);
};

// Track link clicks
export const trackLinkClick = (linkText, destination) => {
  trackEvent('link_click', 'engagement', linkText, undefined, { destination });
};

