import { useState } from "react";

const featuresList = [
  {
    title: "Features1",
    subtitle: "lorem ipsum dolor sit amet",
    picture: "/templategf1.jpeg",
  },
  {
    title: "Features2",
    subtitle: "lorem ipsum dolor sit amet",
    picture: "/templategf2.jpeg",
  },
  {
    title: "Features3",
    subtitle: "lorem ipsum dolor sit amet",
    picture: "/templategf3.jpeg",
  }
];

const FeaturePosts = ({ list }) => {
  return (
    <div className="shadow-xl h-[30rem] w-[30rem] rounded-xl ">
      <figure className="">
        <img src={list.picture} alt={list.title} className="rounded-t-xl min-h-[20rem] min-w-[20rem] object-cover" />
      </figure>
      <article className="flex">
        <h3 className="text-xl mx-4 my-4 font-thin">{list.subtitle}</h3>
      </article>
    </div>
  );
};
export const IndexFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuresList.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuresList.length) % featuresList.length,
    );
  };
  return (
    <main className="min-h-screen bg-orange-50">
      <div className="mb-4 flex flex-col items-center pt-20">
        <h2 className="text-5xl font-bold text-[#d16d53]">
          Take a <span className="text-black">Peek</span>
        </h2>
        <h3 className="text-3xl font-bold mb-4">
          Get a glimpse into the
          <span className="text-[#d16d53]"> creative</span> process.
        </h3>
      </div>
      <div className="mx-auto min-h-[30rem] w-3/4">
        <figure className="flex gap-4">
          {featuresList.map((list, index) => (
            <FeaturePosts key={index} list={list} />
          ))}
        </figure>
      </div>
    </main>
  );
};
