import { backEndSkills, frontEndSkills, otherSkills } from "@/data/skills";
import { FiArrowUpRight } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle";
import SkillsCard from "../ui/SkillsCard";

const SkillsSec = () => {
  return (
    <section
      className="flex flex-col gap-4 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="skills"
    >
      <SectionTitle>skills</SectionTitle>
      <div className="flex flex-col gap-16">
        <SkillsCard
          title="The tech I use for building client-side applications"
          skills={frontEndSkills}
        />
        <SkillsCard
          title="The tech I use for building fast and scalable backend applications"
          skills={backEndSkills}
        />
        <SkillsCard title="Others...and more!" skills={otherSkills} />
      </div>

      <div className="mt-12">
        <a
          className="inline items-center leading-tight font-semibold text-slate-200 group transition-colors hover:text-teal-300 focus-visible:text-teal-300"
          aria-label="View Full Résumé"
          href="/resume.pdf"
          target="_blanc"
        >
          <span>View Full </span>
          <span className="whitespace-nowrap">
            <span>Resume</span>
            <FiArrowUpRight
              className="inline-block h-4 w-4 shrink-0 transition-[transform,_color] group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              aria-hidden="true"
            />
          </span>{" "}
        </a>
      </div>
    </section>
  );
};

export default SkillsSec;
