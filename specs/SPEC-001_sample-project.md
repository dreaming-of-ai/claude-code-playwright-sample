# Task: Generate AI Developer Portfolio Website

## Overview
Scaffold a complete, fully functional static portfolio website based on the
specifications in CLAUDE.md. The site must be ready to run locally with a
single command after generation — no manual fixes required.

---

## Execution Plan
Work through the following phases in order. Complete each phase fully
before proceeding to the next.

### Phase 1 — Project Scaffolding
- Initialize an Astro project with Tailwind CSS
- Configure `astro.config.mjs` for static output (`output: 'static'`)
- Set up Tailwind with a custom design token baseline (colors, fonts, spacing)
- Install and configure any required Astro integrations
- Verify the dev server starts without errors before proceeding

### Phase 2 — Access Control
Implement the code-based access guard as a reusable mechanism:
- Create a `LoginGuard` utility that checks `sessionStorage` for a valid
  session token on every protected page
- The login page (`/`) renders a centered, minimal code entry form
- On submission: validate against the access code defined in CLAUDE.md
  - Correct: write a session token to `sessionStorage`, redirect to `/home`
  - Incorrect: display an inline error message, clear the input, do not redirect
- Protect all pages except `/` by injecting the LoginGuard check
- The guard must work without JavaScript frameworks — vanilla JS is sufficient

### Phase 3 — Layout & Design System
Before building individual pages, establish a shared foundation:
- Create a persistent `BaseLayout.astro` with header navigation and footer
- Navigation links: Home, Services, Blog, Contact
- Design language: clean, modern, slightly dark-toned professional palette
  (suggest: deep slate background, accent in a muted electric blue or teal)
- Typography: use a Google Font pairing — one serif or semi-serif for headings,
  one sans-serif for body text
- Full responsive layout: mobile-first, desktop breakpoints at md and lg
- Subtle hover states and transitions on all interactive elements

### Phase 4 — Page Implementation
Build all five pages with realistic, non-generic placeholder content.
The persona is **Thomas Jaspers** — a senior software engineer with deep
enterprise experience and a pragmatic, non-hype-driven approach to AI.

#### `/` — Login Page
- Standalone layout (no header/nav/footer)
- Centered card: small logo or monogram, one-line tagline, code input, submit button
- Error state: red inline message below the input
- Clean and intentionally minimal — first impression matters

#### `/home` — Home
- Hero section: name, title ("Senior Software Engineer & AI Enthusiast"),
  a two-sentence positioning statement
- Skills grid: 4–6 cards covering Java/Spring Boot, Angular, Cloud,
  AI-Assisted Development, Enterprise Architecture, Code Quality
- A short "Why work with me" section — 2–3 sentences, confident but grounded
- Subtle call-to-action linking to `/services` and `/contact`

#### `/services` — Services
- Three service offerings, each with a title, icon (use inline SVG or an
  Astro-compatible icon library), and 3–4 sentence description:
  1. **AI-Assisted Software Development** — integrating LLM-based tooling
     into enterprise development workflows
  2. **Enterprise Architecture & Consulting** — SpringBoot, Angular,
     cloud-native systems, long-term maintainability
  3. **Code Review & Quality Assurance** — specification-based testing,
     AI validation workflows, technical debt assessment
- Pricing note placeholder: "Rates available on request"

#### `/blog` — Blog Preview
- Three fictional article teasers, each with:
  - A plausible title (relate to AI coding, Claude Code, enterprise dev)
  - A 2–3 sentence teaser text
  - A "Read more" link (href="#" is fine)
  - A fictional publish date
- Suggest article titles that align with the themes of this portfolio —
  e.g. specification testing, AI agents in enterprise, prompt engineering
  for developers

#### `/contact` — Contact
- Short intro text (2 sentences)
- Static contact form: Name, Email, Subject, Message, Submit button
  (no backend — add a visible note that the form is a demo)
- Placeholder social links: LinkedIn, GitHub (href="#")
- Optional: a brief availability note ("Currently available for new projects")

### Phase 5 — Polish & Verification
- Verify all internal navigation links work correctly
- Verify the LoginGuard redirects unauthenticated users on all protected pages
- Verify the site builds without errors: `npm run build`
- Verify the dev server runs without errors: `npm run dev`
- Add a concise `README.md` with setup instructions (install, dev, build)

---

## Quality Constraints
- Zero hardcoded magic strings except the access code — use constants or
  config where appropriate
- No `any` types if TypeScript is used
- All images referenced must either be generated as SVG placeholders or
  sourced from a CDN with a stable URL (e.g. unsplash.com with fixed params)
- No console errors in the browser on any page
- The login guard must not flash protected content before redirecting

---

## Definition of Done
The task is complete when:
1. `npm run dev` starts without errors
2. Navigating to `http://localhost:4321` shows the login page
3. Entering `1711` grants access and redirects to `/home`
4. Entering any other code shows an error and stays on the login page
5. Directly navigating to `/home`, `/services`, `/blog`, or `/contact`
   without a valid session redirects back to the login page
6. `npm run build` completes without errors