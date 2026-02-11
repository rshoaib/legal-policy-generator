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
}
