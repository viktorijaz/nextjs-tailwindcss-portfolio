import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  children?: ReactElement;
  title: string;
  desc: string;
  img: string;
};

export default function Service({ directionLeft, title, desc, img }: Props) {
  return (
    <div className="relative flex flex-col cursor-pointer max-w-xs space-y-3 px-5 justify-start items-center">
      <motion.div
        className="relative group"
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Image
          width="48"
          height="48"
          layout="contain"
          className="border-gray-500 object-cover h-20 w-20 transition filter group-hover:grayscale grayscale-0 duration-300 ease-in-out"
          src={img}
          alt="service"
        />
        <div className="absolute top-0 h-20 w-20 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black">100%</p>
          </div>
        </div>
      </motion.div>
      <h2 className="text-lg text-regal-black font-semibold">{title}</h2>
      <p className="text-regal-gray">{desc}</p>
    </div>
  );
}
