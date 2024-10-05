import { Rocket, Users, DollarSign, BarChart } from "lucide-react";

const showcaseContent = [
  {
    title: "Effortless Setup",
    subtitle: "Get started in minutes with simple tools and templates.",
    image: "/templategf1.jpeg",
    icon: <Rocket size={36} />,
  },
  {
    title: "Collaborative Features",
    subtitle: "Co-create and engage with your audience seamlessly.",
    image: "/templategf2.jpeg",
    icon: <Users size={36} />,
  },
  {
    title: "Monetize Your Content",
    subtitle: "Easily integrate payment options to grow your earnings.",
    image: "/templategf3.jpeg",
    icon: <DollarSign size={36} />,
  },
  {
    title: "Comprehensive Analytics",
    subtitle: "Track your growth and understand your audience better.",
    image: "/templategf1.jpeg",
    icon: <BarChart size={36} />,
  },
];

const ShowcaseTab = ({ post }) => (
  <main className="w-[50%]">
    <div className="flex relative flex-col overflow-hidden">
      <div className="flex py-6">
        <span className="absolute hidden">{post.icon}</span>
        <h2 className="text-2xl">{post.title}</h2>
      </div>
      <hr className="border-black" />
    </div>
  </main>
);

const IndexShowcase = () => {
  return (
    <main className="min-h-[120vh] bg-gradient-to-tr from-yellow-100 to-orange-200 py-32">
      <div className="mx-auto w-4/5">
        <div>
          <h1 className="w-[45%] text-4xl font-thin">
            <span className="font-bold">Build a Community. </span>
            <br />
            Engage with Your Followers and Co-Create Content Together
          </h1>
        </div>
        <article className="mt-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
            {showcaseContent.map((post) => (
              <ShowcaseTab key={post.title} post={post} />
            ))}
          </div>
        </article>
      </div>
    </main>
  );
};

export default IndexShowcase;
