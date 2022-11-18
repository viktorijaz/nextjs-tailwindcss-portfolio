import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="experience" className="snap-center">
        <Skills />
      </section>
    </div>
  );
}
