import { Link } from "react-router-dom";

export const Features = () => {
  return (
    <div class=" mx-auto w-4/5 flex mt-20">
    <main class=" flex flex-col justify-center text-white">
      <h2 class="text-3xl font-light">
        <span class="font-medium">Join the future of content creation with us.</span>
        <br /><span class="text-lg">Watch your creativity blossom</span> <br /> <span class="text-lg">into a thriving
          business.</span>
      </h2>
      <button>
        <a href=""></a>
      </button>
      <div class="mt-8 flex gap-8">
        <figure class="flex w-auto flex-1 flex-col">
          <img src="../public/template.png" alt="" />
          <p class="mt-4">
            <span class="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            Aliquam magni laudantium voluptate reiciendis iusto ipsum porro
            quisquam illo iste facilis nulla ipsam, sed repudiandae ex
            nesciunt dolorum odio doloribus quidem.
          </p>
          <a href="#" class="mt-4 underline">Learn about lorem</a>
        </figure>

        <figure class="flex w-auto flex-1 flex-col">
          <img src="../public/template.png" alt="" />
          <p class="mt-4">
            <span class="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            Error nisi molestiae quis sunt alias repellendus amet, sequi
            itaque sapiente exercitationem? Eaque, repellendus! Nesciunt totam
            distinctio mollitia labore officiis dolorum aliquam!
          </p>
          <a href="#" class="mt-4 underline">Learn about lorem</a>
        </figure>

        <figure class="flex w-auto flex-1 flex-col">
          <img src="../public/template.png" alt="" />
          <p class="mt-4">
            <span class="font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            Mollitia et nostrum quis commodi harum ipsam minus magni, in
            voluptatum fuga libero enim esse modi similique, cumque placeat
            architecto doloremque dolorum.
          </p>
          <a href="#" class="mt-4 underline">Learn about lorem</a>
        </figure>
      </div>
    </main>
  </div>
  );
};
