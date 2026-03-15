const fs = require('fs');
const content = fs.readFileSync('c:/Projects/legalpolicygen/src/lib/blogData.ts', 'utf8');
const dateRegex = /date:\s*'([^']+)'/g;
const titleRegex = /title:\s*(?:'([^']+)'|"([^"]+)")/g;

const dates = [];
let match;
while ((match = dateRegex.exec(content)) !== null) {
  dates.push(match[1]);
}

const titles = [];
while ((match = titleRegex.exec(content)) !== null) {
  titles.push(match[1] || match[2]);
}

const todayStr = '2026-03-15';
const weekStart = new Date('2026-03-09T00:00:00Z');
const weekEnd = new Date('2026-03-15T23:59:59Z');

let pubToday = 0;
let pubWeek = [];

for(let i=0; i<dates.length; i++) {
  const d = dates[i];
  if(d === todayStr) pubToday++;
  const dateObj = new Date(d);
  if(dateObj >= weekStart && dateObj <= weekEnd) {
    let title = titles[i] || 'Unknown Title';
    pubWeek.push(d + ' — ' + title);
  }
}

const sortedDates = [...dates].sort();
const lastPub = sortedDates.length > 0 ? sortedDates[sortedDates.length - 1] : 'None';
const total = dates.length;

console.log('Total Articles:', total);
console.log('Last Published:', lastPub);
console.log('Published Today:', pubToday);
console.log('Published This Week:', pubWeek.length);
pubWeek.forEach(p => console.log(' - ' + p));
