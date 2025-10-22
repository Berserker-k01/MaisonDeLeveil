# La Maison de l'Éveil — Site Web

Site vitrine construit avec Vite + React + TypeScript et TailwindCSS.

## Stack

- **Vite + React + TypeScript** (`vite`, `@vitejs/plugin-react`)
- **TailwindCSS** (design system couleurs et typographies personnalisées)
- **Icônes**: `lucide-react`
- Optionnel: `@supabase/supabase-js` (prévu si besoin d'API/BDD/Storage)

## Prérequis

- Node.js 18+ recommandé (LTS)
- npm (fourni avec Node)

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Ouvrir l'URL indiquée par Vite (ex: http://localhost:5173).

## Build de production

```bash
npm run build
```

Prévisualiser le build localement:

```bash
npm run preview
```

## Scripts utiles

- `npm run dev` — serveur de dev Vite
- `npm run build` — build de prod
- `npm run preview` — prévisualisation du build
- `npm run lint` — linting ESLint
- `npm run typecheck` — vérification TypeScript

## Structure du projet

```
.
├─ index.html                 # Entrée HTML (meta SEO, favicon)
├─ src/
│  ├─ main.tsx                # Bootstrap React
│  ├─ App.tsx                 # Composition des sections
│  ├─ index.css               # Tailwind + styles globaux
│  └─ components/             # Sections UI
│     ├─ Header.tsx           # En-tête avec logo
│     ├─ Hero.tsx             # Bandeau héro avec image
│     ├─ Mission.tsx          # Mission
│     ├─ Testimonials.tsx     # Témoignages (avatars réels)
│     ├─ About.tsx            # À propos (icônes, pas d’emojis)
│     ├─ Actions.tsx          # Actions + galerie d’images
│     ├─ JoinUs.tsx           # Nous rejoindre
│     └─ Contact.tsx          # Contact
├─ tailwind.config.js         # Thème Tailwind (couleurs/typos)
├─ vite.config.ts             # Config Vite
├─ package.json               # Dépendances et scripts
└─ logorvuv2.png              # Logo + favicon
```

## Assets & branding

- Le logo et favicon utilisent `logorvuv2.png` à la racine.
- Des images libres (Unsplash) sont utilisées par défaut dans `Hero` et la galerie.
  Remplacez-les par vos visuels dans `src/components/Hero.tsx` et `src/components/Actions.tsx`.

## Variables d’environnement (optionnel — Supabase)

Si vous utilisez Supabase, créez un fichier `.env` à la racine et définissez:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Puis initialisez le client côté code avant usage.

## Déploiement

Le site fonctionne très bien sur Netlify, Vercel ou GitHub Pages.
- Build: `npm run build`
- Dossier à publier: `dist/`

Pour une configuration spécifique (routes, headers, preview), voir la documentation de l’hébergeur choisi.
