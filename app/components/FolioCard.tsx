"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";
import { useInView } from "react-intersection-observer";

export default function FolioCard({
  title,
  img,
  gitLink,
  liveLink,
  about,
  stack,
}: {
  img: string;
  title: string;
  gitLink: string;
  liveLink: string;
  about: string;
  stack: string[];
}) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`w-full rounded-[20px] backdrop-blur-md bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] flex gap-10 p-6 duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <Image
        src={img}
        width={420}
        height={700}
        alt="work"
        className="rounded-[10px]"
      />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold">{title}</h2>
          <div className="flex gap-4 text-4xl">
            <Link
              href={liveLink}
              className="rounded-full bg-icon-radial p-3 hover:bg-red"
              target="_blank"
              aria-label="View Github Repo"
              data-blobity-radius="34"
              data-blobity-magnetic="true"
            >
              <Icon icon="line-md:external-link-rounded" />
            </Link>
            <Link
              href={gitLink}
              className="rounded-full bg-icon-radial p-3"
              target="_blank"
              aria-label="View Live Demo"
              data-blobity-radius="34"
              data-blobity-magnetic="true"
            >
              <Icon icon="mingcute:github-line" />
            </Link>
          </div>
        </div>
        <p className="text-base text-white/70">{about}</p>
        <div className="flex gap-4">
          {stack.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
