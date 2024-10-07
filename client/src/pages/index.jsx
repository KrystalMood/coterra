import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { IndexHero } from "@/components/index/hero";
import { ShapeTheFuture } from "@/components/index/shape-the-future";
import { Reviews } from "@/components/index/reviews";
import { IndexFeatures } from "@/components/index/features";
import Footer from "@/common/footer";
import IndexShowcase from "@/components/index/showcase";
import IndexCTA from "@/components/index/join-now";
import { useRef } from "react";

export const IndexPage = () => {
  const showcaseRef = useRef(null);

  const scrollToShowcase = () => {
    showcaseRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <WebsiteMeta title="Beranda | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <IndexHero onGetStarted={scrollToShowcase} />
      <div ref={showcaseRef}>
        <IndexShowcase />
      </div>
      <IndexFeatures />
      <ShapeTheFuture />
      <Reviews />
      <IndexCTA />
      <Footer />
    </>
  );
};
