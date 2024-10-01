import { ScrollIndicator } from "@/common/scroll-indicator";
import { WebsiteMeta } from "@/common/website-meta";
import SignUpHero from "@/components/sign-up/hero";

export const SignUpPage = () => {
  return (
    <>
      <WebsiteMeta title="Sign Up | Coterra" description="" />
      <ScrollIndicator />
      <SignUpHero />
    </>
  );
};
