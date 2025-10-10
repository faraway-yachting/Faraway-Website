import { Metadata } from 'next';
import Link from 'next/link';
import { fetchYachts } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Sitemap - Faraway Yachting',
  description: 'Complete sitemap of Faraway Yachting website with all pages and sections.',
};

interface Yacht {
  _id: string;
  slug: string;
  title: string;
  type: string;
  status: string;
  tags?: string[];
}

const SitemapPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.faraway-yachting.com';
  
  // Fetch yacht data
  let yachts: Yacht[] = [];
  try {
    const yachtResponse = await fetchYachts(1, 100);
    yachts = yachtResponse.data.yachts || [];
  } catch (error) {
    console.error('Failed to fetch yachts:', error);
  }
  
  // Filter published yachts and organize by type
  const publishedYachts = yachts.filter(yacht => yacht.status?.toLowerCase() === 'published');
  const bareboatYachts = publishedYachts.filter(yacht => yacht.type?.toLowerCase() === 'bareboat');
  const crewedYachts = publishedYachts.filter(yacht => yacht.type?.toLowerCase() === 'crewed');
  const superYachts = publishedYachts.filter(yacht => yacht.tags?.includes('super yacht'));
  
  // Static pages organized by category
  const pageCategories = {
    'Main Pages': [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/aboutus' },
      { name: 'Contact', url: '/contact' },
      { name: 'Blog', url: '/blog' },
    ],
    'Yacht Charter Services': [
      { name: 'Day Charter', url: '/yacht-charter-phuket' },
      { name: 'Overnight Charter', url: '/crewed-overnight-charter' },
      { name: 'Bareboat Charter Thailand', url: '/bareboat-charter-thailand' },
      { name: 'Super Yacht Charter Phuket', url: '/super-yacht-charter-phuket' },
      { name: 'Crewed Boats', url: '/crewed_boats' },
      { name: 'Best of Phuket Islands Cabin Charter', url: '/best-of-phukets-islands-cabincharter' },
    ],
    'Bareboat Yachts': bareboatYachts.map(yacht => ({
      name: yacht.title,
      url: `/bareboat/${yacht.slug}`
    })),
    'Crewed Yachts': crewedYachts.map(yacht => ({
      name: yacht.title,
      url: `/crewed_boats/${yacht.slug}`
    })),
    'Super Yachts': superYachts.map(yacht => ({
      name: yacht.title,
      url: yacht.type?.toLowerCase() === 'bareboat' ? `/bareboat/${yacht.slug}` : `/crewed_boats/${yacht.slug}`
    })),
    'Destinations & Itineraries': [
      { name: 'Magical Destinations with Private Yacht in Phuket', url: '/magical-destinations-with-private-yacht-in-phuket' },
    ],
    'Availability & Booking': [
      { name: 'AMA Availability', url: '/amaavailability' },
      { name: 'HC Availability', url: '/hcavailability' },
      { name: 'Moz Availability', url: '/mozavailability' },
      { name: 'SD Availability', url: '/sdavailability' },
      { name: 'SLV Availability', url: '/slvavailability' },
      { name: 'Day Charter Meeting', url: '/daycharter-meeting' },
      { name: 'Overnight Charter Meeting', url: '/overnight-charter-meeting' },
    ],
    'Services & Information': [
      { name: 'Agent', url: '/agent' },
      { name: 'Beverage Menu', url: '/beverage-menu' },
      { name: 'Business Card', url: '/business-card' },
      { name: 'Review Us', url: '/review-us' },
      { name: 'World Nomads Travel Insurance', url: '/world-nomads-travel-insurance' },
    ],
    'Legal & Policies': [
      { name: 'Privacy Policy', url: '/privacy-policy' },
      { name: 'Terms and Conditions', url: '/terms-and-conditions' },
      { name: 'Impressum', url: '/impressum' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Sitemap
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find all pages and sections of the Faraway Yachting website organized by category.
          </p>

          <div className="grid gap-8">
            {Object.entries(pageCategories).map(([category, pages]) => (
              <div key={category} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-playfair">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {pages.map((page) => (
                    <Link
                      key={page.url}
                      href={page.url}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-[#D6AB61] mr-2">→</span>
                      <span className="text-gray-700 group-hover:text-[#D6AB61] transition-colors">
                        {page.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
              Dynamic Content
            </h3>
            <p className="text-gray-600 mb-4">
              Our website also includes dynamic content that may not be listed above:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Individual yacht details (bareboat/[slug] and crewed_boats/[slug]) - {publishedYachts.length} yachts available</li>
              <li>Blog posts (blog/[slug])</li>
              <li>Dynamic content pages ([id])</li>
            </ul>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Yacht Statistics</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-gray-800">Total Yachts</div>
                  <div className="text-[#D6AB61] text-xl">{publishedYachts.length}</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-gray-800">Bareboat</div>
                  <div className="text-[#D6AB61] text-xl">{bareboatYachts.length}</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-gray-800">Crewed</div>
                  <div className="text-[#D6AB61] text-xl">{crewedYachts.length}</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-gray-800">Super Yachts</div>
                  <div className="text-[#D6AB61] text-xl">{superYachts.length}</div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-playfair">
              XML Sitemap
            </h3>
            <p className="text-gray-600 mb-4">
              For search engines and automated tools, you can access our XML sitemap:
            </p>
            <Link
              href="/sitemap.xml"
              className="inline-flex items-center px-4 py-2 bg-[#D6AB61] text-white rounded-lg hover:bg-[#B8944F] transition-colors"
            >
              View XML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
