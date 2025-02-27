"use client";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "motion/react";
import { useEffect } from "react";

export default function AuroraGradient({
  children,
}: {
  children: React.ReactNode;
}) {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 20%, #020617 50%, ${color})`;
  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen"
    >
      {children}
    </motion.section>
  );
}
