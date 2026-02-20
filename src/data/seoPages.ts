/**
 * Programmatic SEO Pages — "[Policy] for [Industry]"
 * 6 policy types × 10 industries = 60 landing pages
 */

export interface SeoPage {
    slug: string;
    policyType: string;
    policyLabel: string;
    industry: string;
    title: string;
    description: string;
    heroText: string;
    features: string[];
    faqs: { q: string; a: string }[];
}

// ── Policy definitions ──
const policies = [
    { type: 'privacy', label: 'Privacy Policy', verb: 'collect, store, and protect user data' },
    { type: 'tos', label: 'Terms of Service', verb: 'define user rights, obligations, and acceptable use' },
    { type: 'eula', label: 'EULA', verb: 'license your software and protect your intellectual property' },
    { type: 'refund', label: 'Refund Policy', verb: 'set clear expectations for returns and refunds' },
    { type: 'cookie', label: 'Cookie Policy', verb: 'disclose cookie usage and comply with ePrivacy/GDPR' },
    { type: 'dmca', label: 'DMCA Policy', verb: 'protect your content and handle copyright takedown requests' },
];

// ── Industry definitions ──
const industries = [
    {
        id: 'ecommerce',
        name: 'E-commerce',
        context: 'online stores and Shopify shops',
        dataTypes: 'payment details, shipping addresses, purchase history, and browsing behavior',
        riskNote: 'E-commerce stores handle sensitive payment card data and must comply with PCI-DSS in addition to GDPR/CCPA.',
    },
    {
        id: 'saas',
        name: 'SaaS',
        context: 'software-as-a-service platforms and web applications',
        dataTypes: 'account credentials, usage analytics, API keys, and subscription billing data',
        riskNote: 'SaaS products often process data on behalf of customers, making a Data Processing Agreement equally important.',
    },
    {
        id: 'mobile-app',
        name: 'Mobile App',
        context: 'iOS and Android applications',
        dataTypes: 'device identifiers, location data, push notification tokens, and in-app purchase records',
        riskNote: 'Mobile apps must comply with Apple App Store and Google Play policies, which mandate a visible privacy policy.',
    },
    {
        id: 'blog',
        name: 'Blog & Content Site',
        context: 'blogs, news sites, and content publishers',
        dataTypes: 'email subscribers, comment data, analytics cookies, and advertising identifiers',
        riskNote: 'Content sites relying on Google AdSense must have a compliant privacy policy to avoid ad serving suspension.',
    },
    {
        id: 'healthcare',
        name: 'Healthcare & Telehealth',
        context: 'medical practices, telehealth platforms, and health apps',
        dataTypes: 'protected health information (PHI), appointment records, insurance details, and medical history',
        riskNote: 'Healthcare businesses in the US must comply with HIPAA, which imposes strict data handling and breach notification requirements.',
    },
    {
        id: 'restaurant',
        name: 'Restaurant & Food Delivery',
        context: 'restaurants, cafés, and food delivery services',
        dataTypes: 'order history, delivery addresses, payment data, and dietary preferences',
        riskNote: 'Online ordering systems collect personal and financial data that must be protected under consumer privacy laws.',
    },
    {
        id: 'freelancer',
        name: 'Freelancer & Consultant',
        context: 'independent professionals and consulting businesses',
        dataTypes: 'client contact information, project files, invoicing data, and communication records',
        riskNote: 'Even solo professionals need legal policies to establish trust and limit liability with clients.',
    },
    {
        id: 'agency',
        name: 'Agency & Marketing',
        context: 'digital agencies, marketing firms, and creative studios',
        dataTypes: 'client campaign data, analytics access tokens, ad account credentials, and audience insights',
        riskNote: 'Agencies handling client data act as data processors under GDPR and must demonstrate compliance.',
    },
    {
        id: 'nonprofit',
        name: 'Nonprofit & Charity',
        context: 'nonprofit organizations, NGOs, and charitable foundations',
        dataTypes: 'donor information, volunteer records, beneficiary data, and fundraising analytics',
        riskNote: 'Nonprofits collecting donations online must protect donor data and comply with the same privacy laws as commercial entities.',
    },
    {
        id: 'education',
        name: 'Education & Online Courses',
        context: 'schools, e-learning platforms, and course creators',
        dataTypes: 'student records, enrollment data, progress tracking, and payment information',
        riskNote: 'Education platforms serving minors must comply with COPPA (US) and age-gating requirements under GDPR.',
    },
];

// ── Generate all 60 pages ──
function buildPages(): SeoPage[] {
    const pages: SeoPage[] = [];

    for (const policy of policies) {
        for (const ind of industries) {
            const slug = `${policy.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-for-${ind.id}`;

            pages.push({
                slug,
                policyType: policy.type,
                policyLabel: policy.label,
                industry: ind.name,
                title: `Free ${policy.label} Generator for ${ind.name} (2026)`,
                description: `Generate a professional ${policy.label} tailored for ${ind.context}. Covers ${ind.dataTypes}. GDPR & CCPA compliant — no signup required.`,
                heroText: `Every ${ind.name.toLowerCase()} business needs a ${policy.label.toLowerCase()} to ${policy.verb}. Our generator creates one tailored for ${ind.context} in under 3 minutes.`,
                features: [
                    `Tailored for ${ind.context} — covers ${ind.dataTypes}.`,
                    `${ind.riskNote}`,
                    `Compliant with GDPR, CCPA, and other major regulations out of the box.`,
                    `Download as HTML, copy to clipboard, or export as PDF — completely free.`,
                ],
                faqs: [
                    {
                        q: `Do I need a ${policy.label.toLowerCase()} for my ${ind.name.toLowerCase()} business?`,
                        a: `Yes. ${ind.riskNote} A ${policy.label.toLowerCase()} is legally required in most jurisdictions if you ${policy.verb}.`,
                    },
                    {
                        q: `What should a ${policy.label.toLowerCase()} for ${ind.name.toLowerCase()} include?`,
                        a: `It should cover how you handle ${ind.dataTypes}. Our generator automatically includes all required sections based on your business details and applicable regulations.`,
                    },
                    {
                        q: `Is this ${policy.label.toLowerCase()} generator really free?`,
                        a: `Yes, 100% free with no signup, no credit card, and no hidden fees. Your data stays in your browser — we never store it on our servers.`,
                    },
                ],
            });
        }
    }
    return pages;
}

export const seoPages = buildPages();
