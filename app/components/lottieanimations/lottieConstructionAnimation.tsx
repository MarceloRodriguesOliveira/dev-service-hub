import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieConstructionAnimation = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="flex justify-start align-top"
    >
      <DotLottieReact
        src="/animations/AnimationConstruction.lottie"
        autoplay={true}
        loop={true}
        //style={{ width: "100%", height: "auto" }}
        className="w-full h-full scale-150  "
      />
    </div>
  );
};

export default LottieConstructionAnimation;
