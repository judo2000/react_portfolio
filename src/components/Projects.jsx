import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const Projects = () => {
  return (
    <section id="work" className="section-pad scroll-mt-20">
      <SectionHeading eyebrow="// Selected Work" title="More things I've built" index={3} total={5}>
        A range of full-stack apps, games, and tools — from MERN e-commerce to vanilla-JS utilities.
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
