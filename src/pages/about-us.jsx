import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { AboutUsHero } from "@/components/about-us/hero";
import { Footer } from "@/common/footer";

export const AboutUsPage = () => {
  return (
    <>
      <WebsiteMeta title="Tentang Kami | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <AboutUsHero />
      <Footer />
    </>
  );
};