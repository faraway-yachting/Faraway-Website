"use client";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { blogData, BlogData } from "../../data/blogData";



interface BlogProps {
  slug: string;
}

// Use the same slugify function as in blogCards.tsx for consistency
const slugify = (text: string | undefined | null): string => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/ *\([^)]*\) */g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

const BlogDetail: React.FC<BlogProps> = ({ slug }) => {
  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = () => {
      try {
        // Use local blog data instead of API call
        const allBlogs: BlogData[] = blogData;

        // Find the blog that matches our slug using the same slugify logic
        const matchingBlog = allBlogs.find(blog => {
          const blogSlugified = slugify(blog.slug);
          const inputSlugified = slugify(slug);
          
          return blogSlugified === inputSlugified || 
                 blogSlugified === slug.toLowerCase() ||
                 blog.slug.toLowerCase() === slug.toLowerCase();
        });

        if (matchingBlog) {
          setData(matchingBlog);
        } else {
          const errorMessage = `Blog not found. Searched for slug: "${slug}". Available slugs: ${allBlogs.map(b => slugify(b.slug)).join(", ")}`;
          throw new Error(errorMessage);
        }
      } catch (err: any) {
        const errorMessage = err?.message || "Failed to fetch blog";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    } else {
      setError("No slug provided");
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40rem]">
        <div className="w-10 h-10 border-4 border-t-transparent border-[#2185D0] rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-10 px-4">
        <p className="text-red-500 text-lg font-semibold mb-4">Error loading blog:</p>
        <p className="text-red-500 text-base">{error}</p>
        <p className="text-gray-600 text-sm mt-4">
          Searched for slug: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code>
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto py-10 px-4">
        <p className="text-gray-500 text-lg">No blog found with slug: {slug}</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="relative">
        <div className="bg-[url('/images/blogimg1.png')] bg-cover bg-center bg-no-repeat min-h-[30vh] md:min-h-[40vh] lg:min-h-[58vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[#034250]/40 z-0" />
          <div className="relative z-10">
            <p className="text-[40px] font-playfair font-bold mb-4 text-white max-w-2xl mx-auto text-center">{data.title}</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-10 px-4">
        <img
          src={data.image || "/images/default-blog.jpg"}
          alt={data.title}
          className="w-full h-94 object-cover mb-4 "
        />
        <p className="text-lg text-black font-normal font-sourceSanspro leading-relaxed">
          {data.shortDescription}
        </p>
        <div
          className="text-lg text-black font-normal font-sourceSanspro leading-relaxed"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.detailDescription || "") }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
