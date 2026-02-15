import type { PolicyData } from '../../appTypes';

export function generateSLA(data: PolicyData, _lang?: string): string {
    const d = data;
    const date = d.date || new Date().toISOString().split('T')[0];
    const uptime = d.slaUptimeGuarantee || '99.9';

    return `<h1>Service Level Agreement (SLA)</h1>
<p><strong>Effective Date:</strong> ${date}</p>
<p><strong>Service Provider:</strong> ${d.companyName || '[Company Name]'}</p>
<p><strong>Website:</strong> ${d.websiteUrl || '[Website URL]'}</p>
<p><strong>Contact:</strong> ${d.contactEmail || '[Email]'}</p>

<h2>1. Introduction</h2>
<p>This Service Level Agreement ("SLA") is entered into between ${d.companyName || '[Company Name]'} ("Provider") and the customer ("Client") and defines the levels of service the Provider commits to deliver. This SLA should be read in conjunction with our Terms of Service.</p>

<h2>2. Service Availability</h2>
<p>The Provider commits to a service uptime of <strong>${uptime}%</strong> per calendar month, measured as the total minutes in a month minus downtime minutes, divided by total minutes in a month.</p>

<h3>2.1 Scheduled Maintenance</h3>
<p>Scheduled maintenance windows will be communicated at least 48 hours in advance via email and/or status page. Scheduled maintenance does not count toward downtime calculations.</p>

<h3>2.2 Exclusions</h3>
<p>The following are excluded from uptime calculations:</p>
<ul>
  <li>Scheduled maintenance windows</li>
  <li>Force majeure events (natural disasters, government actions, etc.)</li>
  <li>Client-side issues (network failures, browser incompatibility, etc.)</li>
  <li>Third-party service failures beyond the Provider's control</li>
  <li>DDoS attacks or other security incidents</li>
</ul>

<h2>3. Performance Metrics</h2>
<table>
  <tr><th>Metric</th><th>Target</th></tr>
  <tr><td>Uptime</td><td>${uptime}% per month</td></tr>
  <tr><td>Page Load Time</td><td>Under 3 seconds (average)</td></tr>
  <tr><td>API Response Time</td><td>Under 500ms (95th percentile)</td></tr>
  <tr><td>Error Rate</td><td>Less than 0.1% of requests</td></tr>
</table>

<h2>4. Support Response Times</h2>
<table>
  <tr><th>Severity</th><th>Description</th><th>Response Time</th><th>Resolution Target</th></tr>
  <tr><td>Critical (P1)</td><td>Service is completely unavailable</td><td>30 minutes</td><td>4 hours</td></tr>
  <tr><td>High (P2)</td><td>Major feature degraded, no workaround</td><td>2 hours</td><td>8 hours</td></tr>
  <tr><td>Medium (P3)</td><td>Feature degraded, workaround available</td><td>8 hours</td><td>48 hours</td></tr>
  <tr><td>Low (P4)</td><td>Minor issue, cosmetic, or feature request</td><td>24 hours</td><td>Best effort</td></tr>
</table>

<h2>5. Service Credits</h2>
<p>If the Provider fails to meet the uptime commitment in any calendar month, the Client may be eligible for service credits:</p>
<table>
  <tr><th>Monthly Uptime</th><th>Service Credit</th></tr>
  <tr><td>99.0% – ${uptime}%</td><td>5% of monthly fee</td></tr>
  <tr><td>95.0% – 98.99%</td><td>10% of monthly fee</td></tr>
  <tr><td>90.0% – 94.99%</td><td>25% of monthly fee</td></tr>
  <tr><td>Below 90.0%</td><td>50% of monthly fee</td></tr>
</table>

<h3>5.1 Credit Request Process</h3>
<p>Service credits must be requested within 30 days of the end of the affected month by contacting ${d.contactEmail || '[Email]'}. Credits will be applied to the next billing cycle and are not redeemable for cash.</p>

<h2>6. Incident Management</h2>
<p>In the event of a service disruption:</p>
<ol>
  <li><strong>Detection & Notification:</strong> The Provider will notify affected clients within 30 minutes of detecting a critical incident.</li>
  <li><strong>Status Updates:</strong> Regular updates will be provided every 30 minutes during critical incidents via email and status page.</li>
  <li><strong>Post-Incident Report:</strong> A root cause analysis (RCA) will be provided within 5 business days of incident resolution for critical (P1) incidents.</li>
</ol>

<h2>7. Data Backup & Recovery</h2>
<ul>
  <li><strong>Backup Frequency:</strong> Daily automated backups</li>
  <li><strong>Retention Period:</strong> 30 days</li>
  <li><strong>Recovery Point Objective (RPO):</strong> 24 hours</li>
  <li><strong>Recovery Time Objective (RTO):</strong> 4 hours</li>
</ul>

<h2>8. Security</h2>
<p>The Provider commits to the following security standards:</p>
<ul>
  <li>TLS 1.2+ encryption for all data in transit</li>
  <li>AES-256 encryption for data at rest</li>
  <li>Regular vulnerability scanning and penetration testing</li>
  <li>Multi-factor authentication for administrative access</li>
  <li>SOC 2 Type II compliance (where applicable)</li>
</ul>

<h2>9. Modifications</h2>
<p>The Provider reserves the right to modify this SLA with at least 30 days' written notice. Material changes that reduce service commitments will allow the Client to terminate without penalty within 30 days of notification.</p>

<h2>10. Contact</h2>
<p>For SLA-related inquiries, service credit requests, or to report an incident:</p>
<p><strong>${d.companyName || '[Company Name]'}</strong><br/>
${d.companyAddress || '[Address]'}<br/>
Email: ${d.contactEmail || '[Email]'}<br/>
Website: ${d.websiteUrl || '[Website URL]'}</p>`;
}
