import React from "react";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase whitespace-nowrap bg-linear-to-r from-[#d9d9d91f] to-[#7373731f] px-2 py-[6px] md:py-[6px] md:px-3 rounded-[4px] font-medium md:font-bold text-base lg:text-lg">
      {children}
    </p>
  );
}
