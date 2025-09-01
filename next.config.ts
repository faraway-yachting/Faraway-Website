import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
    },
};

export default nextConfig;
