// lib/gtag.js
export const GA_TRACKING_ID = 'G-NMMSHYHDR1';

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
