import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { Redirect } from "@/components/404/redirect";
import { Footer } from "@/common/footer";

export const NotFoundPage = () => {
  return (
    <>
      <WebsiteMeta title="404: Not Found | Coterra" description="Maaf, halaman yang Anda cari tidak ditemukan!" />
      <ScrollIndicator />
      <Header />
      <Redirect />
      <Footer />
    </>
  );
};