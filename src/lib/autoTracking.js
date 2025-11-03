/**
 * Automatic Tracking for Buttons and Links
 * Tracks all button clicks and link clicks automatically using dataLayer
 */

// Track if analytics is initialized
let isTrackingEnabled = false;
let isInitialized = false;

// Initialize automatic tracking
export const initAutoTracking = () => {
  if (typeof window === 'undefined') return;
  
  // Prevent duplicate initialization
  if (isInitialized) {
    // Re-track existing elements that might have been removed/added
    trackExistingElements();
    return;
  }
  
  // Check if gtag/dataLayer is available
  if (typeof window.gtag !== 'undefined' || typeof window.dataLayer !== 'undefined') {
    isTrackingEnabled = true;
    isInitialized = true;
    setupTracking();
  } else {
    // Wait a bit for analytics to load
    setTimeout(() => {
      if (typeof window.gtag !== 'undefined' || typeof window.dataLayer !== 'undefined') {
        isTrackingEnabled = true;
        isInitialized = true;
        setupTracking();
      }
    }, 1000);
    return;
  }
};

// Setup tracking listeners
const setupTracking = () => {
  // Initialize dataLayer if it doesn't exist
  if (typeof window.dataLayer === 'undefined') {
    window.dataLayer = [];
  }

  // Track existing buttons and links
  trackExistingElements();

  // Track dynamically added elements using MutationObserver
  observeDOMChanges();
};

// Track existing elements on page load
const trackExistingElements = () => {
  // Track all buttons
  const buttons = document.querySelectorAll('button:not([data-no-track]):not([aria-label="Close"]):not([aria-label="Back to top"])');
  buttons.forEach(button => {
    if (!button.hasAttribute('data-tracked')) {
      addButtonTracking(button);
    }
  });

  // Track all links (excluding anchor links, email, tel, and external links we'll handle separately)
  const links = document.querySelectorAll('a[href]:not([data-no-track]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])');
  links.forEach(link => {
    if (!link.hasAttribute('data-tracked')) {
      addLinkTracking(link);
    }
  });
};

// Add tracking to a button
const addButtonTracking = (button) => {
  button.setAttribute('data-tracked', 'true');
  
  button.addEventListener('click', (e) => {
    // Skip if button is disabled or has no-track attribute
    if (button.disabled || button.hasAttribute('data-no-track')) {
      return;
    }

    const buttonData = extractButtonData(button);
    trackButtonClick(buttonData);
  }, { passive: true });
};

// Add tracking to a link
const addLinkTracking = (link) => {
  link.setAttribute('data-tracked', 'true');
  
  link.addEventListener('click', (e) => {
    // Skip if link has no-track attribute
    if (link.hasAttribute('data-no-track')) {
      return;
    }

    const linkData = extractLinkData(link);
    trackLinkClick(linkData);
  }, { passive: true });
};

// Extract data from button
const extractButtonData = (button) => {
  const text = button.textContent?.trim() || 
               button.getAttribute('aria-label') || 
               button.getAttribute('title') || 
               'Untitled Button';
  
  const type = button.type || 'button';
  const variant = button.className?.match(/variant-(\w+)/)?.[1] || 
                  (button.className?.includes('primary') ? 'primary' : 
                   button.className?.includes('outline') ? 'outline' : 
                   button.className?.includes('ghost') ? 'ghost' : 'default');
  
  // Get location context
  const location = getElementLocation(button);
  
  // Check if it's a CTA button
  const isCTA = button.textContent?.toLowerCase().includes('apply') ||
                button.textContent?.toLowerCase().includes('submit') ||
                button.textContent?.toLowerCase().includes('get started') ||
                button.textContent?.toLowerCase().includes('learn more') ||
                button.textContent?.toLowerCase().includes('contact') ||
                button.className?.includes('cta');

  return {
    text,
    type,
    variant,
    location,
    isCTA,
    element: 'button',
    href: button.closest('a')?.href || null, // In case button is inside a link
  };
};

// Extract data from link
const extractLinkData = (link) => {
  const text = link.textContent?.trim() || 
               link.getAttribute('aria-label') || 
               link.getAttribute('title') || 
               'Untitled Link';
  
  const href = link.getAttribute('href');
  const isExternal = href?.startsWith('http') && !href.includes(window.location.hostname);
  const isInternal = href?.startsWith('/') || href?.startsWith('./');
  const isEmail = href?.startsWith('mailto:');
  const isTel = href?.startsWith('tel:');
  
  // Get location context
  const location = getElementLocation(link);
  
  // Determine link type
  let linkType = 'internal';
  if (isExternal) linkType = 'external';
  else if (isEmail) linkType = 'email';
  else if (isTel) linkType = 'phone';
  else if (href?.startsWith('#')) linkType = 'anchor';
  
  // Check if it's a CTA link
  const isCTA = text.toLowerCase().includes('apply') ||
                text.toLowerCase().includes('learn more') ||
                text.toLowerCase().includes('get started') ||
                text.toLowerCase().includes('read more') ||
                text.toLowerCase().includes('view more') ||
                link.className?.includes('cta');

  return {
    text,
    href,
    linkType,
    isExternal,
    isInternal,
    isEmail,
    isTel,
    location,
    isCTA,
    element: 'link',
  };
};

// Get element location context
const getElementLocation = (element) => {
  // Check for data-section attribute
  const section = element.closest('[data-section]')?.getAttribute('data-section');
  if (section) {
    return section;
  }

  // Check for common section classes
  const sectionClasses = ['header', 'footer', 'hero', 'main', 'sidebar', 'nav', 'menu'];
  for (const className of sectionClasses) {
    const parent = element.closest(`.${className}, [class*="${className}"]`);
    if (parent) {
      return className;
    }
  }

  // Check for parent component/container
  const parentId = element.closest('[id]')?.id;
  if (parentId) {
    return parentId;
  }

  // Default to page path
  return window.location.pathname;
};

// Track button click
const trackButtonClick = (data) => {
  if (!isTrackingEnabled) return;

  const eventData = {
    event: 'button_click',
    button_text: data.text,
    button_type: data.type,
    button_variant: data.variant,
    location: data.location,
    is_cta: data.isCTA,
    page_path: window.location.pathname,
    page_title: document.title,
  };

  // Push to dataLayer
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push(eventData);
  }

  // Also use gtag if available
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'button_click', {
      button_text: data.text,
      button_type: data.type,
      button_variant: data.variant,
      location: data.location,
      is_cta: data.isCTA,
    });
  }

  // Console log in development
  if (import.meta.env.DEV) {
    console.log('🔘 Button Click Tracked:', eventData);
  }
};

// Track link click
const trackLinkClick = (data) => {
  if (!isTrackingEnabled) return;

  // Small delay to allow navigation to complete
  setTimeout(() => {
    const eventData = {
      event: 'link_click',
      link_text: data.text,
      link_url: data.href,
      link_type: data.linkType,
      is_external: data.isExternal,
      is_internal: data.isInternal,
      location: data.location,
      is_cta: data.isCTA,
      page_path: window.location.pathname,
      page_title: document.title,
    };

    // Push to dataLayer
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push(eventData);
    }

    // Also use gtag if available
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'link_click', {
        link_text: data.text,
        link_url: data.href,
        link_type: data.linkType,
        is_external: data.isExternal,
        is_internal: data.isInternal,
        location: data.location,
        is_cta: data.isCTA,
      });
    }

    // Console log in development
    if (import.meta.env.DEV) {
      console.log('🔗 Link Click Tracked:', eventData);
    }
  }, 100);
};

// Observe DOM for dynamically added elements
const observeDOMChanges = () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          // Check if it's a button
          if (node.tagName === 'BUTTON' && !node.hasAttribute('data-tracked')) {
            addButtonTracking(node);
          }
          
          // Check if it's a link
          if (node.tagName === 'A' && !node.hasAttribute('data-tracked')) {
            addLinkTracking(node);
          }
          
          // Check for buttons and links inside the added node
          const buttons = node.querySelectorAll?.('button:not([data-tracked])');
          const links = node.querySelectorAll?.('a[href]:not([data-tracked])');
          
          buttons?.forEach(addButtonTracking);
          links?.forEach(addLinkTracking);
        }
      });
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

// Export function to manually track if needed
export const trackElement = (element, type = 'auto') => {
  if (element.tagName === 'BUTTON') {
    const data = extractButtonData(element);
    trackButtonClick(data);
  } else if (element.tagName === 'A') {
    const data = extractLinkData(element);
    trackLinkClick(data);
  }
};

// Export function to disable tracking for specific elements
export const disableTracking = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    el.setAttribute('data-no-track', 'true');
  });
};

// Export function to enable tracking for specific elements
export const enableTracking = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    el.removeAttribute('data-no-track');
    if (!el.hasAttribute('data-tracked')) {
      if (el.tagName === 'BUTTON') {
        addButtonTracking(el);
      } else if (el.tagName === 'A') {
        addLinkTracking(el);
      }
    }
  });
};

