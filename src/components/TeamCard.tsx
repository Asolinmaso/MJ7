"use client";

import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, image }: TeamCardProps) {
  return (
    <div className="relative w-[280px] h-[400px] overflow-hidden rounded-[15px] flex items-center justify-center">
      <Image
        src={image}
        alt={name}
        width={280}
        height={400}
        className="object-contain"
        priority
      />
    </div>
  );
}
