import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Introduction = () => {
  const mainRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(mainRef.current, { autoAlpha: 0, y: 30 });
      gsap.set(containerRef.current.children, { autoAlpha: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top bottom",
          end: "bottom 90%",
          scrub: 1,
        }
      });

      tl.to(mainRef.current, {
        duration: 2,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out"
      })
      .to(containerRef.current.children, {
        duration: 2,
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.4");
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-orange-50 py-20">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="text-center">
          <h1 className="mb-6 text-4xl font-black leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
            Make Your <span className="text-[#e68369]">Ideas</span> Come <br />
            True with <span className="text-[#e68369]">Coterra</span>
          </h1>
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-8 text-lg text-gray-600 sm:text-xl">
              At <span className="font-bold text-[#e68369]">Coterra</span>, we
              started with a simple idea: to give creators the freedom to share
              their stories with the world. What began as a small project has
              now grown into a thriving community where creativity knows no
              bounds.
            </p>
            <Sparkles className="absolute -left-6 -top-6 h-12 w-12 text-yellow-400 opacity-75" />
            <Sparkles className="absolute -bottom-6 -right-6 h-12 w-12 text-yellow-400 opacity-75" />
          </div>
        </div>
      </section>
    </main>
  );
};