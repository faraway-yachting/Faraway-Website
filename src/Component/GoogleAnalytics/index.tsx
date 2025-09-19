'use client';

import { useEffect } from 'react';
import { getGoogleAnalyticsId } from '@/lib/env';

export default function GoogleAnalyticsComponent() {
  const gaId = getGoogleAnalyticsId();
  
  useEffect(() => {
    if (!gaId) {
      return;
    }
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    script.onload = () => {
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      
      gtag('js', new Date());
      gtag('config', gaId);
    };
    document.head.appendChild(script);
    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src*="googletagmanager.com"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [gaId]);

  return null;
}
// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
