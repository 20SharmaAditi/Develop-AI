import React from 'react'

export default function JoinUs() {
  return (
    <div>
      {" "}
      <div className="max-w-[1440px] mx-auto bg-[#F9F9F9] font-clash">
        <div className="px-[5%] py-[3%]">
          <div className="grid sm:grid-cols-12 items-center gap-14">
            <div className="col-span-6">
              <div className="col-span-6 w-full h-[500px] bg-[#FDD835] rounded-[50px] px-16 py-14"></div>
            </div>
            <div className="col-span-6 w-full h-full sm:pl-[25%]">
              <div className="flex flex-col justify-end h-full">
                <h4 className="text-3xl font-semibold mb-[7%]">
                  Stay Informed
                </h4>
                <div className="flex flex-col gap-3">
                  <div className="w-full h-[55px] border-[2px] border-black rounded-[50px]">
                    <input type="text" className="w-full h-full bg-transparent px-3 outline-none" placeholder='Enter your Email'/>
                  </div>
                  <div className="w-full h-[55px] bg-[#FDD835] rounded-[50px] flex justify-center items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
