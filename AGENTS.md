<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history — force pushing, or rebasing/amending/squashing commits that are already pushed — as it rewrites history on Lovable's side.
>
> Commits pushed to this repository sync back to Lovable. Keep the branch in a working state.

## What Lovable manages
- Database migrations and generated files remain managed by Lovable.
- Keep secrets out of browser code and the repository.
<!-- LOVABLE:END -->

## Website architecture
- The public website is a static multi-page site built with semantic HTML, CSS and vanilla JavaScript. Do not reintroduce React, TypeScript or a client-side router without an explicit product decision.
- Keep the shared header, footer, navigation and interactive behaviors in `script.js`; visual tokens and responsive rules live in `styles.css`.
- Keep page content and pricing estimates consistent across all pages. Current estimates are R$ 700 / R$ 2.500, R$ 1.500 / R$ 5.000 and R$ 3.000 / R$ 12.000 (monthly / setup).
- Until a commercial channel is supplied, contact details stay local and the form downloads a brief without claiming submission.
- Run `npm test` and `npm run build` before proposing changes.
