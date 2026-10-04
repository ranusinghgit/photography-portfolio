import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhotoById, getPhotoIds } from "@/lib/photos";

type PhotoPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getPhotoIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PhotoPageProps): Promise<Metadata> {
  const { id } = await params;
  const photo = getPhotoById(id);
  if (!photo) return { title: "Photograph" };
  return {
    title: photo.title,
    description: `${photo.title} — ${photo.location}. ${photo.caption}`,
  };
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    notFound();
  }

  return (
    <article className="bg-white">
      <div className="flex justify-center px-4 pb-16 pt-8 sm:px-6 md:pb-24 md:pt-12">
        <figure className="w-full max-w-full overflow-hidden border-[1.5px] border-neutral-400 md:w-[70vw] md:max-w-[70vw]">
          <div className="leading-none">
            <Image
              src={photo.src}
              alt={photo.title}
              width={2400}
              height={1600}
              priority
              sizes="(max-width: 768px) 100vw, 70vw"
              className="h-auto w-full"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <figcaption className="border-t border-neutral-400 bg-paper px-5 py-8 sm:px-8 sm:py-10 md:px-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-bronze">
              {photo.category}
            </p>
            <h1 className="mt-3 text-2xl font-light tracking-tight text-ink sm:text-3xl md:text-4xl">
              {photo.title}
            </h1>
            <p className="mt-2 text-sm tracking-wide text-ink-faint">
              {photo.location}
            </p>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-muted">
              {photo.caption}
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 border-t border-bronze/25 pt-5 text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-bronze"
            >
              <span aria-hidden="true">←</span>
              Back to gallery
            </Link>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
