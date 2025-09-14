"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};
const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="rounded-lg p-6 shadow bg-linear-to-b from-[#1a1919] to-[#1b1b1b]">
      <Image
        src={`${service.icon}`}
        alt={service.title}
        width={50}
        height={50}
      />
      <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
      <p className="mt-3 text-sm text-white opacity-80">
        {service.description}
      </p>
    </Tilt>
  );
};

export default ServiceCard;
