import type { MetadataRoute } from 'next'
import { seoPages } from '@/data/seoPages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://legalpolicygen.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/compliance-checker`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/legal-page-checker`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/bundle`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/policy-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/history`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/profile`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ]

  const generatorRoutes: MetadataRoute.Sitemap = [
    'privacy-policy-generator', 'terms-of-service-generator', 'cookie-policy-generator',
    'eula-generator', 'nda-generator', 'refund-policy-generator', 'disclaimer-generator',
    'cookie-banner-generator', 'robots-txt-generator', 'accessibility-statement-generator',
    'dpa-generator', 'aup-generator', 'dmca-generator', 'employee-privacy-policy-generator',
    'affiliate-disclaimer-generator', 'social-media-policy-generator', 'newsletter-policy-generator',
    'tos-generator', 'hipaa-policy-generator', 'sla-generator', 'data-breach-policy-generator',
    'ai-ethics-policy-generator', 'shipping-policy-generator',
  ].map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const seoRoutes: MetadataRoute.Sitemap = seoPages.map(page => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...generatorRoutes, ...seoRoutes]
}
