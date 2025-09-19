import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://faraway-yachting.com';
  
  // Static pages from the project structure with priorities
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/aboutus', priority: '0.9', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/yacht-charter-phuket', priority: '0.9', changefreq: 'weekly' },
    { url: '/bareboat-charter-thailand', priority: '0.9', changefreq: 'weekly' },
    { url: '/super-yacht-charter-phuket', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/magical-destinations-with-private-yacht-in-phuket', priority: '0.8', changefreq: 'monthly' },
    { url: '/best-of-phukets-islands-cabincharter', priority: '0.8', changefreq: 'monthly' },
    { url: '/crewed_boats', priority: '0.8', changefreq: 'weekly' },
    { url: '/agent', priority: '0.7', changefreq: 'monthly' },
    { url: '/amaavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/hcavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/mozavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/sdavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/slvavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/daycharter-meeting', priority: '0.7', changefreq: 'monthly' },
    { url: '/overnight-charter-meeting', priority: '0.7', changefreq: 'monthly' },
    { url: '/beverage-menu', priority: '0.6', changefreq: 'monthly' },
    { url: '/business-card', priority: '0.6', changefreq: 'monthly' },
    { url: '/review-us', priority: '0.6', changefreq: 'monthly' },
    { url: '/world-nomads-travel-insurance', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms-and-conditions', priority: '0.5', changefreq: 'yearly' },
    { url: '/impressum', priority: '0.5', changefreq: 'yearly' },
    { url: '/sitemap', priority: '0.3', changefreq: 'monthly' },
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
