import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";

export const BlogCarousel = () => {
  const carousel = useRef(null);

  useEffect(() => {
    new Splide(carousel.current, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      breakpoints: {
        1024: {
          perPage: 1,
        },
      },
    }).mount();
  }, []);

  return (
    <section ref={carousel} className="splide overflow-x-hidden">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img className="h-96 w-full object-cover" />
          </li>
        </ul>
      </div>
    </section>
  );
};