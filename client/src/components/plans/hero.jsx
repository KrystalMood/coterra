import { motion } from "framer-motion";

export const PlansHero = () => {
  return (
    <main className="h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex min-h-screen w-4/5 min-w-[80%] items-center justify-between"
      >
        <motion.article
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-4/5 max-w-[50%]"
        >
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-1 mt-4 rounded-xl border border-[#e68369] bg-[#e68369] px-4 py-2 text-white hover:bg-white hover:text-[#e68369] font-semibold transition duration-300 ease-in-out"
            >
              Explore
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-1 ml-3 mt-4 rounded-xl border border-[#e68369] bg-white px-4 py-2 text-[#e68369] hover:bg-[#e68369] hover:text-white font-semibold transition duration-300 ease-in-out"
            >
              Join Now!
            </motion.button>
          </div>
        </motion.article>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src="/templategf1.jpeg"
            alt=""
            className="h-auto max-h-[30rem] w-full max-w-[30rem] rounded-lg object-cover shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </main>
  );
};
