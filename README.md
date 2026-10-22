# BareFrame Studios website

React + Vite + Framer Motion single-page site for BareFrame Studios (Swayam Deshmane).

## Run
```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # serve the build locally
```

## Where things live
| What | Where |
|---|---|
| Brand name, phone, WhatsApp text, Instagram, email, hero video, site URL | `src/config.js` |
| Portfolio photos | `src/data/portfolio.js` |
| Films & reels | `src/data/films.js` |
| Services text | `src/data/services.js` |
| Sections / components / styles | `src/sections/`, `src/components/`, `src/styles/global.css` |

## Asset folders (all under `public/`)
- `images/brand/` original logo (`bareframe-logo.png`, never edit or recolor it)
- `images/portraits/` model and portrait shoots
- `images/events/` concerts and live events
- `images/brands/` fashion and brand campaigns (also use for product photography, or add `images/products/`)
- `images/behind-the-scenes/` BTS photos
- `images/films/` poster stills for films
- `videos/hero/` hero background video
- `videos/films/` full films and reels (MP4)

## Add a photo
1. Export two files: a grid image (about 800px wide, `.webp` or `.jpg`) and a full-size image (about 1600px wide, `.jpg`).
2. Put them in the right `public/images/<folder>/`.
3. Add one object to `items` in `src/data/portfolio.js`:
```js
{ id: 'event-001', category: 'events', image: '/images/events/a-thumb.webp', full: '/images/events/a.jpg',
  w: 1600, h: 1067, alt: 'What the photo shows', title: 'Optional real title', year: 2026 }
```
Categories only appear in the filter once they contain at least one item. Add `title`, `year`, `description` only when real.

## Add films
Add MP4s to `public/videos/films/`, posters to `public/images/films/`, then list them in `src/data/films.js`
(`src` for a local file, `href` for an external link). The first entry is the large featured film. Compress MP4s (H.264, 1080p, under ~20 MB each where possible).

## Replace the hero video
Put `hero.mp4` (muted, 10-20 s, under ~8 MB, H.264) in `public/videos/hero/`, then set `heroVideo: '/videos/hero/hero.mp4'` in `src/config.js`.
Also set `heroPoster` to a still from it. If playback fails, or the visitor prefers reduced motion, the poster photo is shown.
The current hero uses a real behind-the-scenes photo; nothing in the site is AI-generated.

## Logo
The supplied logo is an **opaque PNG with a near-white background** (not transparent). It is used untouched, always on a matching white panel (hero, nav chip, footer chip). Do not apply filters or blend modes to it.

## Contact
- WhatsApp: `https://wa.me/917756875954` with the prefilled message, used by the nav CTA, contact section, and footer.
- The contact form has no backend. It opens WhatsApp with the message prefilled; nothing is sent until the visitor presses send there.
- To get a real email form later, add a service such as Formspree or Web3Forms and replace the `submit` handler in `src/sections/Contact.jsx`.

## Needs owner confirmation
1. **Email**: supplied as `swayamdeshamane02@gmial.com` ("gmial" looks like a typo). It is hidden and has no `mailto:` link. Fix it in `src/config.js` and set `verified: true`.
2. **Production domain**: unknown. Add `<link rel="canonical">`, `og:url` and an absolute `og:image` in `index.html` once it is known (and set `siteUrl` in config).
3. **Categories for the 11 runway/fashion photos**: I sorted them into Portraits & Models (5) and Fashion & Brands (6) by composition. Change `category` in `portfolio.js` if you disagree. No titles or credits were invented; the photos have descriptive alt text only.
4. **Real project titles, dates, and client names** for any photo you want captioned.

## Deploy to Vercel
1. Push the folder to GitHub (`node_modules` and `dist` are git-ignored).
2. On vercel.com choose **Add New > Project**, import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`. Deploy.
4. Add the custom domain under Project > Settings > Domains, then update the items in "Needs owner confirmation" #2.
