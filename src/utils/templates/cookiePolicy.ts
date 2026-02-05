import type { PolicyData } from '../../appTypes';

export const generateCookiePolicy = (data: PolicyData): string => {
    return `
Cookie Policy for ${data.websiteName}

Last updated: ${data.date}

This Cookie Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Policy has been created with the help of the [Legal Policy Generator](${data.websiteUrl}).

Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.

We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.

1. Interpretation and Definitions

Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

Definitions
For the purposes of this Cookie Policy:

*   **Company** (referred to as either "the Company", "We", "Us" or "Our" in this Cookie Policy) refers to ${data.companyName}, located in ${data.country}.
*   **Cookies** means small files that are placed on Your computer, mobile device or any other device by a website, containing details of Your browsing history on that website among its many uses.
*   **Website** refers to ${data.websiteName}, accessible from ${data.websiteUrl}
*   **You** means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.

2. The use of the Cookies

Type of Cookies We Use
Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.

We use both session and persistent Cookies for the purposes set out below:

*   **Necessary / Essential Cookies**

    Type: Session Cookies

    Administered by: Us

    Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.

*   **Functionality Cookies**

    Type: Persistent Cookies

    Administered by: Us

    Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.

3. Your Choices Regarding Cookies

If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.

If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.

If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.

4. Contact Us

If you have any questions about this Cookie Policy, You can contact us:

*   By email: ${data.contactEmail}
`;
};
