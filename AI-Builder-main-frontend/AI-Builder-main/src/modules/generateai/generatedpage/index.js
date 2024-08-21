import React, { useState, useEffect } from "react";
import { useAi } from "../../../context/Generated";
import { useParams } from "react-router-dom";

export default function GeneratedPage() {
  const { templates } = useAi();
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSavedIndex = async () => {
      try {
        const response = await fetch(
          `https://ai-builder-backend-bmm6.onrender.com/api/v1/data/promptData/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch the saved index");
        }
        const data = await response.json();
        const savedIndex = parseInt(data.data.savedIndex, 10);
        setSelectedTemplateIndex(savedIndex);
      } catch (error) {
        console.error("Error fetching the saved index:", error);
      }
    };

    fetchSavedIndex();
  }, [id]);

  if (selectedTemplateIndex === null) {
    return (
      <div className="text-white w-full h-screen flex justify-center items-center bg-black font-clash text-[30px] font-semibold">
        Loading...
      </div>
    );
  }

  const selectedTemplate = templates[selectedTemplateIndex];

  if (!selectedTemplate) {
    return <div>Loading...</div>;
  }

  return <div>{selectedTemplate.info}</div>;
}
