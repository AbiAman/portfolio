"use client";
import React, { useState } from "react";
import SectionHeading from "../Helper/SectionHeading";
import { projectGraphics } from "@/app/Data/data";
import Image from "next/image";

const Project = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div
      id="projects"
      className="pt-16 pb-16 bg-gradient-to-r from-[#060707] to-[#181818] "
    >
      <div className="mt-8">
        <SectionHeading>Graphics Project</SectionHeading>
      </div>

      {/* Project grid */}
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
        {projectGraphics.map((project) => (
          <div
            key={project.id}
            className="bg-blue-950 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(project.image)}
          >
            <Image
              src={project.image}
              alt="project"
              width={500}
              height={500}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-gray-200 bg-opacity-10 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-[90%]">
            <Image
              src={selectedImage}
              alt="Selected Project"
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-lg mx-auto"
            />
            {/* Close button */}
            <button
              className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-600"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
