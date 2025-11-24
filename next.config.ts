import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'faraway-psi.vercel.app'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
        ],
    },
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
        FRONTEND_URL: process.env.FRONTEND_URL,
        NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    },
};

export default nextConfig;
