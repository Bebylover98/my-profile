# Ankit Kumar Yadav — Personal Site

A premium, dark, developer-flavored personal introduction site. Built with
React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

Signature idea: instead of a generic hero with a gradient blob, the homepage
opens with a live-typing terminal readout (`whoami`, stack, current focus) —
a small, honest nod to "this person builds things."

---

## 1. What to edit

You almost never need to touch component code. All real content lives in
`src/data/`:

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Your name, roles, tagline, bio, location, education, terminal lines |
| `src/data/skills.ts` | Skill categories and items |
| `src/data/projects.ts` | Featured projects + the "Currently Building" card |
| `src/data/journey.ts` | Timeline, stats, achievements |
| `src/data/social.ts` | Social links (delete any platform you don't use) |

Search the project for `[` to find every remaining placeholder:

```bash
grep -rn "\[YOUR" src
```

Replace your profile photo by swapping the placeholder block in
`src/sections/About.tsx` (search for `[PROFILE IMAGE]`) with an `<img>` tag
pointing at a file you add to `public/`.

The Open Graph preview image is `public/og-image.png` (1200×630) — regenerate
it with your own name once you've finalized your branding.

---

## 1b. Add your photo

The About section is already wired to display a photo — you just need to
drop the image file in place:

1. Pick a photo (a clear headshot or portrait works best). A vertical
   image close to a 4:5 ratio (e.g. 800×1000px) will fill the frame nicely
   without needing to crop.
2. Rename it `profile.jpg` (or `profile.png` — if you use `.png`, update the
   `src="/profile.jpg"` line in `src/sections/About.tsx` to match).
3. Copy it into the `public/` folder in the project root, right next to
   `favicon.svg`.
4. Restart the dev server if it's already running (`Ctrl+C`, then
   `npm run dev` again) and refresh the browser — your photo should now
   appear in the About section.

If no image is found at that path, the section falls back to a placeholder
box automatically, so nothing breaks if you add the photo later.

---

## 2. Run it locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install     # install dependencies
npm run dev     # start local dev server (usually http://localhost:5173)
```

Edit files in `src/` — the browser updates instantly.

---

## 3. Production build

```bash
npm run build     # outputs static files to /dist
npm run preview   # preview the production build locally
```

`dist/` is a fully static site — it can be hosted anywhere that serves
static files.

---

## 4. Contact form — connecting it to actually send email

The form in `src/sections/Contact.tsx` currently just confirms it captured
your message locally; it doesn't send anything yet, and no backend or API
key is hardcoded into the frontend (that would expose it to anyone who views
your page's source).

Two easy, free ways to wire it up in a few minutes:

**Option A — Formspree** (simplest)
1. Create a free form at [formspree.io](https://formspree.io) and copy your
   form endpoint URL.
2. In `Contact.tsx`, change the `<form>` to:
   ```tsx
   <form action="https://formspree.io/f/your-id" method="POST" ...>
   ```
3. Remove the `handleSubmit` preventDefault logic, or keep it for the instant
   "message captured" UI feedback and let Formspree handle the actual POST.

**Option B — EmailJS** (send straight from the browser, still no server)
1. Create an account at [emailjs.com](https://emailjs.com), connect your
   email, and create a template.
2. `npm install @emailjs/browser`
3. In `handleSubmit`, call `emailjs.send(serviceId, templateId, form, publicKey)`.
   EmailJS's "public key" is safe to expose client-side by design — it's not
   a secret.

If you'd rather run your own backend, build a small serverless function
(e.g. a Vercel API route) that receives the form POST and sends mail via a
provider like Resend or SendGrid — keep that provider's real API key in the
function's environment variables, never in frontend code.

---

## 5. Deploying — Vercel (recommended)

**With GitHub:**
1. Install dependencies once locally to confirm the build works: `npm install && npm run build`.
2. Create a new repository on [github.com/new](https://github.com/new).
3. Push your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
4. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and
   import the repository.
5. Vercel auto-detects Vite — leave the defaults (Build Command
   `npm run build`, Output Directory `dist`) and click **Deploy**.
6. To add a custom domain: in the Vercel project → **Settings → Domains**,
   add your domain and follow the DNS instructions Vercel shows you (usually
   an A record or CNAME at your registrar). HTTPS certificates are issued
   and renewed automatically — no extra setup needed.
7. Future updates: just `git push` to `main` — Vercel redeploys
   automatically.

**Without GitHub (drag-and-drop):**
1. Run `npm run build` locally to produce `dist/`.
2. Go to [vercel.com](https://vercel.com), and drag the `dist/` folder onto
   the dashboard, or install the Vercel CLI: `npm i -g vercel`, then run
   `vercel` from the project root and follow the prompts (`vercel --prod`
   for a production deploy).

**Alternative hosts** (same static `dist/` output works everywhere):
- **Netlify**: drag-and-drop `dist/`, or connect the GitHub repo (build
  command `npm run build`, publish directory `dist`).
- **GitHub Pages**: run `npm run build`, then deploy the `dist/` folder using
  the `gh-pages` package or GitHub's static Pages workflow.
- **Cloudflare Pages**: connect the repo, same build command/output as
  above.

---

## 6. Tech stack

- **React 18 + TypeScript** — components and type safety
- **Vite** — dev server and build tooling
- **Tailwind CSS** — styling, with custom design tokens in `tailwind.config.js`
- **Framer Motion** — page-load sequence, scroll reveals, hover/tilt/magnetic
  interactions
- **Lucide Icons** — the icon set used throughout

All animations respect `prefers-reduced-motion`. The custom cursor and
mouse-reactive background disable themselves automatically on touch devices.

---

## 7. Project structure

```
src/
 ├── components/   Navbar, custom cursor, magnetic button, scroll-reveal wrapper, etc.
 ├── sections/     One file per homepage section (Hero, About, Skills, ...)
 ├── data/         All editable content — start here
 ├── hooks/        Small reusable hooks (mouse tracking, active section, etc.)
 ├── App.tsx       Assembles sections + loading screen
 └── main.tsx      React entry point
```
