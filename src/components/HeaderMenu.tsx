"use client";

import useActiveSection from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    name: "about",
    threshold: 1,
  },
  {
    name: "skills",
    threshold: 0.8,
  },
  {
    name: "experience",
    threshold: 0.8,
  },
  {
    name: "projects",
    threshold: 0.3,
  },
];

const HeaderMenu = () => {
  const { activeSection, setActiveSection } = useActiveSection(menuItems);

  return (
    <nav className="hidden lg:block">
      <ul className="lg:flex flex-col">
        {menuItems.map(item => (
          <li key={item.name}>
            <a
              onClick={() => setActiveSection(item.name)}
              className="flex group items-center w-fit gap-2 py-3"
              href={`#${item.name}`}
            >
              <span
                className={cn(
                  "mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                  {
                    "bg-slate-200": activeSection === item.name,
                    "w-16": activeSection === item.name,
                  }
                )}
              ></span>
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                  {
                    "text-slate-200": activeSection === item.name,
                  }
                )}
              >
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
