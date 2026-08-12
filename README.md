# site-b

Sandbox site repo for store `site-b-store`. Part of the multi-site theme CI/CD
sandbox — the shared code lives in
[`shopify-common`](https://github.com/chinmay-garge/shopify-common).

## What this repo is for

It is git-connected to this store's **Staging** theme, so it mirrors **content**:
anything edited in the Shopify theme editor arrives here as a commit.

It is **not** where code changes are made. `.liquid` files here are overwritten
by the next deploy from `shopify-common`. To change code, change it there.

| Lane | Owner | Path |
|---|---|---|
| CODE | `shopify-common` | `sections/`, `snippets/`, `layout/`, `assets/*.vbt.*` |
| CONTENT | editors, in the Shopify admin | `templates/*.json`, `config/settings_data.json`, `locales/*.json` |

## Drift detection

`.github/workflows/drift-detection.yml` runs on every push to `main`, diffs the
code files here against `shopify-common/theme`, and maintains a single open
`drift` issue — updating it while drift persists and closing it once resolved.

Requires:

- variable `TARGET_REMOTE_REPO` = `chinmay-garge/shopify-common`
- secret `ACCESS_PAT` — PAT with `repo` scope, to read the shared repo

## Fixtures owned by this site

**`sections/sandbox-banner.liquid` — divergent copy.** A file that also exists
in `shopify-common`, but with different markup and a different schema default.
It stands in for a site that drifted from the shared theme. Drift detection
should flag it, and the next code deploy should overwrite it — the marker
`data-sandbox-origin="SITE-B-VERSION"` becoming `COMMON-VERSION` is the
assertion.

**`sections/sandbox-steps.liquid` — site-unique, simple.** Exists only here, and
needs no locale work when ported (its schema uses plain strings, not `t:` keys).
It is the counterpart to site-a's deliberately awkward `sandbox-table`, so the
onboarding runbook can be checked against both shapes rather than tuned to one.
