import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  children?: ReactElement;
  title: string;
  desc: string;
  role: string;
  time: string;
  place: string;
};

export default function WorkExperience({
  directionLeft,
  title,
  desc,
  role,
  time,
  place,
}: Props) {
  return (
    <div className="relative flex flex-rown cursor-pointer max-w-5xl space-x-5 px-5 py-4 my-2  justify-start items-start border border-white border-b-[#F2f2f2]">
      <motion.div
        className="relative group basis-1/4 space-y-4"
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-lg text-regal-black text-left font-semibold">
          {place}
        </h2>
        <div className="text-regal-black">
          {role}
          <span className="bg-regal-yellow px-2 ml-2 text-white ">{time}</span>
        </div>
      </motion.div>
      <div className="space-y-4">
        <h2 className="text-lg text-regal-black text-left font-semibold">
          {title}
        </h2>
        <p className="text-regal-gray">{desc}</p>
      </div>
    </div>
  );
}
