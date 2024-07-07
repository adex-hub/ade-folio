"use client";
// import Hero from "./components/hero-section/Hero";
// import Works from "./components/work-section/Works";
// import About from "./components/about-section/About";
// import Contact from "./components/contact+footer/Contact";
// import Footer from "./components/contact+footer/Footer";
import { initialBlobityOptions } from "@/utils/blobity.config";
import dynamic from "next/dynamic";
import useBlobity from "blobity/lib/react/useBlobity";

const Hero = dynamic(() => import("./components/hero-section/Hero"), {
  ssr: false,
});
const Works = dynamic(() => import("./components/work-section/Works"), {
  ssr: false,
});
const About = dynamic(() => import("./components/about-section/About"), {
  ssr: false,
});
const Contact = dynamic(() => import("./components/contact+footer/Contact"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/contact+footer/Footer"), {
  ssr: false,
});

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
