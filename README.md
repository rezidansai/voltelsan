# Voltelsan

Modern, high-performance web application engineered for Voltelsan.

## 🚀 Overview

Voltelsan delivers intelligent systems, advanced digital experiences, and enterprise-grade solutions built with precision and modern web standards.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS with modern dark theme & glassmorphism
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend / Database**: [Supabase](https://supabase.com/) integration
- **Routing**: [React Router DOM v6](https://reactrouter.com/)

## 📂 Project Structure

```
voltelsan/
├── public/                 # Static assets & brand logos
│   └── voltelsan-logo.png
├── src/
│   ├── assets/             # Media and graphic assets
│   ├── components/         # Reusable UI & section components
│   │   ├── site/           # Main landing page sections (Hero, Navbar, Footer, etc.)
│   │   └── ui/             # Design system components (Radix/Shadcn)
│   ├── pages/              # Main route views
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utilities and API clients
├── index.html              # HTML entry point with Voltelsan meta tags
├── package.json            # Dependencies and scripts
└── vite.config.ts          # Vite build configuration
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18.0 or higher recommended)
- npm or pnpm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rezidansai/voltelsan.git
   cd voltelsan
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment Setup:
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 📜 License

Private & Proprietary — © Voltelsan. All rights reserved.
