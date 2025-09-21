"use client";
import React, { ReactNode } from "react";
import { Knewave } from "next/font/google";
import { motion } from "framer-motion";

const font = Knewave({
  weight: ["400"],
  subsets: ["latin"],
});
type Props = {
  children: ReactNode;
};
const SectionHeading = ({ children }: Props) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      className={`${font.className} antialiased bg-white animate-pulse rounded-full shadow-xl shadow-gray-300  w-fit text-center px-5 py-3 mx-auto text-[#246ef7] text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6`}
    >
      {children}
    </motion.h1>
  );
};

export default SectionHeading;
