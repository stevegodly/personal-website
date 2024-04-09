"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-purple-300 to-red-300",
    title: "Price Tracker",
    desc: "A price tracking app that enables to mark and track prices of products on amazon. Notification is recieved on users gmail when price flunctuation happens",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://pricetracker-seven-bice.vercel.app",
    button:"visit app"
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "Implementation of L2 Routing",
    desc: "This Networking project is an implementation of TCP/IP Stack which demonstrates L2 routing. In the Project a Multi-Node Topology Emulation of Routers and Switches is built.Data Link Layer (L2 routing), including ARP, L2Switching (Mac-based Learning and Forwarding) are also implemented.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/stevegodly/Tcp-Ip-stack.git",
    button:"view code"
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Text  Editor",
    desc: "This a Text Editor built from scratch using C on Linux OS",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/stevegodly/TextEditor.git",
    button:"view code"
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "  Messaging App",
    desc: "This is a Web-based messaging app that enables multiple user interaction.Built using technologies like React Native, Node.js, and MongoDB",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://message-web-app-7iwo.vercel.app",
    button:"visit app"
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Library App",
    desc: "A library app enabling seamless CRUD (Create, Read, Update, Delete) operations.Utilized technologies like React Native, Node.js, and MongoDB, ensuring efficient data handling",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://book-store-delta-mauve.vercel.app",
    button:"visit app"
  },
  
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Distributed Memory App",
    desc: "This is a project in C, based on socket programming. A distributed memory consisting of several connected machines that make up a unified chunk ofstorage for the user - is present in which input data can be stored. Use mustspecify key if data is to be fetched.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/stevegodly/DistributedMemory.git",
    button:"view code"
  },
 
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-white italic font-bold text-8xl text-center ">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">{item.button}</button>
                  </Link>
                </div>
              </div>
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
