export default function Label({ text }: { text: string }) {
  return (
    <div className="bg-limegreen w-fit">
      <h2 className="font-grotesk text-[40px] px-2 text-black font-medium w-fit ">
        {text}
      </h2>
    </div>
  );
}
