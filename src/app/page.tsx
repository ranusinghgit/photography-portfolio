import Image from "next/image";
import Link from "next/link";
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
      <section className="flex justify-center bg-white px-4 pb-4 pt-6 sm:px-6 md:pt-10">
        <h1 className="sr-only">Selected photographs</h1>
        <figure className="w-full max-w-full leading-none md:w-[70vw] md:max-w-[70vw]">
          <Link href={`/photo/${featured.id}`} className="block">
            <Image
              src={featured.src}
              alt={featured.title}
              width={2400}
              height={1600}
              priority
              sizes="(max-width: 768px) 100vw, 70vw"
              className="h-auto w-full"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </figure>
      </section>
      <PhotoGallery
        photos={photos}
        categories={categories}
        featuredId={featured.id}
      />
    </>
  );
}
