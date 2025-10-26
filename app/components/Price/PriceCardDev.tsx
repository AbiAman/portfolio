import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

import { BsCheckCircleFill } from "react-icons/bs";
const PriceCardDev = () => {
  const [selectedPlanB, setSelectedPlanB] = useState("standard");
  const [selectedPlanS, setSelectedPlanS] = useState("standard");
  const [selectedPlanP, setSelectedPlanP] = useState("standard");
  return (
    <div className="my-12">
      <div className=" items-center justify-center w-full flex flex-col">
        <div className="flex text-white rounded-2xl bg-gradient-to-r from-[#ff02c8] to-[#f78181] p-3 mb-3 items-center justify-center w-fit group-hover:scale-110">
          <FaCode size={20} />
        </div>
        <p className="text-xl md:text-[16px] text-[#ff02f2] font-light mb-16 text-center">
          Website, App & Dashboard Design
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className=" grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 lg:grid-cols-3 "
      >
        {/* PRICE CARD */}
        {/* Basic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="group w-full shadow shadow-amber-50 hover:shadow-xl  p-4 bg-gradient-to-r flex flex-col items-center justify-center from-[#15161a] to-transparent border border-gray-400 rounded-2xl "
        >
          <h2 className="font-semibold text-white text-[20px] md:text-2xl my-5">
            Basic
          </h2>
          <div>
            {/* <div className="flex items-center space-x-2 my-5">
              <button
                onClick={() => setSelectedPlanB("standard")}
                className={`  cursor-pointer mb-1 text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanB === "standard"
                    ? "bg-[#ff02c0] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#ff92c9] hover:text-white"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlanB("professional")}
                className={`mb-1 cursor-pointer text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanB === "professional"
                    ? "bg-[#f00897] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#ff8878] hover:text-white"
                }}`}
              >
                Professional
              </button>
            </div> */}

            {/* Prices */}
            <div className="w-full flex flex-col items-center mt-3">
              {selectedPlanB === "standard" && (
                <p className="text-[#ff02c8] font-semibold text-2xl">
                  5,000–7,000 ETB
                </p>
              )}
              {/* {selectedPlanB === "professional" && (
                <p className="text-[#ff02dd] font-semibold text-2xl">
                  5000–7000 ETB
                </p>
              )} */}
              <p className="text-gray-200 font-light text-[12px] mt-1 opacity-75">
                per project
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start  my-5">
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  1-3 Screen Design
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Figma File
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Minimal User Flow
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Basic Prototype
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  3-4 Day Delivery
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Standard */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="group shadow shadow-amber-50 hover:shadow-xl  w-full p-4 bg-gradient-to-r flex flex-col items-center justify-center scale-110 from-[#15161a] to-transparent border border-[#f800a5] rounded-2xl "
        >
          <h2 className=" text-gray-400 text-[12px] md:text-sm my-2">
            Recommended
          </h2>
          <h2 className="font-semibold text-white text-[20px] md:text-2xl my-5">
            Standard
          </h2>
          <div>
            {/* <div className="flex items-center space-x-2 my-5">
              <button
                onClick={() => setSelectedPlanS("standard")}
                className={`  cursor-pointer mb-1 text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanS === "standard"
                    ? "bg-[#ff02c0] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#f12ec7] hover:text-white"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlanS("professional")}
                className={`mb-1 cursor-pointer text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanS === "professional"
                    ? "bg-[#ff02d5] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#e270d8] hover:text-white"
                }}`}
              >
                Professional
              </button>
            </div> */}

            {/* Prices */}
            <div className="w-full flex flex-col items-center justify-center mt-3">
              {selectedPlanS === "standard" && (
                <p className="text-[#ff02c8] font-semibold text-2xl">
                  10,000–12,000 ETB
                </p>
              )}
              {/* {selectedPlanS === "professional" && (
                <p className="text-[#ff02c8] font-semibold text-2xl">
                  8000–9500 ETB
                </p>
              )} */}
              <p className="text-gray-200 font-light text-[12px] mt-1 opacity-75">
                per project
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start  my-5">
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  3-7 Page Website
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  API Integration
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Responsive Design
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Interactive Prototype
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  SEO Optimization
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Contact Forms
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  7-10 Day Delivery
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Priority Support
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Premium */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="group w-full shadow shadow-amber-50 hover:shadow-xl  p-4 bg-gradient-to-r flex flex-col items-center justify-center from-[#15161a] to-transparent border border-gray-400 rounded-2xl "
        >
          <h2 className="font-semibold text-white text-[20px] md:text-2xl my-5">
            Premium
          </h2>
          <div>
            {/* <div className="flex items-center space-x-2 my-5">
              <button
                onClick={() => setSelectedPlanP("standard")}
                className={`  cursor-pointer mb-1 text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanP === "standard"
                    ? "bg-[#ff02b3] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#dd73c6] hover:text-white"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlanP("professional")}
                className={`mb-1 cursor-pointer text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanP === "professional"
                    ? "bg-[#ff02c8] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#ff7664] hover:text-white"
                }}`}
              >
                Professional
              </button>
            </div> */}

            {/* Prices */}
            <div className="w-full flex flex-col items-center justify-center mt-3">
              {selectedPlanP === "standard" && (
                <p className="text-[#ff02c8] font-semibold text-2xl">
                  20,000–30,000 ETB
                </p>
              )}
              {/* {selectedPlanP === "professional" && (
                <p className="text-[#ff02b3] font-semibold text-2xl">
                  11000–13000 ETB
                </p>
              )} */}
              <p className="text-gray-200 font-light text-[12px] mt-1 opacity-75">
                per project
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start  my-5">
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Full-Stack Application
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  User Authentication
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Database Integration
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Admin Dashboard
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Payment Gateway
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Advanced Features
                </span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  24/7 Premium Support
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PriceCardDev;
