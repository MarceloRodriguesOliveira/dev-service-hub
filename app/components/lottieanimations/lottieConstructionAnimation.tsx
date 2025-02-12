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
    >
      <DotLottieReact
        src="/animations/AnimationConstruction.lottie"
        autoplay={true}
        loop={true}
        //style={{ width: "100%", height: "auto" }}
        className="w-full h-auto scale-150 lg:scale-[2.0]"
      />
    </div>
  );
};

export default LottieConstructionAnimation;
