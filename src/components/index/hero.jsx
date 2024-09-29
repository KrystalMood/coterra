import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

export const IndexHero = () => {
  const TypedHero = useRef(null);

  useEffect(() => {
    const TypingEffect = new Typed(TypedHero.current, {
      strings: ["Skill", "Talent"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => TypingEffect.destroy();
  }, []);

  return (
    <main className="mx-auto flex h-screen w-3/4 flex-col-reverse gap-x-20 text-center lg:flex-row lg:text-left">
      <motion.div
        className="flex flex-1 items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.section
          className="mt-10 flex flex-1 cursor-default flex-col text-[#131842] lg:mt-0"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl font-black sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Unleash Your <span ref={TypedHero} className="text-[#e68369]" />
            <br />
            In <span className="text-[#e68369]">Coterra</span>
          </motion.h1>
          <br />
          <motion.h3
            className="text-base font-semibold sm:text-lg lg:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Express Your Potential, Connect with the World
            <br className="hidden sm:flex" />
            Empowering Every Creator's Vision.
          </motion.h3>
          <motion.button
            className="mt-6 self-start rounded-full bg-[#e68369] px-6 py-3 text-white transition-all hover:bg-[#d77258]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.section>
        <section className="">
          <img
            src="/heroAboutUs.png"
            alt="Hero"
            className="h-[30rem] scale-x-[-1] transform"
          />
        </section>
      </motion.div>
    </main>
  );
};
