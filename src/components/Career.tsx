"use client";


export default function Career() {
  const jobs = [
    {
      description: "We are looking for a detail-oriented Accountant to manage finances with accuracy and integrity.",
    },
    {
      description: "We are looking for an organized Admin to ensure smooth day-to-day operations.",
    },
    {
      description: "We are looking for a proactive Project Manager to lead projects and deliver results efficiently.",
    },
    {
      description: "We are looking for a reliable Office Assistant to support daily tasks and keep operations running smoothly.",
    },
  ];

  return (
    <section id="career" className="bg-white text-black py-24 px-6 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row items-baseline justify-start gap-6 lg:gap-14 mb-24 lg:mb-48">
          <h1 className="text-[60px] sm:text-[80px] lg:text-[160px] font-black text-[#FB270C] leading-none uppercase tracking-tight font-[family-name:var(--font-poppins)]">
            CAREER
          </h1>
          <p className="max-w-[480px] text-[#B0B0B0] text-base md:text-xl lg:text-[22px] font-normal leading-relaxed">
            From concept to final cut, be part of the creative journey. 
            Grow your career in a space built for cinema lovers.
          </p>
        </div>

        {/* Job Listings */}
        <div className="flex flex-col gap-20 md:gap-32 lg:gap-40">
          {jobs.map((job, index) => (
            <div key={index} className="max-w-[1000px]">
              <p className="text-[#B0B0B0] text-lg sm:text-xl md:text-2xl lg:text-[28px] font-light leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
