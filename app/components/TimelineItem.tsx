import Image from "next/image";
import React from "react";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({
  companyImg,
  jobTitle,
  company,
  jobType,
  duration,
  stuffIDid,
}: {
  companyImg: string;
  jobTitle: string;
  company: string;
  jobType: string;
  duration: string;
  stuffIDid: string[];
}) {
  return (
    <div className="flex items-start gap-4 relative">
      <Image
        src="/position-icon.svg"
        width={24}
        height={24}
        alt="company-image"
        className="absolute -translate-x-8 left-0"
        // className=""
      />

      <div className="flex items-start gap-4 pl-4">
        <Image src={companyImg} width={70} height={70} alt="company-image" />

        {/* ALL THE TEXT*/}
        <div className={styles.timeline}>
          <div className="leading-tight">
            <h1 className="text-[2rem] font-bold">{jobTitle}</h1>
            <p className="text-lg font-bold my-3">
              {company} | {jobType}
            </p>
          </div>
          <p className="text-lg text-white/60 my-3">{duration}</p>

          <ul>
            {stuffIDid.map((stuff, index) => (
              <li key={index}>{stuff}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
