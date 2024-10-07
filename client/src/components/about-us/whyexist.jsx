export const WhyExist = () => {
  return (
    <main
      className="mt-16 flex min-h-screen w-full flex-col bg-cover bg-center"
      style={{ backgroundImage: 'url("/template2.png")' }}
    >
      <section className="text-white mt-[16%] ml-[10%]">
        <h3 className="font-bold text-3xl">Why we exist?</h3>
        <p className="mt-2 w-3/5">
          We believe that every creator has a unique story to tell, and we're
          here to amplify those voices. Our goal is to create an inclusive and
          supportive environment where you can:
        </p>
        <ul className="list-disc ml-10">
          <li>Showcase your work with ease.</li>
          <li>Connect with a community that shares your passion.</li>
          <li>
            Grow your skills through our resources and collaborative
            opportunities.
          </li>
          <li>Turn your passion into a sustainable business.</li>
        </ul>
        <h3 className="font-bold text-3xl mt-10 w-3/5">
          Join us on this journey of discovery, connection, and growth. At 
          <span className="text-rose-500"> Coterra</span>, your creativity is limitless.
        </h3>
      </section>
    </main>
  );
};
