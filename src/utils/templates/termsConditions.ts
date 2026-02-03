import type { PolicyData } from '../../appTypes';

export const generateTermsConditions = (data: PolicyData): string => {
    return `
Terms and Conditions for ${data.companyName}

Last updated: ${data.date}

Please read these terms and conditions carefully before using Our Service.

1. Interpretation and Definitions

Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

Definitions
For the purposes of this Terms and Conditions:

* Country refers to: ${data.country}
* Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to ${data.companyName}.
* Service refers to the Website.
* Website refers to ${data.websiteName}, accessible from ${data.websiteUrl}

2. Acknowledgment

These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.

3. Links to Other Websites

Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

4. Termination

We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

Upon termination, Your right to use the Service will cease immediately.

5. Contact Us

If you have any questions about these Terms and Conditions, You can contact us:

* By email: ${data.contactEmail}
`;
};
