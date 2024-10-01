import { ArrowLeft } from 'lucide-react';
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";
const SignUpHero = () => {
  return (
    <main className="min-h-screen">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.9}}
      className="absolute left-0 top-0 m-4"
    >
      <Link to="/" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300">
        <ArrowLeft size={24} />
      </Link>
    </motion.div>
      <div className="flex justify-between">
        <div className="ml-[8%] mt-[3%] h-[50%] w-[40rem] rounded-md px-16 py-12">
          <h2 className="text-3xl font-bold text-orange-600">Sign Up</h2>
          <h3 className="text-[1.2rem] text-gray-700">
            Your Creativity Begins Now
          </h3>
          <button className="my-5 w-full rounded-md border bg-white py-2 shadow-lg">
            Login with Google
          </button>
          <div className="flex items-center space-x-3">
            <hr className="flex-grow border-black opacity-20" />
            <h4>Or</h4>
            <hr className="flex-grow border-black opacity-20" />
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
                <span className="text-orange-600 hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-orange-600 hover:underline">
                  Privacy Policy
                </span>
              </h4>
            </div>
            <input
              type="button"
              className="mt-4 w-full rounded-md border bg-orange-200 bg-orange-600 py-[0.5rem] font-bold text-white shadow-xl"
              value="Sign Up"
            />
          </form>
        </div>

        <div className="flex min-h-screen w-[40%] flex-col items-center justify-center space-y-2 border bg-white shadow-xl">
          <h2 className="text-3xl font-bold">Hello Friend</h2>
          <h3 className="text-xl">
            Enter your personal detail and start journey with us
          </h3>
          <button className="rounded-md bg-orange-600 px-10 py-2 text-2xl font-bold shadow-lg">
            Login
          </button>
        </div>
      </div>
    </main>
  );
};

export default SignUpHero;
