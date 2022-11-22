import Head from "next/head";
import Image from "next/image";
import Services from "../components/Services";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

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
          className="snap-center"
        >
          <Services />
        </section>

        <section
          id="experience"
          className="snap-center"
        >
          <Experience />
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
          <Projects />
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
