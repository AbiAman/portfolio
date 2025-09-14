"use client";

import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/app/Data/data";
import { FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
import { FaPaintbrush } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="pt-16 pb-16 bg-linear-to-r from-[#1b1b1b] to-[#000000]"
    >
      {/* SectionHeading */}
      <div className="mt-8">
        <SectionHeading>About</SectionHeading>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          <h1 className="text-bg text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}{" "}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-5 h-5 md:w-6 md:h-6 text-white flex flex-col items-center justify-center">
                <CgWebsite />
              </div>
              <p className="text-sm sm:text-lg font-bold text-gray-300">
                Frontend Developer
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-5 h-5 md:w-6 md:h-6 text-white flex flex-col items-center justify-center">
                <FaLaptopCode />
              </div>
              <p className="text-sm sm:text-lg font-bold text-gray-300">
                Backend Developer
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-5 h-5 md:w-6 md:h-6 flex flex-col items-center justify-center">
                <FaPaintbrush className="text-white" />
              </div>
              <p className="text-sm sm:text-lg font-bold text-gray-300">
                Graphics Desiner
              </p>
            </div>
          </div>
        </motion.div>
        {/* State Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
        >
          {/* 1st stat */}
          <div>
            <Image
              src="/images/web.png"
              alt="users"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.client}{" "}
            </p>
          </div>
          {/* 2nd stat */}
          <div>
            <Image
              src="/images/gd.png"
              alt="users"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.experience}{" "}
            </p>
          </div>
          {/* 3rd stat */}
          <div>
            <Image
              src="/images/ux.png"
              alt="users"
              width={150}
              height={150}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.project}{" "}
            </p>
          </div>
          {/* 4th stat */}
          <div>
            <Image
              src="/images/problam.png"
              alt="users"
              width={150}
              height={150}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.website}{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
