import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://cdn.sanity.io/images/ltuexkre/production/3b6be32275d8b7ff5fb3b20275fd3e0f35a27609-600x315.png"
        className="rounded-full border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 transition filter group-hover:grayscale grayscale-0 duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black">100%</p>
        </div>
      </div>
    </div>
  )
}