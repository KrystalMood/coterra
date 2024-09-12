import { Link } from "react-router-dom";
import { HamburgerMenu } from "./hamburger-menu";

export const Header = () => {
  return (
    <header className="mx-auto flex h-24 w-4/5 items-center text-slate-50 xl:h-36">
      <section className="flex h-full w-2/5 items-center">
        <Link to="/" className="h-fit w-48">
          <img src="" alt="Logo" className="font-semibold" />
        </Link>
      </section>
      <section className="hidden h-full w-3/5 text-lg font-semibold xl:flex xl:items-center xl:justify-end">
        {["About Us", "Blog", "Service", "Get Started"].map((menu, i) =>
          <Link
            to={`/${menu.toLowerCase().replace(/ /g, "-")}`}
            key={i}
            className="mr-14 transition-all duration-300 ease-in-out last:mr-0 last:rounded-lg last:bg-slate-50 last:px-6 last:py-3 last:text-slate-950 hover:underline last:hover:bg-slate-200 last:hover:no-underline"
          >
            {menu}
          </Link>
        )}
      </section>
      <HamburgerMenu />
    </header>
  );
};