import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex item-start justify-between max-w-7xl mx-auto z-20 p-5 bg-white">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.behance.net/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <div className="py-3">
        <Link href="#services">
          <button className="heroButton">Services</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton">Contact</button>
        </Link>
      </div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-400 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm">
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
