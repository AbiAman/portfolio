"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constant/constants";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
type Props = {
  openNav: () => void;
};
const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  });
  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#000000]" : "fixed"
      } transition-all duration-300 z-[10] w-full `}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Link href="#home">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="ml-[-1.5rem] sm:ml-0 p-4"
          />
        </Link>
        {/* Nav Link */}
        <div className="flex items-center  space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlinks) => {
              return (
                <Link key={navlinks.id} href={navlinks.url}>
                  <p className="nav_link">{navlinks.lable}</p>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Button */}
        <div className="justify-center flex items-center space-x-2">
          <div className="">
            <Image
              src="/images/pro.png"
              alt="profile"
              width={60}
              height={60}
              className="p-4"
            />
          </div>
          <p className="text-gray-300 text-sm">Aman, Hi</p>

          {/* Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
