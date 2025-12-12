# Frontend - Recipe Sharing Platform

Next.js 14 application with Tailwind CSS for the Recipe Sharing Platform.

## Features

- Server-side rendering with Next.js 14
- Modern, responsive UI with Tailwind CSS
- JWT Authentication
- Recipe browsing with filters
- Search functionality
- Recipe submission form
- Dynamic routing

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env.local` file (already included):

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Run

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Pages

- `/` - Homepage with hero, categories, and popular recipes
- `/recipes` - Browse all recipes with filters
- `/recipes/[id]` - Recipe detail page
- `/submit` - Submit new recipe (protected)
- `/login` - User login
- `/register` - User registration

## Components

- `Header` - Navigation with auth state
- `Footer` - Site footer with links
- `Hero` - Homepage hero section
- `FeaturedCategories` - Category grid
- `PopularRecipes` - Featured recipe section
- `RecipeCard` - Recipe preview card
- `RecipeFilters` - Category and time filters
- `SearchBar` - Search input component

## Context

- `AuthContext` - Global authentication state management

## API Integration

All API calls are centralized in `lib/api.js`:

- `login(email, password)`
- `register(name, email, password)`
- `getRecipes(filters)`
- `getRecipeById(id)`
- `createRecipe(recipeData)`
- `deleteRecipe(id)`

## Technologies

- Next.js 14
- React 18
- Tailwind CSS
- Axios
- React Icons

## Styling

Custom Tailwind configuration with:
- Primary color palette (orange)
- Secondary color palette (green)
- Custom components (buttons, cards, inputs)
- Responsive breakpoints
- Custom scrollbar

## Project Structure

```
frontend/
├── app/
│   ├── layout.js              # Root layout
│   ├── page.js                # Homepage
│   ├── globals.css            # Global styles
│   ├── recipes/
│   │   ├── page.js            # Recipe list
│   │   └── [id]/page.js       # Recipe detail
│   ├── submit/page.js         # Submit recipe
│   ├── login/page.js          # Login page
│   └── register/page.js       # Register page
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── FeaturedCategories.js
│   ├── PopularRecipes.js
│   ├── RecipeCard.js
│   ├── RecipeFilters.js
│   └── SearchBar.js
├── context/
│   └── AuthContext.js         # Auth state management
├── lib/
│   └── api.js                 # API client
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Development

The app uses Next.js 14 App Router with:
- Server Components by default
- Client Components where needed ('use client' directive)
- Dynamic routing for recipe pages
- Image optimization with next/image

## Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are fully responsive and tested across devices.
