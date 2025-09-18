# Google Analytics Setup Guide

This guide explains how to set up Google Analytics for your Faraway Yachting website.

## Prerequisites

1. A Google Analytics account
2. A Google Analytics 4 (GA4) property created

## Setup Steps

### 1. Get Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property or create a new one
3. Go to **Admin** → **Data Streams** → **Web**
4. Copy your **Measurement ID** (starts with `G-`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with your Google Analytics ID:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-RVTYFBSDC6
```

Your Google Analytics Measurement ID `G-RVTYFBSDC6` has been configured and is ready to use.

### 3. Verify Installation

1. Start your development server: `npm run dev`
2. Open your website in a browser
3. Open Developer Tools (F12)
4. Go to the **Network** tab
5. Look for requests to `google-analytics.com` or `googletagmanager.com`
6. You can also check the **Console** tab for any Google Analytics related messages

### 4. Test in Production

1. Deploy your website to production
2. Visit your website
3. Check Google Analytics **Real-time** reports to see if data is being collected

## Features Included

- ✅ Google Analytics 4 (GA4) integration
- ✅ Automatic page view tracking
- ✅ Performance optimized with Next.js
- ✅ Environment-based configuration
- ✅ Development/production environment handling

## Troubleshooting

### Analytics Not Working?

1. **Check Environment Variable**: Ensure `NEXT_PUBLIC_GA_ID` is set correctly
2. **Verify GA ID Format**: Should start with `G-` (e.g., `G-XXXXXXXXXX`)
3. **Check Network Tab**: Look for requests to Google Analytics
4. **Browser Console**: Check for any JavaScript errors
5. **Ad Blockers**: Some ad blockers may prevent Google Analytics from loading

### Common Issues

- **Wrong GA ID**: Make sure you're using the Measurement ID, not the Property ID
- **Environment Variables**: Ensure the `.env.local` file is in the project root
- **Build Issues**: Run `npm run build` to check for any build errors

## Advanced Configuration

If you need custom event tracking or advanced analytics features, you can extend the GoogleAnalytics component in `src/Component/GoogleAnalytics/index.tsx`.

## Support

For Google Analytics specific issues, refer to the [Google Analytics Help Center](https://support.google.com/analytics/).
