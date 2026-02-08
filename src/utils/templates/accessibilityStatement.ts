import type { PolicyData } from '../../appTypes';

export const generateAccessibilityStatement = (data: PolicyData): string => {
    return `
Accessibility Statement for ${data.websiteName}

Last updated: ${data.date}

${data.companyName} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.

1. Conformance Status

The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.

${data.websiteName} is partially conformant with ${data.accessibilityStandard || 'WCAG 2.1 Level AA'}. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.

2. Feedback

We welcome your feedback on the accessibility of ${data.websiteName}. Please let us know if you encounter accessibility barriers on ${data.websiteName}:

* Phone: ${data.accessibilityContactPhone || 'Not available'}
* E-mail: ${data.accessibilityContactEmail || data.contactEmail}

We try to respond to feedback within 2 business days.
`;
};
