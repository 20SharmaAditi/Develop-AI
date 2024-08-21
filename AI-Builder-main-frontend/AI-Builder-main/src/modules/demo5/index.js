import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";

import Services from "./components/Services";
import Explore from "./components/Explore";
import FAQ from "./components/Faq";
import Consultation from "./components/Consultation";
import JoinUs from "./components/JoinUs";
import Solar from "./components/Solar";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Demo5() {
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
    <div className="bg-white text-black">
      <Navbar parts={parts} promptData={promptData} />
      <Hero parts={parts} promptData={promptData} />
      <Services parts={parts} promptData={promptData} />
      <Explore parts={parts} promptData={promptData} />
      <FAQ parts={parts} promptData={promptData} />
      <Consultation parts={parts} promptData={promptData} />
      <Solar parts={parts} promptData={promptData} />
      <JoinUs parts={parts} promptData={promptData} />
    </div>
  );
}
