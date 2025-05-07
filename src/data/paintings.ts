export type Painting = {
  id: string;
  title: string;
  image: string;
  medium: string;
  size: string;
  price: string;
  available: boolean;
  description: string;
};

export const paintings: Painting[] = [
  {
    id: "sunset-bliss",
    title: "Sunset Bliss",
    image: "/artworks/sunset-bliss.jpg",
    medium: "Oil on Canvas",
    size: "24x36 in",
    price: "$500",
    available: true,
    description: "A vibrant sunset over tranquil waters.",
  },
  {
    id: "forest-morning",
    title: "Forest Morning",
    image: "/artworks/forest-morning.jpg",
    medium: "Acrylic on Canvas",
    size: "18x24 in",
    price: "$350",
    available: false,
    description: "Soft light filtering through a misty forest.",
  },
];
