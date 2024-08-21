import React, { useEffect, useState } from "react";
import BuildTabs from "./Tab";
import { useParams } from "react-router-dom";

export default function Build() {
  const { id } = useParams();
  const [promptData, setPromptData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ai-builder-backend-bmm6.onrender.com/api/v1/data/promptData/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPromptData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const parts = promptData?.data;
  return (
    <div className="text-white flex flex-col  h-screen justify-center px-[4%] sm:px-[5%]">
      <div className="flex w-full sm:flex-row flex-col justify-between ">
        <h2 className="sm:text-[30px] text-[22px]  font-clash">
          Build professional webiste <br className="sm:flex hidden" /> 10x
          faster with the help of AI
        </h2>
        <p className="sm:w-[500px] w-full font-circular sm:text-base text-sm sm:py-0 py-5 ">
          Now everyone can be a web3 builder! With Webstudio's intuitive tools,
          you can quickly build the interface of a new website powered by smart
          contracts. It&apos;s like a game: simple, fun, and easy.
        </p>
      </div>
      <div className="">
        <BuildTabs promptData={promptData} parts={parts} />
      </div>
    </div>
  );
}
