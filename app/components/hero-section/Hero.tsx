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
      className="pt-36 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      {/* Text */}
      <div className="text sm:w-[60%]">
        <motion.h1
          className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="bg-linear-to-br bg-clip-text text-transparent from-[#FFB3F2] via-[#FFB3F2] to-[#FFB3F2]">
            Liliana Constantino
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="text-white/60 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-4"
        >
          Currently focused on elevating my skills in front-end and back-end development through hand on projects as well as learning about AI foundations and Generative AI through Oracle Univeristy Certification.
        </motion.p>
      </div>

      {/* Image */}
      <motion.div
        className="flex items-center w-[310px] h-[380px] xl:w-[390px] xl:h-[470px] justify-center relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/barcelona.jpg" 
          priority
          fill
          alt="Liliana's profile picture"
          className="object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}
