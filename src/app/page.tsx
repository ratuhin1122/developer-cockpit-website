import { Hero } from "@/components/hero/Hero";
import { Showcase } from "@/components/screenshots/Showcase";
import { InteractiveFeatures } from "@/components/features/InteractiveFeatures";
import { Editions } from "@/components/editions/Editions";
import { Architecture } from "@/components/architecture/Architecture";
import { DemoSection } from "@/components/demo/DemoSection";
import { Roadmap } from "@/components/roadmap/Roadmap";
import { Partnership } from "@/components/partnership/Partnership";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <InteractiveFeatures />
      <Editions />
      <Architecture />
      <DemoSection />
      <Roadmap />
      <Partnership />
    </>
  );
}
