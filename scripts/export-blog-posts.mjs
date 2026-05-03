#!/usr/bin/env node
/**
 * One-off Supabase -> filesystem exporter for the blog.
 *
 * Reads every row from `blog_posts` via the Supabase REST endpoint and writes
 * each as `content/blog/<slug>.md` with YAML frontmatter + the HTML body.
 *
 * Usage:
 *   node scripts/export-blog-posts.mjs
 *
 * Reads NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY from .env
 * (falls back to VITE_SUPABASE_* if those aren't set). Idempotent: rerunning
 * overwrites existing .md files.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'content', 'blog');

// Minimal .env parser — avoids pulling in `dotenv` for a one-off script.
async function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    const p = path.join(ROOT, file);
    try {
      const text = await fs.readFile(p, 'utf8');
      for (const raw of text.split(/\r?\n/)) {
        const line = raw.trim();
        if (!line || line.startsWith('#')) continue;
        const eq = line.indexOf('=');
        if (eq === -1) continue;
        const key = line.slice(0, eq).trim();
        let val = line.slice(eq + 1).trim();
        if (
          (val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))
        ) {
          val = val.slice(1, -1);
        }
        if (!(key in process.env)) process.env[key] = val;
      }
    } catch {
      /* file optional */
    }
  }
}

/**
 * YAML-frontmatter-safe string. We only need to escape strings that contain
 * characters which would break a single-quoted YAML scalar — single-quotes
 * themselves are escaped by doubling.
 */
function yamlString(value) {
  if (value == null) return "''";
  const s = String(value);
  return `'${s.replace(/'/g, "''")}'`;
}

function buildFrontmatter(row) {
  const lines = ['---'];
  lines.push(`slug: ${yamlString(row.slug)}`);
  lines.push(`title: ${yamlString(row.title)}`);
  lines.push(`date: ${yamlString(row.date)}`);
  lines.push(`excerpt: ${yamlString(row.excerpt ?? '')}`);
  if (row.category) lines.push(`category: ${yamlString(row.category)}`);
  if (row.author) lines.push(`author: ${yamlString(row.author)}`);
  lines.push('---', '');
  return lines.join('\n');
}

async function fetchAllPosts(url, key) {
  // Use Range pagination to be safe even though current row count fits in one page.
  const PAGE = 100;
  const all = [];
  let from = 0;
  while (true) {
    const to = from + PAGE - 1;
    const res = await fetch(
      `${url}/rest/v1/blog_posts?select=*&order=date.desc`,
      {
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          Range: `${from}-${to}`,
          'Range-Unit': 'items',
        },
      },
    );
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Supabase fetch failed (${res.status}): ${body}`);
    }
    const rows = await res.json();
    all.push(...rows);
    if (rows.length < PAGE) break;
    from += PAGE;
  }
  return all;
}

async function main() {
  await loadEnv();

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error(
      'Missing Supabase credentials. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env or .env.local.',
    );
    process.exit(1);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log(`Fetching posts from ${supabaseUrl}…`);
  const posts = await fetchAllPosts(supabaseUrl, supabaseKey);
  console.log(`Fetched ${posts.length} posts.`);

  let written = 0;
  let warned = 0;
  for (const row of posts) {
    if (!row.slug) {
      console.warn(`Skipping row id=${row.id ?? '?'} — missing slug.`);
      continue;
    }
    const body = (row.content ?? '').trimEnd();

    // Sanity check: posts should already begin with an inline <svg> banner.
    const startsWithSvg = /^\s*<svg\b/i.test(body);
    if (!startsWithSvg) {
      warned++;
      console.warn(
        `WARN: ${row.slug} does not start with an <svg> banner. Will be flagged below.`,
      );
    }

    const md = buildFrontmatter(row) + body + '\n';
    const file = path.join(OUT_DIR, `${row.slug}.md`);
    await fs.writeFile(file, md, 'utf8');
    written++;
  }

  console.log(`\nWrote ${written} files to ${path.relative(ROOT, OUT_DIR)}/`);
  if (warned > 0) {
    console.log(
      `\n${warned} post(s) are missing the leading inline SVG banner. Inspect them and add a banner before publishing.`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
