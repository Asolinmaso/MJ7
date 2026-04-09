"use client";

import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed && videoRef.current) {
          videoRef.current.play();
          setHasPlayed(true);
        }
      },
      { threshold: 0.5 } // Play when at least 50% of it is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <section ref={sectionRef} className="relative w-full h-[250px] bg-black xxs:h-[250px] xs:h-[260px] sm:h-[380px] md:h-[500px] lg:h-[780px] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/MJ7_Banner.mp4" type="video/mp4" />
      </video>
      {/* Image Overlay */}
      <img
        src="/seats.png"
        alt="Overlay"
        className="absolute bottom-0 left-0 w-full h-[50px] md:h-[100px] xxs:h-[60px] object-cover z-10 pointer-events-none"
      />
    </section>
  );
}

