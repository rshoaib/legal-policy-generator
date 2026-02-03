import type { PolicyData } from '../../appTypes';

export const generatePrivacyPolicy = (data: PolicyData): string => {
    return `
Privacy Policy for ${data.websiteName}

Last updated: ${data.date}

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.

1. Interpretation and Definitions

Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

Definitions
For the purposes of this Privacy Policy:

* Account means a unique account created for You to access our Service or parts of our Service.
* Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to ${data.companyName}, located in ${data.country}.
* Service refers to the Website.
* Website refers to ${data.websiteName}, accessible from ${data.websiteUrl}
* You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

2. Collecting and Using Your Personal Data

Types of Data Collected

Personal Data
While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

* Email address
* First name and last name
* Usage Data

3. Contact Us

If you have any questions about this Privacy Policy, You can contact us:

* By email: ${data.contactEmail}
`;
};
