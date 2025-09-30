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
      title: "spacio",
      gitLink: "https://github.com/lilianaconstantino/spacio.git",
      liveLink: "https://spacio.pages.dev/home/",
      about: 
        "Spacio integrates Google’s Workspace, allowing users to view the rooms' calendars and book rooms directly. Once a room is booked, the reservation will be reflected on both the user’s Google Calendar and the room’s calendar.",
      stack: ["react.js", "Apps Script", "JavaScript", "Google Calendar API"], 
      img: "/spacioImg.png",
    },
    {
      title: "Stripe Report",
      gitLink: "https://github.com/lilianaconstantino/Stripe_Report_UI.git",
      liveLink: "https://nijasit.bellsuniversity.edu.ng/",
      about:
        "Built an interactive UI for a reporting dashboard with React.js to streamline and consolidate financial records through a downloadable CSV template.",
      stack: ["react.js", "javascript", "stripe.js", "node.js"],
      img: "/stripe_report-uiImg.png", 
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
          owner={work.owner}
        />
        
      ))}

      <Timeline />
    </section>
  );
}
