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
}
