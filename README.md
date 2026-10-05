# PDF + Image Builder — GitHub + Cloudflare Pages

A static, GitHub-ready PDF/image tools website inspired by the supplied dashboard screenshot.

## Important
This project is designed for **GitHub + Cloudflare Pages**. There is no Node.js server and no database in this starter.

## Folder structure

```text
pdf-image-builder-github/
├── index.html
├── style.css
├── app.js
├── tool.js
├── README.md
├── LICENSE
├── .gitignore
├── assets/
└── tools/
    ├── merge-pdf.html
    ├── split-pdf.html
    ├── extract-pages.html
    ├── remove-pages.html
    ├── rotate-pdf.html
    ├── jpg-to-pdf.html
    ├── pdf-info.html
    ├── compress-pdf.html
    ├── pdf-to-jpg.html
    ├── watermark-pdf.html
    ├── page-numbers.html
    ├── protect-pdf.html
    └── image-builder.html
```

## What works in this first static release

- Screenshot-inspired homepage
- Merge PDF in browser
- Split/extract selected pages
- Extract Pages page
- Remove selected pages
- Rotate PDF
- JPG/PNG image -> PDF
- PDF information/page count
- Image Builder with:
  - brightness
  - contrast
  - saturation
  - rotation
  - grayscale
  - PNG/JPG/WEBP export

PDF processing uses `pdf-lib` from jsDelivr. This means the first load needs internet access.

## Advanced tools

Compression, PDF -> JPG, watermark, page numbers and password protection are intentionally placeholder pages in this first release. They should be implemented with the appropriate browser libraries or Cloudflare Workers/Pages Functions when we build the production version.

Do not advertise a placeholder as a completed feature.

# GitHub setup

1. Go to GitHub and create a new repository.
2. Suggested name:

```text
pdf-image-builder
```

3. Upload all files from this project, keeping the folders.
4. Make sure `index.html` is at the repository root.

Cloudflare Pages can connect directly to GitHub and automatically deploy on pushes.

# Cloudflare Pages setup

In Cloudflare:

1. Open **Workers & Pages**.
2. Choose **Create application**.
3. Choose **Pages**.
4. Choose **Import an existing Git repository**.
5. Connect GitHub.
6. Select your `pdf-image-builder` repository.
7. Production branch: `main`
8. Build command:

```text
exit 0
```

9. Build output directory:

```text
.
```

10. Deploy.

Because this is a static HTML project, no framework is required.

After deployment Cloudflare gives you a `*.pages.dev` address.

# Updating the website

Edit files in GitHub, commit the changes, and Cloudflare Pages automatically redeploys the connected repository.

# Custom domain

After the site works on `pages.dev`, connect your own domain in Cloudflare Pages.

# Production roadmap

Phase 1:
- Complete the remaining PDF tools
- Add PDF preview
- Better mobile UI
- Add file/page limits

Phase 2:
- OCR
- PDF -> Word
- PDF -> Excel
- PDF -> PowerPoint
- AI summarizer
- Translation

Phase 3:
- Cloudflare Workers/Pages Functions for operations that are too heavy for the browser
- R2 temporary file storage
- automatic deletion
- rate limiting
- abuse protection

Phase 4:
- accounts
- usage quotas
- subscriptions
- analytics
- ads

Security:
- Never put API keys in frontend JavaScript.
- Never trust a file extension alone.
- Do not permanently store private documents.
- Add privacy policy and terms before public launch.
