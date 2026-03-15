export type PolicyType = 'privacy' | 'terms' | 'cookie' | 'refund' | 'disclaimer' | 'cookie-banner' | 'robots-txt' | 'accessibility' | 'nda' | 'eula' | 'dpa' | 'aup' | 'dmca' | 'employee-privacy' | 'affiliate-disclaimer' | 'social-media' | 'newsletter' | 'tos' | 'hipaa' | 'sla' | 'data-breach' | 'ai-ethics' | 'shipping';

/** i18n keys for policy type titles */
export const POLICY_TITLE_KEYS: Record<PolicyType, string> = {
    'privacy': 'privacy_policy',
    'terms': 'terms_conditions',
    'cookie': 'cookie_policy',
    'refund': 'refund_policy',
    'disclaimer': 'disclaimer',
    'cookie-banner': 'cookie_consent_banner',
    'robots-txt': 'robots_txt_generator',
    'accessibility': 'accessibility_statement',
    'nda': 'start_nda',
    'eula': 'eula',
    'dpa': 'dpa',
    'aup': 'aup',
    'dmca': 'dmca',
    'employee-privacy': 'employee_privacy',
    'affiliate-disclaimer': 'affiliate_disclaimer',
    'social-media': 'social_media_policy',
    'newsletter': 'newsletter_policy',
    'tos': 'tos',
    'hipaa': 'hipaa',
    'sla': 'sla',
    'data-breach': 'data_breach',
    'ai-ethics': 'ai_ethics',
    'shipping': 'shipping_policy',
};

/** i18n keys for Generate button labels */
export const POLICY_GENERATE_KEYS: Record<PolicyType, string> = {
    'privacy': 'generate_button',
    'terms': 'generate_button',
    'cookie': 'generate_button',
    'refund': 'generate_button',
    'disclaimer': 'generate_button',
    'cookie-banner': 'generate_banner',
    'robots-txt': 'generate_robots',
    'accessibility': 'generate_accessibility',
    'nda': 'generate_button',
    'eula': 'generate_eula',
    'dpa': 'generate_dpa',
    'aup': 'generate_aup',
    'dmca': 'generate_dmca',
    'employee-privacy': 'generate_employee_privacy',
    'affiliate-disclaimer': 'generate_affiliate_disclaimer',
    'social-media': 'generate_social_media',
    'newsletter': 'generate_newsletter',
    'tos': 'generate_tos',
    'hipaa': 'generate_hipaa',
    'sla': 'generate_sla',
    'data-breach': 'generate_data_breach',
    'ai-ethics': 'generate_ai_ethics',
    'shipping': 'generate_shipping',
};

/** Human-readable labels for file names */
export const POLICY_FILE_LABELS: Record<PolicyType, string> = {
    'privacy': 'privacy-policy',
    'terms': 'terms-and-conditions',
    'cookie': 'cookie-policy',
    'refund': 'refund-policy',
    'disclaimer': 'disclaimer',
    'cookie-banner': 'cookie-banner',
    'robots-txt': 'robots',
    'accessibility': 'accessibility-statement',
    'nda': 'nda',
    'eula': 'eula',
    'dpa': 'data-processing-agreement',
    'aup': 'acceptable-use-policy',
    'dmca': 'dmca-policy',
    'employee-privacy': 'employee-privacy-policy',
    'affiliate-disclaimer': 'affiliate-disclosure',
    'social-media': 'social-media-policy',
    'newsletter': 'newsletter-policy',
    'tos': 'terms-of-service',
    'hipaa': 'hipaa-notice',
    'sla': 'service-level-agreement',
    'data-breach': 'data-breach-notification',
    'ai-ethics': 'ai-ethics-policy',
    'shipping': 'shipping-policy',
};

export interface PolicyData {
    companyName: string;
    companyAddress: string;
    websiteUrl: string;
    websiteName: string;
    contactEmail: string;
    country: string;
    date: string;
    refundDays?: string; // stored as string from input, convert if needed
    refundConditions?: string;
    disclaimerAffiliate?: boolean;
    disclaimerHealth?: boolean;
    disclaimerFinancial?: boolean;

    // Cookie Banner fields
    bannerPosition?: 'top' | 'bottom' | 'bottom-right' | 'bottom-left';
    bannerColor?: string;
    bannerTextColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
    bannerText?: string;
    buttonText?: string;

    // Robots.txt fields
    robotsUserAgent?: string;
    robotsAllow?: string;
    robotsDisallow?: string;
    robotsSitemap?: string;

    // Accessibility fields
    accessibilityStandard?: string;
    accessibilityContactEmail?: string;
    accessibilityContactPhone?: string;

    // NDA fields (reusing generic company fields)
    vehicleDescription?: string; // Placeholder if we need specific NDA fields later

    // EULA fields
    eulaLicenseType?: 'single-user' | 'multi-user' | 'saas';
    eulaSubscription?: boolean;

    // DPA fields
    dpaDataTypes?: string;
    dpaProcessingPurpose?: string;

    // Cookie Banner Extras
    bannerLinkText?: string;
    bannerLinkUrl?: string;
    bannerDeclineButton?: boolean;
    bannerDeclineText?: string;

    // SLA fields
    slaUptimeGuarantee?: string;

    // Shipping Policy fields
    shippingProcessingTime?: string;
    shippingMethods?: string;
    shippingDomesticTime?: string;
    shippingInternational?: boolean;
    shippingInternationalTime?: string;
    shippingFreeThreshold?: string;
    shippingRestrictions?: string;

    // Advanced Privacy Toggles
    privacySellData?: boolean;
    privacyChildren?: boolean;
    privacyGoogleAnalytics?: boolean;
}
