"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 px-6 lg:px-24">
      <div className="max-w-[1230px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[50px] items-start">
          
          {/* COLUMN 1: LOGO & ABOUT */}
          <div className="flex flex-col gap-4 max-w-[331px]">
            <div className="w-[116px] h-[106px] relative">
              <Image
                src="/navbar_logo.png"
                alt="MJ7 Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-[#DBDADA] text-lg lg:text-[20px] font-light leading-relaxed lg:leading-[30px]">
              MJ7 Cinema Production is a creative powerhouse dedicated to crafting compelling cinematic experiences that resonate with audiences across cultures and platforms.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="flex flex-col gap-6 max-w-[205px]">
            <h4 className="text-[#FB270C] text-[22px] font-bold leading-[30px] tracking-[0.01em]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-[#DBDADA] text-lg lg:text-[20px] font-light leading-[30px] tracking-[0.01em]">
              <li><Link href="#about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="#team" className="hover:text-white transition">Team</Link></li>
              <li><Link href="#career" className="hover:text-white transition">Career</Link></li>
              <li><Link href="#collab" className="hover:text-white transition">Collaborations & Investments</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: LEGAL */}
          <div className="flex flex-col gap-6 max-w-[177px]">
            <h4 className="text-[#FB270C] text-[22px] font-bold leading-[30px] tracking-[0.01em]">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-[#DBDADA] text-lg lg:text-[20px] font-light leading-[30px] tracking-[0.01em]">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-white transition">Accessibility Statement</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms & Condidtions</Link></li>
              <li><Link href="/refund" className="hover:text-white transition">Refund Policies</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div className="flex flex-col gap-6 max-w-[367px]">
            <h4 className="text-[#FB270C] text-[22px] font-bold leading-[30px] tracking-[0.01em]">
              Contact Info
            </h4>
            <div className="flex flex-col gap-5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8544 24.3745C18.8631 24.3745 17.4707 24.016 15.3856 22.8511C12.8501 21.4292 10.889 20.1165 8.36716 17.6013C5.93575 15.1714 4.75255 13.5982 3.09658 10.5849C1.22579 7.18254 1.5447 5.3991 1.90119 4.63687C2.32572 3.72586 2.95236 3.18097 3.76232 2.64015C4.22237 2.33873 4.70922 2.08035 5.21669 1.86828C5.26747 1.84644 5.3147 1.82562 5.35685 1.80683C5.60822 1.69359 5.98908 1.52246 6.4715 1.70527C6.79345 1.82613 7.08087 2.07344 7.5308 2.51777C8.45349 3.42777 9.71439 5.45445 10.1795 6.44976C10.4918 7.12058 10.6985 7.5634 10.699 8.06004C10.699 8.64148 10.4065 9.08988 10.0516 9.57383C9.98505 9.66472 9.91904 9.75156 9.85505 9.83586C9.46861 10.3437 9.3838 10.4904 9.43966 10.7525C9.5529 11.2791 10.3974 12.8467 11.7852 14.2315C13.1731 15.6163 14.6955 16.4075 15.2242 16.5202C15.4974 16.5786 15.6472 16.4902 16.1712 16.0901C16.2464 16.0327 16.3236 15.9733 16.4043 15.9139C16.9456 15.5112 17.3732 15.2263 17.941 15.2263H17.944C18.4381 15.2263 18.8611 15.4406 19.5619 15.794C20.476 16.2551 22.5636 17.4998 23.4792 18.4235C23.9245 18.8724 24.1728 19.1588 24.2942 19.4802C24.477 19.9642 24.3049 20.3435 24.1926 20.5974C24.1738 20.6396 24.153 20.6858 24.1312 20.7371C23.9174 21.2436 23.6575 21.7295 23.3547 22.1884C22.8149 22.9958 22.268 23.6209 21.355 24.046C20.8861 24.2678 20.373 24.3801 19.8544 24.3745Z" fill="#FB270C"/>
                  </svg>
                </div>
                <p className="text-[#DBDADA] text-lg lg:text-[20px] font-light leading-snug">
                  +91-9677787817<br/>+91-9600663389
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22.5 5L12.5 11.25L2.5 5V2.5L12.5 8.75L22.5 2.5V5Z" fill="#FB270C"/>
                  </svg>
                </div>
                <p className="text-[#DBDADA] text-lg lg:text-[20px] font-light leading-none">
                  mj7cinecreators@gmail.com
                </p>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0C4.25 0 0 4.25 0 9.5C0 16.625 9.5 24 9.5 24C9.5 24 19 16.625 19 9.5C19 4.25 14.75 0 9.5 0ZM9.5 13C7.57 13 6 11.43 6 9.5C6 7.57 7.57 6 9.5 6C11.43 6 13 7.57 13 9.5C13 11.43 11.43 13 9.5 13Z" fill="#FB270C"/>
                  </svg>
                </div>
                <p className="text-[#DBDADA] text-lg lg:text-[20px] font-light leading-tight">
                  Corporate Office: No.18, Velan Avenue, Rice Mill Road, Kandigai, Chennai – 600127
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-[#FB270C] text-sm lg:text-[16px] font-medium">
            © {new Date().getFullYear()} MJ7 CINE CREATIONS PVT.LTD. All rights reserved.{" "}
            <span className="text-white/50 px-2 lg:px-4">|</span>
            <span className="text-[#FB270C]">Designed & Developed By Manvian</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
