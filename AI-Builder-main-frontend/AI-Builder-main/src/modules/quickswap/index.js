import React, { useEffect, useState } from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import Hero from "./feauture/hero";
import LiquidityProvisioning from "./feauture/liquidyprovisioning";
import Explore from "./feauture/explore";
import LongVolatilty from "./feauture/longvolatility";
import EarnLiquidity from "./feauture/earnliquidity";
import { useParams } from "react-router-dom";
import Navbar from "./components/navbar";


export default function Quickwswap() {
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
    <div className="h-screen w-full sm:overflow-x-visible overflow-x-hidden  font-cabinet">
      <Navbar promptData={promptData} parts={parts} />
      <Hero promptData={promptData} parts={parts} />
      <LiquidityProvisioning promptData={promptData} parts={parts} />
      <LongVolatilty promptData={promptData} parts={parts} />
      <EarnLiquidity promptData={promptData} parts={parts} />
      <Explore promptData={promptData} parts={parts} />
    </div>
  );
}
