# Project: AI Developer Portfolio — Sample Frontend

## Tech Stack
Use **Astro** with **Tailwind CSS**. No heavy frameworks, no backend.
Static site, deployable without a build server.

## Purpose
A fictional portfolio site for a freelance software developer
specializing in AI-assisted development and enterprise software consulting.

## Access Control
The site is protected by a **code-only login page** (no username).
- Access code: `1711`
- On correct entry: redirect to the home page and persist access in sessionStorage
- On incorrect entry: show an error message, do not redirect
- All pages except the login page must redirect to login if access is not granted

## Pages
Build the following pages with realistic placeholder content:

| Page | Path | Content Focus |
|---|---|---|
| Login | `/` | Code entry only — clean, minimal |
| Home | `/home` | Hero section, elevator pitch, key skills |
| Services | `/services` | AI-assisted development, enterprise consulting, code reviews |
| Blog Preview | `/blog` | 2–3 fictional article teasers relevant to AI and software engineering |
| Contact | `/contact` | Simple contact form (static, no backend) + LinkedIn/GitHub placeholder links |

## Content Tone
Professional but approachable. The persona is an experienced engineer
who is pragmatic about AI — not a hype-driven evangelist.

## What to Decide Autonomously
Folder structure, component architecture, color scheme, typography,
responsive layout, and all copy not specified above.