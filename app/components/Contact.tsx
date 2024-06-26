"use client";
import React, { useEffect, useRef, useState } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedTitle from "./AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

const sections = ["home", "work", "about", "contact"];

// NA THIS ONE GO TOO GOOD 😉
export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState<number>(0);

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  if (inView) setSectionInView("contact");

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView, setSectionInView]);

  return (
    <div
      ref={ref}
      id="contact"
      className={` ${syne.className} mt-[100px] px-6 py-12 flex justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
    >
      {/* <h2 className="text-[40px] font-bold">GOT A PROJECT IN MIND?</h2> */}
      <AnimatedTitle
        wordSpace={"mr-[12px]"}
        charSpace={"mr-[0.001em]"}
        className="text-[40px] font-bold"
      >
        GOT A PROJECT IN MIND?
      </AnimatedTitle>
      <button
        className={`text-2xl font-semibold px-3 py-2 rounded-xl border-2 border-white leading-none ${
          viewCount <= 1 && "duration-500 delay-[1700ms]"
        } ${
          inView ? " opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
        data-blobity-radius="12"
      >
        CONTACT ME
      </button>
    </div>
  );
}
