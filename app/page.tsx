import Works from "./components/Works";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="max-w-[1223px] mx-auto">
      <Header />
      <Hero />
      <Works />
      <Timeline />
    </main>
  );
}
