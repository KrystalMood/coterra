import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { Footer } from "@/common/footer";
import { PlansHero } from "@/components/plans/hero";
import { PlansBenefits } from "@/components/plans/benefit";

export const PlansPage = () => {
  return (
    <>
      <WebsiteMeta title="Beranda | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <PlansHero />
      <PlansBenefits />
      <Footer />
    </>
  );
};
