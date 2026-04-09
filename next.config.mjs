import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const hasCustomDomain = true;

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd && !hasCustomDomain ? '/darkelf-web-browser' : '',
  assetPrefix: isProd && !hasCustomDomain ? '/darkelf-web-browser/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd && !hasCustomDomain ? '/darkelf-web-browser' : '',
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
