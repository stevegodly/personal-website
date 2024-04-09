"use client";

import { motion} from "framer-motion";
import Image from "next/image";


const AboutPage = () => {
  return (
    <motion.div
      className="h-full w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div classname="h-full scroll-overflow">
        <div className="flex flex-col items-center p-4 sm:p-8 md:p-6 lg:p-20 xl:p-20 lg:flex-row justify-between md:gap-18 lg:gap-24">
          {/* BIOGRAPHY CONTAINER */}
          <div className="items-center flex flex-col gap-12 pb-4 justify-center md: items-start w-4/6">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-white text-2xl">Profile</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-white text-lg font-medium">
                Self-motivated and diligent software graduate seeking an internship
                opportunity to contribute to a dynamic and challenging work environment.
                Eager to apply and expand skills with a strong foundation in C programming,
                MERN stack development, bare-metal programming, and proficiency in
                Next.js.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-white">
              &quot;If you&apos;re waiting until you feel talented enough to make it, you&apos;ll never make it.&quot; ― Criss Jami
            </span>

            {/* BIOGRAPHY SCROLL SVG */}
          </div>
          <div className="flex">
            {/* BIOGRAPHY IMAGE */}
              <Image
                src="/image.jpg"
                alt="photo"
                width={1420}
                height={1420}
                className="w-58 h-96 object-contain"
              />
          </div>
          {/* SKILLS CONTAINER */}
        </div>
        <div className="px-20 pt-0 pb-4 flex flex-col gap-6 items-center">
          {/* SKILL TITLE */}
          <h1
            className="font-bold text-white text-2xl">
            SKILLS
          </h1>
          {/* SKILL LIST */}
          <div className="gap-4 grid grid-cols-3 md:grid-cols-6 ">
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              JavaScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              TypeScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              React.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Next.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Tailwind CSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              MongoDB
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              PostgreSQL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Node.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Express.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Apollo
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Redux
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Framer Motion
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Vite
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              C++
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              C
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Git
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Embedded Programming
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Socket Programming
            </div>
          </div>
        </div>
      </div> 
    </motion.div>
  );
};

export default AboutPage;
