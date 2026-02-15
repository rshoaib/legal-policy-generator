import type { PolicyData } from '../../appTypes';

export function generateAIEthicsPolicy(data: PolicyData, _lang?: string): string {
    const d = data;
    const date = d.date || new Date().toISOString().split('T')[0];

    return `<h1>AI / Machine Learning Ethics Policy</h1>
<p><strong>Effective Date:</strong> ${date}</p>
<p><strong>Organization:</strong> ${d.companyName || '[Company Name]'}</p>
<p><strong>Website:</strong> ${d.websiteUrl || '[Website URL]'}</p>
<p><strong>Contact:</strong> ${d.contactEmail || '[Email]'}</p>

<h2>1. Purpose</h2>
<p>This AI / Machine Learning Ethics Policy ("Policy") establishes the principles, guidelines, and governance framework that ${d.companyName || '[Company Name]'} follows when developing, deploying, and operating artificial intelligence ("AI") and machine learning ("ML") systems. Our goal is to ensure that AI technologies are used responsibly, ethically, and in compliance with applicable laws and regulations.</p>

<h2>2. Scope</h2>
<p>This Policy applies to all AI and ML systems developed, procured, or deployed by ${d.companyName || '[Company Name]'}, including but not limited to:</p>
<ul>
  <li>Predictive analytics and recommendation engines</li>
  <li>Natural language processing (NLP) and generation (NLG) systems</li>
  <li>Computer vision and image recognition</li>
  <li>Automated decision-making systems</li>
  <li>Chatbots and virtual assistants</li>
  <li>Third-party AI services integrated into our products</li>
</ul>

<h2>3. Core Principles</h2>

<h3>3.1 Fairness & Non-Discrimination</h3>
<p>We are committed to designing and deploying AI systems that treat all individuals fairly. We will:</p>
<ul>
  <li>Actively identify and mitigate algorithmic biases that could result in discrimination based on race, gender, age, disability, religion, sexual orientation, or other protected characteristics</li>
  <li>Regularly audit AI models for disparate impact across demographic groups</li>
  <li>Use diverse and representative training datasets</li>
  <li>Implement bias testing as part of our development lifecycle</li>
</ul>

<h3>3.2 Transparency & Explainability</h3>
<p>We believe that individuals affected by AI-driven decisions have a right to understand how those decisions are made. We will:</p>
<ul>
  <li>Clearly disclose when users are interacting with an AI system</li>
  <li>Provide meaningful explanations of how AI-driven decisions are reached</li>
  <li>Document the purpose, inputs, logic, and limitations of each AI system</li>
  <li>Make model cards or equivalent documentation available for significant AI systems</li>
</ul>

<h3>3.3 Accountability</h3>
<p>Humans remain accountable for the outcomes of AI systems. We will:</p>
<ul>
  <li>Designate a responsible person or team for each AI system deployed</li>
  <li>Ensure human oversight and the ability to override or disable AI decisions</li>
  <li>Maintain clear escalation procedures for AI-related incidents</li>
  <li>Conduct regular governance reviews of AI systems in production</li>
</ul>

<h3>3.4 Privacy & Data Protection</h3>
<p>All AI systems must comply with our Privacy Policy and applicable data protection regulations (e.g., GDPR, CCPA). We will:</p>
<ul>
  <li>Minimize the collection and use of personal data in AI training and inference</li>
  <li>Apply data anonymization or pseudonymization wherever possible</li>
  <li>Obtain appropriate consent for data used in AI training</li>
  <li>Conduct Data Protection Impact Assessments (DPIAs) for high-risk AI processing</li>
  <li>Ensure that data subjects can exercise their rights (access, deletion, opt-out)</li>
</ul>

<h3>3.5 Safety & Reliability</h3>
<p>We will ensure that our AI systems are safe, reliable, and perform as intended. We will:</p>
<ul>
  <li>Thoroughly test AI systems before deployment, including edge cases and adversarial inputs</li>
  <li>Monitor AI system performance continuously in production</li>
  <li>Implement fail-safe mechanisms for critical AI applications</li>
  <li>Maintain incident response procedures for AI failures or misuse</li>
</ul>

<h3>3.6 Environmental Responsibility</h3>
<p>We acknowledge the environmental impact of training large AI models. We will:</p>
<ul>
  <li>Evaluate and optimize the energy efficiency of AI training and inference</li>
  <li>Consider environmental costs when selecting model architectures</li>
  <li>Prioritize pre-trained models and transfer learning over training from scratch where appropriate</li>
</ul>

<h2>4. Prohibited Uses</h2>
<p>${d.companyName || '[Company Name]'} prohibits the use of AI systems for:</p>
<ul>
  <li>Mass surveillance or tracking without legal basis and user consent</li>
  <li>Social scoring or ranking of individuals</li>
  <li>Manipulation of individuals' behavior through deceptive techniques (dark patterns)</li>
  <li>Autonomous weapons or systems designed to cause harm</li>
  <li>Generating deepfakes, non-consensual intimate imagery, or disinformation</li>
  <li>Discriminatory profiling based on protected characteristics</li>
</ul>

<h2>5. AI Risk Assessment</h2>
<p>Before deploying any AI system, ${d.companyName || '[Company Name]'} will conduct a risk assessment considering:</p>
<ul>
  <li><strong>Data Quality:</strong> Source, representativeness, accuracy, and currency of training data</li>
  <li><strong>Model Performance:</strong> Accuracy, precision, recall, and error rates across relevant subgroups</li>
  <li><strong>Impact Analysis:</strong> Potential consequences of incorrect predictions or decisions</li>
  <li><strong>Regulatory Compliance:</strong> Applicable AI-specific regulations (e.g., EU AI Act) and sector-specific requirements</li>
  <li><strong>Ethical Implications:</strong> Potential for harm, bias, or misuse</li>
</ul>

<h2>6. Governance</h2>
<p>AI ethics governance at ${d.companyName || '[Company Name]'} includes:</p>
<ul>
  <li>An appointed AI Ethics Lead or Committee responsible for overseeing this Policy</li>
  <li>Regular review of all AI systems against this Policy (at minimum annually)</li>
  <li>A mechanism for employees, users, and the public to raise AI ethics concerns</li>
  <li>Board-level reporting on AI ethics risks and compliance</li>
</ul>

<h2>7. Training</h2>
<p>All employees involved in the development, deployment, or management of AI systems will receive ethics training covering:</p>
<ul>
  <li>Bias detection and mitigation</li>
  <li>Privacy-preserving AI techniques</li>
  <li>Regulatory requirements for AI</li>
  <li>This Policy and its application</li>
</ul>

<h2>8. Third-Party AI</h2>
<p>When using third-party AI services or models, ${d.companyName || '[Company Name]'} will:</p>
<ul>
  <li>Conduct due diligence on the provider's AI ethics practices</li>
  <li>Ensure contractual commitments to ethical AI use</li>
  <li>Monitor third-party AI outputs for compliance with this Policy</li>
  <li>Require transparency regarding training data and model behavior</li>
</ul>

<h2>9. Changes to This Policy</h2>
<p>This Policy will be reviewed and updated at least annually, or more frequently as AI regulations and best practices evolve. Material changes will be communicated to all relevant stakeholders.</p>

<h2>10. Contact</h2>
<p>For questions, concerns, or to report an AI ethics issue:</p>
<p><strong>${d.companyName || '[Company Name]'}</strong><br/>
AI Ethics Lead<br/>
${d.companyAddress || '[Address]'}<br/>
Email: ${d.contactEmail || '[Email]'}<br/>
Website: ${d.websiteUrl || '[Website URL]'}</p>`;
}
