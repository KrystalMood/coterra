import { ScrollIndicator } from "@/common/scroll-indicator";
import { WebsiteMeta } from "@/common/website-meta";
import LoginMain from "@/components/authentication/login";

export const LoginPage = () => {
  return (
    <>
      <WebsiteMeta title="Login | Coterra" description="" />
      <ScrollIndicator />
      <LoginMain />
    </>
  );
};

export default LoginPage;
