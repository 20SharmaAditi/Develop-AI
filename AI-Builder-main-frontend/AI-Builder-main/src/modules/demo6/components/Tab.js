import React, { useState, useEffect } from "react";


const BuildTabs = ({ promptData, parts }) => {
  const [currentTab, setCurrentTab] = useState("");
  const tabs = parts?.tabfeau;

  useEffect(() => {
    if (tabs && tabs.length > 0) {
      setCurrentTab(tabs[0]._id);
    }
  }, [tabs]);

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="text-white font-clash ">
      <div className="flex sm:flex-row flex-col gap-7 items-center">
        {tabs &&
          tabs.map((tab, index) => (
            <button
              key={index}
              id={tab._id}
              disabled={currentTab === `${tab._id}`}
              onClick={handleTabChange}
              className={`cursor-pointer text-base text-[12px] font-medium  font-poppins ${
                currentTab === `${tab._id}`
                  ? "text-white border-b-4 border-indigo-500 "
                  : "text-white   rounded-[30px]"
              }`}
            >
              {tab.subtitle}
            </button>
          ))}
      </div>
      <div className="">
        {tabs &&
          tabs.map((tab, index) => (
            <div key={index}>
              {currentTab === `${tab._id}` && (
                <div>
                  <div>
                    <h4 className="text-[28px]  font-bold w-[373px]">
                      {tab.title}
                    </h4>
                    <p className="w-[481px]  text-base text-[#606F84] ">
                      {tab.paragraph}
                    </p>
                    <div className="flex flex-col gap-5 ">
                      {tabs &&
                        tab.mini.map((mini, index) => (
                          <div
                            key={mini._id}
                            className="flex items-center"
                          >
                            <h4 className="text-base font-medium">
                              {mini.title}
                            </h4>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default BuildTabs;
