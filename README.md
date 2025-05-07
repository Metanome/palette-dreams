# Palette Dreams

Palette Dreams is a modern artist portfolio and art shop built with Next.js, TypeScript, and Tailwind CSS.

## Features
- Modern, clean homepage with hero section, introduction, and featured paintings
- Gallery page displaying paintings in a responsive grid (image, title, medium, size, price, availability)
- Individual painting detail pages (coming soon)
- About and Contact pages (coming soon)
- Navigation bar and footer with social media links
- Responsive design styled with Tailwind CSS
- Images stored in `/public/artworks` (add your own artwork images)
- Painting data managed via a simple TypeScript array for easy extension

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure
```
src/
  app/
    layout.tsx      # App layout with Navbar and Footer
    page.tsx        # Homepage
    gallery/
      page.tsx      # Gallery page
  components/
    Navbar.tsx      # Navigation bar
    Footer.tsx      # Footer with social links
    PaintingCard.tsx# Painting card component
    GalleryGrid.tsx # Gallery grid component
  data/
    paintings.ts    # Painting data array
public/
  artworks/         # Place your artwork images here
```

## Customization
- Add your artwork images to `public/artworks` and update `src/data/paintings.ts`.
- Extend components or add new pages (About, Contact, Painting details, etc.).

## Roadmap
- [ ] Painting detail pages with Stripe checkout
- [ ] About and Contact pages
- [ ] Newsletter signup and blog (optional)
- [ ] Commission request form (optional)

## License

This project is licensed under the GNU General Public License v3.0.

See [LICENSE](https://github.com/Metanome/palette-dreams/blob/main/LICENSE) for details.

---

This project was bootstrapped with [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
