"use client";
import { slideUp, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

function Explore({ promptData, parts }) {
    const stats = parts?.stats
    const firstStats = stats && stats.length > 0 ? stats[0] : null;
  return (
    <motion.div
      initial="intial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full "
    >
      {promptData && (
        <div className="max-w-[1440px] mx-auto bg-white pt-[4%] font-clash">
          <div className="w-full flex flex-col gap-7  px-[5%]">
            <div className="grid sm:grid-cols-12  gap-7 w-full h-[420px] ">
              <div className="col-span-3 w-full bg-black rounded-[50px]"></div>
              <div className="col-span-6 w-full bg-[#FDD835] rounded-[50px] p-[9%]">
                <div>
                  <div className="overflow-hidden">
                    <motion.h2
                      custom
                      variants={slideUp}
                      initial="initial"
                      className=" font-semibold text-4xl leading-[1.3]"
                      whileInView="animate"
                    >
                      {parts.feautures}
                    </motion.h2>
                  </div>
                </div>
                <div className="mt-[5%]">
                  <div className="overflow-hidden">
                    <motion.p
                      variants={slideUp}
                      initial="initial"
                      whileInView="animate"
                      className="text-lg font-medium "
                    >
                      {" "}
                      {parts.short_desc}
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="col-span-3 w-full bg-black rounded-[50px]"></div>
            </div>
            <div className="grid sm:grid-cols-12 mt-7 gap-7 w-full h-[420px]">
              <div className="col-span-3 w-full bg-black rounded-[50px]"></div>
              <div className="col-span-3 w-full bg-black rounded-[50px]"></div>
              <div className="col-span-6 relative  w-full bg-black rounded-[50px] ">
                <div className=" absolute p-[4%] h-full w-full">
                  <div className=" h-full text-[30px] font-semibold   bg-white rounded-[20px] p-[9%]">
                    {firstStats.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Explore;
