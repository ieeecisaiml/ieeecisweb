import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: 'https://ieeecissummerschool2026.vercel.app/sitemap.xml',
    host: 'https://ieeecissummerschool2026.vercel.app',
  }
}
