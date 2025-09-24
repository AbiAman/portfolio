"use client";
import { navLinks } from "@/constant/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiGithub, FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="pt-16 pb-15  bg-gradient-to-b from-[#101725] to-[#020305] w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-[80%] mx-auto text-white grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
      >
        {/* FIRST COL */}
        <div className="w-full items-start">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="mb-2"
          />
          <h1 className="text-4xl font-bold text-bg">Amanuel Hailu</h1>
          <p className="font-light text-[16px] mt-4 text-gray-400">
            Full-Stack MERN & React Native Developer passionate about creating
            innovative digital solutions with modern technologies.
          </p>
          <div className="flex flex-wrap gap-5 w-full">
            <Link
              href="https://github.com/AbiAman"
              className="bg-transparent border rounded-2xl w-fit cursor-pointer hover:scale-110 hover:animate-pulse border-gray-400 p-3 mt-4 hover:bg-gradient-to-l from-[#27C4EF] to-[#388DF5] items-center text-white"
            >
              <FiGithub size={15} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/amanuel-hailu-4b3898284"
              className="bg-transparent border rounded-2xl w-fit cursor-pointer hover:scale-110 hover:animate-pulse border-gray-400 p-3 mt-4 hover:bg-gradient-to-l from-[#27C4EF] to-[#388DF5] items-center text-white"
            >
              <TiSocialLinkedin size={15} />
            </Link>
            <Link
              href="https://t.me/BeYourSelfamu"
              className="bg-transparent border rounded-2xl w-fit cursor-pointer hover:scale-110 hover:animate-pulse border-gray-400 p-3 mt-4 hover:bg-gradient-to-l from-[#27C4EF] to-[#388DF5] items-center text-white"
            >
              <FaTelegramPlane size={15} />
            </Link>
            <Link
              href="https://amani.hi.0941@gmail.com"
              className="bg-transparent border rounded-2xl w-fit cursor-pointer hover:scale-110 hover:animate-pulse border-gray-400 p-3 mt-4 hover:bg-gradient-to-l from-[#27C4EF] to-[#388DF5] items-center text-white"
            >
              <GoMail size={15} />
            </Link>
            <Link
              href="https://www.instagram.com/amani0941"
              className="bg-transparent border rounded-2xl w-fit cursor-pointer hover:scale-110 hover:animate-pulse border-gray-400 p-3 mt-4 hover:bg-gradient-to-l from-[#27C4EF] to-[#388DF5] items-center text-white"
            >
              <FaInstagram size={15} />
            </Link>
          </div>
        </div>
        {/* SEC COL */}
        <div className="flex flex-col gap-5 text-gray-400 font-light w-full md:items-center items-start">
          <h1 className="text-2xl text-white font-bold">Quick Links</h1>
          <div className="flex flex-col gap-5 items-start ">
            {navLinks.map((navlinks) => {
              return (
                <Link key={navlinks.id} href={navlinks.url}>
                  <p className="text-[16px] hover:text-gray-200">
                    {navlinks.lable}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        {/* THIRD COL */}
        <div className=" flex flex-col gap-5 text-gray-400 font-light w-full lg:items-center items-start">
          <h1 className="text-2xl text-white font-bold">Contact Info</h1>
          <div className="flex flex-col gap-5 items-start ">
            <div className="flex space-x-2 items-center justify-center">
              <GoMail className="text-blue-600 " />
              <p>amani.hi.0941@gmail.com</p>
            </div>
            <div className="flex space-x-2 items-center justify-center">
              <FiPhone className="text-blue-600 " />
              <p>0941878824</p>
            </div>
            <div className="flex space-x-2 items-center justify-center">
              <IoLocationOutline className="text-blue-600 " />
              <p>Ethiopia, Hawassa</p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mx-auto w-[80%] bg-gray-400 h-[0.5px] mt-12 mb-5 opacity-75 "></div>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-gray-500 text-opacity-60 mt-6 text-center font-light"
      >
        © 2025 All Rights Reserved by Amanuel Hailu
      </motion.p>
    </div>
  );
};

export default Footer;
