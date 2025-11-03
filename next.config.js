/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Force Vercel to expose environment variables
  env: {
    NEXT_PUBLIC_INSTAGRAM_API_URL: process.env.NEXT_PUBLIC_INSTAGRAM_API_URL,
    NEXT_PUBLIC_INSTAGRAM_API_KEY: process.env.NEXT_PUBLIC_INSTAGRAM_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
  },
}

module.exports = nextConfig
