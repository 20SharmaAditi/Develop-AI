import React, { useEffect, useState } from "react";
import BrandSlider from "./components/BrandSlider";
import Build from "./components/Build";
import FAQ from "./components/Faq";
import { useParams } from "react-router-dom";
import Chainlist from "./components/Chainlist";


export default function Demo6() {
      const { id } = useParams();
      const [promptData, setPromptData] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
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
          } finally {
            setLoading(false);
          }
        };

        fetchData();
      }, [id]);
      if (loading) {
        return (
          <div className="text-white w-full h-screen flex justify-center items-center bg-black font-clash text-[30px] font-semibold">
            Loading...
          </div>
        );
      }

      const parts = promptData?.data;
  return (
    <div className="h-screen w-full sm:overflow-x-visible overflow-x-hidden  ">
      <div className="max-w-[1440px] mx-auto">
        {/* <Hero /> */}
        <BrandSlider />
        <Build parts={parts} promptData={promptData} />
        <Chainlist />
        <FAQ parts={parts} promptData={promptData} />
        {/* 
            <Products/> 
           <Chainlist/>
           <Pricings/>
           <FAQ/>  */}
      </div>
    </div>
  );
}
