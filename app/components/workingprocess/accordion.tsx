"use client";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { useState } from "react";

export default function StepsAccordion({
  summary,
  textContent,
  index,
}: {
  summary: string;
  textContent: string;
  index: number;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <Accordion
      expanded={expanded}
      onChange={handleExpansion}
      aria-controls="panel1-content"
      className={` !rounded-2xl sm:!rounded-[45px] font-grotesk ${
        expanded ? `bg-limegreen` : `bg-greyed`
      }`}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <RemoveCircleOutline className="w-7 h-7 md:w-[58px] md:h-[58px] text-black hidden sm:inline-block" />
          ) : (
            <AddCircleOutline className="w-7 h-7 md:w-[58px] md:h-[58px] text-black hidden sm:inline-block" />
          )
        }
      >
        <div className="font-medium gap-3  md:gap-6 flex justify-center items-center text-center sm:text-left py-6 md:py-[41px] md:px-[60px] w-full sm:w-auto ">
          <h2 className="hidden sm:inline-block text-4xl md:text-6xl">
            {"0" + `${index + 1}`}
          </h2>

          <h3 className="text-2xl md:text-3xl">{summary}</h3>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="md:pl-[60px] md:pr-[25px]">
          <Divider />
        </div>
        <p className="text-lg py-[30px]  md:pl-[60px]  ">{textContent}</p>
      </AccordionDetails>
    </Accordion>
  );
}
