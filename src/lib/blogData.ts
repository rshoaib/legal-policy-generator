export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    content: string; // Using simple HTML for now, or markdown-like text
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'why-you-need-privacy-policy',
        title: 'Why Your Website Needs a Privacy Policy (It\'s Not Just for Big Corps)',
        date: '2026-02-04',
        excerpt: 'Think your small blog or side project is exempt from privacy laws? Think again. Here\'s why every website needs a privacy policy.',
        content: `
      <p>If you're running a website today, you might think legal policies are only for massive corporations with legal teams. But the truth is, if you collect any data from your users—even just an email address for a newsletter or analytics cookies—you likely need a Privacy Policy.</p>
      
      <h3>1. It's the Law</h3>
      <p>Regulations like GDPR in Europe and CCPA in California require transparency about data collection. These laws don't just apply to businesses in those regions; they apply to anyone serving users there. Fines can be hefty, even for small players.</p>
      
      <h3>2. Third-Party Services Require It</h3>
      <p>Do you use Google Analytics? AdSense? Facebook Pixel? All these services explicitly require you to have a Privacy Policy that discloses your use of their tools. Without one, you risk getting your accounts suspended.</p>
      
      <h3>3. It Builds Trust</h3>
      <p>Users are becoming more privacy-conscious. Having a clear, accessible Privacy Policy shows you respect their data and aren't hiding anything. It establishes professionalism and trust.</p>
      
      <h3>How to Get One?</h3>
      <p>You don't need to hire an expensive lawyer. Our <a href="/">free generator</a> allows you to create a customized Privacy Policy in minutes that covers all the basics.</p>
    `
    },
    {
        slug: 'terms-vs-privacy-policy',
        title: 'Terms & Conditions vs. Privacy Policy: What\'s the Difference?',
        date: '2026-02-04',
        excerpt: 'Confused by legal jargon? We break down the key differences between these two essential documents and why you need both.',
        content: `
      <p>When setting up a website, you often hear you need "Terms" and "Privacy" pages. Are they the same thing? Definitely not.</p>
      
      <h3>Privacy Policy: Your Data Practices</h3>
      <p>A Privacy Policy is all about the <strong>user's data</strong>. It explains:</p>
      <ul>
        <li>What data you collect (emails, IP addresses, names).</li>
        <li>How you use it (marketing, analytics).</li>
        <li>Who you share it with.</li>
      </ul>
      <p>This is arguably the most critical document for legal compliance.</p>
      
      <h3>Terms & Conditions: Depending the Rules</h3>
      <p>Terms & Conditions (or Terms of Service) are about <strong>your website's rules</strong>. They explain:</p>
      <ul>
        <li>What users can and cannot do on your site.</li>
        <li>Intellectual property rights (your content is yours).</li>
        <li>Disclaimers of liability (you're not responsible if the site crashes).</li>
        <li>Termination clauses (you can ban bad actors).</li>
      </ul>
      
      <h3>Do You Need Both?</h3>
      <p>Yes. The Privacy Policy keeps you legal compliant regarding data laws. The Terms & Conditions protect your business interests and assets. Fortunately, you can <a href="/">generate both for free</a> right here.</p>
    `
    }
];
