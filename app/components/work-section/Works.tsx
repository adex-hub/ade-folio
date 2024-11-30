import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Offset Africa",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://offsetcomms.africa/",
      about:
        "Offset Communications Africa’s website really allows them to stand out in the PR sector. It shows their works and case studies — highlighting their expertise and educating users about the company philosophy.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: "/offset-folio.svg",
    },
    {
      title: "Shortly",
      gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://lnk-shortener.netlify.app/",
      about:
        "A link shortener for a fictional company that effectively shortens links and stores them. No matter how many links you shorten, you can revisit the site anytime to view and manage your previously shortened links.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: "/shortly.svg",
    },
    {
      title: "Where in the world",
      gitLink: "https://github.com/adex-hub/where-in-the-world",
      liveLink: "https://where-in-the-world-ade.netlify.app/",
      about:
        "A fun tool for checking information about any country in the world such as the country’s native name, currency, population,  border countries etc. It features dynamic routing for each country and theme switch.",
      stack: ["react", "react-router", "javascript", "tailwindcss"],
      img: "/witw.svg",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    {
      title: "Multi-step form",
      gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
      stack: ["html", "sass", "javascript", "ms clarity"],
      img: "/multistep.svg",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
