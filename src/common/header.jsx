import { Link, useLocation } from "react-router-dom";
import { HamburgerMenu } from "./hamburger-menu";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="mx-auto flex h-full w-4/5 justify-between gap-x-40 ">
      <section className="h-full w-fit py-10">
        <img src="" alt="Logo" />
      </section>
      <section className= "hidden h-full w-fit flex-1 items-center justify-between px-12 py-10 font-semibold text-[#e68369] lg:flex">
        {["Home", "About Us", "Blog", "Plans"].map((menu, index) => {
          const path = menu === "Home" ? "/" : `/${menu.replace(/ /g, "-").toLowerCase()}`;
          const is_active = location.pathname === path;
          return (
            <Link
              key={index}
              to={path}
              className={`rounded-full px-9 py-2 ${is_active ? "bg-[#e68369] text-slate-50" : ""}`}
            >
              {menu}
            </Link>
          );
        })}
      </section>
      <section className="hidden h-full w-fit items-center justify-end py-7 lg:flex">
        <Link
          to="/join-us"
          className="rounded-full border-2 border-[#131842] bg-[#ecceae] px-10 py-3 font-black text-[#131842]"
        >
          Join Us
        </Link>
      </section>
      <section className="flex lg:hidden">
        <HamburgerMenu />
      </section>
    </header>
  );
};