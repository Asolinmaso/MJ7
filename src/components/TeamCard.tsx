"use client";

import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, image }: TeamCardProps) {
  return (
    <div className="relative w-full max-w-[280px] aspect-[280/400] overflow-hidden rounded-[15px]">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 640px) 28vw, (max-width: 1024px) 22vw, 280px"
        className="object-contain"
        priority
      />
    </div>
  );
}
