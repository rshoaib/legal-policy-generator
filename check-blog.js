import fs from 'fs';
import https from 'https';

const options = {
  hostname: 'gkywwttudvlccmepjsld.supabase.co',
  path: '/rest/v1/blog_posts?select=id,title,date',
  method: 'GET',
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdreXd3dHR1ZHZsY2NtZXBqc2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5ODIxNzAsImV4cCI6MjA4NjU1ODE3MH0.rM4EBvk7Zo46mnypS9x2RFRYgqdErNcN0BlrTUkgS8g',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdreXd3dHR1ZHZsY2NtZXBqc2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5ODIxNzAsImV4cCI6MjA4NjU1ODE3MH0.rM4EBvk7Zo46mnypS9x2RFRYgqdErNcN0BlrTUkgS8g'
  }
};

const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let posts = [];
    try {
      posts = JSON.parse(data);
    } catch (e) {
      console.error("Error parsing response", data);
      process.exit(1);
    }
    
    // Sort descending by date
    posts.sort((a,b) => new Date(b.date) - new Date(a.date));
    
    // Use the exact time logic as earlier
    const now = new Date('2026-03-15T12:14:10+03:00');
    const today = new Date('2026-03-15T12:14:10+03:00');
    today.setHours(0,0,0,0);
    
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const startOfWeek = new Date(now.setDate(diff));
    startOfWeek.setHours(0,0,0,0);

    let publishedToday = 0;
    let publishedThisWeek = 0;
    const thisWeekTitles = [];

    posts.forEach(p => {
      // Use "date" column for this site
      const d = new Date(p.date || p.published_at);
      if (d >= today) publishedToday++;
      if (d >= startOfWeek) {
        publishedThisWeek++;
        thisWeekTitles.push(p.title);
      }
    });

    const result = {
      Total: posts.length,
      LastPublished: posts.length > 0 ? `${posts[0].date} - ${posts[0].title}` : 'None',
      PublishedToday: publishedToday,
      PublishedThisWeek: publishedThisWeek,
      ThisWeekTitles: thisWeekTitles
    };
    fs.writeFileSync('stats.json', JSON.stringify(result, null, 2));
    console.log("Stats written to stats.json");
  });
});

req.on('error', e => {
  console.error(e);
});

req.end();
