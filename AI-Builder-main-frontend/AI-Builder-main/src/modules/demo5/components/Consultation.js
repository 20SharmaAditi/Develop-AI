import React from "react";

export default function Consultation({parts,promptData}) {
     
  return (
    <div>
      <div className="sm:block hidden">
        <div className="max-w-[1440px] mx-auto">
          {promptData && (
            <div className="px-[5%] font-clash">
              <div className="grid grid-cols-12 justify-between  items-start">
                <div className="col-span-6">
                  <h2 className=" font-semibold text-4xl w-[400px] leading-[1.1] mb-[7%]">
                    {parts?.explore?.title}
                  </h2>
                  <button className="bg-black text-white px-[30px] py-[15px] rounded-[50px] font-medium">
                    BOOK A FREE CONSULTATION
                  </button>
                </div>
                <div className="col-span-6 ">
                  <div className="flex justify-end">
                    <p className="font-medium text-lg w-[400px]">
                      {parts?.explore?.paragraph}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[4%]">
                <div className="grid grid-cols-12 gap-7 w-full h-[400px] ">
                  <div className="col-span-3 w-full relative ">
                    <div className="w-[250px] h-[250px] rounded-full bg-black"></div>
                    <div className="w-[180px] h-[180px] rounded-full bg-black absolute right-0 -bottom-[15%]"></div>
                  </div>
                  <div className="col-span-6 w-full bg-black rounded-full"></div>
                  <div className="col-span-3 w-full relative">
                    <div className="w-[180px] h-[180px] rounded-full bg-black absolute left-0 -top-[30%]"></div>
                    <div className="w-[300px] h-[300px] rounded-full bg-black absolute bottom-0"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
