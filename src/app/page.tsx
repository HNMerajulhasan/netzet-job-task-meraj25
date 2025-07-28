"use client";
import Image from "next/image";
import right_hero_image from "../../public/assest/hero_right_image.svg";
import fame_tonic_logo from "../../public/assest/fame-tonic-logo.svg";
import note_star_icon from "../../public/assest/note-star-icon.png";
// import { Star, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative max-w-[1440px] mx-auto">
      {/* Top Gradient Banner */}
      <div className="w-full bg-gradient-to-r from-[#E2185F] via-purple-500 to-cyan-400 py-3">
        <div className="max-w-[1440px] mx-auto  flex items-center justify-center">
          {/* <Star className="w-4 h-4 text-yellow-300 mr-2" /> */}
          <span className="text-sm font-medium text-white">
            <strong>FRESH BEGINNINGS SALE:</strong> Extra 25% OFF, Limited Spots
            - start your journey today!
          </span>
        </div>
      </div>

      <div className="px-[211px]">
        {/* Background Image Positioned to the Right */}
        <div className="absolute right-[101px] top-[126px] z-0  pointer-events-none pt-[45px]">
          <Image
            src={right_hero_image}
            alt="Hero Right Background"
            className="w-[666px] h-[679px] object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto ">
          {/* Header */}
          <header className="flex items-center justify-between h-[74px] pt-[35px] ">
            <div className=" pt-8">
              <Image
                src={fame_tonic_logo}
                alt="Fame Tonic Logo"
                className="w-[173.12px] h-[74px]"
              />
            </div>
            <nav className="flex space-x-10">
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
          <div className="flex justify-between items-center w-full pt-[57px]">
            {/* Left Content */}
            <div className="space-y-8 relative z-10 max-w-xl">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold leading-tight font-Urbanist text-[35px] text-[#FFFFFF]">
                  Want to Turn Social Media Into a{" "}
                  <span className="text-white">Profitable Career?</span>
                </h2>
                <h3 className="text-3xl font-bold text-cyan-400 text-[35px]">
                  Discover your way to success<br/> with Fametonic:
                </h3>
              </div>

              {/* Feature List */}
              <div className="space-y-[13px]">
                {[
                  "Start growing your influence right away—no waiting required!",
                  "Create viral TikToks and Reels step by step with easy-to-follow\nlessons",
                  "Use a Personal AI Worker to boost your content",
                  "Learn from expert-led courses designed for aspiring influencers",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="">
                      <Image
                        src={note_star_icon}
                        alt="Note Star Icon"
                        className="w-6 h-6"  
                      />
                    </div>
                    <p className="text-[16px] font-semibold text-[#FFFFFF] whitespace-pre-line">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="space-y-3">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>GET STARTED</span>
                  {/* <ArrowRight className="w-5 h-5" /> */}
                </button>
                <p className="text-sm text-gray-400">
                  1-minute quiz for personalized insights
                </p>
              </div>

              {/* Footer Text */}
              <div className="space-y-2 text-xs text-gray-500">
                <p>
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p>Fametonic 2025 ©All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
