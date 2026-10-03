import photosJson from "../../data/photos.json";
import {
  CATEGORIES,
  GALLERY_CATEGORIES,
  type Category,
  type GalleryCategory,
  type Photo,
} from "@/types/photo";

const photos = photosJson as Photo[];

export function getPhotos(): Photo[] {
  return photos;
}

export function getGalleryPhotos(): Photo[] {
  return photos.filter((photo) =>
    GALLERY_CATEGORIES.includes(photo.category as GalleryCategory),
  );
}

export function getPhotoById(id: string): Photo | undefined {
  return photos.find((photo) => photo.id === id);
}

export function getPhotosByCategory(category: Category): Photo[] {
  return photos.filter((photo) => photo.category === category);
}

export function getFeaturedPhoto(): Photo {
  return photos[0];
}

export function getCategories(): readonly Category[] {
  return CATEGORIES;
}

export function getGalleryCategories(): readonly GalleryCategory[] {
  return GALLERY_CATEGORIES;
}

export function getPhotoIds(): string[] {
  return photos.map((photo) => photo.id);
}
