import React, { useEffect, useState } from "react";
import { useTemplate } from "../../context/AiContext";
import { Link } from "react-router-dom";
import NavFootLayout from "../home/layouts/NavFootLayout";
import ReactConfetti from "react-confetti";
import { toast, ToastContainer } from "react-toastify";

const Preview = () => {
  const { id } = useTemplate();
  return (
    <NavFootLayout>
      <div className="max-w-[1440px] mx-auto h-screen">
        <ReactConfetti />
        <div className="px-[5%] pt-[10%] h-[100%] ">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-white font-clash text-[30px] sm:mt-[6%] mt-[10%] sm:text-left text-center">
              Congratulations your site is Ready!!!
            </h4>
            {/* <div className="mt-[3%]">
              <Link
                className=" bg-[#8d00ce] px-8 rounded-[50px] mt-2 sm:mt-2 font-clash text-white font-semibold py-4"
                to={`/generated-page/${id}`}
              >
                Preview Now
              </Link>
            </div> */}
            <a
              class="link text-white mt-[3%]"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://developai.innovateai.dev/generated-page/${id}`
                );
                toast.success("Link Copied");
              }}
            >
              Copy link of the generated website
            </a>
            <div className="px-[4%]">
              <div class="card bg-black outline-dashed sm:w-96 w-full shadow-xl mt-[10%] text-white">
                <div class="card-body">
                  <h2 class="card-title">Dont like the result?</h2>
                  <p className="text-light text-xs text-gray">
                    Fine tuning AI models is an ongoing tasks and AI can make
                    mistakes. If you dont like the website thats being generated
                    let us know.
                  </p>
                  <div class="card-actions justify-end">
                    <button
                      class="btn bg-[#8d00ce] text-white"
                      onClick={() =>
                        (window.location.href = "https://t.me/stacy_white0")
                      }
                    >
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </NavFootLayout>
  );
};

export default Preview;
