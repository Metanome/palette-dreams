import GalleryGrid from "../../components/GalleryGrid";
import { paintings } from "../../data/paintings";

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
      <GalleryGrid paintings={paintings} />
    </div>
  );
}
