import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <h2 className="text-center text-red-600 text-6xl md:text-7xl font-bold mb-16 uppercase">
          ABOUT US
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Side - Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px]">
              <Image
                src="/About_us_image.png"
                alt="MJ7 Logo"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              MJ7 Cinema Production is a creative powerhouse dedicated to crafting
              compelling cinematic experiences that resonate with audiences across
              cultures and platforms. Founded with a passion for storytelling and
              visual excellence, MJ7 stands at the intersection of creativity,
              technology, and emotion.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              We specialize in producing high-quality films, digital content, and
              visual narratives that blend strong concepts with striking aesthetics.
              From concept development to final execution, our team is committed to
              delivering stories that are authentic, impactful, and timeless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

