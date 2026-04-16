# Atrayee Banerjee Portfolio

Lead-generating multi-page portfolio site for Atrayee Banerjee, built with Astro, static output, Tailwind CSS, and Markdown/MDX content collections. The site is designed for GitHub Pages deployment and optimized around writing, editorial credibility, and inbound leads.

## Stack

- Astro
- Tailwind CSS
- Markdown / MDX content collections
- Static deployment via GitHub Pages

## Local setup

```bash
npm install
npm run dev
```

Open the local dev server URL shown in the terminal.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Content structure

- `src/content/work/`
  Each work sample lives in its own Markdown or MDX file with frontmatter and page copy.
- `src/content/services/`
  Service definitions for the Services page and selector.
- `src/data/site.ts`
  Shared profile, hero options, niche definitions, timeline data, and contact details.
- `public/images/deck-media/`
  Images extracted from the supplied PowerPoint deck.
- `public/resume/RESUME-Atrayee.pdf`
  Resume download copied from the supplied source file.

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml` for GitHub Pages.

### Preferred user-site setup

If the repository is named `appy-writes.github.io`, the site can deploy at the root:

- `PUBLIC_SITE_URL=https://appy-writes.github.io`
- `PUBLIC_BASE_PATH=` (empty)

### Project-site setup

If the repository name is something else, set the base path:

- `PUBLIC_SITE_URL=https://Appy-writes.github.io`
- `PUBLIC_BASE_PATH=repository-name`

The workflow uses those environment variables during build so the same codebase can work for either a user site or a project site.

## Source handling

This project was populated from:

- `RESUME-Atrayee.pdf`
- `Portfolio.pptx`

The generated site preserves unknown or incomplete portfolio sections as placeholders instead of inventing details, metrics, or outcomes.

## Important notes

- No backend is required.
- The contact experience uses `mailto:` generation and copy-to-clipboard helpers.
- Ghostwritten work without a public article URL is labeled accordingly.
- Testimonials are intentionally left as a placeholder block because the supplied files do not include testimonial copy.

## Updating the site

Read `CONTENT_GUIDE.md` before adding or editing work samples.
