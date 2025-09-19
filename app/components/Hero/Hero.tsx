"use client";
import { motion } from "framer-motion";
import { BaseInfo } from "@/app/Data/data";
import Image from "next/image";
import React from "react";
import { Quicksand } from "next/font/google";
import Link from "next/link";

const font = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
function Hero() {
  return (
    <div
      id="home"
      className="w-full pt-[4vh] h-screen bg-linear-to-r from-[#000000] to-[#1b1b1b]   overflow-hidden relative"
    >
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 ">
          {/* image content*/}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className=" mx-auto hidden lg:block rounded-2xl  overflow-x-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={300}
              height={300}
            />
          </motion.div>
          {/*text content */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className=""
          >
            {/* sub Heading */}

            {/* title */}
            <h1 className="text-bg text-3xl  md:text-5xl lg:text-6xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white ">
              {BaseInfo.name}
            </h1>
            <h1
              className={`${font.className}} antialiased  md:text-[20px] mb-5 mt-5 text-gray-300 font-semibold`}
            >
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p className="mt-6 text-sm md:text-base text-white opacity-80">
              {BaseInfo.description}
            </p>
            {/* Button */}
            <div className="flex items-center   space-x-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="md:px-8 md:py-2 px-6 py-2  text-white font-semibold animate-bounce [animation-duration:2s] text-sm md:text-lg hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(36,110,247,0.7)] transition-all duration-200  cursor-pointer  rounded-full mt-8 bg-linear-to-l from-[#246ef7] to-[#1f09e9] flex items-center space-x-1">
                  <span>View Resume</span>
                </button>
              </a>
              {/* <button className="md:px-8 md:py-2 px-6 py-2 text-white border  font-semibold text-sm md:text-lg hover:bg-white hover:text-[#246ef7] transition-all duration-200 cursor-pointer rounded-full mt-8 flex items-center space-x-1">
                <span>Portfolio</span>
              </button> */}
            </div>
            <div className="mt-5 items-center justify-center flex space-x-2">
              <Link
                href="https://github.com/AbiAman"
                className="bg-[#246ef7] rounded-full p-2 w-fit hover:opacity-85 transition-all hover:translate-y-1 duration-500"
              >
                <Image
                  src="/images/soc/git.png"
                  alt=""
                  width={10}
                  height={10}
                  className="md:w-[15] md:h-[15]"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/amanuel-hailu-4b3898284"
                className="bg-[#246ef7] cursor-pointer hover:opacity-85 rounded-full p-2 w-fit transition-all hover:translate-y-1 duration-500"
              >
                <Image
                  src="/images/soc/ln.png"
                  alt=""
                  width={10}
                  height={10}
                  className="md:w-[15] md:h-[15]"
                />
              </Link>
              <Link
                href="https://t.me/BeYourSelfamu"
                className="bg-white rounded-full p-2 w-fit hover:opacity-85 transition-all hover:translate-y-1 duration-500"
              >
                <Image
                  src="/images/soc/tg.png"
                  alt=""
                  width={10}
                  height={10}
                  className="md:w-[15] md:h-[15]"
                />
              </Link>
              <Link
                href="https://www.instagram.com/amani0941"
                className="bg-white cursor-pointer rounded-full hover:opacity-85 p-2 w-fit transition-all hover:translate-y-1 duration-500"
              >
                <Image
                  src="/images/soc/ig.png"
                  alt=""
                  width={10}
                  height={10}
                  className="md:w-[15] md:h-[15]"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
