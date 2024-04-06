"use client";

import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';


const Homepage = () => {
  const handleContact=()=>{
    router.push('/contact')
  }

  const handleWork=()=>{
    router.push('/portfolio')
  }
  const text= "Hello, I am Steve.A software developer based in Kerala"
  const router = useRouter();
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-4/6 flex flex-col gap-8 items-center justify-center">
          <div>
            {text.split(/\b/).map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: index *0.1,
                }}
                className="text-4xl md:text-6xl text-white font-bold"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          {/* TITLE */}
          <p className="md:text-xl">
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white" onClick={handleWork}>
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-2 ring-white bg-white text-black font-semibold" onClick={handleContact} >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
