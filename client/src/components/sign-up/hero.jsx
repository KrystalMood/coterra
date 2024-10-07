import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const SignUpHero = () => {
  return (
    <main className="min-h-screen relative bg-gradient-to-br from-orange-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-0 top-0 m-4 z-10"
      >
        <Link
          to="/"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors duration-300 hover:bg-gray-100"
        >
          <ArrowLeft size={24} />
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col lg:flex-row justify-between "
      >
        <div className="ml-[8%] mt-[3%] h-[50%] w-[40rem] rounded-md px-16 py-12">
          <h2 className="text-3xl font-bold text-orange-600">Sign Up</h2>
          <h3 className="text-[1.2rem] text-gray-700">
            Your Creativity Begins Now
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="my-5 w-full rounded-md border bg-white py-2 shadow-lg"
          >
            Login with Google
          </motion.button>
          <div className="flex items-center space-x-3">
            <hr className="flex-grow border-orange-200 opacity-20" />
            <h4>Or</h4>
            <hr className="flex-grow border-orange-200 opacity-20" />
          </div>
          <form className="mt-4 flex flex-col space-y-4">
            <div>
              <h2 className="text-[1rem]">Username</h2>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-2 py-[0.2rem]"
              />
            </div>
            <div>
              <h2 className="text-[1rem]">Email</h2>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-2 py-[0.2rem]"
              />
            </div>
            <div>
              <h2 className="text-[1rem]">Password</h2>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-2 py-[0.2rem]"
              />
            </div>
            <div>
              <h2 className="text-[1rem]">Confirm Password</h2>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-2 py-[0.2rem]"
              />
            </div>
            <div className="mt-2 flex space-x-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="h-4 w-4 rounded focus:bg-orange-600"
              />
              <h4 className="text-[70%] font-thin">
                I Agree to{" "}
                <span className="cursor-pointer text-orange-600 hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="cursor-pointer text-orange-600 hover:underline">
                  Privacy Policy
                </span>
              </h4>
            </div>
            <motion.input
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="mt-4 w-full rounded-md border bg-orange-600 py-[0.5rem] font-bold text-white shadow-xl"
              value="Sign Up"
            />
            <h4 className="text-[80%]">Don't have an account? <Link to="/login" className="hover:text-orange-600 hover:underline">Login</Link></h4>
          </form>
        </div>

        <div className="flex min-h-[50vh] w-full flex-col items-center justify-center space-y-2 border p-4 shadow-xl lg:min-h-screen lg:w-[40%] lg:p-0">
          <img
            src="/templategf1.jpeg"
            alt="templategf1"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </main>
  );
};

export default SignUpHero;
