import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const curYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="my-8 text-lg flex justify-between">
      <p>
        <span className="text-2xl">&copy;</span> {curYear} . ADEOLA BADERO . ALL
        RIGHTS RESERVED
      </p>
      <div className="flex items-bottom gap-1">
        <Icon icon="mdi:arrow-top" width={24} height={24} />
        <p className="underline">SCROLL TO TOP</p>
      </div>
    </div>
  );
}
