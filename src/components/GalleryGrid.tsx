import React from "react";
import PaintingCard from "./PaintingCard";
import type { Painting } from "../data/paintings";

const GalleryGrid = ({ paintings }: { paintings: Painting[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {paintings.map((painting) => (
      <PaintingCard key={painting.id} painting={painting} />
    ))}
  </div>
);

export default GalleryGrid;
