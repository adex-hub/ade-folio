"use client";
import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { sectionInView } = useView();

  return (
    <div className="fixed max-w-[1223px] w-full z-10">
      <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] mt-8 backdrop-blur-md">
        <Image src="/ade-logo.svg" width={32} height={36} alt="logo" />
        <ul className="flex gap-12 text-white/25">
          <Link
            href="#home"
            className={`${sectionInView === "home" && "text-white"} `}
          >
            Home
          </Link>
          <Link
            href="#work"
            className={`${sectionInView === "work" && "text-white"} `}
          >
            Work
          </Link>
          <Link
            href="#about"
            className={`${sectionInView === "about" && "text-white"} `}
          >
            About
          </Link>
          <Link
            href="#contact"
            className={`${sectionInView === "contact" && "text-white"} `}
          >
            Contact
          </Link>
        </ul>
        <div className="flex gap-4 text-2xl">
          <Link target="_blank" href="https://linkedin.com/in/adeola-badero">
            <Icon icon="hugeicons:linkedin-01" />
          </Link>
          <Link target="_blank" href="https://github.com/adex-hub">
            <Icon icon="hugeicons:github" />
          </Link>
        </div>
      </div>
    </div>
  );
}
