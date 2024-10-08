import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { AboutUsHero } from "@/components/about-us/hero";
import { Footer } from "@/common/footer";
import { Team } from "@/components/about-us/team";
import { WhyExist } from "@/components/about-us/whyexist";
import { Introduction } from "@/components/about-us/introduction";
import { OurMission } from "@/components/about-us/mission";
import { useRef } from "react";

export const AboutUsPage = () => {
  const learnMoreRef = useRef(null);

  const scrollBelowHero = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <WebsiteMeta title="Tentang Kami | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <AboutUsHero onGetStarted={scrollBelowHero} />
      <div ref={learnMoreRef}>
        <Introduction />
      </div>
      <OurMission />
      <Team />
      <Footer />
    </>
  );
};
