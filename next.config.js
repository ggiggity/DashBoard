/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "cdn.vox-cdn.com",
      "media.wired.com",
      "e7.pngegg.com",
      "i.pinimg.com",
      "i.etsystatic.com",
      "w7.pngwing.com",
      "miro.medium.com",
    ],
  },
};

module.exports = nextConfig;
