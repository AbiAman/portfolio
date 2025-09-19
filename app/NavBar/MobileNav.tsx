import { navLinks } from "@/constant/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translat-x-0" : "-translate-x-full";
  return (
    <div className="">
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} md:hidden transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      >
        {" "}
      </div>
      <div
        className={`${navOpen} md:hidden transform transition-all duration-500 delay-300 text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0d0e0d] space-y-6 z-[10000]`}
      >
        {navLinks.map((navliks) => {
          return (
            <Link key={navliks.id} href={navliks.url}>
              <p className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-0.5 border-white sm:text-[30px]">
                {navliks.lable}
              </p>
            </Link>
          );
        })}
        {/* close button */}
        <CgClose
          onClick={closeNav}
          className="absolute cursor-pointer top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"
        />{" "}
      </div>
    </div>
  );
};

export default MobileNav;
