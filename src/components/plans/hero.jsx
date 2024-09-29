export const PlansHero = () => {
  return (
    <main className="h-screen">
      <div className="mx-auto flex min-h-screen w-4/5 min-w-[80%] items-center justify-between">
        <article className="w-4/5">
          <h1 className="font-boldtext-4xl mb-6 font-black leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
            <span className="text-[#e68369]">Unleash</span> Your Creative
            Potential
          </h1>
          <h2 className="text-4xl font-black leading-tight text-gray-800 sm:text-5xl lg:text-2xl">
            Choose the <span className="text-[#e68369]">Plan</span> that Fits
            Your Vision.
          </h2>
          <p>
            Whether you're just starting your creative journey or scaling up,
            we've got the perfect plan to fuel your passion. From free tools to
            pro-level features, let your creativity soar without limits.
          </p>
          <div>
            <button className="border-1 mt-4 rounded-xl border border-[#e68369] bg-[#e68369] px-4 py-2 text-white">
              Explore
            </button>
            <button className=" ml-3 border-1 mt-4 rounded-xl border border-[#e68369] bg-white px-4 py-2 text-[#e68369]">
                Join Now!
            </button>
          </div>
        </article>
        <img
          src="/templategf1.jpeg"
          alt=""
          className="h-auto max-h-[30rem] w-full max-w-[30rem] rounded-lg object-cover shadow-2xl"
        />
      </div>
    </main>
  );
};
