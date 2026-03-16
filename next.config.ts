import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* ── Redirects: preserve legacy GSC-indexed URLs ── */
  async redirects() {
    return [
      { source: '/cookie-policy', destination: '/cookie-policy-generator', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-policy-generator', permanent: true },
      { source: '/terms-of-service', destination: '/terms-of-service-generator', permanent: true },
      { source: '/refund-policy', destination: '/refund-policy-generator', permanent: true },
      { source: '/disclaimer', destination: '/disclaimer-generator', permanent: true },
      { source: '/cookie-banner', destination: '/cookie-banner-generator', permanent: true },
    ]
  },
}

export default nextConfig
