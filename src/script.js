document.addEventListener("DOMContentLoaded", () => {
  // Add Scroll Effect On Get Started Button.
  document.getElementById("get-started").addEventListener("click", () => {
    document.getElementById("dive-into-the-process").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Add Carousel On Home Page
  new Splide("#karosel-1", {
    arrows: false,
    autoplay: true,
    pagination: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    perPage: 1,
    snap: true,
    type: "loop",
  }).mount();

  // Typing Effect On Home Page
  const TypedHomeHero = new Typed("#typed-home-hero", {
    backspeed: 50,
    loop: true,
    strings: ["Creativity", "Potential", "Skill"],
    typeSpeed: 50,
  });

  return () => TypedHomeHero.destroy();
});