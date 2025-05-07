import GalleryGrid from "../components/GalleryGrid";
import { paintings } from "../data/paintings";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Palette Dreams</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the portfolio and shop of a modern artist. Explore original paintings and bring art into your space.
        </p>
        <div className="h-64 w-full bg-gray-200 flex items-center justify-center rounded mb-8">
          <span className="text-2xl text-gray-400">[Hero Image Placeholder]</span>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Paintings</h2>
        <GalleryGrid paintings={paintings.slice(0, 2)} />
      </section>
    </div>
  );
}
