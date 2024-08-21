import React, { createContext, useContext, useState, useEffect } from "react";
import Cryzpto from "../modules/cryzpto";

import Quickwswap from "../modules/quickswap";
import Template1 from "../modules/template1";

import Demo2 from "../modules/demo2";
import Demo5 from "../modules/demo5";
import Demo6 from "../modules/demo6";

const AiContext = createContext();

export const AiProvider = ({ children }) => {
  const templates = [
    {
      id: "0",
      name: "Template 1",
      info: <Quickwswap />,
      content: {
        tagline: "Tagline for Template 1",
        description: "Description for Template 1",
      },
    },
    {
      id: "1",
      name: "Template 2",
      info: <Cryzpto />,
      content: {
        tagline: "Tagline for Template 2",
        description: "Description for Template 2",
      },
    },
    {
      id: "2",
      name: "Template 3",
      info: <Template1 />,
      content: {
        tagline: "Tagline for Template 3",
        description: "Description for Template 3",
      },
    },
    {
      id: "3",
      name: "Template 4",
      info: <Template1 />,
      content: {
        tagline: "Tagline for Template 3",
        description: "Description for Template 3",
      },
    },
    {
      id: "4",
      name: "Template 5",
      info: <Demo5 />,
      content: {
        tagline: "Tagline for Template 3",
        description: "Description for Template 3",
      },
    },
    {
      id: "5",
      name: "Template 6",
      info: <Demo2 />,
      content: {
        tagline: "Tagline for Template 3",
        description: "Description for Template 3",
      },
    },
    {
      id: "6",
      name: "Template 6",
      info: <Demo6 />,
      content: {
        tagline: "Tagline for Template 3",
        description: "Description for Template 3",
      },
    },
    // Add more templates as needed
  ];
  
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(null);


   
  const selectedTemplate = templates[selectedTemplateIndex];


  const contextValue = {
    templates,
    selectedTemplate,
  };

  return (
    <AiContext.Provider value={contextValue}>{children}</AiContext.Provider>
  );
};

export const useAi = () => useContext(AiContext);
