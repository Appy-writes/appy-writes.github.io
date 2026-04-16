# Content Guide

This site is designed so Atrayee can add new work without touching the layout code.

## Add a new work sample

1. Add a new `.md` or `.mdx` file in `src/content/work/`.
2. Use the same frontmatter shape as the existing entries.
3. Add an optional image to `public/images/` or `public/images/deck-media/`.
4. Set `coverImage` to the public path, for example:

```yaml
coverImage: /images/work/new-sample-cover.png
```

## Required work frontmatter

```yaml
title:
slug:
excerpt:
niche:
format:
featured:
ghostwritten:
tags:
status:
workType:
summary:
objective:
approach:
angle:
deliverableType:
proofLabel:
```

## Useful optional fields

```yaml
client:
publication:
date:
externalUrl:
tools:
coverImage:
industries:
placeholder:
```

## `status` values

- `published`
  Use when the source includes a public URL.
- `sample`
  Use for source-linked samples, grouped sample sets, or work available through supporting sample links.
- `placeholder`
  Use when the deck shows the project visually but does not provide a proper title, link, or brief.

## `workType` values

- `ghostwritten`
- `bylined`
- `website-copy`
- `campaign`
- `sample-set`

## Writing the body content

The frontmatter powers the archive cards. The Markdown or MDX body powers the detail page.

Recommended structure:

```md
## Context

Short note about where the sample came from and what is clearly known from the source files.

## What the source shows

- Bullet points drawn from the resume, deck, or article title
- Any visible client or publication information
- Clear caveats when information is missing

## Notes

Anything Atrayee may want to refine later.
```

## Add a new service

1. Add a new Markdown file in `src/content/services/`.
2. Include:

```yaml
title:
slug:
summary:
audience:
fit:
includes:
order:
```

The Services page and service selector will pick it up automatically.

## Replace placeholder entries

When better source detail becomes available:

1. Open the placeholder work file in `src/content/work/`.
2. Replace the generic placeholder title and excerpt.
3. Add the real brief, angle, and deliverable details.
4. Update `status` from `placeholder` to `published` or `sample`.

## Deployment reminders

- User site repo: leave `PUBLIC_BASE_PATH` empty.
- Project site repo: set `PUBLIC_BASE_PATH` to the repository name.
- Rebuild after content updates:

```bash
npm run build
```
