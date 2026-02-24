import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://darkelfbrowser.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/download', '/api/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
