import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { IndexHero } from "@/components/index/hero";
import { Features } from "@/components/index/features";
import { Footer } from "@/common/footer";
import { WhyUs } from "@/components/index/why-us";
import { Review } from "@/components/index/review";
import { FaQ } from "@/components/index/faq";

export const IndexPage = () => {
  return (
    <>
      <WebsiteMeta title="Beranda | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <IndexHero />
      <WhyUs />
      <Features />
      <Review />
      <FaQ />
      <Footer />
    </>
  );
};