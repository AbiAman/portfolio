"use client";
import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import PriceCard from "./PriceCard";

function Price() {
  return (
    <div
      id="Pricing"
      className="pt-16 pb-8 bg-linear-to-r from-[#1a1919] to-[#000000]"
    >
      <SectionHeading>Flexible Plans</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 mb-8 items-center">
        <div>
          <PriceCard />
        </div>
      </div>
    </div>
  );
}

export default Price;
