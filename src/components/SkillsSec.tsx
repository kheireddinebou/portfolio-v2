import { backEndSkills, frontEndSkills, otherSkills } from "@/data/skills";
import IsInViewPort from "./ui/IsInViewPort";
import SectionTitle from "./ui/SectionTitle";
import SkillsCard from "./ui/SkillsCard";
import { AiOutlineArrowRight } from "react-icons/ai";

const SkillsSec = () => {
  return (
    <IsInViewPort
      className="flex flex-col gap-4 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      threshold={0.8}
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
          className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
          aria-label="View Full Résumé"
          href="/resume.pdf"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full{" "}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Resume
              </span>
              <AiOutlineArrowRight
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </span>
          </span>
        </a>
      </div>
    </IsInViewPort>
  );
};

export default SkillsSec;
