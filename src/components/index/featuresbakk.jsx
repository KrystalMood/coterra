import { Link } from "react-router-dom";

export const Features = () => {
  return (
    <div className=" mx-auto flex mt-40 w-4/5">
      <main className=" flex flex-col justify-center text-white">
        <h2 className="text-3xl font-light">
          <span className="font-medium">Join the future of content creation with us.</span>
          <br /><span className="text-lg">Watch your creativity blossom</span> <br /> <span className="text-lg">into a thriving
            business.</span>
        </h2>
        <button>
          <a href=""></a>
        </button>
        <div className="mt-8 flex gap-8">
          <figure className="flex w-auto flex-1 flex-col">
            <img src="../public/template.png" alt="" />
            <p className="mt-4">
              <span className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              Aliquam magni laudantium voluptate reiciendis iusto ipsum porro
              quisquam illo iste facilis nulla ipsam, sed repudiandae ex
              nesciunt dolorum odio doloribus quidem.
            </p>
            <a href="#" className="mt-4 underline">Learn about lorem</a>
          </figure>

          <figure className="flex w-auto flex-1 flex-col">
            <img src="../public/template.png" alt="" />
            <p className="mt-4">
              <span className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              Error nisi molestiae quis sunt alias repellendus amet, sequi
              itaque sapiente exercitationem? Eaque, repellendus! Nesciunt totam
              distinctio mollitia labore officiis dolorum aliquam!
            </p>
            <a href="#" className="mt-4 underline">Learn about lorem</a>
          </figure>

          <figure className="flex w-auto flex-1 flex-col">
            <img src="../public/template.png" alt="" />
            <p className="mt-4">
              <span className="font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
              Mollitia et nostrum quis commodi harum ipsam minus magni, in
              voluptatum fuga libero enim esse modi similique, cumque placeat
              architecto doloremque dolorum.
            </p>
            <a href="#" className="mt-4 underline">Learn about lorem</a>
          </figure>
        </div>
      </main>
    </div>
  );
};
