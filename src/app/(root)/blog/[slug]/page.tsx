import BlogDetail from "@/Component/blogDetail/detailDescription";
import { fetchBlogs } from "@/lib/api";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface BlogData {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  detailDescription: string;
  image: string;
  status: string;
}

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.faraway-yachting.com";
const fallbackImage = `${siteUrl}/images/default-blog.jpg`;

const blogMetadataMap: Record<string, {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
}> = {
  "best-yacht-charter-company-thailand": {
    title: "Faraway Yachting Wins 2025 World Luxury Travel Award | Best Yacht Charter Company in Thailand",
    description: "Faraway Yachting, a leading luxury yacht charter company in Phuket, Thailand wins the 2025 World Luxury Travel Award for Best Yacht Charter Company.",
  },
};

const stripHtml = (html: string): string => {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
};

async function getBlogBySlug(slug: string): Promise<BlogData | null> {
  try {
    const response = await fetchBlogs();
    const allBlogs: BlogData[] = response.data?.blogs || [];
    const published = allBlogs.filter(
      (blog) => blog.status?.toLowerCase().trim() === "published"
    );
    return published.find((blog) => blog.slug === slug) ?? null;
  } catch (error) {
    return null;
  }
}

const resolveImageUrl = (image?: string): string => {
  if (!image) return fallbackImage;
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  return `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    const notFoundTitle = "Blog Not Found | Faraway Yachting";
    const description = "Discover yacht charter insights, itineraries, and sailing tips on the Faraway Yachting blog.";
    return {
      title: notFoundTitle,
      description,
      openGraph: {
        title: notFoundTitle,
        description,
        url: `${siteUrl}/blog/${slug}`,
        siteName: "Faraway Yachting",
      },
      twitter: {
        card: "summary_large_image",
        title: notFoundTitle,
        description,
      },
    };
  }

  const customMeta = blogMetadataMap[slug];
  
  const title = customMeta?.title || `${blog.title} | Faraway Yachting Blog`;
  const description = customMeta?.description 
    || blog.shortDescription?.trim()
    || stripHtml(blog.detailDescription ?? "").slice(0, 160) 
    || "Explore luxury yacht charters, itineraries, and travel tips with Faraway Yachting.";
  const imageUrl = resolveImageUrl(customMeta?.image || blog.image);
  const url = `${siteUrl}/blog/${blog.slug}`;

  return {
    title,
    description,
    keywords: customMeta?.keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "Faraway Yachting",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  return (
    <div>
      <BlogDetail slug={slug} initialBlog={blog ?? undefined} />
    </div>
  );
}