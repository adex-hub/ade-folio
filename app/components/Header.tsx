import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed max-w-[1223px] w-full z-10">
      <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] mt-8 backdrop-blur-md">
        <Image src="/ade-logo.svg" width={32} height={36} alt="logo" />
        {/* Would make them "click to navigate" later */}
        <ul className="flex gap-12 text-white/25">
          <li className="text-white">Home</li>
          <Link href="#work">Work</Link>
          <li>About</li>
          <li>Blog</li>
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
