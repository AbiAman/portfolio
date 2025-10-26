import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsCheckCircleFill, BsWindowFullscreen } from "react-icons/bs";
const PriceCardUI = () => {
  const [selectedPlanB, setSelectedPlanB] = useState("standard");
  const [selectedPlanS, setSelectedPlanS] = useState("standard");
  const [selectedPlanP, setSelectedPlanP] = useState("standard");
  return (
    <div className="my-12">
      <div className=" items-center justify-center w-full flex flex-col">
        <div className="flex text-white rounded-2xl bg-gradient-to-r from-[#7aeb7a] to-[#00f80c] p-3 mb-3 items-center justify-center w-fit group-hover:scale-110">
          <BsWindowFullscreen size={20} />
        </div>
        <p className="text-xl md:text-[16px] text-[#00f80c] font-light mb-16 text-center">
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
                    ? "bg-[#00f80c] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#9cffa1] hover:text-white"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlanB("professional")}
                className={`mb-1 cursor-pointer text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanB === "professional"
                    ? "bg-[#00f80c] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#93ff99] hover:text-white"
                }}`}
              >
                Professional
              </button>
            </div> */}

            {/* Prices */}
            <div className="w-full flex flex-col items-center mt-3">
              {selectedPlanB === "standard" && (
                <p className="text-[#00f80c] font-semibold text-2xl">
                  4,000–6,000 ETB
                </p>
              )}
              {/* {selectedPlanB === "professional" && (
                <p className="text-[#00f80c] font-semibold text-2xl">
                  5000–7000 ETB
                </p>
              )} */}
              <p className="text-gray-200 font-light text-[12px] mt-1 opacity-75">
                per project
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start  my-5">
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  1-3 Screen Design
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Figma File
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Minimal User Flow
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Basic Prototype
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
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
          className="group shadow shadow-amber-50 hover:shadow-xl  w-full p-4 bg-gradient-to-r flex flex-col items-center justify-center scale-110 from-[#15161a] to-transparent border border-[#00f80c] rounded-2xl "
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
                    ? "bg-[#00f80c] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#a1fca6] hover:text-white"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlanS("professional")}
                className={`mb-1 cursor-pointer text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanS === "professional"
                    ? "bg-[#00f80c] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#50fd59] hover:text-white"
                }}`}
              >
                Professional
              </button>
            </div> */}

            {/* Prices */}
            <div className="w-full flex flex-col items-center justify-center mt-3">
              {selectedPlanS === "standard" && (
                <p className="text-[#00f80c] font-semibold text-2xl">
                  7,000–9,000 ETB
                </p>
              )}
              {/* {selectedPlanS === "professional" && (
                <p className="text-[#00f80c] font-semibold text-2xl">
                  8000–9500 ETB
                </p>
              )} */}
              <p className="text-gray-200 font-light text-[12px] mt-1 opacity-75">
                per project
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start  my-5">
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  3-5 Screen Designs
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Complete User Flow
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Interactive Prototype
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Responsive Layout
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Design System Basics
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  5-7 Day Delivery
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
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
                    ? "bg-[#00f80c] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#8aff90] hover:text-white"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlanP("professional")}
                className={`mb-1 cursor-pointer text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanP === "professional"
                    ? "bg-[#00f80c] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#75f87b] hover:text-white"
                }}`}
              >
                Professional
              </button>
            </div> */}

            {/* Prices */}
            <div className="w-full flex flex-col items-center justify-center mt-3">
              {selectedPlanP === "standard" && (
                <p className="text-[#00f80c] font-semibold text-2xl">
                  10,000–12,000 ETB
                </p>
              )}
              {/* {selectedPlanP === "professional" && (
                <p className="text-[#00f80c] font-semibold text-2xl">
                  11000–13000 ETB
                </p>
              )} */}
              <p className="text-gray-200 font-light text-[12px] mt-1 opacity-75">
                per project
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start  my-5">
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  6-10 Screen Designs
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  UX Research & Analysis
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Wireframes & Mockups
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Complete Style Guide
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Clickable Prototype
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  7-15 Day Delivery
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
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

export default PriceCardUI;
