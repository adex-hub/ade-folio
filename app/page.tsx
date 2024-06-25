"use client";
import Works from "./components/Works";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { initialBlobityOptions } from "@/utils/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";

export default function Home() {
  const blobity = useBlobity(initialBlobityOptions);

  return (
    <main>
      <Hero />
      <Works />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
