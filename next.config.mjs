/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['bootstrap'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
    };
    return config;
  },
};

export default nextConfig;
