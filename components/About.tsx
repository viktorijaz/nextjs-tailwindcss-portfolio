import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex relative flex-col md:flex-row text-center max-w-7xl px-10 justify-evenly mx-auto items-center md:text-left overflow-hidden">
      <h3 className="absolute uppercase top-24 tracking-wider text-2xl text-gray-500">About </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://gravatar.com/avatar/8672deaef503beb696aa2206604a76e8?s=400&d=robohash&r=x"
        className="flex-shrink-0 opacity-100 w-56 h-56 rounded-full object-cover md:w-[400] md:h-[400]"
      ></motion.img>
      <div className="space-y-10 px-0 md:px-10">
        <h3 className="text-4xl font-semibold">Info about me</h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
}
