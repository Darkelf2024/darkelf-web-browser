/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const hasCustomDomain = false; // no custom domain, using github.io URL

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd && !hasCustomDomain ? '/darkelf-web-browser' : '',
  assetPrefix: isProd && !hasCustomDomain ? '/darkelf-web-browser/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
