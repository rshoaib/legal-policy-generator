import type { PolicyData } from '../../appTypes';

export const generateShippingPolicy = (data: PolicyData): string => {
    const intl = data.shippingInternational;
    const freeThreshold = data.shippingFreeThreshold;
    const restrictions = data.shippingRestrictions;

    return `
Shipping Policy for ${data.websiteName}

Last updated: ${data.date}

Thank you for shopping at ${data.websiteName} ("we," "us," or "our"). This Shipping Policy outlines the terms and conditions related to the shipment and delivery of products purchased through our website at ${data.websiteUrl}.

1. Order Processing

All orders are processed within ${data.shippingProcessingTime || '1–2 business days'} after receiving your order confirmation email. Orders placed on weekends or public holidays will be processed on the next business day.

You will receive a shipping confirmation email with a tracking number once your order has been shipped.

2. Shipping Methods and Delivery Estimates

We offer the following shipping methods:

${data.shippingMethods || 'Standard Shipping, Express Shipping'}

Estimated delivery times:

* Domestic Delivery: ${data.shippingDomesticTime || '5–7 business days'}${intl ? `
* International Delivery: ${data.shippingInternationalTime || '10–20 business days'}` : ''}

Please note that delivery times are estimates and are not guaranteed. Delays may occur due to carrier issues, weather, customs processing, or other unforeseen circumstances. ${data.companyName} is not responsible for delays caused by the shipping carrier.
${freeThreshold ? `
3. Free Shipping

We offer free standard shipping on all domestic orders over $${freeThreshold}. Free shipping is automatically applied at checkout when the order total meets the minimum threshold before taxes and after discounts.
` : ''}
${intl ? `${freeThreshold ? '4' : '3'}. International Shipping

We currently ship internationally. Please be aware of the following:

* International orders may be subject to import taxes, customs duties, and fees levied by the destination country. These charges are the sole responsibility of the recipient.
* We are not responsible for delays caused by customs processing.
* Some products may not be available for international shipping due to size, weight, or regulatory restrictions.
* Delivery times for international orders are estimates and may vary depending on customs clearance procedures in your country.

By placing an international order, you agree to be the importer of record and comply with all local laws and regulations of the destination country.
` : ''}
${freeThreshold && intl ? '5' : freeThreshold || intl ? '4' : '3'}. Shipment Tracking

Once your order has been shipped, you will receive a confirmation email containing your tracking number and a link to track your package. Please allow up to 48 hours for tracking information to become available after shipment.

If you have not received a tracking notification within ${data.shippingProcessingTime || '1–2 business days'} of placing your order, please contact us at ${data.contactEmail}.

${freeThreshold && intl ? '6' : freeThreshold || intl ? '5' : '4'}. Lost, Damaged, or Stolen Packages

If your package appears to be lost, damaged, or stolen, please contact us at ${data.contactEmail} within 7 days of the expected delivery date.

* For packages marked as delivered but not received, we recommend checking with neighbors and your local post office. We may require a waiting period before processing a claim.
* For packages that arrive damaged, please take photographs of the packaging and the damaged item(s) and send them to ${data.contactEmail}. We will work with the carrier to resolve the issue.
* ${data.companyName} is not liable for packages that are stolen after delivery confirmation by the carrier.
${restrictions ? `
${freeThreshold && intl ? '7' : freeThreshold || intl ? '6' : '5'}. Shipping Restrictions

The following items or destinations may be subject to shipping restrictions:

${restrictions}

We reserve the right to cancel orders that cannot be shipped due to regulatory, carrier, or logistical restrictions. In such cases, a full refund will be issued.
` : ''}
${freeThreshold && intl && restrictions ? '8' : (freeThreshold && intl) || (freeThreshold && restrictions) || (intl && restrictions) ? '7' : freeThreshold || intl || restrictions ? '6' : '5'}. Changes to This Policy

We reserve the right to update or modify this Shipping Policy at any time without prior notice. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.

${freeThreshold && intl && restrictions ? '9' : (freeThreshold && intl) || (freeThreshold && restrictions) || (intl && restrictions) ? '8' : freeThreshold || intl || restrictions ? '7' : '6'}. Contact Us

If you have any questions or concerns about our shipping practices, please contact us:

* Company: ${data.companyName}
* Address: ${data.companyAddress}
* Email: ${data.contactEmail}
* Website: ${data.websiteUrl}
`;
};
