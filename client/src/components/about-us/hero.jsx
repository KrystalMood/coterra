import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Book } from "lucide-react";
import { gsap } from "gsap";

export const AboutUsHero = ({ onGetStarted }) => {
  const mainRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ default: { ease: "power3.out" } });

    gsap.set(containerRef.current.children, {
      autoAlpha: 0,
      y: 20,
    });
    gsap.set(imageRef.current, { autoAlpha: 0, x: 20 });

    tl.to(mainRef.current, { duration: 1, backgroundColor : "rgba(255,237,213,1)", ease: "power2.out" })
      .to(containerRef.current.children, {
        duration: 0.4,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.2,
      })
      .to(
        imageRef.current,
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2.out",
          delay: 0.5
        },
        [],
      );
  });

  return (
    <main
      ref={mainRef}
      className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-orange-50 to-orange-100 py-16"
    >
      <div className="container mx-auto w-3/4 sm:px-6">
        <div className="flex flex-col-reverse items-center gap-x-12 lg:flex-row">
          <section
            ref={containerRef}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="mb-6 text-4xl font-black leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
              Where <span className="text-[#e68369]">Creators</span>
              <br /> Thrive
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              Join our platform designed to amplify your creative voice, connect
              with your audience, and turn your passion into a thriving career.
            </p>
            <div className="inline-block">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center rounded-full border-2 border-[#E68369] bg-white px-6 py-3 font-semibold text-[#E68369] transition duration-300 ease-in-out hover:bg-[#E68369] hover:text-white"
              >
                <Book size={20} className="mr-2" />
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </section>
          <section ref={imageRef} className="relative mt-12 flex-1 lg:mt-0">
            <img
              src="/template.png"
              alt="Empowering Creators"
              className="h-auto max-h-[30rem] w-full rounded-lg object-cover shadow-2xl"
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutUsHero;
