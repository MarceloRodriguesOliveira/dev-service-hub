import LearnMore from "./learn";
import MiniLabel from "./minilabel";
import Magnifier from "@/public/tokyo-magnifier-web-search-with-elements 2.svg";
import BrowserWindow from "@/public/tokyo-selecting-a-value-in-the-browser-window 1.svg";
import EmoticonWindow from "@/public/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg";
import MessageToAnother from "@/public/tokyo-sending-messages-from-one-place-to-another 1.svg";
import InformationWindows from "@/public/tokyo-many-browser-windows-with-different-information 1.svg";
import GraphIllustatrion from "@/public/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg";

export default function Card({
  upperText,
  bottomText,
  index,
}: {
  upperText: string;
  bottomText: string;
  index: number;
}) {
  const iconTagHandler = (index: number) => {
    switch (index) {
      case 0:
        return <Magnifier />;
      case 1:
        return <BrowserWindow />;
      case 2:
        return <EmoticonWindow />;
      case 3:
        return <MessageToAnother />;
      case 4:
        return <InformationWindows />;
      case 5:
        return <GraphIllustatrion />;
    }
  };

  return (
    <>
      <MiniLabel upperText={upperText} bottomText={bottomText} index={index} />
      <LearnMore index={index} />
      <div
        className="absolute scale-[0.8] right-0 bottom-0 top-28 lg:right-[50px] lg:top-[72px] 
      "
      >
        {iconTagHandler(index)}
      </div>
    </>
  );
}
