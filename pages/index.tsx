import Head from "next/head";
import Image from "next/image";
import Services from "../components/Services";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectsGrid from "../components/ProjectsGrid";
import WorkHistory from "../components/WorkHistory";

export default function Home() {
  return (
    <div className="max-w-6xl bg-white mx-auto">
      <div className="snap-y snap-mandatory z-0">
        <Head>
          <title>Portfolio</title>
        </Head>

        <Header />

        <section
          id="hero"
          className="snap-start"
        >
          <Hero />
        </section>

        <section
          id="services"
          className="snap-start"
        >
          <Services />
        </section>

        <section
          id="experience"
          className="snap-center"
        >
          <ProjectsGrid />
        </section>

        <section
          id="skills"
          className="snap-center"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="snap-center"
        >
          <WorkHistory />
        </section>

        <section
          id="contact"
          className="snap-center"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}
