import React from "react";
import { motion } from "framer-motion";
import Service from "./Service";
import WorkExperience from "./WorkExperience";

export default function WorkHistory() {
  return (
    <div className="flex md:min-h-screen flex-col max-w-[2000px] justify-stretch mx-auto items-center">
      <h3 className="font-bold text-regal-black text-4xl mt-24">WorkHistory</h3>
      <p className="text-md text-regal-black max-w-md text-[16px] leading-[24px] text-center mt-8">
        Front-End Engineer
        <span className="text-regal-green">
          <strong>for more than a decade.</strong>
        </span>
        I have worked for Fast paced start-ups, Multinational Companies,
        innovative providers.
      </p>
      <div className="flex flex-col">
        <WorkExperience
          title="Front End Development"
          desc=" JavaScript, React, Angular, TypeScript, NextJs, HTML, CSS, SCSS,
        Tailwind, MUI, Bootstrap, Storybook, Testing, Mobile Development"
          role="Developer"
          place="Self-Employed"
          time="from-to"
        />
        <WorkExperience
          title="Front End Development"
          desc=" JavaScript, React, Angular, TypeScript, NextJs, HTML, CSS, SCSS,
        Tailwind, MUI, Bootstrap, Storybook, Testing, Mobile Development"
          role="Developer"
          place="Self-Employed"
          time="from-to"
        />
        <WorkExperience
          title="Front End Development"
          desc=" JavaScript, React, Angular, TypeScript, NextJs, HTML, CSS, SCSS,
        Tailwind, MUI, Bootstrap, Storybook, Testing, Mobile Development"
          role="Developer"
          place="Self-Employed"
          time="from-to"
        />
        <WorkExperience
          title="Front End Development"
          desc=" JavaScript, React, Angular, TypeScript, NextJs, HTML, CSS, SCSS,
        Tailwind, MUI, Bootstrap, Storybook, Testing, Mobile Development"
          role="Developer"
          place="Self-Employed"
          time="from-to"
        />
      </div>
    </div>
  );
}
