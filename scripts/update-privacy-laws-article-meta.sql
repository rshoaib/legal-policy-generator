-- GSC Audit Fix: Rewrite title & meta for the US privacy laws article
-- The article gets 75% of all site impressions (37/49) but 0% CTR.
-- New title includes "Federal" keyword to match top GSC queries:
--   - "us federal data privacy law status 2026" (position 1)
--   - "us federal privacy law 2026" (position 5)
-- Run this in Supabase SQL Editor.

UPDATE blog_posts
SET
  title = 'New US State & Federal Privacy Laws 2026: All 20+ States, Deadlines & What You Must Do',
  excerpt = 'No federal privacy law yet — but 20+ states now have their own. 8 new laws took effect in 2026 (Kentucky, Indiana, Rhode Island & more). See every deadline, who must comply, and update your policy free.',
  updated_at = NOW()
WHERE slug = 'new-us-state-privacy-laws-2026';
