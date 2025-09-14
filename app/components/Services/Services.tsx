"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { servicesData } from "@/app/Data/data";
import ServicaCard from "./ServiceCard";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};
const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const Services = () => {
  return (
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      animate="show"
      id="services"
      className=" pt-16 pb-16 bg-linear-to-b from-[#000000] to-[#181818]"
    >
      <div className="mt-8">
        <SectionHeading>Services</SectionHeading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service) => {
          return (
            <motion.div
              animate={{ scale: [1, 1.2, 1.2, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              variants={gridSquareVariants}
              key={service.id}
            >
              <ServicaCard service={service} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
