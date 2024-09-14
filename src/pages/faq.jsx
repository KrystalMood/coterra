import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { FAQHero } from "@/components/faq/hero";
import { Footer } from "@/common/footer";

export const FAQPage = () => {
  return (
    <>
      <WebsiteMeta title="FAQ | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <FAQHero />
      <Footer />
    </>
  );
};