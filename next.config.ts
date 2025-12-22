/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // ✅ Contentful images
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**',
      },

      // ✅ WordPress images (existing)
      {
        protocol: 'https',
        hostname: 'integrisit.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
