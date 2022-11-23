import React from "react";
import { motion } from "framer-motion";
import Service from "./Service";

export default function Services() {
  return (
    <div className="flex md:h-screen flex-col text-center max-w-[2000px] xl:px-10 justify-start mx-auto items-center">
      <h3 className="font-bold text-regal-black text-4xl mt-24">My Services</h3>
      <p className="text-md text-regal-black max-w-md text-[16px] leading-[24px] text-center mt-8">
        I participate in
        <span className="text-regal-green">
          <strong>all stages of the product delivery</strong>
        </span>
        , starting from the user stories and design, programming and all the way
        up to collaborating with all the major stakeholders
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mx-auto mt-16">
        <Service
          title="Front End Development"
          desc=" JavaScript, React, Angular, TypeScript, NextJs, HTML, CSS, SCSS,
        Tailwind, MUI, Bootstrap, Storybook, Testing, Mobile Development"
          img="/service-development.svg"
        />
        <Service
          title="User Interfaces"
          desc="Figma, Photoshop, animations, Responsivness, Mobile First, Theming"
          img="/service-design.svg"
        />
        <Service
          title="Back End Development"
          desc=" JavaScript, React, Angular, TypeScript, NextJs, HTML, CSS, SCSS,
        Tailwind, MUI, Bootstrap, Storybook, Testing, Mobile Development"
          img="/service-development.svg"
        />
        <Service
          title="Tooling and Beast Practices"
          desc="Git, Webpack, Grunt, Docker, Testing, Design Patterns, Software architecture"
          img="/service-tooling.svg"
        />
        <Service
          title="Management"
          desc="Agile, Scrum, Team Lead, Communicating with Product Owners"
          img="/service-management.svg"
        />
        <Service
          title="Upcoming Technologies"
          desc="Acquiring new and Pioneering technologies On the fly"
          img="/service-new.svg"
        />
      </div>
    </div>
  );
}
