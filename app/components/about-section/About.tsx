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
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        {/* I amplify brand voices through the web */}I bridge the gap between
        hi-fi design & performant engineering
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I am a Design Engineer who thrives at the intersection of aesthetic
            precision and high-performance engineering. As a Frontend Engineer
            at Vobb, I build scalable, type-safe applications that translate
            complex Figma designs into modular, performant codebases. Beyond
            building to spec, I think critically about how users interact with
            data to ensure each experience delivers measurable business value.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Since 2019, I’ve grown from writing code to leading architecture for
            platforms used by hundreds of users. I’ve delivered systems like
            NiJASIT and optimized legacy pipelines at Vobb for a 95% performance
            gain. I specialize in React, Next.js, and TypeScript, building
            scalable, resilient web applications.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            My focus is on the technical rigor required to move a product from
            design to production. I engineer maintainable, type-safe systems
            that handle high-volume data without compromising the user
            experience. For a detailed overview of my skills and experience,{" "}
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1GF08VxFYAi7fPX7fj9bayN_m0EltFlLy/view?usp=sharing"
              }
            >
              view my résumé here.
            </Link>
          </AnimatedBody>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux
              Toolkit, React Query, HTML5, Git/GitHub, React Hook Form, Vitest,
              Jest.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Motion (for react), GSAP, Bootstrap,
              ReCharts.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, FigJam, UX Research, UI Design, Prototyping.
            </AnimatedBody>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
        <ContraButton />
      </div>
    </section>
  );
}
