# CLAUDE.md - Cartucheras por Mayor

Site-specific documentation for **cartucheraspormayor.com.ar** landing page.

---

## Project Overview

This is **Domain 2** of the Borisiuk multi-domain landing page system - a Next.js-based landing page for Natacha Borysiuk's industrial bag manufacturing business, focusing on wholesale pencil cases (cartucheras por mayor).

**Business**: Fábrica de mochilas, bolsos, cartucheras industriales
**Instagram**: @fabricamosmochilas
**Contact**: Natacha Borysiuk - (011) 61030569 - natacha.borysiuk@gmail.com
**Domain**: cartucheraspormayor.com.ar
**SEO Focus**: Cartucheras por mayor, cartucheras personalizadas, cartucheras con logo

---

## Tech Stack

**Framework**: Next.js 16.0.0 (App Router with Turbopack)
**React**: 19.2.0
**TypeScript**: 5.9.3
**Node.js**: >=20.0.0
**Package Manager**: pnpm >=9.0.0
**Deployment**: Vercel Free Tier

**Key Features**:
- App Router architecture (no pages directory)
- Server-side and client-side rendering
- API routes for Instagram integration
- Smart hashtag grouping algorithm
- SEO-optimized with metadata API
- Static generation for hero/content sections

---

## Repository Structure

```
cartucheraspormayor-com-ar/
├── app/
│   ├── layout.tsx                      # Root layout with metadata
│   ├── page.tsx                        # Home page (main content)
│   ├── globals.css                     # All styles (single file)
│   ├── components/
│   │   └── InstagramFeedSection.tsx    # Instagram feed with smart grouping
│   └── api/
│       └── instagram/
│           ├── route.ts                # /api/instagram?hashtag=xxx
│           └── all/route.ts            # /api/instagram/all
│
├── lib/
│   ├── instagram.ts                    # Instagram API client
│   └── hashtag-grouper.ts              # Smart hashtag grouping algorithm
│
├── public/                             # Static assets
├── .env.local                          # Environment variables (NOT committed)
├── next.config.js                      # Next.js configuration
├── tsconfig.json                       # TypeScript configuration
├── package.json                        # Dependencies and scripts
└── pnpm-lock.yaml                      # Lock file
```

---

## Development Setup

### Prerequisites

- Node.js >=20.0.0
- pnpm >=9.0.0

### Installation

```bash
# Install dependencies
pnpm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your values:
#   NEXT_PUBLIC_INSTAGRAM_API_URL=https://boris.pensanta.com
#   NEXT_PUBLIC_INSTAGRAM_ACCOUNT=fabricamosmochilas
```

### Development Commands

```bash
# Development server (port 3201)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

**Development URL**: http://localhost:3201
**Port**: 3201 (configured in `package.json` script)

---

## Architecture

### Page Structure

**Single Page Application** with sections:

1. **Hero Section** - Gradient title, CTA buttons, floating cards
2. **Features Section** - 4 key features (Fábrica Directa, Personalizables, Stock, Envíos)
3. **Instagram Gallery Section** - Smart-grouped product carousel
4. **Products Section** - 3 product cards (Escolares, Empresariales, Personalizadas)
5. **CTA Section** - Contact form with WhatsApp/Email
6. **Footer** - Links and copyright

### Instagram Integration

**Flow**:
1. **Frontend** (`InstagramFeedSection.tsx`) fetches from `/api/instagram/all`
2. **API Route** (`app/api/instagram/all/route.ts`) proxies to EC2 server
3. **EC2 Server** (`boris.pensanta.com:3000`) fetches from Instagram Graph API
4. **Smart Grouping** (`lib/hashtag-grouper.ts`) organizes posts by category

**Smart Grouping Algorithm** (`lib/hashtag-grouper.ts:248`):
- Extracts hashtags from post captions
- Assigns each post to PRIMARY category (mochilas, cartucheras, botineros, etc.)
- Groups posts by category root (min 4 posts, max 15 posts)
- Splits large groups into sub-categories
- Merges small groups into "Otros"
- Returns groups sorted by popularity

**Example Groups**:
- `#mochilas #mochilasconlogo #mochilaspersonalizadas` (12 posts)
- `#cartucheras #cartucheraspormayor #cartucherasconlogo` (8 posts)
- `#botineros #botinerosconlogo` (6 posts)

### API Routes

**`GET /api/instagram?hashtag=xxx`** (`app/api/instagram/route.ts`)
- Fetches posts filtered by hashtag
- Proxies to EC2 server: `${NEXT_PUBLIC_INSTAGRAM_API_URL}/api/instagram/${hashtag}`
- Returns: `{ success: true, data: [...], hashtag, count }`

**`GET /api/instagram/all`** (`app/api/instagram/all/route.ts`)
- Fetches all posts (no filter)
- Used by `InstagramFeedSection` for smart grouping
- Returns: `{ success: true, data: [...] }`

Both routes use `export const dynamic = 'force-dynamic'` to prevent caching.

### Environment Variables

**`.env.local`** (NOT committed):
```env
NEXT_PUBLIC_INSTAGRAM_API_URL=https://boris.pensanta.com
NEXT_PUBLIC_INSTAGRAM_ACCOUNT=fabricamosmochilas
```

- `NEXT_PUBLIC_*` prefix required for client-side access
- API URL points to centralized Instagram server on EC2
- See `lib/instagram.ts:4` for usage

---

## Styling

**Architecture**: All styles in single file `app/globals.css` (17,719 bytes)

**Key Patterns**:
- CSS custom properties (variables) in `:root`
- Mobile-first responsive design
- Gradient text effects (`.gradient-text`, `.outline-text`)
- Floating card animations (`.floating-card`)
- Wave divider SVG background
- Grid layouts for features/products
- Instagram carousel with hover effects

**Color Scheme**:
```css
:root {
  --primary: #6366f1;      /* Indigo */
  --secondary: #ec4899;    /* Pink */
  --accent: #8b5cf6;       /* Purple */
  --background: #0a0a0a;   /* Dark */
  --text: #e5e7eb;         /* Light gray */
}
```

**No CSS Modules**: All styles are global, using semantic class names like `.hero`, `.features-grid`, `.product-card`.

---

## SEO Configuration

**Metadata** (`app/layout.tsx:4-26`):
- Title: "Cartucheras por Mayor Argentina | Fábrica de Cartucheras Personalizadas"
- Description: "Cartucheras por mayor para escuelas, empresas y organizaciones..."
- Keywords: cartucheras por mayor, cartucheras personalizadas, cartucheras con logo, etc.
- Open Graph tags for social sharing
- Locale: es_AR

**Static Generation**:
- Home page is pre-rendered at build time
- API routes are dynamic (force-dynamic)
- Result: Fast first load + SEO-friendly HTML

---

## Content Customization

### Update SEO Metadata

Edit `app/layout.tsx:4-26`:
```typescript
export const metadata: Metadata = {
  title: 'Your Custom Title',
  description: 'Your custom description',
  keywords: ['keyword1', 'keyword2'],
  // ... etc
};
```

### Update Hero Section

Edit `app/page.tsx:6-44`:
```tsx
<h1>
  <span className="gradient-text">Cartucheras</span>
  <br />
  <span className="outline-text">por Mayor</span>
</h1>
```

### Update Contact Links

**WhatsApp** (`app/page.tsx:20`, `149`):
```tsx
<a href="https://wa.me/541156567373">
```

**Email** (`app/page.tsx:152`, `172`):
```tsx
<a href="mailto:fabricamosmochilas@gmail.com">
```

**Instagram** (`app/page.tsx:81`, `173`):
```tsx
<a href="https://www.instagram.com/fabricamosmochilas/">
```

### Add/Remove Product Categories

**Hashtag Grouper** (`lib/hashtag-grouper.ts:36-52`):
```typescript
const CATEGORY_ROOTS = [
  'mochilas',
  'cartucheras',
  'botineros',
  // Add new categories here
];
```

---

## Deployment (Vercel)

### Initial Deployment

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/USERNAME/cartucheraspormayor-com-ar
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Login to [vercel.com](https://vercel.com)
   - New Project → Import from GitHub
   - Select `cartucheraspormayor-com-ar` repo
   - Framework Preset: **Next.js** (auto-detected)
   - Add environment variables:
     - `NEXT_PUBLIC_INSTAGRAM_API_URL` = `https://boris.pensanta.com`
     - `NEXT_PUBLIC_INSTAGRAM_ACCOUNT` = `fabricamosmochilas`
   - Deploy

3. **Configure Custom Domain**:
   - Vercel → Project Settings → Domains
   - Add `cartucheraspormayor.com.ar`
   - Update DNS with CNAME record to Vercel

### Continuous Deployment

Every `git push` to `main` triggers automatic Vercel rebuild and deployment.

**Build Command**: `next build` (default)
**Output Directory**: `.next` (default)
**Install Command**: `pnpm install` (auto-detected from `pnpm-lock.yaml`)

---

## Key Files Reference

### `app/layout.tsx`
- Root layout component
- SEO metadata configuration
- HTML structure (`<html>`, `<body>`)
- Global CSS import

### `app/page.tsx`
- Home page content
- All sections (Hero, Features, Instagram, Products, CTA, Footer)
- WhatsApp/Email links
- Static content for SEO

### `app/components/InstagramFeedSection.tsx`
- Client component (`'use client'`)
- Fetches posts from `/api/instagram/all`
- Applies smart grouping algorithm
- Renders grouped carousel
- Loading/error states

### `lib/hashtag-grouper.ts`
- Smart hashtag grouping algorithm (330 lines)
- Category detection (36 product categories)
- Post assignment (primary category only)
- Size constraints (min 4, max 15 posts per group)
- Group splitting/merging logic

### `lib/instagram.ts`
- Instagram API client
- Fetch functions for hashtag filtering
- Proxy to EC2 server (`boris.pensanta.com:3000`)
- Error handling and logging

### `app/globals.css`
- All styles (single file, 17.7KB)
- CSS custom properties
- Component styles
- Animations and gradients
- Responsive breakpoints

---

## Common Tasks

### Add New Product Category

1. **Add category to hashtag grouper** (`lib/hashtag-grouper.ts:36`):
   ```typescript
   const CATEGORY_ROOTS = [
     // ... existing
     'newcategory',
   ];
   ```

2. **Instagram posts must use hashtag** (e.g., `#newcategory` or `#newcategoryconlogo`)

3. **Rebuild and redeploy** - Vercel auto-deploys on push

### Change WhatsApp Number

**Find and replace** `541156567373` with new number in:
- `app/page.tsx:20` (Hero CTA)
- `app/page.tsx:104` (Product 1)
- `app/page.tsx:119` (Product 2)
- `app/page.tsx:134` (Product 3)
- `app/page.tsx:149` (Footer CTA)
- `app/page.tsx:170` (Footer link)

### Update Instagram Account

1. **Environment variable** (`.env.local` + Vercel):
   ```env
   NEXT_PUBLIC_INSTAGRAM_ACCOUNT=newaccount
   ```

2. **EC2 server** (`borisiuk-instagram-api/.env`):
   ```env
   INSTAGRAM_ACCOUNT_ID=17841400123456789
   INSTAGRAM_ACCESS_TOKEN=IGQWRNa2xsZAWc3...
   ```

3. **Restart EC2 service**:
   ```bash
   sudo systemctl restart instagram-api
   ```

### Debug Instagram Feed Not Loading

1. **Check API server**:
   ```bash
   curl https://boris.pensanta.com/health
   curl https://boris.pensanta.com/api/instagram
   ```

2. **Check browser console** (F12) for errors

3. **Verify environment variables**:
   - Vercel → Project Settings → Environment Variables
   - Ensure `NEXT_PUBLIC_INSTAGRAM_API_URL` is set

4. **Check API route**:
   - Visit `https://cartucheraspormayor.com.ar/api/instagram/all`
   - Should return JSON with posts

---

## Performance Notes

**Build Output** (from deployment logs):
```
Route (app)
┌ ○ /                    # Static (pre-rendered)
├ ○ /_not-found         # Static
├ ƒ /api/instagram      # Dynamic (server-rendered)
└ ƒ /api/instagram/all  # Dynamic (server-rendered)
```

**Static (○)**: Pre-rendered at build time, cached by CDN
**Dynamic (ƒ)**: Server-rendered on demand, not cached

**Optimization**:
- Hero/content sections are static (fast first load)
- Instagram feed loads client-side (progressive enhancement)
- Images use Next.js `<Image>` component (automatic optimization)
- Remote patterns allow Instagram CDN (`*.cdninstagram.com`)

---

## Troubleshooting

### Build Error: "Cannot find module './ComponentName'"

**Cause**: Missing import or file
**Solution**: Check import path and file existence

**Example** (fixed in commit `52d4f06`):
```typescript
// ❌ WRONG - component doesn't exist
import InstagramCarousel from './InstagramCarousel';

// ✅ CORRECT - remove unused import
// (component is now inline in InstagramFeedSection)
```

### TypeScript Error: "Property 'x' does not exist"

**Cause**: Missing type definition
**Solution**: Add type to `lib/instagram.ts` or import from there

**Example**:
```typescript
import type { InstagramPost } from '@/lib/instagram';
```

### Instagram Feed Shows "Cargando productos..." Forever

**Causes**:
1. EC2 server down
2. CORS error
3. API route failing
4. Network timeout

**Solution**:
1. Check EC2 server status: `curl https://boris.pensanta.com/health`
2. Check browser console for errors
3. Check API route: `/api/instagram/all`
4. Verify environment variables

---

## Related Documentation

- **Root Project**: `/borisiuk/CLAUDE.md` - Multi-domain architecture overview
- **Instagram API**: `/borisiuk-instagram-api/README.md` - EC2 server setup and maintenance
- **Project Plan**: `/borisiuk/boris-plan.yaml` - Complete implementation plan
- **SEO Keywords**: `/borisiuk/projectBorisiuk.yaml` - Client requirements and keyword list

---

## Notes

**Differences from Root CLAUDE.md**:
- Root doc describes **Vite + React Router** architecture
- This domain uses **Next.js 16 + App Router** instead
- Instagram integration remains the same (EC2 proxy)
- SEO approach differs (Next.js metadata API vs. manual meta tags)

**Why Next.js?**:
- Better SEO with server-side rendering
- API routes simplify Instagram proxy
- Automatic image optimization
- Vercel deployment integration
- Modern App Router architecture

**Port Assignment**: 3201 (local dev only)
**Production URL**: https://cartucheraspormayor.com.ar
