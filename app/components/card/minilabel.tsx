export default function MiniLabel({
  upperText,
  bottomText,
  index,
}: {
  upperText: string;
  bottomText: string;
  index: number;
}) {
  const colors = [
    "bg-limegreen",
    "bg-white",
    "bg-white",
    "bg-limegreen",
    "bg-white",
    "bg-limegreen",
  ];
  return (
    <div className="font-grotesk text-3xl text-black font-medium  ">
      <h3
        className={`rounded-lg px-2 w-fit
        ${colors[index]}`}
      >
        {upperText}
      </h3>
      <h3
        className={`rounded-lg px-2 w-fit
            ${colors[index]}`}
      >
        {bottomText}
      </h3>
    </div>
  );
}
