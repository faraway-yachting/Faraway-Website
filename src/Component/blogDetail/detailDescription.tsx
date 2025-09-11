"use client";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchBlogs } from "@/lib/api";
import { styles, combine } from "@/styles";

interface BlogData {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  detailDescription: string;
  image: string;
  status: string;
}
interface BlogProps {
  slug: string;
}
const slugify = (text: string | undefined | null): string => {
  if (!text) return "";
  return text;
};
const BlogDetail: React.FC<BlogProps> = ({ slug }) => {
  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      try {
        const res = await fetchBlogs();
        const allBlogs: BlogData[] = res.data?.blogs || [];
        // Only published blogs
        const publishedBlogs = allBlogs.filter(
          (blog) => blog.status?.toLowerCase().trim() === "published"
        );
        // Match by slug
        const matchingBlog = publishedBlogs.find(
          (blog) => slugify(blog.slug) === slugify(slug)
        );
        if (matchingBlog) {
          setData(matchingBlog);
        }
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className={combine(styles.flexCenter, "min-h-[40rem]")}>
        <div className="w-10 h-10 border-4 border-t-transparent border-[#2185D0] rounded-full animate-spin" />
      </div>
    );
  }
  if (!data) {
    return (
      <div className={combine(styles.container, "py-10 text-center")}>
        <p className="text-red-500 text-lg font-semibold mb-4">
          Blog not found
        </p>
        <button
          onClick={() => router.push("/blog")}
          className="bg-[#2185D0] text-white px-6 py-2 rounded-lg hover:bg-[#1b6fab] transition"
        >
          Back to Blog List
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="relative">
        <div className={combine(styles.bgImage, "bg-[url('/images/blogimg1.png')] min-h-[30vh] md:min-h-[40vh] lg:min-h-[58vh]", styles.flexCol, "justify-center items-center", styles.px4)}>
          <div className="absolute inset-0 bg-[#012A50]/40 z-0" />
          <div className="relative z-10">
            <p className={combine(styles.p2,"font-semibold text-zink mb-3 text-center ")} >{data.slug}</p>
            <p className={combine(styles.h2, "mb-4 text-white max-w-2xl mx-auto text-center")}>
              {data.title}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-10 px-4">
        <img
          src={data.image || "/images/default-blog.jpg"}
          alt={data.title}
          className="w-full h-94 object-cover mb-4"
        />
        <p className={combine(styles.p3, "text-zink leading-relaxed")}>
          {data.shortDescription}
        </p>
        <div
          className={combine(styles.p1, "text-zink leading-relaxed")}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.detailDescription || ""),
          }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
