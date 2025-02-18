import Card from "../card/card";
import Label from "../label/Label";
import LabelText from "../label/LabelText";

export default function ServiceSection() {
  const colors = ["bg-greyed", "bg-limegreen", "bg-dark"];
  const cardInfo = [
    {
      upperText: "Search engine",
      bottomText: "optimization",
    },
    {
      upperText: "Pay-per-click",
      bottomText: "advertising",
    },
    {
      upperText: "Social media",
      bottomText: "Marketing",
    },
    {
      upperText: "Email",
      bottomText: "Marketing",
    },
    {
      upperText: "Content",
      bottomText: "Creation",
    },
    {
      upperText: "Analytics and",
      bottomText: "tracking",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center gap-2 md:gap-5 lg:gap-10 flex-wrap md:flex-nowrap lg:flex-wrap md:justify-normal ">
        <Label text="Services" />
        <LabelText>
          At our digital marketing agency, we offer a range of services to
          <br className="hidden lg:inline-block" /> help businesses grow and
          succeed online. These services include:
        </LabelText>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
        {cardInfo.map((item, index) => (
          <div
            className={`rounded-[45px] p-12 w-full mx-auto flex flex-col space-between gap-24 relative ${
              colors[index % colors.length]
            } `}
            key={index}
          >
            <Card
              upperText={item.upperText}
              bottomText={item.bottomText}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
