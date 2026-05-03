# GSC Unblock Runbook — `legalpolicygen-gsc-audit-fixes`

**For:** Rizwan
**Last updated:** 2026-05-04
**Owns:** the weekly Google Search Console audit + auto-fix scheduled task at `C:\Users\Riz\OneDrive\Documents\Claude\Scheduled\legalpolicygen-gsc-audit-fixes\SKILL.md`

## Why this exists

The scheduled task tries three data sources in order before giving up. If all three fail, it writes a "blocked" report (see `reports/gsc-fixes-<date>.md` for examples) and applies zero fixes. This document walks through how to pick **one** of the two practical paths and set it up so the task starts producing real fixes again.

## What the task tries to read (in order)

| # | Source | Where it looks | Who maintains it |
|---|--------|----------------|------------------|
| A | Pre-generated CLI report | Cowork uploads folder, file named `legalpolicygen.com_<YYYY-MM-DD>.md`, dated within last 7 days | You — manual weekly drop |
| B | GSC API direct call | Service-account JSON in `GSC_SERVICE_ACCOUNT_JSON` env var (loaded from `.env.local`) | You — one-time setup |
| C | CLI on Windows | `C:\Projects\gsc-audit-tool\audit.js` | Only works when you run the task manually on your dev machine |

Source C is unreachable from the scheduled-task sandbox, so for automated weekly runs to work, you need either A or B.

## Path A — Manual CLI + uploads (low effort, ongoing)

**Best if:** you don't want to set up a service account and you're OK running one command every Sunday before the Monday 7 AM run.

**Steps:**

1. On Sunday evening (or any time before Monday 4 AM UTC / 7 AM your local time), open PowerShell on your dev machine.
2. Run the CLI:
   ```powershell
   cd C:\Projects\gsc-audit-tool
   node audit.js --site https://legalpolicygen.com/ --no-inspect --months 3
   ```
3. The CLI writes a report to `C:\Projects\gsc-audit-tool\reports\legalpolicygen.com_<YYYY-MM-DD>.md`.
4. Open Cowork. In the chat that hosts the scheduled task (or any new chat — uploads are visible across the cowork session for that task), drag that file in as an attachment, OR copy it into the cowork uploads directory directly.
5. Done. The Monday 7 AM scheduled run will find the file and use it.

**Verify it worked:** after the Monday run, check `reports/gsc-fixes-<that-monday-date>.md`. If it says "data source: A (uploaded report)" near the top, the path is wired up correctly.

**Recurring effort:** ~2 minutes per week.

## Path B — Service-account credentials (more setup, fully automatic)

**Best if:** you want the task to work without weekly manual work, and you're comfortable with one-time GCP setup.

### One-time setup

**1. Create a GCP project and service account**

Visit [console.cloud.google.com](https://console.cloud.google.com). Either pick an existing project or create one (e.g., `legalpolicygen-automation`).

In that project:
- Go to **APIs & Services → Library**, search for **Google Search Console API**, click **Enable**.
- Go to **IAM & Admin → Service Accounts → + Create Service Account**.
  - Name: `gsc-reader-legalpolicygen`
  - Role: leave empty (Search Console permissions are granted at the property level, not the project level).
  - Skip the optional grant-access steps; just click **Done**.
- Click on the new service account → **Keys** tab → **Add Key → Create new key → JSON**. A JSON file downloads — keep it safe.

**2. Grant the service account access to your GSC property**

Visit [search.google.com/search-console](https://search.google.com/search-console). Open the `https://legalpolicygen.com/` property.

- **Settings → Users and permissions → Add user**.
- Email: paste the service account email from the JSON (looks like `gsc-reader-legalpolicygen@<project-id>.iam.gserviceaccount.com`).
- Permission: **Restricted** (read-only is sufficient for this task).
- Click **Add**.

**3. Provision the credentials into `.env.local`**

In your `legalpolicygen` repo:

- Open `.env.local` (or create it if missing).
- Add a single line — paste the entire JSON file content as one string, with quotes:

   ```env
   GSC_SERVICE_ACCOUNT_JSON='{"type":"service_account","project_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"gsc-reader-legalpolicygen@...","..." (rest of the JSON) ...}'
   ```

- The single-line single-quoted form keeps the embedded `\n` newlines in the private key intact for `JSON.parse()`. (If you prefer multi-line, use a `.env` library that supports it, but the single-line form is the simplest.)
- Confirm `.env.local` is in `.gitignore`. The repo's existing `.gitignore` already covers it but verify with `git check-ignore .env.local` — should print the file name.

**4. (Optional) Verify locally before the next scheduled run**

```powershell
cd C:\Projects\legalpolicygen
node -e "const {google}=require('googleapis');const c=JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);const a=new google.auth.GoogleAuth({credentials:c,scopes:['https://www.googleapis.com/auth/webmasters.readonly']});google.webmasters({version:'v3',auth:a}).sites.list().then(r=>console.log('OK',JSON.stringify(r.data.siteEntry?.map(s=>s.siteUrl))));"
```

You'll need `googleapis` installed (`npm install googleapis google-auth-library`) and the env var loaded (PowerShell: `Get-Content .env.local | %{$kv=$_-split'=',2;[Environment]::SetEnvironmentVariable($kv[0],$kv[1].Trim("'"))}`).

If the output lists `https://legalpolicygen.com/` (or includes it), the service account is correctly authorized.

### Recurring effort: zero. The Monday run will start using source B automatically.

## When something breaks

The blocked-report mode (`reports/gsc-fixes-<date>.md` written when no data source works) explicitly states which sources were tried and what each one returned. Read the most recent one, fix the named issue, then either wait for next Monday or manually run the task from cowork (it's listed as `legalpolicygen-gsc-audit-fixes` in the scheduled tasks panel — click **Run now**).

Common issues:

| Symptom in blocked report | Likely cause | Fix |
|---------------------------|--------------|-----|
| Source A: no file dated within 7 days | Forgot to drop the CLI report | Run path A's commands today, then **Run now** the task |
| Source B: env var not set | `GSC_SERVICE_ACCOUNT_JSON` missing from `.env.local` or `.env.local` not loaded into the sandbox | Confirm the file exists and the var name matches exactly |
| Source B: `auth` error | Service account email isn't added to the GSC property | Re-do path B step 2 |
| Source B: `quota` error | Hit Google API rate limits (very rare for weekly use) | Wait 24 hours and retry; check GCP project quotas |
| Source B: `property-access` error | Service account added but not yet propagated, OR added to wrong property | Check that the GSC property URL exactly matches `https://legalpolicygen.com/` (trailing slash matters) |

## Recommended path

Path B if you can spare 30 minutes once. Path A otherwise. Either is sufficient — the task spec is now agnostic to which one you pick.

## What changed on 2026-05-04

The scheduled task's SKILL.md was updated to:

- Add a Step 0 that explicitly tries A → B → C in order rather than going straight to C
- Detect Source B credentials from `.env.local` and call the GSC API directly via `googleapis` npm package
- Write a richer "blocked" report when none of the three sources work, naming exactly what was missing for each
- Tag the data source used (A / B / C) in every successful summary report

The task's actions in steps 1-5 (identify candidates → rewrite metadata → push to Supabase → verify → write report) are unchanged from the prior spec.
