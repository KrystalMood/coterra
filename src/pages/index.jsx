import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { IndexHero } from "@/components/index/hero";
import { ShapeTheFuture } from "@/components/index/shape-the-future";
import { Reviews } from "@/components/index/reviews";
import { IndexFeatures } from "@/components/index/features";
import Footer from "@/common/footer";
import IndexShowcase from "@/components/index/showcase";

export const IndexPage = () => {
  return (
    <>
      <WebsiteMeta title="Beranda | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <IndexHero />
      <IndexShowcase />
      <IndexFeatures />
      <ShapeTheFuture />
      <Reviews />
      <Footer />
    </>
  );
};