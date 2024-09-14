import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const IndexHero = () => {
  const TypedHero = useRef();

  useEffect(() => {
    const TypingEffect = new Typed(TypedHero.current, {
      backSpeed: 50,
      loop: true,
      strings: ["Skill", "Talent"],
      typeSpeed: 50,
    });

    return () => TypingEffect.destroy();
  });

  return (
    <main className="mx-auto mt-28 flex w-4/5 flex-col">
      <section className="flex h-fit w-full flex-col-reverse items-center justify-between text-slate-50 lg:flex-row">
        <div className="mt-10 flex flex-col lg:mt-0 lg:flex-1">
          <h1 className="hidden cursor-default text-justify text-6xl font-bold lg:inline">
            Unleash Your <span ref={TypedHero} />
            <br className="hidden lg:inline" />
            in <span className="text-red-800">Coterra</span>
          </h1>
          <h1 className="inline cursor-default text-center text-6xl font-bold lg:hidden">
            Unleash Your Creativity in{" "}
            <span className="text-red-800">Coterra</span>
          </h1>
          <h4 className="mt-7 cursor-default text-justify text-2xl [text-align-last:center] lg:mt-4 lg:[text-align-last:left]">
            Express Your Potential, Connect with the World
            <br className="hidden lg:inline" />
            Empowering Every Creator's Vision.
          </h4>
          <button
            id="get-started"
            className="mx-auto mt-10 h-fit w-fit rounded-md bg-red-800 px-8 py-5 text-lg font-semibold transition-all duration-300 ease-in-out [box-shadow:_0.3rem_0.3rem_0_#991b1b99] hover:bg-red-700 lg:mx-0 lg:mt-8 lg:hover:scale-105"
          >
            Let's Explore&ensp;
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
        <img
          src="/hero-index.png"
          alt="Hero"
          className="w-3/5 transition-all duration-300 ease-in-out lg:w-2/5 lg:hover:scale-105"
        />
      </section>
    </main>
  );
};