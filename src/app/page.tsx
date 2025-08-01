"use client";
import Image from "next/image";
import right_hero_image from "../../public/assets/mobile_device_hero_img.svg";
import fame_tonic_logo from "../../public/assets/fame-tonic-logo.svg";
import note_star_icon from "../../public/assets/note-star-icon.png";
import burger_menu from "../../public/assets/burger_menu.svg";
import rocket from "../../public/assets/rocket-removebg.png";
import button_right from "../../public/assets/arrow_right.svg";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative  mx-auto">
      {/* Top Gradient Banner */}
      <div className="w-full bg-gradient-fc-to-cb z-10 nav-container bg-custom-pink md:h-[46px] h-[59px] pt-[6px]">
        <div className="md:text-[22px] text-[14px] text-white md:flex justify-center items-center hidden ">
          <span>
            <Image
              src={rocket}
              alt="Rocket Icon"
              className="inline-block w-[20px] h-[20px] mr-2"
            />
          </span>
          <span className="text-[#00E7F9] font-extrabold text-[1rem] lg:text-[22px]">
            FRESH BEGINNINGS SALE:{" "}
          </span>{" "}
          <span className="font-figtree font-bold ml-1">
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </div>

        {/* mobile text */}
        <div className=" text-white md:hidden flex justify-center items-center py-[12px]">
          <h1 className="text-[#00E7F9] text-[16px] font-extrabold font-figtree">
            <span>
              <Image
                src={rocket}
                alt="Rocket Icon"
                className="inline-block w-[20px] h-[20px] mr-2"
              />
            </span>
            FRESH BEGINNINGS SALE:{" "}
            <span className="text-[#FFFFFF] ml-1">!</span>
          </h1>
        </div>
      </div>

     {/* Full Hero section  */}
      <div className="container mx-auto relative ">
        {/* Background Image Positioned to the Right */}
        <div className="absolute md:right-[99px] md:top-[50px] top-[47px] z-0  pointer-events-none md:pt-[9px] pt-[15px] md:px-0 px-10">
          <Image
            src={right_hero_image}
            alt="Hero Right Background"
            className="md:w-[666px] md:h-[679px]  object-contain"
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
        <div className="relative z-10  mx-auto ">
          {/* Header */}
          <header className="md:flex hidden justify-between md:h-[74px] md:mt-[35px] ">
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

        {/* Left Content section*/}
          <div className="md:flex justify-between items-center w-full md:mt-[30px] mt-[359px]">
            <div className=" relative z-10 max-w-xl mt-[30px]">
              <div className="md:text-start text-center md:px-0 px-[20px]">
                <h2 className="md:px-[0px] px-[20px] font-bold leading-tight font-urbanist md:text-[35px] text-[25px] text-[#FFFFFF] md:-translate-y-0 -translate-y-5">
                  Want to Turn Social Media Into a{" "}
                  <span className="text-white">Profitable Career?</span>
                </h2>
                <div className="md:text-start text-center md:px-0 px-[20px]">
                  <h3 className="shadow_text_effect md:block hidden font-bold text-cyan-400 md:text-[35px]/[42px] text-[25px] font-urbanist md:-translate-y-0 -translate-y-5">
                    Discover your way to success
                    <br />
                    with Fametonic:
                  </h3>
                  <h3 className="px-[20px] shadow_text_effect md:hidden block font-bold text-cyan-400 md:text-[35px]/[42px] text-[25px] font-urbanist md:-translate-y-0 -translate-y-5">
                    Discover your way to success with Fametonic:
                  </h3>
                </div>
              </div>

              {/* Feature List */}
              <div className="md:space-y-[13px] space-y-[10px] md:mt-[16px] mt-[22px] md:px-0 px-[20px] md:-translate-y-0 -translate-y-4">
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
              <div className="mt-[22px] md:hidden block ">
                <p className="text-[#ABABAB] text-[12px] font-medium font-figtree text-center px-[54.5px] md:-translate-y-0 -translate-y-4">
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="text-[10px] text-center font-medium text-[#ABABAB] mt-[19px] font-figtree md:-translate-y-0 -translate-y-4">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>

              {/* GET STARTED Button */}
              <div className="md:mt-[18px] md:pb-0 pb-[40px] md:block flex flex-col items-center justify-center md:-translate-y-0 -translate-y-3">
                <button
                  className="font-figtree font-bold  text-[20px] leading-[100%] tracking-normal align-middle inline-flex items-center justify-center w-[350px] mx-auto md:w-[313px]
                  h-[40px] md:px-0 px-[20px] bg-[#FC004E]  text-white rounded-[10px] shadow-[2px_2px_10px_0px_#00E7F9] hover:bg-[#e6003d] active:bg-[#cc0036] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out mt-8 md:mt-[14px]"
                  >
                  GET STARTED
                  <span className="ml-2">
                    <Image
                      src={button_right}
                      alt="arrow-right"
                      loading="lazy"
                      width="8"
                      height="8"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                    />
                  </span>
                </button>

                <p className="font-figtree font-normal mt-2 text-[12px] leading-[16px] tracking-normal text-center align-middle md:w-[280px]">
                  1-minute quiz for personalized Insights
                </p>
              </div>

              {/*desktop Footer Text */}
              <div className="mt-[22px] md:block hidden">
                <p className="text-[#ABABAB] text-[12px] font-medium font-figtree">
                  By clicking "Get Started", you agree with Terms and
                  Conditions, Privacy Policy, Subscription
                  <br /> Terms
                </p>
                <p className="text-[10px] font-medium text-[#ABABAB] mt-[12px] font-figtree">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
