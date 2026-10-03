# Photography Portfolio

Minimal Next.js (App Router) photography site with a Tailwind editorial layout, Cloudinary-hosted images, and a Formspree contact form. Built to deploy on Vercel.

## Setup

1. Install [Node.js](https://nodejs.org/) 20+ (and Apple Command Line Tools if `git` is unavailable: `xcode-select --install`).
2. Install dependencies and start the app:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID` to your [Formspree](https://formspree.io) form ID.

4. Replace the Cloudinary URLs in `data/photos.json` with your own. Expected format:

```
https://res.cloudinary.com/<cloud_name>/image/upload/<transforms>/<public_id>.jpg
```

The About page profile image is a Cloudinary URL in `src/app/about/page.tsx`.

## Data

`data/photos.json` is the only gallery source. Each entry:

| Field | Purpose |
| --- | --- |
| `id` | Used as `/photo/[id]` |
| `src` | Cloudinary image URL |
| `title` | Photograph title |
| `location` | Place name |
| `category` | `Landscape`, `Drone`, or `Travel` |
| `caption` | Short description |

Swap this file for a CMS later without changing page structure.

## Deploy

Push to GitHub and import the repo in [Vercel](https://vercel.com). Add `NEXT_PUBLIC_FORMSPREE_ID` in the Vercel project environment variables.
