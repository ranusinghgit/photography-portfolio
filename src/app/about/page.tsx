import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "A short biography and approach to photography.",
};

const profileSrc =
  "https://res.cloudinary.com/vzxcgb3b/image/upload/v1791015530/IMG_1728.jpg";

export default function AboutPage() {
  return (
    <article className="mx-auto grid min-w-0 max-w-6xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-12 md:gap-16 md:px-10 md:py-24">
      <div className="min-w-0 md:col-span-5">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[13.5rem] overflow-hidden bg-neutral-100 sm:max-w-[18rem] md:mx-0 md:max-w-none">
          <Image
            src={profileSrc}
            alt="Portrait of the photographer"
            fill
            sizes="(max-width: 768px) 216px, 40vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col justify-center md:col-span-7 md:pl-6">
        <h1 className="text-2xl font-light tracking-tight text-ink sm:text-3xl md:text-4xl">
          Trying to capture a feeling.
        </h1>
        <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-relaxed text-ink-muted">
          <p>
            Hi, I&apos;m Ranu. I mainly photograph landscapes with some travel and street moments in-between. 
            Witnessing the unfathomable beauty of this world is often overwhelming, and trying to capture the feeling of being there, watching it all, brings me a kind of peace. 
            I hope these captures can do the same for you.
             
          </p>
          <p>
            This site is a small selection. Prints and commissions on request.
          </p>
        </div>
      </div>
    </article>
  );
}
