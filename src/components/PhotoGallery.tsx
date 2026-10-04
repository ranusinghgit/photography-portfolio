"use client";

import { useMemo, useState } from "react";
import PhotoCard from "@/components/PhotoCard";
import type { GalleryCategory, Photo } from "@/types/photo";

type PhotoGalleryProps = {
  photos: Photo[];
  categories: readonly GalleryCategory[];
  featuredId?: string;
};

export default function PhotoGallery({
  photos,
  categories,
  featuredId,
}: PhotoGalleryProps) {
  const [active, setActive] = useState<GalleryCategory | "All">("All");

  const visible = useMemo(() => {
    if (active === "All") return photos;
    return photos.filter((photo) => photo.category === active);
  }, [active, photos]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 md:px-10 md:pb-32 md:pt-16">
      <div className="mb-10 flex justify-center md:mb-16">
        <div className="flex w-full max-w-full flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {(["All", ...categories] as const).map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`min-w-0 flex-1 border px-3 py-2.5 text-[11px] uppercase tracking-[0.16em] transition-colors sm:flex-none sm:px-6 sm:py-3 sm:text-sm md:min-w-[10rem] md:px-8 md:py-3.5 md:text-base ${
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
        {visible.map((photo) => {
          const hideOnMobileAll =
            active === "All" && featuredId != null && photo.id === featuredId;
          return (
            <div
              key={photo.id}
              className={hideOnMobileAll ? "hidden md:block" : undefined}
            >
              <PhotoCard photo={photo} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
