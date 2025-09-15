import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Network optimization for external services */}
        <link rel="dns-prefetch" href="https://api.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://backend.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://link.msgsndr.com" />
        {/* Suppress external form service warnings and errors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress external form service warnings and errors - Run immediately
              (function() {
                // Store original methods
                const originalWarn = console.warn;
                const originalError = console.error;
                
                // Override console.warn
                console.warn = function(...args) {
                  const message = args.join(' ');
                  // Suppress locale-related warnings from external services
                  if (message.includes('Could not find messages for locale code') ||
                      message.includes('en-US') ||
                      message.includes('locale') ||
                      message.includes('leadconnectorhq') ||
                      message.includes('Slow network is detected') ||
                      message.includes('Fallback font will be used')) {
                    return;
                  }
                  originalWarn.apply(console, args);
                };
                
                // Override console.error
                console.error = function(...args) {
                  const message = args.join(' ');
                  // Suppress fetch errors from external form service
                  if (message.includes('FetchError') ||
                      message.includes('leadconnectorhq.com') ||
                      message.includes('form-survey-event') ||
                      message.includes('Failed to fetch') ||
                      message.includes('backend.leadconnectorhq.com')) {
                    return;
                  }
                  originalError.apply(console, args);
                };
                
                // Handle unhandled promise rejections
                window.addEventListener('unhandledrejection', function(event) {
                  const reason = event.reason?.message || event.reason?.toString() || '';
                  if (reason.includes('leadconnectorhq.com') ||
                      reason.includes('form-survey-event') ||
                      reason.includes('FetchError') ||
                      reason.includes('backend.leadconnectorhq.com')) {
                    event.preventDefault();
                    return false;
                  }
                });
                
                // Also try to catch errors from iframe content
                window.addEventListener('error', function(event) {
                  const message = event.message || '';
                  if (message.includes('leadconnectorhq') ||
                      message.includes('locale') ||
                      message.includes('en-US')) {
                    event.preventDefault();
                    return false;
                  }
                });
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
