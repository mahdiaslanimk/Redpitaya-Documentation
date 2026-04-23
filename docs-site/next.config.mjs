/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "redpitaya.com",
      },
    ],
  },
  // Support for markdown content processing
  pageExtensions: ["ts", "tsx", "js", "jsx"],
};

export default nextConfig;
