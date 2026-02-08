import type { PolicyData } from '../../appTypes';

export const generateDisclaimer = (data: PolicyData): string => {
    let content = `
Disclaimer for ${data.websiteName}

Last updated: ${data.date}

The information provided by ${data.companyName} ("we," "us," or "our") on ${data.websiteUrl} (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.

1. General Disclaimer

Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
`;

    if (data.disclaimerAffiliate) {
        content += `
2. Affiliate Disclaimer

The Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include the following:

* Amazon Associates
* ClickBank
* ShareASale
* CJ Affiliate
`;
    }

    if (data.disclaimerHealth) {
        content += `
3. Medical Disclaimer

The Site cannot and does not contain medical/health advice. The medical/health information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical/health advice. The use or reliance of any information contained on the Site is solely at your own risk.
`;
    }

    if (data.disclaimerFinancial) {
        content += `
4. Professional Disclaimer

The Site cannot and does not contain legal, financial, tax, or other professional advice. The legal, financial, tax, or other professional information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal, financial, tax, or other professional advice. The use or reliance of any information contained on the Site is solely at your own risk.
`;
    }

    content += `
5. External Links Disclaimer

The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.

6. Contact Us

If you have any questions about this Disclaimer, You can contact us:

* By email: ${data.contactEmail}
`;

    return content;
};
