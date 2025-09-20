import React, { ReactNode } from "react";
import { Knewave } from "next/font/google";
const font = Knewave({
  weight: ["400"],
  subsets: ["latin"],
});
type Props = {
  children: ReactNode;
};
const SectionHeading = ({ children }: Props) => {
  return (
    <h1
      className={`${font.className} antialiased bg-white animate-pulse rounded-full shadow-xl shadow-gray-300  w-fit text-center px-5 py-3 mx-auto text-[#246ef7] text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6`}
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
