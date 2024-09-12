import { Link } from "react-router-dom";

export const Features = () => {
  return (
    <main className="mx-auto mt-40 flex w-4/5 flex-col">
      <section class="mx-auto mt-52 flex flex-col justify-center text-white">
        <h2 class="text-3xl font-light">
          <span class="font-medium">
            Join the future of content creation with us.
          </span>
          <br />
          Watch your creativity blossom <br />
          into Link thriving business.
        </h2>
        <button>
          <Link to=""></Link>
        </button>
        <div class="mt-12 flex gap-8">
          <figure class="flex w-auto flex-1 flex-col">
            <img src="" alt="" />
            <p class="mt-4">
              <span class="font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              Aliquam magni laudantium voluptate reiciendis iusto ipsum porro
              quisquam illo iste facilis nulla ipsam, sed repudiandae ex
              nesciunt dolorum odio doloribus quidem.
            </p>
            <Link to="#" class="mt-4 underline">
              Learn about lorem
            </Link>
          </figure>

          <figure class="flex w-auto flex-1 flex-col">
            <img src="../public/template.png" alt="" />
            <p class="mt-4">
              <span class="font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              Error nisi molestiae quis sunt alias repellendus amet, sequi
              itaque sapiente exercitationem? Eaque, repellendus! Nesciunt totam
              distinctio mollitia labore officiis dolorum aliquam!
            </p>
            <Link to="#" class="mt-4 underline">
              Learn about lorem
            </Link>
          </figure>

          <figure class="flex w-auto flex-1 flex-col">
            <img src="../public/template.png" alt="" />
            <p class="mt-4">
              <span class="font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
              Mollitia et nostrum quis commodi harum ipsam minus magni, in
              voluptatum fuga libero enim esse modi similique, cumque placeat
              architecto doloremque dolorum.
            </p>
            <Link to="#" class="mt-4 underline">
              Learn about lorem
            </Link>
          </figure>
        </div>
      </section>
    </main>
  );
};