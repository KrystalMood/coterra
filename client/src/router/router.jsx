import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "@/pages/404";
import { IndexPage } from "@/pages";
import { AboutUsPage } from "@/pages/about-us";
import { BlogPage } from "@/pages/blog";
import { FAQPage } from "@/pages/faq";
import { ServicesPage } from "@/pages/services";
import { RegisterPage } from "@/pages/register";
import { SignUpPage } from "@/pages/sign-up";
import { PlansPage } from "@/pages/plans";
import LoginPage from "@/pages/login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={NotFoundPage} />
        <Route path="/" Component={IndexPage} />
        <Route path="/about-us" Component={AboutUsPage} />
        <Route path="/blog" Component={BlogPage} />
        <Route path="/faq" Component={FAQPage} />
        <Route path="/services" Component={ServicesPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/plans" Component={PlansPage} />
        <Route path="/sign-up" Component={SignUpPage} />
        <Route path="login" Component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
};
