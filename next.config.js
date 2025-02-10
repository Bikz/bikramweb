/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    // Leave fallback for fs/path if you still need it (e.g. "fs" calls in server code):
    config.resolve.fallback = { fs: false, path: false }

    // IMPORTANT: Do NOT manually alias 'react', 'react-dom', 'react/jsx-runtime', etc.
    // Next.js 13+ automatically handles these in React 17/18.
    return config
  },
}

module.exports = nextConfig