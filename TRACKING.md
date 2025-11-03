# Automatic Tracking Documentation

## Overview

The website now includes automatic tracking for all buttons and links using Google Analytics 4 (GA4) dataLayer. This system tracks user interactions without requiring manual tracking code on each element.

## How It Works

The automatic tracking system (`/src/lib/autoTracking.js`) automatically:
- Attaches click listeners to all buttons and links
- Extracts contextual information (text, location, type, etc.)
- Pushes events to `dataLayer` for Google Analytics
- Handles dynamically added content via MutationObserver

## Tracked Events

### Button Clicks
- **Event Name**: `button_click`
- **Data Captured**:
  - `button_text`: The button's text content
  - `button_type`: Button type (button, submit, reset)
  - `button_variant`: Visual variant (primary, outline, ghost, etc.)
  - `location`: Section/component where button is located
  - `is_cta`: Whether it's a Call-to-Action button
  - `page_path`: Current page path
  - `page_title`: Current page title

### Link Clicks
- **Event Name**: `link_click`
- **Data Captured**:
  - `link_text`: The link's text content
  - `link_url`: The link's href
  - `link_type`: Type of link (internal, external, email, phone, anchor)
  - `is_external`: Boolean for external links
  - `is_internal`: Boolean for internal links
  - `location`: Section/component where link is located
  - `is_cta`: Whether it's a Call-to-Action link
  - `page_path`: Current page path
  - `page_title`: Current page title

## Excluding Elements from Tracking

To exclude specific elements from automatic tracking, add the `data-no-track` attribute:

```jsx
<button data-no-track>This button won't be tracked</button>
<a href="/page" data-no-track>This link won't be tracked</a>
```

Or exclude multiple elements using CSS selectors:

```javascript
import { disableTracking } from '@/lib/autoTracking';

// Disable tracking for specific elements
disableTracking('.privacy-links, .footer-social');
```

## Manual Tracking (Optional)

If you need to manually track an element:

```javascript
import { trackElement } from '@/lib/autoTracking';

// Track a button or link manually
const button = document.querySelector('#my-button');
trackElement(button);
```

## Viewing Events in Google Analytics

1. Go to your Google Analytics 4 property
2. Navigate to **Reports** > **Engagement** > **Events**
3. Look for `button_click` and `link_click` events
4. Create custom reports with the event parameters

## Viewing Events in Debug Mode

In development mode, tracking events are logged to the browser console:
- 🔘 Button clicks
- 🔗 Link clicks

Open your browser's Developer Tools Console to see tracked events.

## Custom Reports in GA4

You can create custom reports analyzing:
- Most clicked buttons/links
- CTA performance by location
- External vs internal link clicks
- Button performance by variant
- User journey through button/link clicks

## Location Detection

The system automatically detects element location by:
1. `data-section` attribute (highest priority)
2. Parent elements with common classes (header, footer, hero, etc.)
3. Parent element ID
4. Current page path (fallback)

You can help by adding `data-section` attributes to sections:

```jsx
<section data-section="hero">
  <button>Click me</button> {/* location will be "hero" */}
</section>
```

## Notes

- Tracking only works when Google Analytics is properly initialized
- Events are pushed to both `dataLayer` and `gtag` if available
- The system uses MutationObserver to track dynamically added content
- Tracking is automatically re-initialized on route changes (React Router)

