// "use client";
import Link from "next/link";
import { Syne } from "next/font/google";
import Image from "next/image";
import { useView } from "@/contexts/ViewContext";
import { useEffect } from "react";

const syne = Syne({ subsets: ["latin"] });

function NotFound() {
  // const { setSectionInView } = useView();

  // useEffect(() => {
  //   setSectionInView("");
  // });

  return (
    <main className="text-center space-y-6">
      <div className="grid grid-cols-20 md:flex gap-1 md:gap-4 pt-[40vh] pb-10 justify-center w-full text-center">
        <h1 className="text-xl col-span-17 md:text-7xl font-bold text-center">
          Page not found
        </h1>
        <div className="relative col-span-3">
          <Image className="w-fit" src="/pnf.svg" fill alt="remorse" />
        </div>
      </div>
      <Link
        href="/"
        className={`text-2xl font-semibold px-3 py-2 uppercase ${syne.className} hover:bg-white hover:text-[#08233b] duration-300 rounded-xl border-2 border-white leading-none`}
      >
        Come back home
      </Link>
    </main>
  );
}

export default NotFound;
