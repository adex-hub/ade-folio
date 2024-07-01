"use client";
import React, { useEffect, useRef, useState } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedTitle from "./AnimatedTitle";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });

const sections = ["home", "work", "about", "contact"];

// NA THIS ONE GO TOO GOOD 😉
export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState<number>(0);
  const [formDisplay, setFormDisplay] = useState<boolean>(false);

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

  // This is just for the minimum viable product, we are still gonna make it a full form!

  return (
    <div
      ref={ref}
      id="contact"
      className={` ${syne.className} mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
    >
      <div className="inline">
        <AnimatedTitle
          wordSpace={"mr-2 md:mr-[12px]"}
          charSpace={"mr-[0.001em]"}
          className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold"
        >
          GOT A PROJECT IN MIND?
        </AnimatedTitle>
        <span
          data-blobity
          className="sm:mt-0 text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden"
        >
          CONTACT ME
        </span>
      </div>
      <Link href="mailto:adeola.badero@outlook.com?subject=Let's%20work%20together&amp;body=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can.">
        <button
          className={`text-base ml-auto mt-6 lg:mt-0 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white leading-none ${
            viewCount <= 1 && "duration-500 delay-[1500ms]"
          } ${
            inView ? " opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          data-blobity-radius="12"
        >
          CONTACT ME
        </button>
      </Link>
    </div>
  );
}
