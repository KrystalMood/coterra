export const DiveInto = () => {
  return (
    <main
      id="dive-into-the-process"
      className="mx-auto mt-32 flex h-fit w-4/5 cursor-default flex-col text-slate-50"
    >
      <span className="absolute left-0 top-0 z-0 h-40 w-40 bg-red-800 [filter:blur(7rem)]"></span>
      <div className="flex items-center">
        <hr className="hidden h-0.5 w-1/4 lg:inline" />
        <h3 className="flex-1 cursor-default text-center text-4xl font-bold">
          Dive Into the Process
        </h3>
        <hr className="hidden h-0.5 w-1/4 lg:inline" />
      </div>
      <div className="mt-10 grid w-full grid-cols-1 text-justify sm:grid-cols-2 xl:grid-cols-3">
        <span className="flex flex-col p-8">
          <i className="fa-solid fa-user text-3xl"></i>
          <h4 className="mt-4 text-3xl font-bold">Create an account</h4>
          <h5 className="mt-2">
            Sign up by providing your basic information or connect via social
            media. This will give you access to the platform’s features.
          </h5>
        </span>
        <span className="flex flex-col bg-red-800 p-8">
          <i className="fa-solid fa-lightbulb text-3xl"></i>
          <h4 className="mt-4 text-3xl font-bold">Add your content</h4>
          <h5 className="mt-2">
            Upload text, images, or videos directly to the template, and make
            edits using an easy-to-use editor to fit your style.
          </h5>
        </span>
        <span className="flex flex-col bg-transparent p-8 sm:bg-red-800 xl:bg-transparent">
          <i className="fa-solid fa-pen-nib text-3xl"></i>
          <h4 className="mt-4 text-3xl font-bold">Costumize Design</h4>
          <h5 className="mt-2">
            Personalize your content’s appearance by adjusting fonts, colors,
            and layouts to match your brand or theme.
          </h5>
        </span>
        <span className="flex flex-col bg-red-800 p-8 sm:bg-transparent xl:bg-red-800">
          <i className="fa-solid fa-pen-nib text-3xl"></i>
          <h4 className="mt-4 text-3xl font-bold">Costumize Design</h4>
          <h5 className="mt-2">
            Personalize your content’s appearance by adjusting fonts, colors,
            and layouts to match your brand or theme.
          </h5>
        </span>
        <span className="flex flex-col p-8">
          <i className="fa-solid fa-comments text-3xl"></i>
          <h4 className="mt-4 text-3xl font-bold">Review and Refine</h4>
          <h5 className="mt-2">
            Review your content using the preview mode and optimize it for
            different platforms (web, mobile, etc.) to ensure it looks perfect
            everywhere.
          </h5>
        </span>
        <span className="flex flex-col bg-red-800 p-8">
          <i className="fa fa-upload text-3xl"></i>
          <h4 className="mt-4 text-3xl font-bold">Publish and Share</h4>
          <h5 className="mt-2">
            Once you're satisfied, hit publish! Share your content directly on
            social media or other platforms with integrated sharing options.
          </h5>
        </span>
      </div>
    </main>
  );
};
