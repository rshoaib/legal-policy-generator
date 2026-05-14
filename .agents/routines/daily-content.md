# legalpolicygen.com — daily content routine

## Mission

Land **one** meaningful change per run that helps legalpolicygen.com (66 posts as of 2026-05). Triage prioritizes refreshing existing legal/privacy content (which decays fast) over adding new posts.

## Pre-flight

1. Read `.agents/context/site-context.md` for brand voice + generator URL map.
2. Read `.agents/context/target-keywords.md` for the keyword backlog.
3. Today's date in YYYY-MM-DD. Posts dir: `content/blog/`. Branch: `main`.

**Frontmatter shape (existing posts):** YAML with `slug`, `title`, `date`, `excerpt`. Body is HTML with inline SVG hero banner.

## Priority lanes — pick the FIRST lane with work to do

### Lane A — Refresh stuck content (highest priority — dominates for legal content)

Legal/privacy content decays quickly: regulations update, fines change, court decisions shift. For every `content/blog/*.md`, determine state. Heuristic: `date` ≥45 days old. Pick oldest.

Refresh procedure:
- Verify every regulation citation (GDPR articles, CCPA sections, EU AI Act dates) is still current. Use WebSearch.
- Update fine amounts, enforcement deadlines, state law counts ("X US states have privacy laws") to the current count.
- Refresh disclaimer/date references (e.g., "as of 2025" → "as of 2026" if claim still holds).
- Validate internal links to generators under `app/<generator>-generator/` — verify each path exists.
- Validate external links — replace any 404s with the canonical updated page.
- Bump frontmatter `date` to today. Do NOT change `slug` or `title`.

Stop after one post.

### Lane B — Internal-link strengthening (medium priority)

Only if Lane A is clear. Cross-link posts to the most relevant generator (e.g., a post about cookie banners should link to `/cookie-banner-generator`). Anchor text from `.agents/context/target-keywords.md`.

### Lane C — New post (lowest priority)

Only if Lanes A and B are clear AND no new post in 3 days. Pick from `.agents/context/target-keywords.md`. **New posts must pair with an existing generator** under `app/<name>-generator/`.

Inspect 2–3 existing posts first to learn the HTML body + inline SVG hero pattern. Match it precisely.

## Hard constraints (all lanes)

- Never more than 1 lane per run. Never more than 1 post created.
- **Never offer personalized legal advice.** Every post must include the standard disclaimer.
- Never fabricate regulation citations, case law, fine amounts, or court decisions. If unverified via WebSearch, omit.
- Never delete content. Never force-push. Never `--no-verify`.
- **Never write to Supabase.** This site is file-based (Next.js — content lives under `app/blog/ or content/ (inspect)` in the repo). The only legitimate target for new content is a git commit on the default branch. If you see a Supabase MCP connector attached to this routine, ignore it for content writes — that connector is shared across all routines but only `easyorder-bot` legitimately uses Supabase for content. Writing content to Supabase from this routine will contaminate the orderviachat database (verified incident: 2026-05-14 with online-image-shrinker).

## After the change

1. `npm run lint`. If it fails, do not commit.
2. Commit per repo's convention. Push to `origin/main`.
3. If auth fails, exit cleanly. One-paragraph report.

If all lanes clear: one-line skip. Don't manufacture work.
