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

export default function Project({ directionLeft, title, desc, img }: Props) {
  return (
    <div className="relative flex flex-col cursor-pointer max-w-xs space-y-2 px-5 justify-start items-start">
      <motion.div
        className="relative group"
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Image
          width="290"
          height="290"
          objectFit="cover"
          className="border-gray-500 object-cover w-[290px] transition filter group-hover:grayscale grayscale-0 duration-300 ease-in-out"
          src={img}
          alt="service"
        />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black">{title}</p>
          </div>
        </div>
      </motion.div>
      <h2 className="text-lg text-regal-black text-left font-semibold">
        {title}
      </h2>
      <p className="text-regal-gray">{desc}</p>
    </div>
  );
}
