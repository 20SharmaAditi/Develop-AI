import React, { useEffect, useState } from "react";
import Navbar from "./feautures/navbar";
import Hero from "./feautures/hero";
import AboutUs from "./feautures/aboutus";
import { useParams } from "react-router-dom";


export default function Cryzpto() {
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
     return <div className="text-white w-full h-screen flex justify-center items-center bg-black font-clash text-[30px] font-semibold">Loading...</div>;
   }

  const parts = promptData?.data;
  return (
    <div>
      <Navbar promptData={promptData} parts={parts} />
      <Hero promptData={promptData} parts={parts} />
      <AboutUs promptData={promptData} parts={parts} />
   
    </div>
  );
}
