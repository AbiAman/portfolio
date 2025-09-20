"use client";
import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="pt-16 pb-8 bg-linear-to-r from-[#1a1919] to-[#000000]">
      <SectionHeading>My Skills</SectionHeading>
      <div className="w-[80%] mx-auto mt-20  items-center">
        <div>
          <SkillCard />
        </div>
      </div>
    </div>
  );
};

export default Skills;
