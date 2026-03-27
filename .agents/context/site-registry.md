---
site: legalpolicygen.com
git_branch: main
supabase_ref: gkywwttudvlccmepjsld
content_format: html
---

# LegalPolicyGen Site Registry

## Blog Schema (`blog_posts` table)

| Column | Type | Required | Notes |
|--------|------|----------|-------|
| `id` | uuid | auto | Primary key |
| `slug` | text | ✅ | URL slug (kebab-case) |
| `title` | text | ✅ | Article title |
| `excerpt` | text | ✅ | Short description |
| `date` | text | ✅ | ISO date: `2026-03-27` |
| `content` | text | ✅ | **HTML** (rendered via dangerouslySetInnerHTML) |
| `created_at` | timestamptz | auto | |
| `updated_at` | timestamptz | auto | |

## Image Hosting

- **Strategy**: Hero image embedded INSIDE the `content` HTML + file in `public/images/blog/`
- **Column**: ⚠️ **No dedicated image column** — image is an `<img>` tag in the content
- **Path format**: `/images/blog/{slug}-hero.png`
- **How to add hero**: Prepend `<img src="/images/blog/{slug}-hero.png" alt="{title}" style="width:100%; border-radius:12px; margin-bottom:2rem;" />` to the content HTML
- **⚠️ CRITICAL**: Image file MUST be `git add`-ed and pushed to `main`

## Content Format

- **Type**: HTML (rendered via `dangerouslySetInnerHTML` in `BlogPost.tsx`)
- **CSS support**: `.blog-content` class handles h2, h3, p, ul, li, table, th, td, strong, img
- **Tables**: ✅ Styled (purple header border, hover effects) — added via inline `<style>` block
- **⚠️ IMPORTANT**: All styling is via `.blog-content` CSS — do NOT use Tailwind classes in content HTML

## Deployment

- **Git branch**: `main`
- **Host**: Vercel (Vite SPA)
- **Dynamic**: Content loaded from Supabase at runtime (no ISR/SSG)
- **Push command**: `git push origin main`

## Post-Insert Checklist

1. ☐ Image file exists in `public/images/blog/`
2. ☐ Image file is git-tracked (`git status` shows no `??`)
3. ☐ Content HTML starts with `<img>` tag pointing to `/images/blog/{slug}-hero.png`
4. ☐ Tables use raw `<table><thead><tr><th>` HTML (no Tailwind classes — CSS is in BlogPost.tsx)
5. ☐ Push to `main` (NOT `master`)
6. ☐ Wait 90s, verify image URL returns 200
