
# File Structure

/Users/bikrambrar/Documents/Code/bikramweb
├── app
│   ├── projects
│   │   ├── repo-prompter
│   │   │   └── page.tsx
│   │   ├── mysti-health
│   │   │   └── page.tsx
│   │   ├── dayplan-app
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── rss
│   │   └── route.ts
│   ├── about
│   │   └── page.tsx
│   ├── blog
│   │   ├── posts
│   │   │   ├── spaces-vs-tabs.mdx
│   │   │   ├── nextjs15.mdx
│   │   │   ├── vim.mdx
│   │   │   └── static-typing.mdx
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   ├── utils.ts
│   │   └── page.tsx
│   ├── components
│   │   ├── nav.tsx          <-- Updated with ThemeToggle
│   │   ├── mdx.tsx
│   │   ├── experience-timeline.tsx  <-- Enhanced with GSAP animations
│   │   ├── footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── HeroSection.tsx  <-- Updated to include a 3D Canvas & Contact button
│   │   ├── My3DCanvas.tsx   <-- NEW React Three Fiber component
│   │   ├── ContactModal.tsx <-- NEW Radix UI Dialog
│   │   └── posts.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── og
│   │   └── route.tsx
│   ├── travel
│   │   └── page.tsx
│   ├── robots.ts
│   ├── global.css
│   ├── InteractiveGrid.tsx
│   ├── sitemap.ts
│   ├── layout.tsx
│   ├── page.tsx            <-- Uses Framer Motion fade-in
│   └── not-found.tsx
├── pnpm-lock.yaml
├── tailwind.config.js
├── SYMBOLS.md
├── next.config.js
├── README.md
├── package.json   <-- Updated with R3F, Radix UI
├── tsconfig.json
└── postcss.config.js