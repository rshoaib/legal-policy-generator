# push-migration.ps1
# Run this in PowerShell from anywhere. It will:
#   1. Kill any running GitHub Desktop / git / gh processes (so the lock clears)
#   2. Remove stale .git/*.lock files
#   3. Stage ONLY the Supabase->markdown migration files
#   4. Commit with a clear message
#   5. Push to origin/main using whatever git credentials your system already has
#
# Usage:
#   PS C:\> cd C:\Projects\legalpolicygen
#   PS C:\Projects\legalpolicygen> .\scripts\push-migration.ps1
#
# If push fails with an auth error, the script stops cleanly — your commit
# is still made locally, you just need to fix auth (run `gh auth login`
# or sign back in via GitHub Desktop) and re-run `git push origin main`.

$ErrorActionPreference = 'Stop'
$repo = 'C:\Projects\legalpolicygen'

Write-Host "==> Checking repo path" -ForegroundColor Cyan
if (-not (Test-Path "$repo\.git")) {
    Write-Error "$repo is not a git repo. Aborting."
    exit 1
}
Set-Location $repo

Write-Host "==> Stopping GitHub Desktop / git / gh processes" -ForegroundColor Cyan
Get-Process -Name "GitHub Desktop","git","gh" -ErrorAction SilentlyContinue |
    ForEach-Object {
        Write-Host "    killing $($_.ProcessName) (PID $($_.Id))"
        Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
    }
Start-Sleep -Seconds 1

Write-Host "==> Clearing stale .git/*.lock files" -ForegroundColor Cyan
$lockFiles = @(
    "$repo\.git\index.lock",
    "$repo\.git\HEAD.lock",
    "$repo\.git\refs\heads\main.lock"
)
foreach ($f in $lockFiles) {
    if (Test-Path $f) {
        Remove-Item $f -Force -ErrorAction SilentlyContinue
        if (Test-Path $f) {
            Write-Error "Could not delete $f. Pause OneDrive sync on this folder, then re-run."
            exit 1
        }
        Write-Host "    removed $f"
    }
}

Write-Host "==> Verifying git status" -ForegroundColor Cyan
git status -sb | Select-Object -First 3

Write-Host "==> Staging migration files" -ForegroundColor Cyan
$files = @(
    'src/lib/blogService.ts',
    'src/lib/supabase.ts',
    'src/components/BlogPost.tsx',
    'src/components/BlogIndex.tsx',
    'app/blog/page.tsx',
    'app/blog/[slug]/page.tsx',
    'package.json',
    'package-lock.json',
    'scripts/export-blog-posts.mjs',
    'scripts/push-migration.ps1',
    'content/blog/'
)
foreach ($f in $files) {
    if (Test-Path $f) {
        git add -- $f
        Write-Host "    staged $f"
    } else {
        Write-Host "    skipped (missing) $f" -ForegroundColor Yellow
    }
}

$staged = git diff --cached --name-only
if (-not $staged) {
    Write-Error "Nothing staged. Did the migration actually run? Aborting."
    exit 1
}
Write-Host ""
Write-Host "==> Files staged for commit ($($staged.Count) total):" -ForegroundColor Cyan
$staged | Select-Object -First 12 | ForEach-Object { Write-Host "    $_" }
if ($staged.Count -gt 12) { Write-Host "    ... and $($staged.Count - 12) more" }

Write-Host ""
Write-Host "==> Creating commit" -ForegroundColor Cyan
$msg = "feat(blog): migrate from Supabase to local .md content`n`n" +
       "- Export 58 posts from Supabase blog_posts -> content/blog/<slug>.md`n" +
       "- Replace Supabase fetch with fs/gray-matter in src/lib/blogService.ts`n" +
       "- Make BlogPost a server component, BlogIndex client receives posts as prop`n" +
       "- Pages load posts on the server via getAllPosts/getPostBySlug`n" +
       "- Drop @supabase/supabase-js, add gray-matter`n" +
       "- Strip Supabase env vars (kept stub of src/lib/supabase.ts for now)"
git commit -m $msg
if ($LASTEXITCODE -ne 0) {
    Write-Error "Commit failed. Resolve the error above, then run: git push origin main"
    exit 1
}

Write-Host ""
Write-Host "==> Pushing to origin/main" -ForegroundColor Cyan
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Warning "Push failed. Common fixes:"
    Write-Host "  - Reopen GitHub Desktop, File -> Options -> Accounts -> Sign in (browser flow)"
    Write-Host "  - Or run: gh auth login   (then re-run: git push origin main)"
    Write-Host "  Your commit is safely made locally; only the push didn't go through."
    exit 1
}

Write-Host ""
Write-Host "==> Done. Vercel will pick up the push and deploy." -ForegroundColor Green
Write-Host "    After deploy is green, in Vercel project settings remove these env vars:" -ForegroundColor Green
Write-Host "      NEXT_PUBLIC_SUPABASE_URL"
Write-Host "      NEXT_PUBLIC_SUPABASE_ANON_KEY"
Write-Host "      SUPABASE_SERVICE_ROLE_KEY"
Write-Host "    Then pause/delete the Supabase project to stop the bill." -ForegroundColor Green
