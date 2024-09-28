import { WebsiteMeta } from "@/common/website-meta";
import { ScrollIndicator } from "@/common/scroll-indicator";
import { Header } from "@/common/header";
import { BlogHero } from "@/components/blog/hero";
import { Footer } from "@/common/footer";
import { RelatedPosts } from "@/components/blog/relatedposts";

export const BlogPage = () => {
  return (
    <>
      <WebsiteMeta title="Blog | Coterra" description="" />
      <ScrollIndicator />
      <Header />
      <BlogHero />
      <RelatedPosts />
      <Footer />
    </>
  );
};