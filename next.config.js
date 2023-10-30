// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  rewrites: async () => [
    {
      source: '/dashboard',
      destination: '/pages/dashboard',
    },
  ],
};
