/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'localhost',
      'search.pstatic.net',
      'mblogthumb-phinf.pstatic.net',
      '52.79.254.207',
      'api.onsuyum.com'
    ],
  },
}
