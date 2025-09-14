import Image from "next/image";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: number;
  };
};
const SkillCard = ({ skill }: Props) => {
  const { image, percent, title } = skill;
  return (
    <div className="p-6 hover:bg-blue-500 hover:scale-105 hover:rotate-2 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900 ">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[15px] mt-4 mb-4 text-white font-semibold">
        {title}
      </h1>

      <ProgressBar
        completed={percent}
        maxCompleted={100}
        animateOnRender={true}
        bgColor="#0019fa"
      />
    </div>
  );
};

export default SkillCard;
