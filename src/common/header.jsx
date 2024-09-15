import { Link } from "react-router-dom";
import { HamburgerMenu } from "./hamburger-menu";

export const Header = () => {
  return (
    <>
      <main className="h-24 py-[1rem] bg-slate-950">
        <header className="mx-auto flex h-24 w-4/5 items-center justify-between text-slate-50 xl:h-14">
          <span className="absolute left-1/2 -z-10 h-[35rem] w-[35rem] -translate-x-1/2 transform rounded-full bg-[#12580b] opacity-40 blur-[175px]" />
          <section className="flex h-full w-3/5 items-center lg:w-1/5">
            <Link to="/">
              <img
                src=""
                alt="Logo"
                className="w-32 font-semibold lg:w-40"
              />
            </Link>
          </section>
          <section className="hidden h-full w-3/5 gap-x-14 text-lg font-extrabold lg:flex lg:items-center lg:justify-center">
            {["About Us", "Blog", "Plans"].map((menu, i) => (
              <Link
                to={`/${menu.toLowerCase().replace(/ /g, "-")}`}
                key={i}
                className="transition-all duration-300 ease-in-out hover:text-slate-200 hover:underline"
              >
                {menu}
              </Link>
            ))}
          </section>
          <section className="hidden h-full w-1/5 lg:flex lg:items-center lg:justify-end">
            <Link
              to="/register"
              className="rounded-md bg-slate-50 px-5 py-3 text-lg font-semibold text-slate-950 transition-all duration-300 ease-in-out [box-shadow:_0.3rem_0.3rem_0_#bcbcbc90] hover:scale-105 hover:bg-slate-200"
            >
              Get Started
            </Link>
          </section>
          <HamburgerMenu />
        </header>
      </main>
    </>
  );
};
