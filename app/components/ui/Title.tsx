import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.6]);

  return (
   <motion.h1
      ref={titleRef}
      style={{ opacity }}
      className="text-[45px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#C1E899]"
    >
      {children}
    </motion.h1>

  );
}

// -webkit-text-stroke: 0.3px black;
//   letter-spacing: 4px;