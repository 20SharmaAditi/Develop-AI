

function Services({ promptData, parts }) {
  return (
    <div className="bg-white font-clash">
         {promptData && (
      <div className="max-w-[1440px] mx-auto pb-[4%]">
        <div className="grid sm:grid-cols-12  items-start  w-full  px-[5%]  pt-[12vh] ">
          <div className="col-span-6">
            <p className=" font-clash font-medium sm:w-[350px]">
              {" "}
              {parts.mission}
            </p>
          </div>
          <div className="col-span-6">
            <div className="overflow-hidden">
              <h4 className=" text-4xl font-semibold leading-tight">
                We Stride to Lead the way <br /> in the Green Energy
                <br />
                Industry
              </h4>
            </div>
            <div className="mt-10 flex gap-4">
              <button className="bg-black uppercase text-white px-[30px] py-[15px] rounded-[50px] font-medium">
                Get in Touch
              </button>
              <button className="uppercase">Explore our services</button>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-12 px-[5%] mt-[5%]">
          <div className="col-span-6">
            <div className="flex sm:flex-row flex-col gap-5 items-start h-[220px]">
              <div className="sm:w-[70%] w-full h-full bg-black rounded-[50px] "></div>
              <p className="sm:w-[30%] text-sm"> {parts.aboutus}</p>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Services;
