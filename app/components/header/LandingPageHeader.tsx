"use client";

import Image from "next/image";
import LottieConstructionAnimation from "../lottieanimations/lottieConstructionAnimation";

export default function LandingPageHeader() {
  return (
    <>
      <div className="order-first  flex flex-col justify-center h-full  ">
        <h1 className="sm:flex-col md:flex text-5xl lg:text-6xl  font-grotesk font-bold h-full md:w-fit leading-none md:leading-tight">
          Navigating the
          <br className="hidden lg:inline-block" /> Digital Landscape
          <br className="hidden lg:inline-block" /> for success
        </h1>
        <div className="lg:hidden ">
          <img
            src="/mobileAnimationFrame.svg"
            alt="Lottie Static"
            className="w-full h-64 scale-150"
          />
        </div>
        <div className="order-last flex flex-col justify-between gap-5 lg:gap-9  h-full  lg:pt-9 ">
          <p className="text-xl md:leading-7 text-black ">
            Our digital marketing agency helps businesses
            <br className="hidden lg:inline-block" /> grow and succeed online
            through a range of
            <br className="hidden lg:inline-block" /> services including SEO,
            PPC, social media marketing,
            <br className="hidden lg:inline-block" /> and content creation.
          </p>
          <div className="">
            <button className=" bg-slate-900 text-xl md:leading-7 text-white font-grotesk px-9 py-5 rounded-[14px] w-full md:w-[264px] ">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex justify-center items-center h-full order-2 ">
        <LottieConstructionAnimation />
      </div>
    </>
  );
}
