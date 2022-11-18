import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1], scale: [1, 1.5, 2, 2, 1] }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#e8e8e8] rounded-full w-[200px] h-[200px] animate-ping" />
      <div className="border border-[#e8e8e8] rounded-full w-[350px] h-[350px] absolute" />
      <div className="border border-[#e8e8e8] rounded-full w-[500px] h-[500px] absolute" />
      <div className="border border-[#a79540] rounded-full w-[650px] h-[650px] opacity-20 absolute" />
      <div className="border border-[#e8e8e8] rounded-full w-[750px] h-[750px]  absolute" />
    </motion.div>
  );
}
