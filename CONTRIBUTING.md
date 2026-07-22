# Working on this project

## The rule

**Never commit directly to `main`.** Every change goes: branch → push → pull request → CI passes → merge.

`main` is always deployable. Whatever is on `main` is what is live in production.

## Day-to-day loop

```bash
# 1. Start from an up-to-date main
git switch main
git pull

# 2. Branch. Name it type/short-description
git switch -c feat/careers-filter

# 3. Work, then commit in meaningful chunks
npm run dev
git add .
git commit -m "Add department filter to careers page"

# 4. Push and open a PR
git push -u origin feat/careers-filter
```

Then open the PR on GitHub. Two things happen automatically:

| Automation | What it does |
|---|---|
| **GitHub Actions (CI)** | Runs lint, typecheck and build. Must be green to merge. |
| **Vercel** | Builds your branch and comments a preview URL on the PR. |

Click the preview URL, check the pages actually look right, then merge. Vercel
deploys `main` to production on merge. Delete the branch afterwards.

## Branch naming

| Prefix | Use for |
|---|---|
| `feat/` | New pages, sections or features |
| `fix/` | Bug fixes |
| `content/` | Copy and mock-data edits under `lib/content/` |
| `chore/` | Dependencies, config, tooling |

## Before you push

Run the same three checks CI will run. Catching it locally is much faster than
waiting on a CI run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Where content lives

Page copy, services, projects, news, vacancies and company details are **data**,
not markup. Edit these rather than the JSX:

- `lib/site.ts` — company name, contact details, offices, navigation
- `lib/content/*.ts` — services, projects, news, careers, HSE, industries, about

Everything currently in there is placeholder content. See `AGENTS.md` before
writing Next.js code — this project is on Next.js 16, whose APIs differ from
older versions.
