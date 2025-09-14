import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectData } from "@/app/Data/data";
import Link from "next/link";
import Image from "next/image";

const Project2 = () => {
  return (
    <div
      id="projects"
      className="pt-16 pb-16 bg-gradient-to-l from-[#060707] to-[#181818]"
    >
      <div className="mt-8">
        <SectionHeading> Web Project</SectionHeading>
      </div>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
        {projectData.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-blue-950 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt="project"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project2;
