"use client";
import { tailspin } from "ldrs";

tailspin.register();

export default function Loading() {
  return (
    <div className="z-[1000] absolute h-screen w-[80%] flex items-center justify-center">
      <l-tailspin size="56" stroke="8" speed="0.9" color="#548FBA"></l-tailspin>
    </div>
  );
}
