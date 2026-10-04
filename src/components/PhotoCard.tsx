import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/types/photo";

type PhotoCardProps = {
  photo: Photo;
};

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <article className="min-w-0">
      <Link href={`/photo/${photo.id}`} className="group block">
        <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100">
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
          />
        </div>
      </Link>
    </article>
  );
}
