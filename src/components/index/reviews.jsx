import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam commodi ipsa incidunt impedit veniam sit at deleniti aspernatur! Est voluptatum nisi eum quam autem sapiente perferendis porro odit exercitationem nostrum!",
    name: "Lorem ipsum",
    company: "lorem ipsum",
    picture: "/templategf1.jpeg",
  },
  {
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam commodi ipsa incidunt impedit veniam sit at deleniti aspernatur! Est voluptatum nisi eum quam autem sapiente perferendis porro odit exercitationem nostrum!",
    name: "Lorem ipsum",
    company: "lorem ipsum",
    picture: "/templategf2.jpeg",
  },
  {
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam commodi ipsa incidunt impedit veniam sit at deleniti aspernatur! Est voluptatum nisi eum quam autem sapiente perferendis porro odit exercitationem nostrum!",
    name: "Lorem ipsum",
    company: "lorem ipsum",
    picture: "/templategf3.jpeg",
  },
];

const ReviewPost = ({ post }) => {
  return (
    <motion.div 
    whileHover={{ scale: 1.05 }}
    className="rounded-md bg-[#e68369] px-4 py-4 shadow-lg hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-3 flex">
        {[
          ...Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="mr-2 h-5 w-5 text-white shadow-xl"
              fill="currentColor"
            />
          )),
        ]}
      </div>
      <p className="text-white">{post.review}</p>
      <div className="mt-2 flex items-center">
        <img
          src={post.picture}
          alt={post.name}
          className="mr-3 h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-white">{post.name}</h3>
          <p classname="font-thin text-white">{post.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Reviews = () => {
  return (
    <main className="min-h-[50%]">
      <div className="container mx-auto flex w-3/4 flex-col items-center py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#d16d53]">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((post, index) => (
            <ReviewPost key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};
