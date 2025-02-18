import Cta from "@/public/cta.svg";

export default function CallToActionSection() {
  return (
    <div className="bg-greyed p-[60px] rounded-[45px] flex justify-between relative ">
      <div className="font-grotesk flex flex-col gap-6">
        <h3 className="font-bold text-3xl text-black ">
          Lets Make things happen
        </h3>
        <p className="text-lg text-black font-medium ">
          Contact us today to learn more about how our digital
          <br className="hidden sm:inline-block" /> marketing services can help
          your business grow and
          <br className="hidden sm:inline-block" /> succeed online.
        </p>
        <button className="bg-dark text-white py-5 px-9 text-xl leading-7 rounded-[14px] md:w-fit ">
          Get your free proposal
        </button>
      </div>
      <div className=" hidden sm:block absolute -right-10 lg:right-0 lg:bottom-0 scale-50 lg:scale-100 ">
        <Cta />
      </div>
    </div>
  );
}
