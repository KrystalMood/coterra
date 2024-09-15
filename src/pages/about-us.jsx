import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { AboutUsHero } from "@/components/about-us/hero";
import { Footer } from "@/common/footer";
import { OurTeam } from "@/components/about-us/team";
import { VisiMisi } from "@/components/about-us/visimisi";
import { WhyExist } from "@/components/about-us/whyexist";

export const AboutUsPage = () => {
  return (
    <>
      <WebsiteMeta title="Tentang Kami | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <AboutUsHero />
      <VisiMisi />
      <WhyExist />
      <OurTeam />
      <Footer />
    </>
  );
};