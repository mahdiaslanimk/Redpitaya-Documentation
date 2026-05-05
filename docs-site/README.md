# Red Pitaya Documentation — Next.js Site

A modern, fast documentation website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** to replace the Sphinx/ReadTheDocs setup.

## Features

- 🚀 **Next.js 14** with App Router for fast, SEO-friendly pages
- 🎨 **Tailwind CSS** with dark/light theme toggle
- 📚 **Markdown content** with syntax highlighting
- 🔍 **Client-side search** across all documentation pages
- 📱 **Responsive design** with collapsible mobile sidebar
- 📖 **Table of contents** for each documentation page
- 🧭 **Breadcrumb navigation**
- ⚡ **Static generation** for optimal performance

## Project Structure

```
docs-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navbar and footer
│   │   ├── page.tsx            # Homepage with hero section
│   │   └── docs/
│   │       ├── layout.tsx      # Docs layout with sidebar
│   │       └── [[...slug]]/
│   │           └── page.tsx    # Dynamic docs page
│   ├── components/
│   │   ├── Navbar.tsx          # Top navigation bar
│   │   ├── Sidebar.tsx         # Desktop left sidebar
│   │   ├── MobileSidebar.tsx   # Mobile drawer sidebar
│   │   ├── TableOfContents.tsx # Right-side TOC
│   │   ├── Breadcrumb.tsx      # Breadcrumb navigation
│   │   ├── SearchModal.tsx     # Search dialog
│   │   └── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── content/
│   │   └── docs/               # Markdown documentation files
│   │       ├── intro.md
│   │       ├── quick-start/
│   │       ├── apps-features/
│   │       ├── developer-guide/
│   │       └── customization/
│   └── lib/
│       ├── navigation.ts       # Navigation structure
│       └── toc.ts              # Table of contents extractor
├── public/                     # Static assets
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json                 # Vercel deployment config
```

## Getting Started

```bash
# Install dependencies
cd docs-site
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Adding Documentation

1. Create a new `.md` file in `src/content/docs/`
2. Add frontmatter with `title` and `description`
3. Add the page to `src/lib/navigation.ts`

Example:

```markdown
---
title: My New Page
description: Description of this page.
---

# My New Page

Content goes here...
```

## Deployment

### Vercel (Recommended)

1. Connect the repository to Vercel
2. Set the **Root Directory** to `docs-site`
3. Deploy automatically on every push

### Manual

```bash
npm run build
npm run start
```

## Migrating Content from Sphinx

RST files from the original Sphinx documentation can be converted to Markdown:

```bash
# Using pandoc
pandoc input.rst -o output.md
```

Then place converted files in `src/content/docs/` and update `src/lib/navigation.ts`.

