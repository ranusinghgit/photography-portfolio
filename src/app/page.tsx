import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";
import {
  getFeaturedPhoto,
  getGalleryCategories,
  getGalleryPhotos,
} from "@/lib/photos";

export default function HomePage() {
  const photos = getGalleryPhotos();
  const featured = getFeaturedPhoto();
  const categories = getGalleryCategories();

  return (
    <>
      <section className="flex justify-center bg-white px-6 pb-4 pt-8 md:pt-10">
        <h1 className="sr-only">Selected photographs</h1>
        <figure className="w-[70vw] max-w-[70vw] leading-none">
          <Image
            src={featured.src}
            alt={featured.title}
            width={2400}
            height={1600}
            priority
            sizes="70vw"
            className="h-auto w-full"
            style={{ width: "100%", height: "auto" }}
          />
        </figure>
      </section>
      <PhotoGallery photos={photos} categories={categories} />
    </>
  );
}
