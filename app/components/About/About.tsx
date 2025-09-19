"use client";

import SectionHeading from "../Helper/SectionHeading";
import { aboutInfo } from "@/app/Data/data";
import { FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
import { LuGraduationCap } from "react-icons/lu";
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
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
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
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className=" flex items-center lg:mx-auto"
        >
          <div className="p-6 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-[#131519] border border-[#5d5f63] rounded-2xl p-6 md:p-8">
              {/* Heading */}
              <h1 className="text-2xl md:text-3xl text-white font-bold mb-6">
                Education
              </h1>

              {/* Icon + Content */}
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className="flex items-center p-3 justify-center bg-gradient-to-l from-[#246ef7] to-[#1f09e9] rounded-full w-14 h-14 md:w-16 md:h-16">
                  <LuGraduationCap
                    size={28}
                    className="text-white md:size-32"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <p className="text-white text-lg md:text-xl font-semibold">
                    Bachelor of Science in Information Technology
                  </p>
                  <p className="text-[#3bb3f9] text-base md:text-lg font-medium">
                    Haramaya University
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    CGPA: 3.57
                  </p>
                  <p className="text-gray-400 text-sm md:text-base mt-2 leading-relaxed">
                    Comprehensive study in IT fundamentals, programming,
                    networking, and system administration with hands-on
                    experience in various technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
