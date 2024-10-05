import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam commodi ipsa incidunt impedit veniam sit at deleniti aspernatur! Est voluptatum nisi eum quam autem sapiente perferendis porro odit exercitationem nostrum!",
    name: "Lorem ipsum",
    company: "lorem ipsum",
    picture: "/templategf1.jpeg",
  },
  {
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam commodi ipsa incidunt impedit veniam sit at deleniti aspernatur! Est voluptatum nisi eum quam autem sapiente perferendis porro odit exercitationem nostrum!",
    name: "Lorem ipsum",
    company: "lorem ipsum",
    picture: "/templategf2.jpeg",
  },
  {
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam commodi ipsa incidunt impedit veniam sit at deleniti aspernatur! Est voluptatum nisi eum quam autem sapiente perferendis porro odit exercitationem nostrum!",
    name: "Lorem ipsum",
    company: "lorem ipsum",
    picture: "/templategf3.jpeg",
  },
];

const ReviewPost = ({ post }) => {
  const cardRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const stars = starsRef.current;

    gsap.set(card, { opacity: 0, y: 50 });
    gsap.set(stars.children, { opacity: 0, scale: 0 });

    ScrollTrigger.create({
      trigger: card,
      start: "top bottom-=100",
      onEnter: () => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out"
        });
        gsap.to(stars.children, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)"
        });
      }
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.05 }}
      className="rounded-md bg-[#e68369] px-4 py-4 shadow-lg hover:-translate-y-1 hover:shadow-xl"
    >
      <div ref={starsRef} className="mb-3 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="mr-2 h-5 w-5 text-white shadow-xl"
            fill="currentColor"
          />
        ))}
      </div>
      <p className="text-white">{post.review}</p>
      <div className="mt-2 flex items-center">
        <img
          src={post.picture}
          alt={post.name}
          className="mr-3 h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-white">{post.name}</h3>
          <p className="font-thin text-white">{post.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Reviews = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    gsap.set(section, { opacity: 0 });
    gsap.set(heading, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom-=100",
        end: "bottom center",
        scrub: 1,
      }
    });

    tl.to(section, {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }).to(heading, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main
      ref={sectionRef}
      className="min-h-[50%]"
    >
      <div className="container mx-auto flex w-3/4 flex-col items-center py-20">
        <h2 ref={headingRef} className="mb-12 text-center text-4xl font-bold text-[#d16d53]">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((post, index) => (
            <ReviewPost key={index} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Reviews;