import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, fadeIn } from "../../utils/motion";
import web3 from "../../assets/web3.png";

import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="w-full  relative"
    >
      <div className="w-full h-full relative -top-[5%]   ">
        <motion.div className=" rotate-180 ">
          <motion.div
            variants={fadeIn("down", "tween", 0.8, 1)}
            className=" topp w-[100%] sm:h-[200px] h-[110px] "
          ></motion.div>
        </motion.div>
      </div>
      <div className="relative"></div>
      <div className="gradient-01 absolute w-[30%] inset-0 z-[-10]" />

      <div className="sm:px-0 px-[4%] mt-[6%] flex flex-col justify-center items-center w-full ">
        <h5 className="text-white sm:text-base text-sm btn px-5 py-2 rounded-[50px] font-clash sm:mb-[2%] mb-[4%]">
          Powered by Innovate AI
        </h5>
        <h1 className="text-white font-clash sm:text-[50px] text-[32px] text-center font-bold sm:leading-[50px] leading-[36px] ">
          Revolutionizing Website Creation <br className="sm:flex hidden" />{" "}
          with Intelligent Innovation
        </h1>
        <motion.p className="text-white text-center font-circular sm:text-lg py-3 sm:py-[1.5%] sm:w-[500px] w-full">
          Get your business online in 30 seconds with the #1 AI website builder
          and development toolkit, regardless of your technical background.
        </motion.p>

        <button
          onClick={() => {
            navigate("/generate");
          }}
          className=" bg-[#8d00ce] px-8 rounded-[50px] mt-2 sm:mt-2 font-clash text-white font-semibold py-2"
        >
          Generate your website
        </button>

        {/* <div className="sm:mt-[5%] mt-[10%]">
          <motion.img className="" src={web3} alt="web3" />
        </div> */}
      </div>
    </motion.div>
  );
}
