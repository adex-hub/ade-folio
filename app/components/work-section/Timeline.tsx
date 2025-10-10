"use client";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const TimelineData = [
  {
    companyImg: "/digitalnestlogo.jpg",
    jobTitle: "Web Development",
    company: "Digital Nest",
    jobType: "Internship",
    duration: "Aug. 2024 - Present",
    stuffIDid: [
      "Developed 3+ responsive websites for clients using HTML, CSS, JavaScript, PHP, and WordPress to improve website design and increase user engagement.",
      "Collaborated with a cross-functional team of developers and designers to deliver high-quality code and projects in an agile environment, contributing to 100% on-time sprint delivery.",
      "Created internal projects that enhance the work environment, such as the Salinas Bizznest Scheduler, which pairs interns, and a Google add-on that facilitates room reservations in the office.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px] font-ekamai">
      <h2 className="text-[45px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#C1E899]">EXPERIENCE</h2>

      {/* Vertical timeline line */}
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