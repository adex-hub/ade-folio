import React from "react";

export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] py-[6px] px-3 rounded-[4px] font-bold text-lg">
      {children}
    </p>
  );
}
