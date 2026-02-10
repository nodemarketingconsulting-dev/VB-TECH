# VB Tech - Institutional Website

## Overview

VB Tech is a modern institutional landing page and business website for a Brazilian IT management company (VB Tech). The site showcases IT services including infrastructure management, network security, cloud solutions, and IT outsourcing. It features a dark tech aesthetic with blue accent colors (#2DA9E1), glassmorphism effects, and smooth animations.

The application includes:
- A public-facing landing page with multiple sections (Hero, About, Solutions, Benefits, etc.)
- A contact form that stores leads in a PostgreSQL database
- A password-protected admin panel for viewing/managing leads
- A proposal creator/viewer system (stored in localStorage)
- A "Client Area" placeholder page
- A privacy policy page (LGPD compliance for Brazil)
- Cookie consent banner
- WhatsApp integration for customer contact

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript (not Next.js despite initial prompt — uses Vite instead)
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: Tailwind CSS with CSS variables for theming, dark mode by default
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives
- **Animations**: Framer Motion for scroll-based reveal animations and transitions
- **State Management**: TanStack React Query for server state, React hooks for local state
- **Forms**: React Hook Form with Zod validation
- **Carousel**: Embla Carousel (used for client logos)
- **Fonts**: Inter (body text) and Space Grotesk (headings), loaded via Google Fonts
- **Build Tool**: Vite with path aliases (`@/` → `client/src/`, `@shared/` → `shared/`)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript, executed with tsx
- **API Pattern**: RESTful JSON API under `/api/` prefix
- **Build**: esbuild for server bundling, Vite for client bundling (orchestrated by `script/build.ts`)
- **Development**: Vite dev server proxied through Express with HMR support
- **Production**: Static files served from `dist/public`, server runs from `dist/index.cjs`

### API Routes
- `POST /api/leads` — Create a new lead from the contact form
- `POST /api/admin/login` — Admin authentication (simple password check)
- `GET /api/admin/leads` — Fetch all leads (requires `x-admin-password` header)
- `DELETE /api/admin/leads/:id` — Delete a lead (requires admin password)

### Authentication
- Admin access uses a simple password-based system (no sessions/JWT for admin)
- Password is checked via `ADMIN_PASSWORD` environment variable (falls back to a hardcoded default)
- Admin password is sent in the `x-admin-password` request header for protected routes

### Data Storage
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema** (in `shared/schema.ts`):
  - `users` table: id (UUID), username, password
  - `leads` table: id (serial), name, email, phone, message, source, created_at
- **Migrations**: Managed via `drizzle-kit push` command
- **Proposals**: Stored in browser localStorage (not in the database)

### Project Structure
```
├── client/               # Frontend application
│   ├── index.html        # HTML entry point
│   ├── public/           # Static assets (images, logos)
│   └── src/
│       ├── components/
│       │   ├── layout/   # Page sections (Header, Hero, About, Contact, etc.)
│       │   └── ui/       # shadcn/ui components
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities (queryClient, motion configs, cn helper)
│       └── pages/        # Route pages (Home, ClientArea, LeadsAdmin, etc.)
├── server/               # Backend application
│   ├── index.ts          # Express app setup and server start
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Database access layer (IStorage interface + DatabaseStorage)
│   ├── db.ts             # Drizzle + pg pool setup
│   ├── vite.ts           # Vite dev server integration
│   └── static.ts         # Production static file serving
├── shared/               # Shared between client and server
│   └── schema.ts         # Drizzle schema + Zod validators + TypeScript types
├── script/
│   └── build.ts          # Production build script
└── attached_assets/      # Design specs and reference documents
```

### Key Design Decisions

1. **Monorepo with shared schema**: The `shared/` directory allows both client and server to use the same TypeScript types and Zod validators, ensuring type safety across the stack.

2. **Storage abstraction**: The `IStorage` interface in `server/storage.ts` abstracts database operations, making it possible to swap implementations. Currently uses `DatabaseStorage` with Drizzle/PostgreSQL.

3. **Dark theme by default**: The site uses `class="dark"` on the HTML element with CSS variables for the dark tech aesthetic. The color scheme centers on black backgrounds with #2DA9E1 (HSL 199 76% 53%) as the primary accent.

4. **Component-based sections**: Each landing page section is its own component in `components/layout/`, making the Home page a simple composition of sections.

## External Dependencies

### Required Services
- **PostgreSQL Database**: Required via `DATABASE_URL` environment variable. Used for storing leads and user data.

### Third-Party Integrations
- **WhatsApp Business**: Contact form and floating button redirect users to WhatsApp (`wa.me/551142570789`) with pre-filled messages
- **Google Fonts**: Inter and Space Grotesk fonts loaded from `fonts.googleapis.com`
- **LinkedIn**: Footer links to company LinkedIn page (`br.linkedin.com/company/vbtech-ti`)

### Environment Variables
- `DATABASE_URL` (required) — PostgreSQL connection string
- `ADMIN_PASSWORD` (optional) — Password for admin panel access
- `NODE_ENV` — Controls development vs production mode

### Key NPM Packages
- `drizzle-orm` + `drizzle-kit` — Database ORM and migration tooling
- `express` — HTTP server framework
- `@tanstack/react-query` — Server state management
- `framer-motion` — Animation library
- `wouter` — Client-side routing
- `react-hook-form` + `zod` — Form handling and validation
- `embla-carousel-react` — Carousel component
- `shadcn/ui` components (Radix UI based)