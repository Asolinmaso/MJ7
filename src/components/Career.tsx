"use client";


export default function Career() {
  const jobs = [
    {
      title: "Accountant",
      description: "We are looking for a detail-oriented Accountant to manage finances with accuracy and integrity.",
      type: "Full - Time",
      location: "Chennai",
    },
    {
      title: "Administrator",
      description: "We are looking for an organized Admin to ensure smooth day-to-day operations.",
      type: "Full - Time",
      location: "Chennai",
    },
    {
      title: "Project Manager",
      description: "We are looking for a proactive Project Manager to lead projects and deliver results efficiently.",
      type: "Full - Time",
      location: "Chennai",
    },
    {
      title: "Office Assistant",
      description: "We are looking for a reliable Office Assistant to support daily tasks and keep operations running smoothly.",
      type: "Full - Time",
      location: "Chennai",
    },
  ];

  return (
    <section id="career" className="bg-black text-white py-16 px-6 lg:px-24">
      <div className="max-w-[1244px] mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-20 lg:mb-32">
          <h1 className="text-[60px] sm:text-[100px] lg:text-[150px] font-black text-[#FB270C] leading-[1.1] lg:leading-[225px] uppercase tracking-tight font-[family-name:var(--font-poppins)]">
            CAREER
          </h1>
          <p className="max-w-[603px] text-[#C4C4C4] text-lg lg:text-[24px] font-normal leading-relaxed lg:leading-[36px] lg:mb-[50px]">
            From concept to final cut, be part of the creative journey. 
            Grow your career in a space built for cinema lovers.
          </p>
        </div>

        {/* Job Listings */}
        <div className="flex flex-col">
          {jobs.map((job, index) => (
            <div key={index} className="w-full">
              {/* Divider Above */}
              <div className="w-full h-0 border-t border-[rgba(255,255,255,0.51)] mb-12"></div>
              
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 relative">
                <div className="flex-1">
                  <h3 className="text-white text-[30px] lg:text-[36px] font-medium leading-[54px] mb-4">
                    {job.title}
                  </h3>
                  <p className="text-[#C4C4C4] text-lg lg:text-[24px] font-normal leading-relaxed lg:leading-[36px] mb-8 max-w-[777px]">
                    {job.description}
                  </p>
                  
                  {/* Pills */}
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3 px-6 py-3 border border-[rgba(255,255,255,0.5)] rounded-[39px]">
                      <span className="text-white text-lg lg:text-[24px] font-normal leading-[36px]">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 border border-[rgba(255,255,255,0.5)] rounded-[39px]">
                      <span className="text-white text-lg lg:text-[24px] font-normal leading-[36px]">
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <button className="flex items-center gap-4 text-white text-[30px] lg:text-[36px] font-medium leading-[54px] hover:text-[#FB270C] transition-colors group">
                  Apply
                  <div className="w-[37px] h-[42px] relative transform transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
                    <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.3111 36.538L24.6009 6.34082" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M32.3751 23.0342L24.887 5.57533L7.84197 11.8835" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ))}
          {/* Final Divider */}
          <div className="w-full h-0 border-t border-[rgba(255,255,255,0.51)]"></div>
        </div>
      </div>
    </section>
  );
}
