import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import ContraButton from "./ContraButton";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        style={{ color: "#C1E899" }}
        className="font-ekamai text-[50px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
      >
       ABOUT 
      </AnimatedTitle>
      <div className="grid grid-cols-1 gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="font-extrabold text-white/60 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-4">
            I am a First-Genertaion Mexican-American Latina navigating the tech industry and advocating for our representation in the field.  I aspire to deepen my expertise in web development to help businesses and organizations succeed online and I am eager to expand my knowledge and explore other areas of technology, such as software development and software engineering.
          </AnimatedBody>
        </div>
      </div>
    </section>
  );
}