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
      className={`py-6 md:py-[41px] md:px-[60px] !rounded-[45px] font-grotesk ${
        expanded ? `bg-limegreen` : `bg-greyed`
      }`}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <RemoveCircleOutline className="w-7 h-7 md:w-[58px] md:h-[58px] text-black" />
          ) : (
            <AddCircleOutline className="w-7 h-7 md:w-[58px] md:h-[58px] text-black" />
          )
        }
      >
        <div className="font-medium gap-3  md:gap-6 flex justify-center items-center">
          <h2 className="hidden sm:inline-block text-3xl md:text-6xl">
            {"0" + `${index + 1}`}
          </h2>

          <h3 className="text-xl md:text-3xl">{summary}</h3>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <Divider />
        <p className="text-lg py-[30px]">{textContent}</p>
      </AccordionDetails>
    </Accordion>
  );
}
