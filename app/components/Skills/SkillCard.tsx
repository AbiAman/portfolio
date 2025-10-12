import Image from "next/image";
import React from "react";
import { CiMobile1 } from "react-icons/ci";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const SkillCard = () => {
  return (
    <div>
      <div className=" items-center justify-center w-full flex flex-col">
        <p className="text-xl md:text-[22px] text-gray-300 font-light mb-16 text-center">
          A comprehensive skill set spanning multiple domains of technology and
          development.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className=" grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 lg:grid-cols-3 "
      >
        {/* WEB DEVELOPMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="group w-full p-4 bg-gradient-to-r from-[#15161a] to-transparent border border-gray-400 rounded-2xl"
        >
          <div className="flex text-white rounded-2xl bg-gradient-to-r from-[#25C9EF] to-[#398AF5] p-5 items-center justify-center w-fit group-hover:scale-110">
            <FaCode size={25} />
          </div>
          <h2 className="font-semibold text-white text-[20px] md:text-2xl my-5">
            Website Development
          </h2>
          <div>
            <div className="mb-1 text-base font-medium text-[12px] text-gray-300 opacity-70">
              Proficiency
            </div>
            <div className="w-full bg-gray-400 rounded-full dark:bg-gray-700">
              <motion.div
                className="bg-gradient-to-r from-[#25C9EF] to-[#398AF5] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "75%" }}
                initial={{ width: "0%" }}
                whileInView={{ width: `75%` }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                75%
              </motion.div>
            </div>
          </div>
          <div className="flex flex-wrap space-x-3 space-y-1">
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              react
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              next.js
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              node.js
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              tailwindcss
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              typescript
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              express.js
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              mongodb
            </span>
          </div>
        </motion.div>
        {/* MOBILE DEVELOPMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="group w-full p-4 bg-gradient-to-r from-[#15161a] to-transparent border border-gray-400 rounded-2xl"
        >
          <div className="flex text-white rounded-2xl bg-gradient-to-r from-[#C67DF0] to-[#E354AD] p-5 items-center justify-center w-fit group-hover:scale-110">
            <CiMobile1 size={25} />
          </div>
          <h2 className="font-semibold text-white text-[20px] md:text-2xl my-5">
            Mobile App Development
          </h2>
          <div>
            <div className="mb-1 text-base font-medium text-[12px] text-gray-300 opacity-70">
              Proficiency
            </div>
            <div className="w-full bg-gray-400 rounded-full dark:bg-gray-700">
              <motion.div
                className="bg-gradient-to-r from-[#C67DF0] to-[#E354AD] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "65%" }}
                initial={{ width: "0%" }}
                whileInView={{ width: `65%` }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                65%
              </motion.div>
            </div>
          </div>
          <div className="flex flex-wrap space-x-3 space-y-1">
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              React Native
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              iOS
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              Android
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              Cross-Platform
            </span>
          </div>
        </motion.div>
        {/* GRAPHICS DESIGN */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="group w-full p-4 bg-gradient-to-r from-[#15161a] to-transparent border border-gray-400 rounded-2xl"
        >
          <div className="flex text-white rounded-2xl bg-gradient-to-r from-[#F99734] to-[#ECB00D]  p-5 items-center justify-center w-fit group-hover:scale-110">
            <FaPaintBrush size={25} />
          </div>
          <h2 className="font-semibold text-white text-[20px] md:text-2xl my-5">
            UI/UX Design
          </h2>
          <div>
            <div className="mb-1 text-base font-medium text-[12px] text-gray-300 opacity-70">
              Proficiency
            </div>
            <div className="w-full bg-gray-400 rounded-full dark:bg-gray-700">
              <motion.div
                className="bg-gradient-to-r from-[#F99734] to-[#ECB00D] 
                   text-xs font-medium text-blue-100 text-center 
                   p-0.5 leading-none rounded-full transition-all duration-700 ease-in-out"
                style={{ width: "85%" }}
                initial={{ width: "0%" }}
                whileInView={{ width: `85%` }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                85%
              </motion.div>
            </div>
          </div>
          <div className="flex flex-wrap space-x-3 space-y-1">
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              Adobe Photoshop
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              Illustrator
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              Figma
            </span>
            <span className="bg-transparent hover:bg-gray-400 border  mt-5 rounded-3xl py-0.5 px-3 w-fit text-[13px] text-white">
              ui/ux Design
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillCard;
