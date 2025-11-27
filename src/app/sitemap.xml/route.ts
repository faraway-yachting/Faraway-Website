import { NextResponse } from 'next/server';
import { fetchYachts, fetchBlogs } from '@/lib/api';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.faraway-yachting.com';
  
  // Fetch yacht data
  let yachtPages: Array<{ url: string; priority: string; changefreq: string }> = [];
  try {
    const yachtResponse = await fetchYachts(1, 100);
    const yachts = yachtResponse.data.yachts || [];
    
    // Filter published yachts and create pages
    const publishedYachts = yachts.filter((yacht: any) => yacht.status?.toLowerCase() === 'published');
    
    yachtPages = publishedYachts.map((yacht: any) => {
      const yachtType = yacht.type?.toLowerCase();
      const url = yachtType === 'bareboat' ? `/bareboat/${yacht.slug}` : `/crewed_boats/${yacht.slug}`;
      return {
        url,
        priority: '0.8',
        changefreq: 'weekly'
      };
    });
  } catch (error) {
    console.error('Failed to fetch yachts for sitemap:', error);
  }
  
  let blogPages: Array<{ url: string; priority: string; changefreq: string }> = [];
  try {
    const blogResponse = await fetchBlogs();
    const blogs = blogResponse.data?.blogs || [];
    
    const publishedBlogs = blogs.filter((blog: any) => blog.status?.toLowerCase() === 'published');
    
    blogPages = publishedBlogs.map((blog: any) => ({
      url: `/blog/${blog.slug}`,
      priority: '0.7',
      changefreq: 'monthly'
    }));
  } catch (error) {
    console.error('Failed to fetch blogs for sitemap:', error);
  }
  
  // Static pages from the project structure with priorities
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/aboutus', priority: '0.9', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/yacht-charter-phuket', priority: '0.9', changefreq: 'weekly' },
    { url: '/bareboat-charter-thailand', priority: '0.9', changefreq: 'weekly' },
    { url: '/super-yacht-charter-phuket', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/taxi', priority: '0.8', changefreq: 'monthly' },
    { url: '/magical-destinations-with-private-yacht-in-phuket', priority: '0.8', changefreq: 'monthly' },
    { url: '/best-of-phukets-islands-cabincharter', priority: '0.8', changefreq: 'monthly' },
    { url: '/crewed_boats', priority: '0.8', changefreq: 'weekly' },
    { url: '/agent', priority: '0.7', changefreq: 'monthly' },
    { url: '/amaavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/hcavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/mozavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/nbnavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/sdavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/slvavailability', priority: '0.7', changefreq: 'daily' },
    { url: '/daycharter-meeting', priority: '0.7', changefreq: 'monthly' },
    { url: '/overnight-charter-meeting', priority: '0.7', changefreq: 'monthly' },
    { url: '/beverage-menu', priority: '0.6', changefreq: 'monthly' },
    { url: '/all-boat-agency-contract-24-25', priority: '0.6', changefreq: 'yearly' },
    { url: '/business-card', priority: '0.6', changefreq: 'monthly' },
    { url: '/review-us', priority: '0.6', changefreq: 'monthly' },
    { url: '/world-nomads-travel-insurance', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms-and-conditions', priority: '0.5', changefreq: 'yearly' },
    { url: '/impressum', priority: '0.5', changefreq: 'yearly' },
    { url: '/sitemap', priority: '0.3', changefreq: 'monthly' },
  ];

  // Combine static pages and yacht pages
  const allPages = [...staticPages, ...yachtPages, ...blogPages];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
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
