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
      <div className="flex justify-center px-6 pb-8 pt-10 md:pt-12">
        <figure className="w-[70vw] max-w-[70vw] leading-none">
          <Image
            src={photo.src}
            alt={photo.title}
            width={2400}
            height={1600}
            priority
            sizes="70vw"
            className="h-auto w-full border-[1.5px] border-neutral-400"
            style={{ width: "100%", height: "auto" }}
          />
        </figure>
      </div>
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-8 md:px-10 md:pb-20">
        <h1 className="text-4xl font-light tracking-tight text-ink md:text-5xl">
          {photo.title}
        </h1>
        <p className="mt-4 text-sm tracking-wide text-ink-muted">
          {photo.location}
        </p>
        <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-ink-muted">
          {photo.caption}
        </p>
        <Link
          href="/"
          className="mt-12 inline-block text-xs uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-60"
        >
          Back to gallery
        </Link>
      </div>
    </article>
  );
}
