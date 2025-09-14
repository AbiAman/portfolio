import { navLinks } from "@/constant/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-15 bg-[#111111]">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="mx-auto mb-5"
        />
      </div>
      <div className="">
        <div className="flex items-center flex-wrap justify-center gap-10 text-white font-bold">
          {navLinks.map((navlinks) => {
            return (
              <Link key={navlinks.id} href={navlinks.url}>
                <p className="">{navlinks.lable}</p>
              </Link>
            );
          })}
        </div>
        <p className="text-white opacity-60 mt-6 text-center">
          © 2025 All Rights Reserved by Amanuel
        </p>
      </div>
    </div>
  );
};

export default Footer;
