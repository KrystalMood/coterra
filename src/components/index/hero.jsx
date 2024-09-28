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
  }, []);

  return (
    <main className="mx-auto mt-36 flex h-full w-4/5 flex-col-reverse gap-x-20 text-center lg:flex-row lg:text-left">
      <section className="mt-10 flex flex-1 cursor-default flex-col text-[#131842] lg:mt-0">
        <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
          Unleash Your <span ref={TypedHero} />
          <br />
          In <span className="text-[#e68369]">Coterra</span>
        </h1>
        <br />
        <h3 className="text-base font-semibold sm:text-lg lg:text-xl">
          Express Your Potential, Connect with the World
          <br className="hidden sm:flex" />
          Empowering Every Creator's Vision.
        </h3>
      </section>
      <section className="">
        <img src="/heroAboutUs.png" alt="Hero" className="transform scale-x-[-1] h-[30rem]"/>
      </section>
    </main>
  );
};