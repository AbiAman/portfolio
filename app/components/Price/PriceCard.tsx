import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaintBrush } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

function PriceCard() {
  const [selectedPlanB, setSelectedPlanB] = useState("standard");
  const [selectedPlanS, setSelectedPlanS] = useState("standard");
  const [selectedPlanP, setSelectedPlanP] = useState("standard");
  return (
    <div>
      <div className=" items-center justify-center w-full flex flex-col">
        <p className="text-xl md:text-[22px] text-gray-300 font-light mb-16 text-center">
          Choose the plan that fits your project--- whether it is design ,
          development or full creative execution
        </p>
      </div>
      <div className=" items-center justify-center w-full flex flex-col">
        <div className="flex text-white rounded-2xl bg-gradient-to-r from-[#25C9EF] to-[#398AF5] p-3 mb-3 items-center justify-center w-fit group-hover:scale-110">
          <FaPaintBrush size={20} />
        </div>
        <p className="text-xl md:text-[16px] text-[#398AF5] font-light mb-16 text-center">
          Logo, Banner, Poster & Brand identity
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
            <div className="flex items-center space-x-2 my-5">
              <button
                onClick={() => setSelectedPlanB("standard")}
                className={`  cursor-pointer mb-1 text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanB === "standard"
                    ? "bg-[#398AF5] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#398AF5] hover:text-white"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlanB("professional")}
                className={`mb-1 cursor-pointer text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanB === "professional"
                    ? "bg-[#398AF5] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#398AF5] hover:text-white"
                }}`}
              >
                Professional
              </button>
            </div>

            {/* Prices */}
            <div className="w-full flex flex-col items-center mt-3">
              {selectedPlanB === "standard" && (
                <p className="text-[#398AF5] font-semibold text-2xl">
                  1500–3000 ETB
                </p>
              )}
              {selectedPlanB === "professional" && (
                <p className="text-[#398AF5] font-semibold text-2xl">
                  3000–5000 ETB
                </p>
              )}
              <p className="text-gray-200 font-light text-[12px] mt-1 opacity-75">
                per project
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start  my-5">
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  1 Concept Design
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  1 Revision Round
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  PNG/JPEG Delivery
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  2-3 Day Delivery
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Basic Support
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
          className="group shadow shadow-amber-50 hover:shadow-xl  w-full p-4 bg-gradient-to-r flex flex-col items-center justify-center scale-110 from-[#15161a] to-transparent border border-[#0717f5] rounded-2xl "
        >
          <h2 className=" text-gray-400 text-[12px] md:text-sm my-2">
            Recommended
          </h2>
          <h2 className="font-semibold text-white text-[20px] md:text-2xl my-5">
            Standard
          </h2>
          <div>
            <div className="flex items-center space-x-2 my-5">
              <button
                onClick={() => setSelectedPlanS("standard")}
                className={`  cursor-pointer mb-1 text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanS === "standard"
                    ? "bg-[#398AF5] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#398AF5] hover:text-white"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlanS("professional")}
                className={`mb-1 cursor-pointer text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanS === "professional"
                    ? "bg-[#398AF5] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#398AF5] hover:text-white"
                }}`}
              >
                Professional
              </button>
            </div>

            {/* Prices */}
            <div className="w-full flex flex-col items-center justify-center mt-3">
              {selectedPlanS === "standard" && (
                <p className="text-[#398AF5] font-semibold text-2xl">
                  4000–6000 ETB
                </p>
              )}
              {selectedPlanS === "professional" && (
                <p className="text-[#398AF5] font-semibold text-2xl">
                  6000–7000 ETB
                </p>
              )}
              <p className="text-gray-200 font-light text-[12px] mt-1 opacity-75">
                per project
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start  my-5">
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  2 Concept Designs
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  3 Revision Rounds
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  PNG/JPEG Delivery
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Source Files (PSD)
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  3-5 Day Delivery
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Priority Support
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
            <div className="flex items-center space-x-2 my-5">
              <button
                onClick={() => setSelectedPlanP("standard")}
                className={`  cursor-pointer mb-1 text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanP === "standard"
                    ? "bg-[#398AF5] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#398AF5] hover:text-white"
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setSelectedPlanP("professional")}
                className={`mb-1 cursor-pointer text-base font-medium text-[10px] rounded-2xl text-center px-3 py-0.5 transition-all duration-300 ${
                  selectedPlanP === "professional"
                    ? "bg-[#398AF5] text-white"
                    : "bg-[#ffffff] text-black opacity-70 hover:bg-[#398AF5] hover:text-white"
                }}`}
              >
                Professional
              </button>
            </div>

            {/* Prices */}
            <div className="w-full flex flex-col items-center justify-center mt-3">
              {selectedPlanP === "standard" && (
                <p className="text-[#398AF5] font-semibold text-2xl">
                  7000–9000 ETB
                </p>
              )}
              {selectedPlanP === "professional" && (
                <p className="text-[#398AF5] font-semibold text-2xl">
                  8000–10000 ETB
                </p>
              )}
              <p className="text-gray-200 font-light text-[12px] mt-1 opacity-75">
                per project
              </p>
            </div>
            <div className="flex flex-col space-y-3 items-start  my-5">
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  3-5 Concept Designs
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Unlimited Revisions
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Full Brand Kit
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Logo + Banner + Poster
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-500 text-[16px]">
                <BsCheckCircleFill />
                <span className="text-white text-base font-light ">
                  Social Media Pack
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
}

export default PriceCard;
