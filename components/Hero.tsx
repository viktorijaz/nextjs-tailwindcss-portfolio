import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["A Front End Developer", "A Coffee Drinker", "And a bit more"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen bg-[url('/polygons-bg.png')] bg-no-repeat">
      <div className="min-w-full flex flex-col md:flex-row items-start justify-evenly p-11">
        <div className="flex flex-col items-start md:basis-1/2  my-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-left leading-12 mt-8">
            I’m Rayan Adlrdard <br></br>
            <span className="text-regal-green">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <p className="text-[#767676] text-base my-6 font-medium leading-6 max-w-[500px]">
            Front-End Engineer for more than a decade. <br></br>Science and Art
            Aficionado. Interested in every major relevant technology, from
            Back-End Frameworks To Web 3.
          </p>
          <div className="bg-regal-green py-3 px-8 flex items-center rounded-md text-white font-semibold uppercase text-md ">
            Ping Me
            <EnvelopeIcon className="text-white h-4 w-4 animate-pulse ml-2" />
          </div>
        </div>
        <div className="rounded-full overflow-hidden h-64 w-64 order-first md:order-last">
          <Image
            width="250"
            height="250"
            layout="contain"
            className=""
            src="/profile.png"
            alt="profile pic"
          />
        </div>
      </div>
      <div className="min-w-full min-h-fit flex justify-end">
        <Image
          width="780"
          height="450"
          layout="contain"
          className="text-right"
          src="/cloud-tag.svg"
          alt="skills cloud tags"
        />
      </div>
    </div>
  );
}
