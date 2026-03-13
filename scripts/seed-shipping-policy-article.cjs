/**
 * One-time script to insert the "Shipping Policy 2026" blog post
 * into the Supabase `blog_posts` table.
 *
 * Usage:
 *   node scripts/seed-shipping-policy-article.cjs
 *
 * Requires VITE_SUPABASE_URL and VITE_SUPABASE_SERVICE_ROLE_KEY in .env
 */
const fs = require('fs');
const path = require('path');

// Parse .env file manually (dotenv is not installed)
const envPath = path.resolve(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const article = {
  slug: 'how-to-write-shipping-policy-ecommerce',
  title: 'How to Write a Shipping Policy for Your E-commerce Store (With Free Generator) 2026',
  date: '2026-03-14',
  excerpt: 'A clear shipping policy builds trust and reduces customer support tickets. Learn what to include, how to manage delays, and use our free generator.',
  content: `
      <img src="/images/blog/shipping_policy_hero.png" alt="A modern vector illustration showing an e-commerce shipping box with a policy document attached" style="width:100%; border-radius:12px; margin-bottom:2rem;" />

      <p>For any e-commerce business in 2026, a <strong>Shipping Policy</strong> is not just a nice-to-have webpage—it is a critical tool for managing customer expectations, reducing support tickets, and building trust. When a customer knows exactly when their package will arrive and how much it will cost, they are far more likely to complete their purchase.</p>

      <p>However, an incomplete or hidden shipping policy can lead to abandoned carts, frustrated customers, and an overwhelming volume of "Where is my order?" emails. In this guide, we will break down exactly how to write an effective shipping policy, what clauses are essential for 2026, and how to create one instantly using a free generator.</p>

      <h2>Why Your E-commerce Store Needs a Shipping Policy</h2>
      <p>A shipping policy acts as a comprehensive reference guide for your customers regarding your shipping practices. Here is why it is essential:</p>
      <ul>
        <li><strong>Builds Trust:</strong> Transparent shipping costs and delivery times reassure customers, making them feel confident in buying from you.</li>
        <li><strong>Reduces Abandoned Carts:</strong> Unexpected shipping costs are the number one reason for cart abandonment. Stating them upfront eliminates surprises.</li>
        <li><strong>Decreases Support Volume:</strong> By answering common shipping questions (e.g., "Do you ship internationally?" or "When will my order ship?"), you drastically reduce customer service inquiries.</li>
        <li><strong>Protects Your Business:</strong> It clearly outlines your policies on lost packages, damaged goods, and delivery delays, protecting you from unreasonable dispute claims.</li>
      </ul>

      <h2>7 Essential Things to Include in a Shipping Policy</h2>

      <h3>1. Order Processing Times</h3>
      <p>There is a distinct difference between "shipping time" and "processing time." Your policy must clarify how long it takes for an order to leave your warehouse after it is placed.</p>
      <ul>
        <li>Be specific: "Orders are processed within 1-2 business days (excluding weekends and holidays)."</li>
        <li>State your daily cut-off time for same-day processing.</li>
      </ul>

      <h3>2. Domestic and International Shipping Options</h3>
      <p>Clearly breakdown the shipping methods you offer, along with estimated delivery times and costs.</p>
      <ul>
        <li><strong>Standard Shipping:</strong> e.g., 3-5 business days, $5.99</li>
        <li><strong>Expedited Shipping:</strong> e.g., 2-3 business days, $12.99</li>
        <li><strong>Free Shipping Threshold:</strong> e.g., "Free standard shipping on orders over $50."</li>
      </ul>
      <p>If you ship internationally, list the countries you serve and provide separate estimates. State explicitly whether the customer or your business is responsible for paying <strong>customs, duties, and import taxes</strong>.</p>

      <h3>3. Order Tracking Information</h3>
      <p>Explain how customers will receive tracking updates (usually via an automated email once the order ships) and when the tracking link will become active (often 24-48 hours after scanning).</p>

      <h3>4. Peak Season and Unforeseen Delays</h3>
      <p>In 2026, global supply chains and harsh weather events can unexpectedly disrupt deliveries. Include a clause that protects your business from delays out of your control.</p>
      <ul>
        <li>"While we strive to meet all delivery estimates, occasional delays may occur due to weather, carrier issues, or high volume during peak holiday seasons. We will communicate any significant delays directly to you."</li>
      </ul>

      <h3>5. Lost, Missing, or Damaged Packages</h3>
      <p>Outline the exact steps a customer should take if their package does not arrive or arrives damaged. Do they contact the carrier first or your support team? What information (e.g., photos of damage) do you require to process a replacement?</p>

      <h3>6. Shipping Restrictions or Exceptions</h3>
      <p>Do you ship to P.O. boxes? Are there certain oversized items that cannot be shipped via expedited methods? Detail any limitations clearly.</p>

      <h3>7. Alignment with Your Return Policy</h3>
      <p>Your shipping policy and <a href="/return-policy">Return Policy</a> should work hand-in-hand. Briefly mention who pays for return shipping, and link directly to your full return policy for more details.</p>

      <h2>Best Practices for Your Shipping Policy Page</h2>
      <ul>
        <li><strong>Keep it simple:</strong> Avoid dense legal jargon. Use clear headings, bullet points, and tables to make the information scannable.</li>
        <li><strong>Make it visible:</strong> Link to your shipping policy in your website header or footer, on every product page, and prominently during the checkout process.</li>
        <li><strong>Update it regularly:</strong> Review your policy whenever you change carriers, adjust rates, or approach busy holiday seasons.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div itemscope itemtype="https://schema.org/FAQPage">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">Is a shipping policy legally required?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Unlike a <a href="/privacy-policy">Privacy Policy</a> or <a href="/terms-of-service">Terms of Service</a>, a shipping policy is not strictly legally required by global regulations. However, not having one violates the terms of many payment processors (like Stripe and PayPal) and leaves your business highly vulnerable to chargebacks and disputes.</p>
          </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">Where should I put my shipping policy?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Your shipping policy should be linked in your website footer so it is accessible from every page. It is also highly recommended to link to it directly from product pages and within the checkout flow to prevent cart abandonment.</p>
          </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">How do I handle international customs and duties?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Unless you are explicitly covering these costs (DDP - Delivered Duty Paid), your policy must clearly state that the customer (the importer) is responsible for all customs fees, taxes, and duties imposed by their local government upon delivery.</p>
          </div>
        </div>
      </div>

      <h2>Generate Your Custom Shipping Policy Instantly</h2>
      <p>Writing a comprehensive shipping policy from scratch is time-consuming. You want to focus on selling your products, not drafting policies. Use our <strong>free, secure</strong> tools to generate all the essential legal documents your business needs today:</p>
      <ul>
        <li>🚚 <a href="/shipping-policy"><strong>Free Shipping Policy Generator</strong></a> — Create your shipping terms instantly.</li>
        <li>📦 <a href="/return-policy"><strong>Free Return Policy Generator</strong></a> — Align your returns and shipping procedures.</li>
        <li>🔒 <a href="/privacy-policy"><strong>Free Privacy Policy Generator</strong></a> — Ensure full GDPR, CCPA, and global compliance.</li>
      </ul>
    `
};

async function main() {
  console.log('Inserting Shipping Policy 2026 blog post into Supabase...');

  const { data, error } = await supabase
    .from('blog_posts')
    .upsert(article, { onConflict: 'slug' })
    .select();

  if (error) {
    console.error('Error inserting article:', error.message);
    process.exit(1);
  }

  console.log('✅ Article inserted successfully:', data?.[0]?.slug || article.slug);
}

main();
