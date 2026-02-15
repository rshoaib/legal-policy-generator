import type { PolicyData } from '../../appTypes';

export function generateDataBreachNotification(data: PolicyData, _lang?: string): string {
    const d = data;
    const date = d.date || new Date().toISOString().split('T')[0];

    return `<h1>Data Breach Notification Policy</h1>
<p><strong>Effective Date:</strong> ${date}</p>
<p><strong>Organization:</strong> ${d.companyName || '[Company Name]'}</p>
<p><strong>Website:</strong> ${d.websiteUrl || '[Website URL]'}</p>

<h2>1. Purpose</h2>
<p>This Data Breach Notification Policy ("Policy") establishes the procedures that ${d.companyName || '[Company Name]'} will follow in the event of a confirmed or suspected data breach involving personal data. The purpose is to ensure compliance with applicable data protection regulations, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other applicable federal and state breach notification laws.</p>

<h2>2. Scope</h2>
<p>This Policy applies to all employees, contractors, and third-party service providers of ${d.companyName || '[Company Name]'} who have access to personal data. It covers all personal data processed by the organization, regardless of the format or medium.</p>

<h2>3. Definitions</h2>
<ul>
  <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual, including names, email addresses, phone numbers, IP addresses, financial data, health data, and government-issued identifiers.</li>
  <li><strong>Data Breach:</strong> A security incident that results in the accidental or unauthorized access, disclosure, alteration, loss, or destruction of personal data.</li>
  <li><strong>Data Subject:</strong> The individual whose personal data has been compromised.</li>
  <li><strong>Supervisory Authority:</strong> The relevant regulatory body (e.g., ICO in the UK, CNIL in France, or the applicable U.S. state attorney general).</li>
</ul>

<h2>4. Breach Detection & Identification</h2>
<p>All employees and contractors are required to immediately report any suspected or confirmed data breach to the designated Data Protection Officer / Privacy Team at <strong>${d.contactEmail || '[Email]'}</strong>.</p>
<p>Indicators of a potential breach include, but are not limited to:</p>
<ul>
  <li>Unauthorized access to systems, databases, or files containing personal data</li>
  <li>Lost or stolen devices (laptops, USB drives, phones) containing personal data</li>
  <li>Phishing attacks resulting in credential compromise</li>
  <li>Ransomware or malware infections affecting systems with personal data</li>
  <li>Accidental disclosure of personal data (e.g., email sent to the wrong recipient)</li>
  <li>Evidence of data exfiltration or abnormal data transfers</li>
</ul>

<h2>5. Breach Response Procedure</h2>

<h3>Phase 1: Containment (Immediate — within 1 hour)</h3>
<ol>
  <li>Isolate affected systems to prevent further unauthorized access</li>
  <li>Disable compromised accounts or credentials</li>
  <li>Preserve evidence and logs for forensic investigation</li>
  <li>Activate the Incident Response Team</li>
</ol>

<h3>Phase 2: Assessment (Within 24 hours)</h3>
<ol>
  <li>Determine the nature and scope of the breach</li>
  <li>Identify the type and volume of personal data affected</li>
  <li>Assess the number of data subjects affected</li>
  <li>Evaluate the potential harm to affected individuals</li>
  <li>Determine whether the breach is reportable under applicable law</li>
</ol>

<h3>Phase 3: Notification (Within 72 hours for GDPR — varies by jurisdiction)</h3>
<ol>
  <li>Notify the relevant supervisory authority within the required timeframe</li>
  <li>Notify affected data subjects without undue delay when risk is high</li>
  <li>Notify any affected third-party partners or processors</li>
</ol>

<h3>Phase 4: Remediation (Ongoing)</h3>
<ol>
  <li>Implement corrective measures to address the root cause</li>
  <li>Update security controls and procedures as needed</li>
  <li>Conduct post-incident review and update this policy</li>
  <li>Provide additional training to staff if needed</li>
</ol>

<h2>6. Notification Requirements by Jurisdiction</h2>

<h3>GDPR (EU/EEA)</h3>
<ul>
  <li><strong>Authority Notification:</strong> Within 72 hours of becoming aware of the breach</li>
  <li><strong>Individual Notification:</strong> Without undue delay if the breach is likely to result in a high risk to the rights and freedoms of individuals</li>
</ul>

<h3>CCPA / CPRA (California)</h3>
<ul>
  <li><strong>Individual Notification:</strong> In the most expedient time possible and without unreasonable delay</li>
  <li><strong>Attorney General Notification:</strong> If more than 500 California residents are affected</li>
</ul>

<h3>Other U.S. State Laws</h3>
<p>All 50 U.S. states have data breach notification laws with varying requirements. ${d.companyName || '[Company Name]'} will comply with the specific requirements of each state where affected individuals reside.</p>

<h2>7. Notification Content</h2>
<p>All breach notifications will include:</p>
<ul>
  <li>A description of the nature of the breach</li>
  <li>The categories and approximate number of data subjects affected</li>
  <li>The categories and approximate number of data records affected</li>
  <li>A description of the likely consequences of the breach</li>
  <li>The measures taken or proposed to address the breach</li>
  <li>Contact details of the Data Protection Officer or Privacy Team</li>
  <li>Advice on steps data subjects can take to protect themselves</li>
</ul>

<h2>8. Record Keeping</h2>
<p>${d.companyName || '[Company Name]'} will maintain a record of all data breaches, regardless of whether they were reportable. This record will include:</p>
<ul>
  <li>The facts relating to the breach</li>
  <li>Its effects</li>
  <li>The remedial action taken</li>
  <li>Notifications sent</li>
</ul>

<h2>9. Training & Awareness</h2>
<p>All employees will receive annual training on data breach identification and response procedures. Contractors and third-party processors will be required to maintain equivalent awareness programs.</p>

<h2>10. Review</h2>
<p>This Policy will be reviewed at least annually and updated as required to reflect changes in law, business operations, or organizational structure.</p>

<h2>11. Contact</h2>
<p>To report a suspected data breach or for questions about this policy:</p>
<p><strong>${d.companyName || '[Company Name]'}</strong><br/>
Data Protection Officer / Privacy Team<br/>
${d.companyAddress || '[Address]'}<br/>
Email: ${d.contactEmail || '[Email]'}</p>`;
}
