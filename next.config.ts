import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* ── Redirects: preserve legacy GSC-indexed URLs ── */
  async redirects() {
    /* Path-based legacy redirects */
    const pathRedirects = [
      { source: '/cookie-policy', destination: '/cookie-policy-generator', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-policy-generator', permanent: true },
      { source: '/terms-of-service', destination: '/terms-of-service-generator', permanent: true },
      { source: '/refund-policy', destination: '/refund-policy-generator', permanent: true },
      { source: '/disclaimer', destination: '/disclaimer-generator', permanent: true },
      { source: '/cookie-banner', destination: '/cookie-banner-generator', permanent: true },

      /* Cannibalization fixes — consolidate near-duplicate URLs to canonical winner.
         Winners chosen by word count + recency (per 2026-05-03 SEO audit). */
      { source: '/tos-generator', destination: '/terms-of-service-generator', permanent: true },
      { source: '/blog/gdpr-vs-ccpa-key-differences', destination: '/blog/ccpa-vs-gdpr-differences-explained', permanent: true },
      { source: '/blog/how-to-write-refund-policy-ecommerce', destination: '/blog/how-to-write-refund-policy', permanent: true },
      { source: '/blog/acceptable-use-policy-guide', destination: '/blog/what-is-an-acceptable-use-policy', permanent: true },
    ]

    /* Query-param legacy redirects: /?type=X → proper SEO page (server-side 301) */
    const typeMap: Record<string, string> = {
      'privacy': '/privacy-policy-generator',
      'terms': '/terms-of-service-generator',
      'tos': '/terms-of-service-generator',
      'cookie': '/cookie-policy-generator',
      'refund': '/refund-policy-generator',
      'disclaimer': '/disclaimer-generator',
      'cookie-banner': '/cookie-banner-generator',
      'robots-txt': '/robots-txt-generator',
      'accessibility': '/accessibility-statement-generator',
      'nda': '/nda-generator',
      'eula': '/eula-generator',
      'dpa': '/dpa-generator',
      'aup': '/aup-generator',
      'dmca': '/dmca-generator',
      'employee-privacy': '/employee-privacy-policy-generator',
      'affiliate-disclaimer': '/affiliate-disclaimer-generator',
      'social-media': '/social-media-policy-generator',
      'newsletter': '/newsletter-policy-generator',
      'hipaa': '/hipaa-policy-generator',
      'sla': '/sla-generator',
      'data-breach': '/data-breach-policy-generator',
      'ai-ethics': '/ai-ethics-policy-generator',
      'shipping': '/shipping-policy-generator',
    }

    const queryRedirects = Object.entries(typeMap).map(([type, dest]) => ({
      source: '/',
      has: [{ type: 'query' as const, key: 'type', value: type }],
      destination: dest,
      permanent: true,
    }))

    /* /?q={search_term_string} → homepage (legacy SearchAction URL) */
    const searchRedirect = {
      source: '/',
      has: [{ type: 'query' as const, key: 'q' }],
      destination: '/',
      permanent: true,
    }

    return [...pathRedirects, ...queryRedirects, searchRedirect]
  },

  /* ── Caching: long-lived cache for static assets ── */
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/favicon.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/og-image.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  /* ── Image optimization ── */
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
