import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { IndexHero } from "@/components/index/hero";
import { ShapeTheFuture } from "@/components/index/shape-the-future";
import { Reviews } from "@/components/index/reviews";
import { IndexFeatures } from "@/components/index/features";

export const IndexPage = () => {
  return (
    <>
      <WebsiteMeta title="Beranda | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <IndexHero />
      <ShapeTheFuture />
      <IndexFeatures />
      <Reviews />
    </>
  );
};