# AI Developer Portfolio — Thomas Jaspers

A static portfolio site built with Astro and Tailwind CSS for a freelance software engineer specializing in AI-assisted development and enterprise consulting.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. Enter access code `1711` to view the site.

## Build

```bash
npm run build
```

Static output is written to the `dist/` directory.

## Pages

| Page     | Path        | Description                              |
|----------|-------------|------------------------------------------|
| Login    | `/`         | Access code entry                        |
| Home     | `/home`     | Hero, skills grid, positioning statement |
| Services | `/services` | Three service offerings                  |
| Blog     | `/blog`     | Article teasers                          |
| Contact  | `/contact`  | Contact form and social links            |

All pages except the login page require a valid session (set via the login page).
