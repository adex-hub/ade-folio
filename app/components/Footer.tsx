import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { useEffect } from "react";

const curYear = new Date().getFullYear();

export default function Footer() {
  const { setSectionInView } = useView();

  return (
    <div className="my-8 text-lg flex justify-between">
      <p>
        <span className="text-2xl">&copy;</span> {curYear} . ADEOLA BADERO . ALL
        RIGHTS RESERVED
      </p>
      <Link
        className="flex items-bottom gap-1"
        href="#home"
        data-blobity-offset-x="2"
        data-blobity-offset-y="0"
        onClick={() => setSectionInView("home")}
      >
        <Icon icon="mdi:arrow-top" width={24} height={24} />
        <p className="underline">SCROLL TO TOP</p>
      </Link>
    </div>
  );
}
