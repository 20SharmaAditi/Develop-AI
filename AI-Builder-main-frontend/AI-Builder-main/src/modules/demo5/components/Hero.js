
import { IconContext } from "react-icons";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import mask from "../assets/mask.svg"

function Hero({ promptData, parts }) {
  return (
    <div>
      {promptData && (
        <div className="w-full h-full bg-[#F9F9F9] text-black pb-[3%] font-clash">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid sm:grid-cols-12  gap-7 items-center  w-full sm:h-[650px] sm:px-[5%] px-[4%] pt-[12vh]  ">
              <div className="col-span-6 w-full h-full bg-[#FDD835] rounded-[50px] sm:px-16 px-6 sm:py-14 py-8 relative">
                <div>
                  <h1 className=" sm:text-5xl text-black text-4xl font-semibold leading-tight">
                    {parts.tagline}
                  </h1>
                  <p className="text-base  mt-6 mb-8 font-medium">
                    {parts.descriptions}
                  </p>
                  <button className="bg-black text-white px-[30px] py-[15px] rounded-[50px] font-medium">
                    LEARN MORE
                  </button>
                </div>
              </div>
              <div className="col-span-6 w-full h-full">
                <div className=" h-full flex flex-col gap-7">
                  <div className=" h-[350px] bg-black rounded-[50px] "></div>
                  <div className="h-[190px] rounded-xl">
                    <div className="flex w-full h-full gap-7 ">
                      <div className=" w-full h-full bg-black rounded-[50px]"></div>
                      <div className=" w-full h-full flex justify-between flex-col ">
                        <p> {parts.vision}</p>
                        <div className="flex gap-2 items-center ">
                          <IconContext.Provider value={{ size: "25px" }}>
                            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
                              <MdOutlineKeyboardArrowLeft />
                            </div>
                            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
                              <MdOutlineKeyboardArrowRight />
                            </div>
                          </IconContext.Provider>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
