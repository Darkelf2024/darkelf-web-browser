import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === "production";
const hasCustomDomain = true;

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static HTML export for GitHub Pages (served from public/CNAME → darkelfbrowser.com).
  // NOTE: API routes and next.config `headers()` do NOT work with a static export.
  // Security headers that a static host can honour are set via a <meta> CSP in
  // app/layout.tsx. Header-only directives (HSTS, X-Frame-Options) require a
  // real server (Cloudflare in front of Pages, or Vercel) to be enforced.
  output: "export",

  basePath: isProd && !hasCustomDomain ? "/darkelf-web-browser" : "",
  assetPrefix: isProd && !hasCustomDomain ? "/darkelf-web-browser/" : "",

  env: {
    NEXT_PUBLIC_BASE_PATH:
      isProd && !hasCustomDomain ? "/darkelf-web-browser" : "",
  },

  images: {
    unoptimized: true,
  },

  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
