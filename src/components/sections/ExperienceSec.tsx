import { experiences } from "@/data/experiences";
import ExperienceCard from "../ui/ExperienceCard";
import IsInViewPort from "../ui/IsInViewPort";
import SectionTitle from "../ui/SectionTitle";

const ExperienceSec = () => {
  return (
    <IsInViewPort
      className="flex flex-col gap-4 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      threshold={0.8}
      id="experience"
    >
      <SectionTitle>Experience</SectionTitle>

      <ul className="flex flex-col gap-4">
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </ul>
    </IsInViewPort>
  );
};

export default ExperienceSec;
