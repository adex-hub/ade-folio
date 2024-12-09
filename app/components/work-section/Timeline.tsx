"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/bluechip.svg",
    jobTitle: "Software Engineer",
    company: "Bluechip Technologies",
    jobType: "Internship",
    duration: "Mar 2024 - Sept 2024",
    stuffIDid: [
      "Developed fully responsive sidebars for an API marketplace web app utilizing ChakraUI for context menus, mobile drawer menus, and modals to simplify adding, viewing, updating, and deleting data.",
      "Built a reusable table component that reduced code by 15%, improving code efficiency and maintainability.",
      "Collaborated with a senior frontend engineer to develop various application screens, streamlining development and collaboration using GitHub",
      "Worked on a Learning Management System fixing bugs on the frontend while adding and improving features in tandem with the backend developer using Bootsrap and React Bootstrap to streamline component styling.",
      "Integrated seven endpoints in the Role Based Access Control (RBAC) module of a Revenue Assurance application ensuring CRUD operations could be easily performed by the admin.",
      "Developed HTML Templates for partner companies including the financial firm KPMG.",
    ],
  },
  {
    companyImg: "/nnpc.svg",
    jobTitle: "Intern",
    company: "NNPC",
    jobType: "Internship",
    duration: "July 2023 - Sept. 2023",
    stuffIDid: [
      "Came up with cross functional login & sign up page designs that are now integral parts of the tools used within the company.",
      "Led a team of fellow interns to design various templates and UI components common in internal applications such as dashboards, notification tabs, multi-step forms, tables with pagination etc. while making very impactful contributions.",
      "I also helped interns grasp the basics of design enabling them to make meaningful contributions.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
