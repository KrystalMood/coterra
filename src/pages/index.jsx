import { Header } from "@/common/header";
import { WebsiteMeta } from "@/common/website-meta";
import { Features } from "@/components/index/features";
import { IndexHero } from "@/components/index/hero";

export const IndexPages = () => {
  return (
    <>
      <WebsiteMeta title="Beranda | Coterra" description="" />
      <Header />
      <IndexHero />
      <Features />
    </>
  );
};