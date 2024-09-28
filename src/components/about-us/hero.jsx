import { Link } from "react-router-dom";

export const AboutUsHero = () => {
  return (
    <main className="mx-auto mt-24 flex h-full w-4/5 flex-col-reverse gap-x-20 text-center lg:flex-row lg:text-left">
      <section className="flex flex-1 justify-between">
        <img src="/heroAboutUs.png" alt="heroAboutUs" className="h-[30rem]" />
        <div className="flex flex-1 flex-col text-end mt-32">
          <h1 className="text-end text-4xl font-black sm:text-5xl lg:text-6xl">
            Empowering <span className="text-[#e68369]">Creators</span>
            <br /> Worldwide
          </h1>
          <p className="mt-1 text-[28]">
            Our platform is built to inspire, empower, and <br /> connect
            content creators from every corner of <br />
            the world.
          </p>
          <div className="flex justify-end">
            <a href="#" className=" border-2 border-[#E68369] px-5 py-2 mt-4 rounded-sm">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
