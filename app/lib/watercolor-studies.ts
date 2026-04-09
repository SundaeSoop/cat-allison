export type WatercolorStudy = {
  id: string;
  title: string;
  image: string;
  price: number; // you said $250 for everything for now
  medium: string;
  year: string;
  status: "Available" | "Sold";
};

export const WATERCOLOR_STUDIES: WatercolorStudy[] = [
  {
    id: "reflection-study",
    title: "Reflection Study",
    image: "/watercolor/studies/reflection-study.jpg",
    price: 250,
    medium: "Watercolor study",
    year: "2026",
    status: "Available",
  },
  {
    id: "study-01",
    title: "Study 01",
    image: "/watercolor/studies/study-01.jpg",
    price: 250,
    medium: "Watercolor study",
    year: "2026",
    status: "Available",
  },
];