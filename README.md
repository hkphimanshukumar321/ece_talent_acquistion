# ECE Talent Acquisition — IIT Bhubaneswar (Landing Page)

One-page React + Tailwind landing page optimized for **semiconductor / telecom recruiters**, with a **clickable QR** linking to the resume repository.

## Live URL (after GitHub Pages is enabled)
Your site will be:

`https://hkphimanshukumar321.github.io/ece_talent_acquistion/`

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)
This repo is configured for **GitHub Actions** deployment.

1. Push to `main`.
2. In GitHub: **Settings → Pages → Source = GitHub Actions**.
3. Wait for the workflow to finish.

If the site loads blank, verify `vite.config.js` has:

```js
base: "/ece_talent_acquistion/",
```
