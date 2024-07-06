import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const curYear = new Date().getFullYear();

export default function Footer() {
  const { setSectionInView } = useView();

  return (
    <section
      id="footer"
      className="my-6 sm:my-8 text-sm sm:text-base lg:text-lg flex md:justify-between justify-center"
    >
      <p>
        <span className="text-xl sm:text-2xl">&copy;</span> {curYear} . ADEOLA
        BADERO . ALL RIGHTS RESERVED
      </p>
      <Link
        className="md:flex hidden items-center gap-1 leading-tight"
        href="#home"
        data-blobity-offset-x="2"
        data-blobity-offset-y="0"
        onClick={() => setSectionInView("home")}
      >
        <Icon icon="mdi:arrow-top" className="text-2xl rounded-2xlt" />
        <p className="underline leading-tight">SCROLL TO TOP</p>
      </Link>
    </section>
  );
}
