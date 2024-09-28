export const Team = () => {
  return (
    <main className="bg-[#ECCEAE] py-5">
      <div className="container mx-auto flex flex-col gap-4 lg:flex-row">
        <article className="flex flex-col items-center justify-center bg-[#fdf5e4] lg:w-3/6">
          <h1>Halo</h1>
        </article>

        <div className="flex flex-col space-y-6 lg:w-2/3">
          <figure className="mx-auto flex items-center bg-[#fdf5e4] p-12 min-w-[60rem]">
            <img src="" alt="" />
            <div>
              <h2 class="text-2xl font-bold text-[#1a1a3d]">Pramudya</h2>
              <p class="font-semibold text-[#f26e54]">Role: Developer</p>
              <p class="text-[#555]">
                Pramudya is the mastermind behind the code. His expertise
                ensures the platform runs smoothly.
              </p>
            </div>
          </figure>

          <figure className="mx-auto flex items-center bg-[#fdf5e4] p-12 h-full min-w-[60rem]">
            <img src="" alt="" />
            <div>
              <h2 class="text-2xl font-bold text-[#1a1a3d]">Rafi Punk</h2>
              <p class="font-semibold text-[#f26e54]">Role: Designer</p>
              <p class="text-[#555]">
                Rafi manages the creative aspects of the platform, designing a
                unique visual experience for users.
              </p>
            </div>
          </figure>

          <figure className="mx-auto flex items-center bg-[#fdf5e4] p-12 h-full min-w-[60rem]">
            <img src="" alt="" />
            <div>
              <h2 class="text-2xl font-bold text-[#1a1a3d]">Emkafie</h2>
              <p class="font-semibold text-[#f26e54]">
                Role: Community Manager
              </p>
              <p class="text-[#555]">
                Emkafie connects with users, ensuring they have a positive
                experience and feel supported.
              </p>
            </div>
          </figure>
        </div>
      </div>
    </main>
  );
};
