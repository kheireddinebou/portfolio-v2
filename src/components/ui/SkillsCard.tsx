import Image from "next/image";
import Paragraph from "./Paragraph";

interface SkillsCardProps {
  title: string;
  skills: Skill[];
}

const SkillsCard = ({ title, skills }: SkillsCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <Paragraph size='sm'>{title}</Paragraph>
      <div className="flex flex-wrap items-center gap-7">
        {skills.map((skill, index) => (
          <a
            className="relative group"
            key={index}
            href={skill.link}
            rel="noreferrer"
            target="_blank"
          >
            <span className="transition-all whitespace-nowrap ease-out duration-300 invisible group-hover:visible absolute top-[80%] right-[-20px] z-10 bg-gray-700 text-xs text-slate-200 p-1 border border-slate-200 pointer-events-none">
              {skill.name}
            </span>
            <Image
              width={50}
              height={100}
              src={skill.img}
              alt={skill.name}
              className="hover:scale-[1.3] transition-all ease-out duration-200 grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
