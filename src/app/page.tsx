"use client";
import Image from "next/image";
import right_hero_image from "../../public/assest/hero_right_image.svg";
import fame_tonic_logo from "../../public/assest/fame-tonic-logo.svg";
import note_star_icon from "../../public/assest/note-star-icon.png";
import hero_button from "../../public/assest/hero_button.svg";
import burger_menu from "../../public/assest/burger_menu.svg";
import rocket from "../../public/assest/rocket-removebg.png";

// import { Star, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative max-w-[1440px] mx-auto">
      {/* Top Gradient Banner */}
      <div className="w-full bg-gradient-to-r from-[#E2185F] via-purple-500 to-cyan-400 md:px-[279px]">
        <div className="md:max-w-[1440px] mx-auto  md:flex items-center justify-center md:h-[46px] h-[59px]">
          {/* <Star className="w-4 h-4 text-yellow-300 mr-2" /> */}
          <span className="md:text-[22px] text-[14px] text-white md:flex hidden">
            <strong className="text-[#00E7F9] font-extrabold font-figtree">FRESH BEGINNINGS SALE: </strong>  {" "} <span className="font-figtree font-bold ml-1">Extra 25% OFF, Limited Spots
            - start your journey today!</span>
          </span>
          {/* mobile text */}
           <div className=" text-white md:hidden flex justify-center items-center pt-[20px]">
            <h1 className="text-[#00E7F9] text-[16px] font-extrabold font-figtree">
              <span>
                <Image
                  src={rocket}
                  alt="Rocket Icon"
                  className="inline-block w-[20px] h-[20px] mr-2"
                />
              </span>
              FRESH BEGINNINGS SALE: <span className="text-[#FFFFFF] ml-1">!</span></h1> 
          </div>
        </div>
      </div>

      <div className="">
        {/* Background Image Positioned to the Right */}
        <div className="absolute md:right-[99px] md:top-[126px] z-0  pointer-events-none md:pt-[9px] pt-[15px] md:px-0 px-10">
          <Image
            src={right_hero_image}
            alt="Hero Right Background"
            className="md:w-[666px] md:h-[679px] h-[426px] w-[390px] object-contain"
          />
        </div>

        {/* Mobile Logo */}
        <div>
            <div className="md:hidden flex justify-center mt-[33px]">
              <Image
                src={fame_tonic_logo}
                alt="Fame Tonic Logo"
                className="w-[107.78px] h-[46.07px]"
              />
              
            </div>
            <div>
              <div className="md:hidden flex justify-end -translate-y-[150%] mr-[29.22px]">
                <Image
                  src={burger_menu}
                  alt="Burger Menu Icon"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </div>
        </div>
        

        {/* Main Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto ">
          {/* Header */}
          <header className="md:flex hidden justify-between md:h-[74px] md:mt-[35px] md:px-[211px]">
            <div className=" ">
              <Image
                src={fame_tonic_logo}
                alt="Fame Tonic Logo"
                className="w-[173.12px] h-[74px]"
              />
            </div>
            <nav className="md:flex hidden space-x-10 text-[18px] font-semibold font-figtree">
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
          <div className="md:flex justify-between items-center w-full md:mt-[30px] mt-[359px] md:px-[215px]">
            {/* Left Content */}
            <div className=" relative z-10 max-w-xl mt-[30px]">
              <div className="md:text-start text-center md:px-0 px-[20px]">
                <h2 className="font-bold leading-tight font-urbanist md:text-[35px] text-[25px] text-[#FFFFFF]">
                  Want to Turn Social Media Into a{" "}
                  <span className="text-white">Profitable Career?</span>
                </h2>
                <h3 className=" font-bold text-cyan-400 md:text-[35px]/[42px] text-[25px] font-urbanist">
                  Discover your way to success<br/> with Fametonic:
                </h3>
              </div>

              {/* Feature List */}
              <div className="md:space-y-[13px] space-y-[10px] md:mt-[16px] mt-[22px] md:px-0 px-[20px]">
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
                        className="w-[22px] h-[22px]"  
                      />
                    </div>
                    <p className="text-[16px] font-semibold font-figtree text-[#FFFFFF] whitespace-pre-line">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile Footer Text */}
              <div className="mt-[22px] md:hidden block">
                <p className="text-[#ABABAB] text-[12px] font-medium font-figtree text-center px-[54.5px]">
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="text-[10px] text-center font-medium text-[#ABABAB] mt-[19px] font-figtree">Fametonic 2025 ©All Rights Reserved.</p>
              </div>


              {/* CTA Button */}
              <div className="mt-[25px]">
                <button className="cursor-pointer">
                  <Image src={hero_button} alt="alt"  className="md:w-[313px] w-[350px] h-[60px]"/>
                  {/* <ArrowRight className="w-5 h-5" /> */}
                </button>
                <p className="text-sm text-[#FFFFFF] md:ml-[9.5%] md:text-start text-center -translate-y-2 text-[12px] font-figtree">
                  1-minute quiz for personalized insights
                </p>
              </div>

              {/*desktop Footer Text */}
              <div className="mt-[22px] md:block hidden">
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
