"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  delay,
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";
import ContraButton from "../about-section/ContraButton";

export default function Hero() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeIn,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);

  return (
    <section
      ref={ref}
      className="pt-36 lg:pt-0 flex flex-col lg:flex-row h-dvh items-center lg:justify-between mb-12 lg:mb-0"
      id="home"
    >
      <div className="text sm:w-4/5 text-center lg:text-start lg:w-[60%] flex flex-col gap-6 lg:gap-11 mb-6 lg:mb-0">
        <div className="flex flex-col gap-4 lg:gap-0">
          <motion.div
            className="grid grid-cols-9 w-fit smm:flex gap-2 mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <p className="text-white/60 text-xl smm:text-2xl lg:text-3xl col-span-6">
              Hey, there
            </p>
            <motion.div
              animate={handWaveAnimation}
              style={{ transformOrigin: "bottom right" }}
              className="col-span-3"
            >
              <Image
                src="/hand-wave.svg"
                width={30}
                height={30}
                alt="hand-waving"
              />
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
            initial={{ opacity: 0 }}
            animate={animateIn1}
          >
            <p className="text-white/60 inline">I&apos;m </p>
            <span className="bg-linear-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
              Adeola Badero
            </span>
            <p>a Design Engineer</p>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={animateIn2}
            className="text-white/40  text-xl smm:text-2xl lg:text-3xl my-3"
          >
            who works across the stack to deliver websites and web apps that
            drive business growth forward.
          </motion.p>
        </div>

        <div className="w-fit mx-auto lg:mx-0">
          <ContraButton />
        </div>
      </div>

      {/* IMAGE */}
      <div data-blobity-tooltip="Engineer">
        <motion.div
          ref={imgRef}
          style={{
            rotate: window.innerWidth >= 1024 ? rotate : "0deg",
          }}
          className="h-image flex items-center w-[310px] h-[380px] xl:w-[390px] xl:h-[470px] justify-center relative"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <Image
            src="/transparent-ade-min.png"
            priority
            fill
            alt="Ade's picture"
            className="bg-image-radial px-10 pt-20"
          />
        </motion.div>
      </div>
    </section>
  );
}
