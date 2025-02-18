import Label from "../label/Label";
import LabelText from "../label/LabelText";
import StepsAccordion from "./accordion";

export default function WorkingProcessSection() {
  const content = [
    {
      summary: "Consultation",
      textContent:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      summary: "Research and Strategy Development",
      textContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a magnam assumenda mollitia, harum minus corrupti tempora eveniet, enim minima tenetur explicabo ducimus dolores doloribus nihil dolorem accusamus, nostrum aut.",
    },
    {
      summary: "Implementation",
      textContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a magnam assumenda mollitia, harum minus corrupti tempora eveniet, enim minima tenetur explicabo ducimus dolores doloribus nihil dolorem accusamus, nostrum aut.",
    },
    {
      summary: "Monitorizing and Optimization",
      textContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a magnam assumenda mollitia, harum minus corrupti tempora eveniet, enim minima tenetur explicabo ducimus dolores doloribus nihil dolorem accusamus, nostrum aut.",
    },
    {
      summary: "Reporting and Communication",
      textContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a magnam assumenda mollitia, harum minus corrupti tempora eveniet, enim minima tenetur explicabo ducimus dolores doloribus nihil dolorem accusamus, nostrum aut.",
    },
    {
      summary: "Continual Improvement",
      textContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a magnam assumenda mollitia, harum minus corrupti tempora eveniet, enim minima tenetur explicabo ducimus dolores doloribus nihil dolorem accusamus, nostrum aut.",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center text-center md:text-left gap-5 lg:gap-10 flex-wrap md:flex-nowrap lg:flex-wrap md:justify-normal ">
        <Label text="Our Working Process" />
        <LabelText>
          Step-by-Step Guide to Achieving
          <br className="hidden md:inline-block" />
          Your Business Goals
        </LabelText>
      </div>
      {content.map((item, index) => (
        <div key={index}>
          <StepsAccordion
            summary={item.summary}
            textContent={item.textContent}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
