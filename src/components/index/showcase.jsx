import { Rocket, Users, DollarSign, BarChart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showcaseContent = [
  {
    title: "Effortless Setup",
    subtitle: "Get started in minutes with simple tools and templates.",
    image: "/templategf1.jpeg",
    icon: <Rocket size={36} />,
  },
  {
    title: "Collaborative Features",
    subtitle: "Co-create and engage with your audience seamlessly.",
    image: "/templategf2.jpeg",
    icon: <Users size={36} />,
  },
  {
    title: "Monetize Your Content",
    subtitle: "Easily integrate payment options to grow your earnings.",
    image: "/templategf3.jpeg",
    icon: <DollarSign size={36} />,
  },
  {
    title: "Comprehensive Analytics",
    subtitle: "Track your growth and understand your audience better.",
    image: "/templategf1.jpeg",
    icon: <BarChart size={36} />,
  },
];

const ShowcaseTab = ({ post, isActive, onHover }) => {
  return (
    <div
      onMouseEnter={onHover}
      className={`group relative flex flex-col overflow-hidden transition-all duration-300 ${
        isActive ? 'scale-105' : ''
      }`}
    >
      <div className="flex cursor-pointer items-center py-6">
        <span className="absolute transform text-orange-500 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100" style={{ transform: 'translateX(-20px)' }}>
          {post.icon}
        </span>
        <div className="flex flex-col transform transition-all duration-300 ease-out group-hover:translate-x-12">
          <h2 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-orange-500">
            {post.title}
          </h2>
          <p className="mt-1 text-sm text-gray-600">{post.subtitle}</p>
        </div>
      </div>
      <hr className="border-orange-200 transition-all duration-300 group-hover:border-orange-500" />
    </div>
  );
};

const IndexShowcase = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageAnimationRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    gsap.set(section, { opacity: 0 });
    gsap.set(text, { x: -100, opacity: 0 });
    gsap.set(image, { x: 100, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom 110%",
        scrub: 1,
      },
    });

    tl.to(section, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
      .to(text, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })
      .to(
        image,
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 3,
          ease: "power2.out",
        },
        0
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const image = imageRef.current;
    
    if (imageAnimationRef.current) {
      imageAnimationRef.current.kill();
    }

    imageAnimationRef.current = gsap.to(image, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        image.src = showcaseContent[activeIndex].image;
        gsap.to(image, {
          opacity: 1,
          duration: 0.2,
        });
      },
    });
  }, [activeIndex]);

  return (
    <main
      ref={sectionRef}
      className="relative min-h-[110vh] bg-gradient-to-tr from-yellow-50 to-orange-100 py-32"
    >
      <div className="mx-auto ml-28 w-4/5" ref={textRef}>
        <div className="mb-12">
          <h1 className="text-5xl font-light leading-tight text-gray-800">
            <span className="font-bold text-orange-500">
              Build a Community.{" "}
            </span>
            <br />
            Engage with Your Followers and Co-Create Content Together
          </h1>
          <p className="mt-4 w-[40%] text-lg text-gray-600">
            Transform your passion into a thriving online community. Our
            platform provides all the tools you need to create, share, and grow.
          </p>
        </div>
        <div className="flex justify-between">
          <article className="mt-10 flex w-full flex-col justify-between lg:flex-row">
            <div className="grid w-fit grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
              {showcaseContent.map((post, index) => (
                <ShowcaseTab
                  key={post.title}
                  post={post}
                  isActive={activeIndex === index}
                  onHover={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 overflow-hidden">
        <img
          ref={imageRef}
          className="h-[90vh] w-[90vh] rounded-tl-3xl object-cover shadow-2xl outline outline-2 outline-orange-500/20 transition-all duration-500"
          src={showcaseContent[activeIndex].image}
          alt={showcaseContent[activeIndex].title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
      </div>
    </main>
  );
};

export default IndexShowcase;