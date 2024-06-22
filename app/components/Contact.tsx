import React from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

// NA THIS ONE GO TOO GOOD 😉
export default function Contact() {
  return (
    <div
      className={` ${syne.className} mt-[100px] px-6 py-12 flex justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
    >
      <h2 className="text-[40px] font-bold">GOT A PROJECT IN MIND?</h2>
      <button className="text-2xl font-semibold px-3 py-2 rounded-xl border-2 border-white duration-300 hover:bg-white hover:text-[#08233b]">
        CONTACT ME
      </button>
    </div>
  );
}
