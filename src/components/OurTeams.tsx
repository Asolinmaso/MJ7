"use client";

import TeamCard from "./TeamCard";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Dr.Dheeran J.W",
    role: "Director, Founder & Actor",
    image: "/team/Dheeran.png",
  },
  {
    name: "Rakesh Kumawat",
    role: "Director",
    image: "/team/Rakesh.png",
  },
  {
    name: "Dir.Latha Maniyarasu",
    role: "Creative Head Director",
    image: "/team/Latha.png",
  },
  {
    name: "Catherine",
    role: "Producer",
    image: "/team/Catherine.png",
  },
];

export default function OurTeams() {
  return (
    <section
      id="team"
      className="w-full py-[30px] bg-black xxs1:py-[50px] xxs:py-[50px] md:py-18 px-6 lg:px-20"
    >
      {/* Heading */}
      <div className="max-w-9xl mx-auto mb-16 text-center px-4 lg:px-12">
        <h2 className="text-[36px] xxs:text-[42px] xs1:text-[48px] md:text-[70px] lg:text-[100px] font-[900] mb-6 text-center lg:text-left lg:pl-[30px] xl:pl-[50px] 2xl:pl-[80px]">
          <span className="text-[#C4C4C4]">OUR </span>
          <span className="text-red-600">TEAM</span>
        </h2>

        <p className="max-w-5xl mx-auto text-[#C4C4C4] text-[15px] md:text-[20px] lg:text-[24px] leading-relaxed text-center lg:text-left lg:pl-38">
          We specialize in producing high-quality films, digital content, and
          visual narratives that blend strong concepts with striking aesthetics.
          From concept development to final execution, our team is committed to
          delivering stories that are authentic, impactful, and timeless.
        </p>
      </div>

      {/* Four images in one row */}
      <div className="w-full mt-10 max-w-[1600px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="min-w-0 flex justify-center">
              <TeamCard
                name={member.name}
                role={member.role}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}