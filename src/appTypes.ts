export interface PolicyData {
    companyName: string;
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
}
