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
      <Magnifier />
    </>
  );
}
