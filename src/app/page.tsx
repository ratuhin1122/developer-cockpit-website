import { Hero } from "@/components/hero/Hero";
import { Showcase } from "@/components/screenshots/Showcase";
import { InteractiveFeatures } from "@/components/features/InteractiveFeatures";
import { Editions } from "@/components/editions/Editions";
import { Architecture } from "@/components/architecture/Architecture";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <InteractiveFeatures />
      <Editions />
      <Architecture />
    </>
  );
}
