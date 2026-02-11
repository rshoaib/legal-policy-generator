// Policy Compliance Analyzer — checks text for GDPR/CCPA/General compliance gaps

export interface CheckResult {
    id: string;
    label: string;
    passed: boolean;
    suggestion: string;
}

export interface CategoryResult {
    name: string;
    icon: string;
    checks: CheckResult[];
    score: number; // 0–100
}

export interface AnalysisResult {
    overallScore: number; // 0–100
    categories: CategoryResult[];
    readability: {
        score: number; // 0–100
        grade: string; // e.g. "Grade 12", "College"
        verdict: string; // "Easy", "Moderate", "Difficult"
    };
    wordCount: number;
}

// ─── Keyword-based clause detection ──────────────────────────────────────────

function has(text: string, ...keywords: string[]): boolean {
    const lower = text.toLowerCase();
    return keywords.some(k => lower.includes(k.toLowerCase()));
}

// ─── GDPR Checks (12) ───────────────────────────────────────────────────────

function gdprChecks(text: string): CheckResult[] {
    return [
        {
            id: 'gdpr-controller',
            label: 'Data Controller Identified',
            passed: has(text, 'data controller', 'controller of your', 'we are the controller', 'acting as controller'),
            suggestion: 'Identify who the data controller is (your company name and contact details).',
        },
        {
            id: 'gdpr-legal-basis',
            label: 'Legal Basis for Processing',
            passed: has(text, 'legal basis', 'legitimate interest', 'consent', 'contractual necessity', 'legal obligation'),
            suggestion: 'Specify the legal basis for processing personal data (consent, legitimate interest, contract, etc.).',
        },
        {
            id: 'gdpr-right-access',
            label: 'Right of Access',
            passed: has(text, 'right to access', 'right of access', 'access your data', 'access your personal', 'request access'),
            suggestion: 'Inform users of their right to request access to their personal data.',
        },
        {
            id: 'gdpr-right-erasure',
            label: 'Right to Erasure (Right to be Forgotten)',
            passed: has(text, 'right to erasure', 'right to be forgotten', 'delete your', 'request deletion', 'erase your'),
            suggestion: 'Include the right to erasure — users can request deletion of their personal data.',
        },
        {
            id: 'gdpr-right-portability',
            label: 'Right to Data Portability',
            passed: has(text, 'data portability', 'portable format', 'transfer your data', 'machine-readable'),
            suggestion: 'Mention the right to receive personal data in a portable, machine-readable format.',
        },
        {
            id: 'gdpr-right-rectification',
            label: 'Right to Rectification',
            passed: has(text, 'rectification', 'correct your', 'update your', 'inaccurate data', 'right to correct'),
            suggestion: 'State that users can request correction of inaccurate personal data.',
        },
        {
            id: 'gdpr-right-restriction',
            label: 'Right to Restriction of Processing',
            passed: has(text, 'restrict processing', 'restriction of processing', 'limit processing', 'right to restrict'),
            suggestion: 'Include the right to request restriction of data processing in certain circumstances.',
        },
        {
            id: 'gdpr-right-objection',
            label: 'Right to Object',
            passed: has(text, 'right to object', 'object to processing', 'object to the processing', 'opt out of'),
            suggestion: 'Inform users of their right to object to data processing based on legitimate interests.',
        },
        {
            id: 'gdpr-dpo',
            label: 'DPO / Privacy Contact',
            passed: has(text, 'data protection officer', 'dpo', 'privacy officer', 'privacy contact', 'privacy@', 'dpo@'),
            suggestion: 'Provide contact details for a Data Protection Officer or privacy contact person.',
        },
        {
            id: 'gdpr-retention',
            label: 'Data Retention Period',
            passed: has(text, 'retention', 'how long', 'retain your', 'stored for', 'keep your data', 'retention period', 'deleted after'),
            suggestion: 'Specify how long personal data is retained or the criteria used to determine retention periods.',
        },
        {
            id: 'gdpr-transfers',
            label: 'International Data Transfers',
            passed: has(text, 'international transfer', 'transfer of data', 'outside the', 'third countr', 'cross-border', 'adequacy decision', 'standard contractual'),
            suggestion: 'Disclose if data is transferred outside the EU/EEA and what safeguards are in place.',
        },
        {
            id: 'gdpr-breach',
            label: 'Breach Notification',
            passed: has(text, 'breach notification', 'data breach', 'security breach', 'notify you', 'security incident'),
            suggestion: 'Describe your process for notifying users and authorities in case of a data breach.',
        },
    ];
}

// ─── CCPA Checks (8) ────────────────────────────────────────────────────────

function ccpaChecks(text: string): CheckResult[] {
    return [
        {
            id: 'ccpa-right-know',
            label: 'Right to Know',
            passed: has(text, 'right to know', 'right to request', 'categories of personal', 'what personal information'),
            suggestion: 'Inform California consumers of their right to know what personal information is collected.',
        },
        {
            id: 'ccpa-right-delete',
            label: 'Right to Delete',
            passed: has(text, 'right to delete', 'request deletion', 'delete your', 'right to erasure'),
            suggestion: 'Include the right for consumers to request deletion of their personal information.',
        },
        {
            id: 'ccpa-right-optout',
            label: 'Right to Opt-Out of Sale',
            passed: has(text, 'opt-out', 'opt out', 'do not sell', 'sale of personal'),
            suggestion: 'Disclose whether you sell personal information and provide opt-out instructions.',
        },
        {
            id: 'ccpa-do-not-sell',
            label: '"Do Not Sell My Info" Disclosure',
            passed: has(text, 'do not sell', 'we do not sell', 'not sell your', 'sale of your personal'),
            suggestion: 'Include a clear "Do Not Sell My Personal Information" statement or link.',
        },
        {
            id: 'ccpa-categories',
            label: 'Categories of Data Collected',
            passed: has(text, 'categories of', 'types of information', 'types of data', 'information we collect', 'data we collect'),
            suggestion: 'List the categories of personal information you collect (identifiers, commercial info, internet activity, etc.).',
        },
        {
            id: 'ccpa-third-party',
            label: 'Third-Party Sharing Disclosure',
            passed: has(text, 'third part', 'share your', 'disclose your', 'shared with', 'service provider'),
            suggestion: 'Disclose what categories of personal information are shared with third parties and for what purpose.',
        },
        {
            id: 'ccpa-non-discrimination',
            label: 'Non-Discrimination',
            passed: has(text, 'non-discrimination', 'not discriminate', 'equal service', 'not deny'),
            suggestion: 'State that you will not discriminate against consumers for exercising their CCPA rights.',
        },
        {
            id: 'ccpa-financial-incentive',
            label: 'Financial Incentive Disclosure',
            passed: has(text, 'financial incentive', 'loyalty program', 'price difference', 'incentive') || !has(text, 'reward', 'discount for data'),
            suggestion: 'If you offer financial incentives in exchange for data, disclose the terms.',
        },
    ];
}

// ─── General Best Practices (6) ─────────────────────────────────────────────

function generalChecks(text: string): CheckResult[] {
    return [
        {
            id: 'gen-contact',
            label: 'Contact Information',
            passed: has(text, 'contact us', 'email us', 'reach us', '@', 'contact@', 'support@', 'privacy@'),
            suggestion: 'Provide clear contact information (email, address, or form) for privacy inquiries.',
        },
        {
            id: 'gen-updated',
            label: 'Last Updated Date',
            passed: has(text, 'last updated', 'effective date', 'last modified', 'date of', 'updated on', 'effective as of'),
            suggestion: 'Include a "Last Updated" or "Effective Date" so users know how current the policy is.',
        },
        {
            id: 'gen-cookies',
            label: 'Cookie Disclosure',
            passed: has(text, 'cookie', 'cookies', 'tracking technolog', 'local storage', 'pixel'),
            suggestion: 'Disclose your use of cookies and tracking technologies, their purposes, and how to manage them.',
        },
        {
            id: 'gen-children',
            label: 'Children\'s Privacy (COPPA)',
            passed: has(text, 'children', 'child', 'under 13', 'under 16', 'minors', 'coppa', 'age of'),
            suggestion: 'Address how you handle data from children, especially if your service may be used by minors.',
        },
        {
            id: 'gen-third-party',
            label: 'Third-Party Services',
            passed: has(text, 'third-party', 'third party', 'google analytics', 'facebook', 'adsense', 'analytics', 'advertising'),
            suggestion: 'List the third-party services you use that may collect user data (analytics, ads, payment processors).',
        },
        {
            id: 'gen-security',
            label: 'Data Security Measures',
            passed: has(text, 'security', 'encrypt', 'protect', 'safeguard', 'ssl', 'secure', 'measures'),
            suggestion: 'Describe the security measures you take to protect personal data (encryption, access controls, etc.).',
        },
    ];
}

// ─── Readability (Flesch-Kincaid approximation) ─────────────────────────────

function countSyllables(word: string): number {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    if (word.length <= 3) return 1;
    let count = 0;
    const vowels = 'aeiouy';
    let prevVowel = false;
    for (const char of word) {
        const isVowel = vowels.includes(char);
        if (isVowel && !prevVowel) count++;
        prevVowel = isVowel;
    }
    // Adjust for silent e
    if (word.endsWith('e') && count > 1) count--;
    return Math.max(count, 1);
}

function analyzeReadability(text: string): AnalysisResult['readability'] {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = text.split(/\s+/).filter(w => w.replace(/[^a-zA-Z]/g, '').length > 0);
    const totalSyllables = words.reduce((sum, w) => sum + countSyllables(w), 0);

    const numSentences = Math.max(sentences.length, 1);
    const numWords = Math.max(words.length, 1);

    // Flesch Reading Ease
    const flesch = 206.835 - 1.015 * (numWords / numSentences) - 84.6 * (totalSyllables / numWords);
    const clampedFlesch = Math.max(0, Math.min(100, Math.round(flesch)));

    // Flesch-Kincaid Grade Level
    const gradeLevel = 0.39 * (numWords / numSentences) + 11.8 * (totalSyllables / numWords) - 15.59;
    const clampedGrade = Math.max(1, Math.min(20, Math.round(gradeLevel)));

    let grade: string;
    if (clampedGrade <= 6) grade = `Grade ${clampedGrade} (Elementary)`;
    else if (clampedGrade <= 8) grade = `Grade ${clampedGrade} (Middle School)`;
    else if (clampedGrade <= 12) grade = `Grade ${clampedGrade} (High School)`;
    else grade = `Grade ${clampedGrade} (College)`;

    let verdict: string;
    if (clampedFlesch >= 60) verdict = 'Easy to read';
    else if (clampedFlesch >= 40) verdict = 'Moderate difficulty';
    else verdict = 'Difficult to read';

    return { score: clampedFlesch, grade, verdict };
}

// ─── Main Analyzer ──────────────────────────────────────────────────────────

function scoreCategory(checks: CheckResult[]): number {
    if (checks.length === 0) return 0;
    const passed = checks.filter(c => c.passed).length;
    return Math.round((passed / checks.length) * 100);
}

export function analyzePolicy(text: string): AnalysisResult {
    const gdpr = gdprChecks(text);
    const ccpa = ccpaChecks(text);
    const general = generalChecks(text);

    const gdprScore = scoreCategory(gdpr);
    const ccpaScore = scoreCategory(ccpa);
    const generalScore = scoreCategory(general);

    const allChecks = [...gdpr, ...ccpa, ...general];
    const totalPassed = allChecks.filter(c => c.passed).length;
    const overallScore = Math.round((totalPassed / allChecks.length) * 100);

    const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;

    return {
        overallScore,
        categories: [
            { name: 'GDPR Compliance', icon: '🇪🇺', checks: gdpr, score: gdprScore },
            { name: 'CCPA Compliance', icon: '🇺🇸', checks: ccpa, score: ccpaScore },
            { name: 'General Best Practices', icon: '✅', checks: general, score: generalScore },
        ],
        readability: analyzeReadability(text),
        wordCount,
    };
}
