/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        port: "",
        pathname: "/v1/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        // pathname: "/v1/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        // pathname: "/v1/**",
      },
    ],
  },
};

module.exports = nextConfig;
