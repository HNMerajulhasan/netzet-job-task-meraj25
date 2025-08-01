import Image from "next/image";
import React from "react";
import rocket from "../../../public/assets/rocket-removebg.png";

export const TopSaleSection = () => {
  return (
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
          FRESH BEGINNINGS SALE: <span className="text-[#FFFFFF] ml-1">!</span>
        </h1>
      </div>
    </div>
  );
};
