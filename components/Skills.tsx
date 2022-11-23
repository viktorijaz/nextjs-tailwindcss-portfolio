import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex relative flex-col text-center space-y-12 max-w-[2000px] xl:px-10 min-h-screen justify-center  mx-auto items-center"
    >
      <h3 className="font-bold text-regal-black text-4xl mt-24">Skills</h3>
      <p className="text-md text-regal-black max-w-md text-[16px] leading-[24px] text-center mt-8">
        A showcase of the projects I have worked on. by no means an exhaustive
        list, just a portion that shows the versatile and Detail-oriented aspect
        of my work
      </p>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
