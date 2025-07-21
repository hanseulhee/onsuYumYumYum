/** @type {import('next').NextConfig} */

module.exports = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "localhost",
      "search.pstatic.net",
      "mblogthumb-phinf.pstatic.net",
      "52.79.254.207",
      "api.onsuyum.com",
      // process.env.NEXT_PUBLIC_IMAGE_URL,
    ],
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};
