import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { AboutUsHero } from "@/components/about-us/hero";
import { Footer } from "@/common/footer";
import { OurTeam } from "@/components/about-us/team";
import { WhyExist } from "@/components/about-us/whyexist";
import { Introduction } from "@/components/about-us/introduction";
import { Team } from "@/components/about-us/team2";
import { OurMission } from "@/components/about-us/mission";

export const AboutUsPage = () => {
  return (
    <>
      <WebsiteMeta title="Tentang Kami | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <AboutUsHero />
      <Introduction />
      <OurMission />
      <Team/>
      <Footer />
      {/* <VisiMisi />
      <WhyExist />
      <OurTeam />
      <Footer /> */}
    </>
  );
};