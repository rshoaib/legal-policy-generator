import type { PolicyData } from '../../appTypes';

export function generateHIPAANotice(data: PolicyData, _lang?: string): string {
    const d = data;
    const date = d.date || new Date().toISOString().split('T')[0];

    return `<h1>Notice of Privacy Practices</h1>
<p><strong>Effective Date:</strong> ${date}</p>
<p><strong>Entity:</strong> ${d.companyName || '[Company Name]'}</p>
<p><strong>Address:</strong> ${d.companyAddress || '[Address]'}</p>
<p><strong>Contact:</strong> ${d.contactEmail || '[Email]'}</p>

<h2>THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</h2>

<h3>1. Our Duty to Protect Your Health Information</h3>
<p>${d.companyName || '[Company Name]'} is required by law to maintain the privacy of your Protected Health Information (PHI), to provide you with this notice of our legal duties and privacy practices with respect to PHI, and to notify you in the event of a breach of your unsecured PHI. We are required to abide by the terms of this notice currently in effect.</p>

<h3>2. How We May Use and Disclose Your Health Information</h3>
<p>We may use and disclose your PHI for the following purposes:</p>

<h4>a. Treatment</h4>
<p>We may use your PHI to provide you with medical treatment or services. We may disclose your PHI to doctors, nurses, technicians, or other personnel who are involved in your care.</p>

<h4>b. Payment</h4>
<p>We may use and disclose your PHI to bill and receive payment for the treatment and services we provide to you. For example, we may send your PHI to your insurance company or health plan to get payment for your health care services.</p>

<h4>c. Health Care Operations</h4>
<p>We may use and disclose your PHI for purposes of health care operations, which may include quality assessment, employee review activities, training programs, accreditation, certification, licensing, or credentialing activities.</p>

<h4>d. Required by Law</h4>
<p>We may use or disclose your PHI when we are required to do so by federal, state, or local law, including but not limited to reporting abuse, neglect, or domestic violence, judicial and administrative proceedings, and law enforcement purposes.</p>

<h4>e. Public Health Activities</h4>
<p>We may disclose your PHI for public health activities, such as reporting disease and vital statistics, conducting public health surveillance or investigations, and reporting adverse events related to food, medications, or medical devices.</p>

<h4>f. Health Oversight Activities</h4>
<p>We may disclose your PHI to a health oversight agency for activities authorized by law, such as audits, investigations, inspections, and licensure.</p>

<h3>3. Uses and Disclosures That Require Your Written Authorization</h3>
<p>We will not use or disclose your PHI for the following purposes without your written authorization:</p>
<ul>
  <li>Marketing communications</li>
  <li>Sale of your PHI</li>
  <li>Most uses of psychotherapy notes</li>
  <li>Any other use or disclosure not described in this notice</li>
</ul>
<p>You may revoke your authorization at any time by contacting us in writing at ${d.contactEmail || '[Email]'}. Your revocation will not affect any uses or disclosures that occurred before we received your revocation.</p>

<h3>4. Your Rights Regarding Your Health Information</h3>
<p>You have the following rights with respect to your PHI:</p>
<ul>
  <li><strong>Right to Access:</strong> You have the right to inspect and obtain a copy of your PHI maintained by us. We may charge a reasonable fee for copying.</li>
  <li><strong>Right to Amend:</strong> You have the right to request that we amend your PHI. We may deny your request if the information was not created by us, is not part of the records we maintain, or is accurate and complete.</li>
  <li><strong>Right to an Accounting of Disclosures:</strong> You have the right to request a list of disclosures we have made of your PHI for purposes other than treatment, payment, or health care operations.</li>
  <li><strong>Right to Request Restrictions:</strong> You have the right to request restrictions on how we use or disclose your PHI for treatment, payment, or health care operations.</li>
  <li><strong>Right to Request Confidential Communications:</strong> You have the right to request that we communicate with you in a certain way or at a certain location.</li>
  <li><strong>Right to a Paper Copy:</strong> You have the right to obtain a paper copy of this notice at any time, even if you previously agreed to receive it electronically.</li>
  <li><strong>Right to File a Complaint:</strong> If you believe your privacy rights have been violated, you may file a complaint with us or with the Secretary of the U.S. Department of Health and Human Services. You will not be penalized for filing a complaint.</li>
</ul>

<h3>5. Changes to This Notice</h3>
<p>${d.companyName || '[Company Name]'} reserves the right to change the terms of this notice and to make new provisions effective for all PHI we maintain. If we make material changes to this notice, we will post a revised notice at our office and on ${d.websiteUrl || '[Website URL]'}.</p>

<h3>6. Contact Information</h3>
<p>If you have questions about this notice or wish to exercise any of your rights, please contact:</p>
<p><strong>${d.companyName || '[Company Name]'}</strong><br/>
Privacy Officer<br/>
${d.companyAddress || '[Address]'}<br/>
Email: ${d.contactEmail || '[Email]'}</p>

<p>To file a complaint with the U.S. Department of Health and Human Services, contact:<br/>
Office for Civil Rights<br/>
U.S. Department of Health and Human Services<br/>
200 Independence Avenue, S.W.<br/>
Washington, D.C. 20201<br/>
1-877-696-6775<br/>
<a href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/">www.hhs.gov/ocr/privacy/hipaa/complaints/</a></p>`;
}
