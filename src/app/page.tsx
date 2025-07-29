"use client";
import Image from "next/image";
import right_hero_image from "../../public/assest/hero_right_image.svg";
import fame_tonic_logo from "../../public/assest/fame-tonic-logo.svg";
import note_star_icon from "../../public/assest/note-star-icon.png";
import hero_button from "../../public/assest/hero_button.svg";
// import { Star, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative max-w-[1440px] mx-auto">
      {/* Top Gradient Banner */}
      <div className="w-full bg-gradient-to-r from-[#E2185F] via-purple-500 to-cyan-400 px-[279px]">
        <div className="max-w-[1440px] mx-auto  flex items-center justify-center h-[46px]">
          {/* <Star className="w-4 h-4 text-yellow-300 mr-2" /> */}
          <span className="text-[22px]  text-white flex">
            <strong className="text-[#00E7F9] font-extrabold font-figtree">FRESH BEGINNINGS SALE: </strong>  {" "} <span className="font-figtree font-bold ml-1">Extra 25% OFF, Limited Spots
            - start your journey today!</span>
          </span>
        </div>
      </div>

      <div className="">
        {/* Background Image Positioned to the Right */}
        <div className="absolute right-[99px] top-[126px] z-0  pointer-events-none pt-[9px] ">
          <Image
            src={right_hero_image}
            alt="Hero Right Background"
            className="w-[666px] h-[679px] object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto ">
          {/* Header */}
          <header className="flex  justify-between h-[74px] mt-[35px] px-[211px]">
            <div className=" ">
              <Image
                src={fame_tonic_logo}
                alt="Fame Tonic Logo"
                className="w-[173.12px] h-[74px]"
              />
            </div>
            <nav className="flex space-x-10 text-[18px] font-semibold font-figtree">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About us
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </header>

          {/* Main Content Grid */}
          <div className="flex justify-between items-center w-full mt-[30px]  px-[215px]">
            {/* Left Content */}
            <div className=" relative z-10 max-w-xl mt-[30px]">
              <div className="">
                <h2 className="text-5xl font-bold leading-tight font-urbanist text-[35px] text-[#FFFFFF]">
                  Want to Turn Social Media Into a{" "}
                  <span className="text-white">Profitable Career?</span>
                </h2>
                <h3 className="text-3xl font-bold text-cyan-400 text-[35px] font-urbanist">
                  Discover your way to success<br/> with Fametonic:
                </h3>
              </div>

              {/* Feature List */}
              <div className="space-y-[13px] mt-[16px]">
                {[
                  "Start growing your influence right away—no waiting required!",
                  "Create viral TikToks and Reels step by step with easy-to-follow\nlessons",
                  "Use a Personal AI Worker to boost your content",
                  "Learn from expert-led courses designed for aspiring influencers",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-[10px]">
                    <div className="">
                      <Image
                        src={note_star_icon}
                        alt="Note Star Icon"
                        className="w-6 h-6"  
                      />
                    </div>
                    <p className="text-[16px] font-semibold font-figtree text-[#FFFFFF] whitespace-pre-line">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-[25px]">
                <button className="cursor-pointer">
                  <Image src={hero_button} alt="alt"  className=""/>
                  {/* <ArrowRight className="w-5 h-5" /> */}
                </button>
                <p className="text-sm text-[#FFFFFF] ml-[9.5%] -translate-y-2 text-[12px] font-figtree">
                  1-minute quiz for personalized insights
                </p>
              </div>

              {/* Footer Text */}
              <div className="mt-[22px]">
                <p className="text-[#ABABAB] text-[12px] font-medium font-figtree">
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription<br/> Terms
                </p>
                <p className="text-[10px] font-medium text-[#ABABAB] mt-[12px] font-figtree">Fametonic 2025 ©All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
