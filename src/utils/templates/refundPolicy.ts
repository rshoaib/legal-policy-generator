import type { PolicyData } from '../../appTypes';

export const generateRefundPolicy = (data: PolicyData): string => {
    return `
Refund Policy for ${data.websiteName}

Last updated: ${data.date}

Thank you for shopping at ${data.websiteName}.

If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.

The following terms are applicable for any products that You purchased with Us.

1. Your Order Cancellation Rights

You are entitled to cancel Your Order within ${data.refundDays || 30} days without giving any reason for doing so.

The deadline for cancelling an Order is ${data.refundDays || 30} days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.

In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:

* By email: ${data.contactEmail}

We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.

2. Conditions for Returns

In order for the Goods to be eligible for a return, please make sure that:

* The Goods were purchased in the last ${data.refundDays || 30} days
* The Goods are in the original packaging

The following Goods cannot be returned:

* The supply of Goods made to Your specifications or clearly personalized.
* The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.
* The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.
* The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.

We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.

3. Returning Goods

You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:

${data.companyName}
${data.country}

We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.

4. Gifts

If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.

If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.

5. Contact Us

If you have any questions about our Returns and Refunds Policy, please contact us:

* By email: ${data.contactEmail}
`;
};
