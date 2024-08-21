import { useState } from "react";

function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div>
      <div className="font-clash border-b-[2px] border-black  pt-9  ">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full"
        >
          <span className="text-xl font-semibold">{title}</span>
          <svg
            className="fill-[white] shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[white] text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100 pt-4"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden pb-9 w-full  font-semibold text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ({ promptData, parts }) {
  const faqs = parts?.faq;
  return (
    <div>
      <div className="w-full  text-white font-clash">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-[5%]">
            <h2 className=" font-semibold text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col mt-[1%]">
              {faqs &&
                faqs.map((faq, index) => (
                  <div key={index}>
                    <Accordion title={faq.question} answer={faq.answer} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
