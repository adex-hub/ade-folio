"use client";
import React from "react";
import Title from "./Title";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";

const syne = Syne({ subsets: ["latin"] });

// LOOK AT THE SKILLS SECTION AGAIN BEFORE GOING LIVE!

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
    // triggerOnce: true,
  });

  if (inView) setSectionInView("about");

  return (
    <section ref={ref} className="pt-[150px]" id="about">
      <Title>I amplify brand voices through the web</Title>
      {/* <h1 className={`uppercase ${syne.className} text-6xl font-bold`}>
        I amplify brand voices through the web
      </h1> */}

      {/* remainder text */}
      <div className="grid grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 gap-6 text-white/80 text-2xl">
          <p className="leading-[39px]">
            My passion lies in creating strong business solutions that aid
            business growth. Whether it&apos;s a website to boost brand
            publicity or software solutions that streamline otherwise manual
            processes, I love taking brands from point A to the their dreamy
            point B and iteratively improve as time goes on.
          </p>
          <p className="leading-[39px]">
            From writing my first lines of code back in late 2019 to this point
            I have continually refined my development skills overtime picking up
            UI/UX design on the way & solving complex challenges increasing the
            complexity as time goes by to ensure improvement.
          </p>
          <p className="inline leading-[39px]">
            Each challenge is unique so I ensure that I learn and grow through
            each one ensuring that I not only put in my best but also deliver
            solutions that businesses are proud to call their own. Wanna learn
            more? Here&apos;s{" "}
            <Link className="underline" href={"https://drive.google.com"}>
              my résumè
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <h2 className="font-bold text-2xl mb-2">Frontend Tools</h2>
            <p className="text-white/60 text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux
              Toolkit, React Query, HTML5, Git/GitHub, React Hook Form, Formik.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-2">UI Libraries</h2>
            <p className="text-white/60 text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Chakra UI, Framer Motion, GSAP,
              Bootstrap, Chart.js.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-2">Design Tools</h2>
            <p className="text-white/60 text-xl leading-8">
              Figma, FigJam, UX Research, UI Design, Prototyping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
