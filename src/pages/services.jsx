import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { ServicesHero } from "@/components/services/hero";
import { Footer } from "@/common/footer";

export const ServicesPage = () => {
  return (
    <>
      <WebsiteMeta title="Layanan | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <ServicesHero />
      <Footer />
    </>
  );
};