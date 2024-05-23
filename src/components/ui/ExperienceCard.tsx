import Image from "next/image";
import { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={`${experience.startDate} to ${experience.endDate}`}
        >
          {experience.startDate} — {experience.endDate}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href={experience.companyUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${experience.role} at ${experience.company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {experience.role} ·{" "}
                  <span className="inline-block">
                    {experience.company}
                    <FiArrowUpRight
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </a>
            </div>
          </h3>

          <ul className="mt-2 text-sm leading-normal">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="mb-2">- {achievement}</li>
            ))}
          </ul>

          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {experience.technologies.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ExperienceCard;
