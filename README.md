# Paradise Nursery Shopping Application

Paradise Nursery is a responsive React shopping experience for browsing curated houseplants, adding them to a cart, and adjusting quantities before checkout.

## Features

- Immersive landing page with company information and a clear call to action
- 18 unique houseplants organized into three collections
- Product thumbnails, names, prices, light requirements, and add-to-cart controls
- Shared navigation with a live cart quantity badge
- Redux Toolkit cart state with add, increase, decrease, and remove actions
- Per-item totals, subtotal, shipping, and complete order total
- Responsive layouts for desktop, tablet, and mobile
- GitHub Pages-compatible routing through HashRouter

## Tech stack

- React 18
- Redux Toolkit and React Redux
- React Router
- Vite

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Project structure

```text
src/
├── AboutUs.jsx
├── App.css
├── App.jsx
├── CartItem.jsx
├── CartSlice.jsx
├── Header.jsx
├── ProductList.jsx
├── data/plants.js
├── main.jsx
└── store.js
```

## Deployment

The production build is compatible with GitHub Pages. The Vite base path is relative and client-side routes use hash routing so direct navigation works correctly on a static host.
