import React from "react";

export default function Solar({ parts, promptData }) {
  const benefits = parts?.benefits;
  const firstBenefit = benefits && benefits.length > 0 ? benefits[0] : null;
   const secondBenefit = benefits && benefits.length > 1 ? benefits[1] : null;
  return (
    <div className="max-w-[1440px] mx-auto mt-[6%]">
      {promptData && (
        <div className=" px-[5%] pt-[5%] pb-[3%]">
          <div className="grid sm:grid-cols-4 gap-7 h-[520px]">
            <div className="col-span-1">
              <div className="flex justify-between gap-7 flex-col h-full">
                <div>
                  <h5 className="font-clash text-3xl font-semibold leading-tight">
                    {firstBenefit.title}
                  </h5>
                  <p className="font-clash font-medium mt-3">
                    {firstBenefit.paragraph}
                  </p>
                </div>
                <div className="w-full h-[70%] bg-black rounded-[50px]"></div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-full bg-black rounded-[50px]"></div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-between gap-7 flex-col h-full">
                <div>
                  <h5 className="font-clash text-3xl font-semibold leading-tight">
                    {secondBenefit.title}
                  </h5>
                  <p className="font-clash font-medium mt-3">
                    {secondBenefit.paragraph}
                  </p>
                </div>
                <div className="w-full h-[70%] bg-black rounded-[50px]"></div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full h-full bg-black rounded-[50px]"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
