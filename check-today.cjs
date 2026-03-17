const fs = require('fs');
const content = fs.readFileSync('src/lib/blogData.ts', 'utf8');
const dateRegex = /date:\s*'([^']+)'/g;
const titleRegex = /title:\s*(?:'([^']+)'|"([^"]+)")/g;
const dates = [], titles = [];
let m;
while ((m = dateRegex.exec(content)) !== null) dates.push(m[1]);
while ((m = titleRegex.exec(content)) !== null) titles.push(m[1] || m[2]);
const today = '2026-03-18';
const weekStart = new Date('2026-03-16'); const weekEnd = new Date('2026-03-22T23:59:59Z');
let pubToday = 0; const pubWeek = [];
for (let i = 0; i < dates.length; i++) {
  if (dates[i] === today) pubToday++;
  const d = new Date(dates[i]);
  if (d >= weekStart && d <= weekEnd) pubWeek.push(dates[i] + ' — ' + (titles[i] || 'Unknown'));
}
const sorted = [...dates].sort();
console.log('Total Articles:', dates.length);
console.log('Last Published:', sorted[sorted.length - 1]);
console.log('Published Today:', pubToday);
console.log('Published This Week:', pubWeek.length);
pubWeek.forEach(p => console.log(' -', p));
console.log('Slots Today:', Math.max(0, 1 - pubToday));
console.log('Slots This Week:', Math.max(0, 3 - pubWeek.length));
