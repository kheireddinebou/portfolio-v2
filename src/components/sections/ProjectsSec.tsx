import { myProjects } from "@/data/projects";
import IsInViewPort from "../ui/IsInViewPort";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

const ProjectsSec = () => {
  return (
    <IsInViewPort
      className="flex flex-col gap-4 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      threshold={0.3}
      id="projects"
    >
      <SectionTitle>Projects</SectionTitle>

      <ul className="flex flex-col gap-4">
        {myProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </ul>
    </IsInViewPort>
  );
};

export default ProjectsSec;
