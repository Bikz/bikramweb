/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Ensure Tailwind and PostCSS work correctly
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config;
    },
}

module.exports = nextConfig