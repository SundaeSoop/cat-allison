export type WatercolorPiece = {
  id: string;        // slug used in URL, must match the link + [id] route
  title: string;
  image: string;     // /public path
  price: number;     // dollars
  medium: string;
  size: string;
  year: string;
  status: "Available" | "Sold" | "NFS";
  description?: string;
};

export const WATERCOLOR_PIECES: WatercolorPiece[] = [
  {
    id: "amber-glow",
    title: "Amber Glow",
    image: "/watercolor/amber-glow.jpg",
    price: 250,
    medium: "Watercolor on paper",
    size: `9"×12"`,
    year: "2026",
    status: "Available",
    description: "Warm afternoon light caught in motion — this one started as a color study and became something more.",
  },
  {
    id: "floral-gaze",
    title: "Floral Gaze",
    image: "/watercolor/floral-gaze.jpg",
    price: 250,
    medium: "Watercolor on paper",
    size: `9"×12"`,
    year: "2026",
    status: "Available",
    description: "A face half-hidden behind petals, where the flower becomes the focus and the figure becomes the feeling.",
  },
  {
    id: "held-in-bloom",
    title: "Held in Bloom",
    image: "/watercolor/held-in-bloom.jpg",
    price: 250,
    medium: "Watercolor on paper",
    size: `9"×12"`,
    year: "2026",
    status: "Available",
    description: "There's something about the weight of holding flowers that feels like holding a secret.",
  },
  {
    id: "happy-mistake",
    title: "Happy Mistake",
    image: "/watercolor/happy-mistake.jpg",
    price: 250,
    medium: "Watercolor on paper",
    size: `9"×12"`,
    year: "2026",
    status: "Available",
    description: "A palette that wasn't planned, a composition that emerged on its own. Some of the best work starts as a mistake.",
  },
  {
    id: "happy-mistake02",
    title: "Happy Mistake II",
    image: "/watercolor/happy-mistake02.jpg",
    price: 250,
    medium: "Watercolor on paper",
    size: `9"×12"`,
    year: "2026",
    status: "Available",
    description: "A follow-up to Happy Mistake — same spirit, different outcome.",
  },
  {
    id: "where-the-light-settles",
    title: "Where the Light Settles",
    image: "/watercolor/where-the-light-settles.jpg",
    price: 250,
    medium: "Watercolor on paper",
    size: `9"×12"`,
    year: "2026",
    status: "Available",
    description: "The moment just after the light shifts. Fern fronds, still air, and the quiet that follows.",
  },
  {
    id: "self-portrait-01",
    title: "Self Portrait I",
    image: "/watercolor/self-portrait-01.png",
    price: 0,
    medium: "Watercolor on paper",
    size: `9"×12"`,
    year: "2026",
    status: "NFS",
  },
  {
    id: "self-portrait-02",
    title: "Self Portrait II",
    image: "/watercolor/self-portrait-02.png",
    price: 0,
    medium: "Watercolor on paper",
    size: `9"×12"`,
    year: "2026",
    status: "NFS",
  },
  {
    id: "self-portrait-03",
    title: "Self Portrait III",
    image: "/watercolor/self-portrait-03.png",
    price: 0,
    medium: "Watercolor on paper",
    size: `9"×12"`,
    year: "2026",
    status: "NFS",
  },
];
