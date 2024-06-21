import { myProjects } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

const ProjectsSec = () => {
  return (
    <section
      className="flex flex-col gap-4 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="projects"
    >
      <SectionTitle>Projects</SectionTitle>

      <ul className="flex flex-col gap-4">
        {myProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSec;
