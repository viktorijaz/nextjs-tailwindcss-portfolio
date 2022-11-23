import React from "react";
import { motion } from "framer-motion";
import Service from "./Service";
import Project from "./Project";

export default function ProjectsGrid() {
  return (
    <div className="flex min-h-screen flex-col text-center max-w-[2000px] xl:px-10 justify-start mx-auto items-center">
      <h3 className="font-bold text-regal-black text-4xl mt-24">Projects</h3>
      <p className="text-md text-regal-black max-w-md text-[16px] leading-[24px] text-center mt-8">
        A showcase of the projects I have worked on. by no means an exhaustive
        list, just a portion that shows the versatile and Detail-oriented aspect
        of my work
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 mx-auto mt-16 text-left">
        <Project
          title="Webinar Ninja"
          img="/project.png"
          desc="Australian-based webinar portal, WebinarNinja. Worked on Dashboard pages and marketing pages. Css, HTML5, Sass, customjQuery components, Blade templates, Webpack, Angular."
        />
        <Project
          title="Webinar Ninja"
          img="/project.png"
          desc="Australian-based webinar portal, WebinarNinja. Worked on Dashboard pages and marketing pages. Css, HTML5, Sass, customjQuery components, Blade templates, Webpack, Angular."
        />
        <Project
          title="Webinar Ninja"
          img="/project.png"
          desc="Australian-based webinar portal, WebinarNinja. Worked on Dashboard pages and marketing pages. Css, HTML5, Sass, customjQuery components, Blade templates, Webpack, Angular."
        />
        <Project
          title="Webinar Ninja"
          img="/project.png"
          desc="Australian-based webinar portal, WebinarNinja. Worked on Dashboard pages and marketing pages. Css, HTML5, Sass, customjQuery components, Blade templates, Webpack, Angular."
        />
        <Project
          title="Webinar Ninja"
          img="/project.png"
          desc="Australian-based webinar portal, WebinarNinja. Worked on Dashboard pages and marketing pages. Css, HTML5, Sass, customjQuery components, Blade templates, Webpack, Angular."
        />
        <Project
          title="Webinar Ninja"
          img="/project.png"
          desc="Australian-based webinar portal, WebinarNinja. Worked on Dashboard pages and marketing pages. Css, HTML5, Sass, customjQuery components, Blade templates, Webpack, Angular."
        />
      </div>
    </div>
  );
}
