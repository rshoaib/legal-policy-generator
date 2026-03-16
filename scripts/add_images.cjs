const SupabaseREST = require('./supabase_rest.cjs');
const fs = require('fs');
const path = require('path');

async function fixImages() {
  try {
    const api = new SupabaseREST();
    console.log('Fetching posts...');
    const posts = await api.select('blog_posts', 'id,slug,title,content');
    console.log(`Found ${posts.length} posts`);
    
    const imgMap = {
      'privacy-policy-vs-terms-of-service-whats-the-difference': 'tos-vs-privacy-hero.png',
      'what-is-an-acceptable-use-policy': 'aup-policy-hero.png',
      'why-you-need-cookie-policy': 'cookie-policy-guide-hero.png',
      'gdpr-for-small-business-plain-english-guide-2026': 'gdpr-small-business-guide.png',
      'legal-pages-every-website-needs-checklist-2026': 'legal-pages-checklist-hero.png',
      'why-you-need-privacy-policy': 'privacy-policy-guide-hero.png',
      'how-to-write-refund-policy-ecommerce': 'return_policy_hero.png',
      'how-to-write-saas-terms-of-service-2026': 'saas-terms-2026.png',
      'how-to-write-shipping-policy-ecommerce': 'shipping_policy_hero.png'
    };
    
    for (const post of posts) {
      const imgName = imgMap[post.slug];
      if (!imgName) continue;
      
      const hasImg = post.content.includes('<img');
      const hasSpecificImg = post.content.includes(imgName);
      
      if (!hasImg || !hasSpecificImg) {
        console.log(`Updating ${post.slug}...`);
        let newContent = post.content;
        
        // Remove existing img tag if it's the wrong one
        if (hasImg) {
          newContent = newContent.replace(/<img[^>]*>/, '');
        }
        
        const safeTitle = post.title.replace(/"/g, '&quot;');
        const imgTag = `<img src="/images/blog/${imgName}" alt="${safeTitle}" style="width:100%; border-radius:12px; margin-bottom:2rem;" />\n\n`;
        
        newContent = imgTag + newContent;
        
        await api.update('blog_posts', 'id', post.id, { content: newContent });
        console.log(`✅ Updated ${post.slug} with image ${imgName}`);
      } else {
        console.log(`⚡ ${post.slug} already has the correct image.`);
      }
    }
    
    console.log('Finished updating Supabase. Now updating src/lib/blogData.ts...');
    
    // Update local file
    const localFile = path.resolve(__dirname, '../src/lib/blogData.ts');
    let localData = fs.readFileSync(localFile, 'utf8');
    
    for (const slug of Object.keys(imgMap)) {
      const imgName = imgMap[slug];
      const regex = new RegExp(`(slug:\\s*'${slug}',[\\s\\S]*?content:\\s*\`)([\\s\\S]*?)(\`,?\\n)`, 'i');
      const match = localData.match(regex);
      if (match) {
        let content = match[2];
        if (!content.includes(imgName)) {
           if (content.includes('<img')) {
             content = content.replace(/<img[^>]*>/, ''); // remove old
           }
           const imgTag = `\n      <img src="/images/blog/${imgName}" alt="Hero Image" style="width:100%; border-radius:12px; margin-bottom:2rem;" />\n`;
           
           // If the content starts with \n      , replace that with imgTag
           content = imgTag + content;
           localData = localData.replace(regex, `$1${content}$3`);
           console.log(`📁 Updated local file for ${slug}`);
        }
      }
    }
    
    fs.writeFileSync(localFile, localData, 'utf8');
    console.log('✅ Local file updated');
    
  } catch (err) {
    console.error('Error:', err);
  }
}

fixImages();
