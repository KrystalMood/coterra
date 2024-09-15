import { Link } from "react-router-dom";

export const AboutUsHero = () => {
  return (
    <main
      className="flex min-h-screen w-full flex-col bg-cover bg-center"
      style={{ backgroundImage: 'url("/template.png")' }}
    >
      <section className="flex flex-col items-start justify-center px-10 mt- lg:mt-[18%] lg:ml-[9%]">
        <h1 className="text-outline text-white text-6xl font-bold mb-4">
          About Us
        </h1>
        <h3 className="text-white text-2xl mb-6 max-w-2xl">
          Our platform is built to inspire, empower, and connect content creators from every corner of the world.
        </h3>
        <Link
          to="/register"
          className="rounded-md bg-slate-50 px-5 py-3 text-lg font-semibold text-slate-950 transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:bg-slate-200"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
};
