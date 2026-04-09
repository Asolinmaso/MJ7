"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function OurProjects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-projects"
      ref={sectionRef}
      className="w-full bg-black py-16 px-5 md:px-12 lg:px-24 overflow-hidden relative"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="text-center text-[#FB270C] text-[50px] md:text-[90px] lg:text-[128px] font-black uppercase mb-16 leading-none tracking-wide font-[family-name:var(--font-poppins)]">
          <span className="text-white">OUR</span> PROJECTS
        </h2>

        {/* Project Card */}
        <div
          className={`relative w-full max-w-[1159px] min-h-[612px] bg-white rounded-[32px] border border-[#6B6B6B] flex flex-col lg:flex-row transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {/* Left Side: Poster & Ribbon */}
          <div className="relative w-full lg:w-[470px] min-h-[400px] lg:min-h-full rounded-t-[32px] lg:rounded-l-[32px] lg:rounded-tr-none overflow-hidden shrink-0 bg-black flex flex-col">
            {/* The Poster */}
            <div className="relative w-[85%] sm:w-[75%] md:w-[65%] lg:w-full h-full max-w-[520px] mx-auto flex-1">
              <Image
                src="/projects_image.png"
                alt="Project Poster"
                fill
                className="object-cover"
                style={{ height: '100%', width: '100%' }}
              />
            </div>

            {/* Ribbon "Horror" container */}
            <div className="absolute top-0 left-[-16px]">
              {/* Ribbon Main */}
              <div
                className="bg-[#FB270C] text-white flex items-center justify-center
                           w-[180px] h-[70px] md:w-[202px] md:h-[84px]
                           rounded-tr-[12px] font-[family-name:var(--font-creepster)] shadow-md"
              >
                <span className="text-[32px] md:text-[40px] tracking-widest font-normal uppercase">
                  Horror
                </span>
              </div>
              {/* Ribbon Fold Edge */}
              <div
                className="absolute left-0 top-[70px] md:top-[84px] w-0 h-0"
                style={{
                  borderTop: "50px solid #D11E07",
                  borderLeft: "16px solid transparent",
                }}
              ></div>
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="flex-1 p-8 bg-black md:p-12 lg:p-16 flex flex-col justify-center text-left font-[family-name:var(--font-poppins)]">
            <h3 className="text-[#FB270C] text-[36px] md:text-[48px] font-normal leading-tight mb-4 lg:mb-8">
              Project 1
            </h3>

            {/* In association with text */}
            <p className="text-white text-[20px] md:text-[24px] font-medium leading-[1.5] mb-6">
              In association with Kalyan Media Enterprises Pvt. Ltd.
            </p>

            <div className="flex flex-col gap-4 text-[#FB270C] text-[18px] md:text-[24px] font-medium leading-[1.5]">
              <p>
                <span className="opacity-90">Directed By :</span> <span className="text-white">Mr. S. Kalyan</span>
              </p>

              <p>
                <span className="opacity-90">Lead Actors :</span> <span className="text-white">Mr. Dr. Dheeran J. W. & Ms. Swasika</span>
              </p>

              <p>
                <span className="opacity-90">Music Director :</span> <span className="text-white">Mr. D. Imman</span>
              </p>

              <p>
                <span className="opacity-90">Director of Photography. :</span> <span className="text-white">Mr. Jacob</span>
              </p>

              <p className="mt-2">
                <span className="opacity-90">Lead Comedians :</span>{" "}
                <span className="text-white">
                  Mr. Thangadurai, Mr. Kingsley, Mr. Imman Annachi, Mrs. Aranthangi Nisha, Mr. Neppusammy, Mr. Shiva Aravind, and many more lead actors.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
