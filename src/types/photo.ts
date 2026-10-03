export const CATEGORIES = ["Landscape", "Drone", "Travel"] as const;
export const GALLERY_CATEGORIES = ["Landscape", "Travel"] as const;

export type Category = (typeof CATEGORIES)[number];
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type Photo = {
  id: string;
  src: string;
  title: string;
  location: string;
  category: Category;
  caption: string;
};
