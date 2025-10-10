"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";

export default function Hero() {
  const { setSectionInView } = useView();
  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  return (
    <section
  ref={ref}
  className="pt-28 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-12 sm:justify-between"
  id="home"
>
  {/* Text */}
  <div className="text sm:w-[50%] flex flex-col justify-center">
    <motion.h1
      className="leading-tight font-bold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <span className="font-ekamai whitespace-nowrap text-[clamp(2.5rem,6vw,5rem)] leading-tight text-[#C1E899]">
        Liliana Constantino
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
      className="font-extrabold text-[#FCE0CE] text-[clamp(1.1rem,2vw,1.5rem)] mt-6"
    >
      Currently focused on elevating my skills in front-end and back-end development through
      hands-on projects as well as learning about AI foundations and Generative AI through
      Oracle University.
    </motion.p>
  </div>

  {/* Image */}
  <motion.div
    className="flex items-center justify-center relative w-[340px] h-[430px] md:w-[400px] md:h-[500px] xl:w-[460px] xl:h-[560px]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
  >
    <Image
      src="/barcelona.jpg"
      priority
      fill
      alt="Liliana's profile picture"
      className="object-cover rounded-2xl shadow-lg border-4 border-[#FFBBB4]"
    />
  </motion.div>
</section>

  );
}
