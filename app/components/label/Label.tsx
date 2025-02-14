export default function Label({ text }: { text: string }) {
  return (
    <div className="">
      <h2 className="font-grotesk text-[40px] px-2 text-black font-medium w-fit bg-limegreen rounded-lg ">
        {text}
      </h2>
    </div>
  );
}
