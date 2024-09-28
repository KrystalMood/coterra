import { motion } from "framer-motion";
import React from "react";

const postsList = [
  {
    category: "Technology",
    title: "The Future of AI: A Glimpse into Tomorrow",
    subtitle:
      "Discover how artificial intelligence is revolutionizing industries and shaping our future.",
    image: "/templategf1.jpeg",
  },
  {
    category: "Travel",
    title: "Exploring the Hidden Gems of Bali",
    subtitle:
      "Uncover the breathtaking beauty and cultural richness of Bali's lesser-known destinations.",
    image: "/templategf2.jpeg",
  },
  {
    category: "Lifestyle",
    title: "Healthy Living Tips for a Happier You",
    subtitle:
      "Learn practical strategies to improve your well-being and achieve a balanced lifestyle.",
    image: "/templategf3.jpeg",
  },
];

const categoryList = [
  {
    category: "All"
  },
  {
    category: "Podcast"
  },
  {
    category: "Review"
  },
  {
    category: "Culinary"
  },
  {
    category: "Meme"
  }
];

const PostCategory = ({ category}) => (
  <motion.div
    className="flex flex-col lg:col-span-5"
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.85}}
  >
    
  </motion.div>
);

const Post = ({ post, index }) => (
  <motion.div
    className="transition-shadow flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="relative h-72 w-full overflow-hidden">
      <motion.img
        src={post.image}
        alt={post.title}
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute left-0 top-0 m-4">
        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-700">
          {post.category}
        </span>
      </div>
    </div>
    <div className="flex flex-1 flex-col justify-between p-6 bg-white">
      <div>
        <h3 className="mb-2 text-xl font-bold leading-tight text-orange-800">
          {post.title}
        </h3>
        <p className="text-base text-orange-600">{post.subtitle}</p>
      </div>
      <div className="mt-4 flex justify-end flex-row">
        <motion.button
          className="rounded-full px-4 py-2 text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export const RelatedPosts = () => {
  return (
    <main className="mx-auto w-4/5 py-12">
      <div className="container px-4">
        <h2 className="mb-2 text-start text-3xl font-bold text-gray-900">
          Blog
        </h2>
        <p className="text-gray-500">Your Content, Your Kingdom.</p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {postsList.map((post, index) => (
          <Post key={index} post={post} index={index} />
        ))}
      </div>
    </main>
  );
};
