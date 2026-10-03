"use client";

import { useMemo, useState } from "react";
import PhotoCard from "@/components/PhotoCard";
import type { GalleryCategory, Photo } from "@/types/photo";

type PhotoGalleryProps = {
  photos: Photo[];
  categories: readonly GalleryCategory[];
};

export default function PhotoGallery({ photos, categories }: PhotoGalleryProps) {
  const [active, setActive] = useState<GalleryCategory | "All">("All");

  const visible = useMemo(() => {
    if (active === "All") return photos;
    return photos.filter((photo) => photo.category === active);
  }, [active, photos]);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-16">
      <div className="mb-12 flex justify-center md:mb-16">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {(["All", ...categories] as const).map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`min-w-[8.5rem] border px-6 py-3 text-sm uppercase tracking-[0.2em] transition-colors md:min-w-[10rem] md:px-8 md:py-3.5 md:text-base ${
                  isActive
                    ? "border-ink bg-ink text-white"
                    : "border-neutral-300 text-ink-muted hover:border-ink hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
}
