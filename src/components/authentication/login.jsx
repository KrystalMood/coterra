import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
const LoginMain = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-0 top-0 z-10 m-4"
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
        className="flex flex-col justify-between lg:flex-row"
      >
        <div className="ml-[8%] mt-[3%] h-[50%] w-[40rem] rounded-md px-16 py-12">
          <h2 className="text-3xl font-bold text-orange-600">Login</h2>
          <h3 className="text-[1.2rem] text-gray-700">
            We are waiting for your infinite potential
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="my-5 w-full rounded-md border bg-white py-2 shadow-lg"
          >
            Login with Google
          </motion.button>
          <div className="flex items-center space-x-3">
            <hr className="flex-grow border-black opacity-20" />
            <h4>Or</h4>
            <hr className="flex-grow border-black opacity-20" />
          </div>
          <form className="mt-4 flex flex-col space-y-4">
            <div>
              <h2 className="text-[1rem]">Email / Username</h2>
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
            <motion.input
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className=" w-full rounded-md border bg-orange-200 bg-orange-600 py-[0.5rem] font-bold text-white shadow-xl"
              value="Login"
            />
          </form>
          <div className="mt-2">
            <h4 className="text-[90%]">
              Don't have an account?{" "}
              <Link to="/sign-up" className="hover:text-orange-600 hover:underline">
                Sign Up
              </Link>
            </h4>
          </div>
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

export default LoginMain;
