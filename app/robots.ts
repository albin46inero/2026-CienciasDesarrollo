
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/_next/',
        '/api/',
        '/admin/',
        '/.env',
        '/server/',
      ],
    },
    sitemap: 'https://tudominio.com/sitemap.xml',
  };
}