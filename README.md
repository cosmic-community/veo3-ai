# Veo3 AI Landing Page

![App Preview](https://imgix.cosmicjs.com/b000a430-cc2e-11f1-b967-415684f3dcc2-autopilot-photo-1485846234645-a62644f84728-1792463631851.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, dark cinematic single-page marketing site for Veo3 AI, an independent AI video agent. Describe a video and the agent writes the script, generates every shot, and edits it all into one finished video.

## Features

- 🎬 Sticky header with site name and CTA button
- 🌌 Full-bleed gradient hero section with headline, subheadline, CTA, and hero image
- 🧩 Features grid (icon, title, description, image) sorted by `display_order`
- 🔢 Numbered "How it works" steps driven by a JSON array
- 📣 Closing call-to-action banner
- 👣 Footer with linked footer text and required disclaimer
- ⚡ Fast, responsive, built entirely on Server Components

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6ad6d2e9d6f529bbe6ab7b21&clone_repository=6ad6d52ed6f529bbe6ab7ba8)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create content models for: A simple one-page site for Veo3 AI (https://www.veo3ai.io/), an independent AI video generator. Use ONLY these facts: describe the video you want and the Veo3 AI Agent writes the script, generates every shot and edits them into one finished video; marketers can turn a single product photo into product ad videos and UGC-style avatar clips for TikTok, Instagram Reels, YouTube Shorts and Facebook; Veo 3.1, Seedance, Kling and MiniMax models are available in one place; Veo3 AI is not affiliated with Google. Include a short "How it works" section (describe the idea, the agent writes the script, it generates the shots, you get the edited video). Every call-to-action button and the footer must link to https://www.veo3ai.io/. Do NOT invent testimonials, customer logos, statistics, prices, team members or any feature not listed above.

### Code Generation Prompt

> A modern, single-page marketing landing site for Veo3 AI, an AI video agent: describe a video and the agent writes the script, generates every shot and edits them into one finished video. Content comes from the existing Cosmic types. 'site-settings' (singleton object) supplies site_name, hero_headline, hero_subheadline, hero_image, cta_text, cta_url (used by every CTA button), how_it_works_title, how_it_works_steps (JSON array of {title, description}), footer_text, footer_link, disclaimer. 'features' objects (icon emoji, description, feature_image, display_order) are sorted by display_order ascending. Sections: sticky header with site name and CTA button; full-bleed hero with headline, subheadline, CTA and hero image; features grid with icon, title, description and image; numbered 'How it works' steps; a closing CTA banner; footer with footer_text linking to footer_link plus the disclaimer. Dark cinematic design with vibrant gradient accents, responsive and fast. All CTA links open cta_url.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cosmic](https://www.cosmicjs.com) via [`@cosmicjs/sdk`](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed
- A Cosmic account with the `site-settings` and `features` object types

### Installation

```bash
bun install
```

Create your environment variables (see Environment Variables section below), then run:

```bash
bun run dev
```

Visit `http://localhost:3000`.

## Cosmic SDK Examples

```typescript
// Fetch the singleton site settings object
const { object: settings } = await cosmic.objects
  .findOne({ type: 'site-settings' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch all features, sorted by display_order
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

const sorted = features.sort(
  (a, b) => (a.metadata?.display_order ?? 0) - (b.metadata?.display_order ?? 0)
)
```

## Cosmic CMS Integration

This app reads from two [Cosmic](https://www.cosmicjs.com) object types:

- **site-settings** — a singleton containing the hero copy, CTA text/URL, how-it-works steps (JSON), and footer content
- **features** — repeatable objects with an icon emoji, description, feature image, and a `display_order` number used for sorting

Learn more about querying objects in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel
1. Push this repo to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add the environment variables below in the Vercel dashboard
4. Deploy

### Netlify
1. Push this repo to GitHub
2. Import the project into [Netlify](https://www.netlify.com)
3. Set build command to `bun run build` and publish directory to `.next`
4. Add the environment variables below in the Netlify dashboard
5. Deploy

### Environment Variables
Set these in your hosting provider's dashboard:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->