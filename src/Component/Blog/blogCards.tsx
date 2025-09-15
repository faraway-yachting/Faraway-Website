"use client";
import { useState, useEffect } from "react";
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
    slug?: string;
}

const slugify = (text: string | undefined | null): string => {
    if (!text) return "";
    return text;
};
const limitCharacters = (text: string, charLimit: number): string => {
    if (!text) return "";
    return text.length > charLimit
        ? text.slice(0, charLimit) + "..."
        : text;
};
const BlogCards: React.FC<BlogProps> = ({ slug }) => {
    const router = useRouter();
    const [data, setData] = useState<BlogData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(9);

    useEffect(() => {
        const fetchBlogsData = async () => {
            try {
                const res = await fetchBlogs();
                const allBlogs: BlogData[] = res.data?.blogs || [];

                const publishedBlogs = allBlogs.filter(
                    (blog) => blog.status?.toLowerCase().trim() === "published"
                );
                const filteredBlogs = slug
                    ? publishedBlogs.filter((blog) => slugify(blog.slug) === slug)
                    : publishedBlogs;
                setData(filteredBlogs);
            } catch (err: any) {
                setError(err?.response?.data?.message || "Failed to fetch blogs.");
            } finally {
                setLoading(false);
            }
        };
        fetchBlogsData();
    }, [slug]);

    if (loading) {
        return (
            <div className={combine(styles.flexCenter, "min-h-[40rem]")}>
                <div className={styles.loadingSpinner} />
            </div>
        );
    }
    if (error) {
        return (
            <p className="text-center text-red-500 text-xl py-10">{error}</p>
        );
    }
    if (data.length === 0) {
        return (
            <p className="text-center text-gray-500 text-xl py-10">No blogs found.</p>
        );
    }
    const visibleBlogs = data.slice(0, visibleCount);
    const hasMore = visibleCount < data.length;
    return (
        <div className="">
            <div className="max-w-7xl mx-auto py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-5 xl:gap-9">
                    {visibleBlogs.map((blog) => {
                        const slugLink = slugify(blog.slug);
                        return (
                            <div
                                key={blog._id}
                                onClick={() => slugLink && router.push(`/blog/${slugLink}`)}
                                className="group cursor-pointer mb-3 pb-5 border border-gray-300 rounded-tl-3xl rounded-b-lg overflow-hidden bg-white hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
                            >
                                <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl">
                                    <img
                                        src={blog.image || "/images/default-blog.jpg"}
                                        alt={blog.title}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                                <div className="px-4 pt-4">
                                    <h3 className={combine(styles.h4, "text-zink mb-2 font-semibold")}>
                                        {limitCharacters(blog.title, 18)}
                                    </h3>
                                    <p className={combine ("font-normal text-zink",styles.p2)}>
                                        {blog.shortDescription.length > 214 ? (
                                            <>
                                                {blog.shortDescription.slice(0, 214)}...
                                                <span className="font-semibold text-zink underline  hover:text-[#D6AB62] hover:underline transition-colors duration-200 cursor-pointer ml-1">
                                                    read more
                                                </span>
                                            </>
                                        ) : (
                                            blog.shortDescription
                                        )}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {hasMore && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 6)}
                            className="px-7 lg:px-9 xl:px-11 py-2 font-sourceSansPro rounded-lg text-white bg-zink hover:bg-[#D6AB62] text-lg font-medium transition"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogCards;