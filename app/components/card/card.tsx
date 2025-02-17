import LearnMore from "./learn";
import MiniLabel from "./minilabel";
import Magnifier from "@/public/tokyo-magnifier-web-search-with-elements 2.svg";

export default function Card({
  upperText,
  bottomText,
  index,
}: {
  upperText: string;
  bottomText: string;
  index: number;
}) {
  return (
    <>
      <MiniLabel upperText={upperText} bottomText={bottomText} index={index} />
      <LearnMore index={index} />
      <div
        className="absolute scale-75 lg:scale-100 right-0 bottom-0 top-28 lg:right-[50px] lg:top-[72px] 
      "
      >
        <Magnifier />
      </div>
    </>
  );
}
