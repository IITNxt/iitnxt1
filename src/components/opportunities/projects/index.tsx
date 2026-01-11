"use client";

import { projects } from "./data";
import ProjectCard from "./ProjectCard";
import FAQsSection from "./FAQsSection";

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#f4f6f8] to-[#e5e7eb]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#A20A0A] text-center  py-10">
          Our Innovation Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <FAQsSection/>
    </section>
  );
};

export default Projects;
