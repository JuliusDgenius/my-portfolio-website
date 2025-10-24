import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import FeaturedProjects from "../sections/FeaturedProjects";
import CTA from "../sections/CTA";

export default function Home() {
  return (
    <div className="bg-[#0d1117] flex flex-col items-center w-full overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <CTA />
    </div>
  );
}
