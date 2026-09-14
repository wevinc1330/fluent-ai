import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/checkout/success', '/checkout/fail'],
    },
    sitemap: 'https://fluent-ai.vercel.app/sitemap.xml',
  };
}
