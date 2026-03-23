/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/terms", destination: "/privacy#terms", permanent: true },
    ];
  },
};

module.exports = nextConfig;
