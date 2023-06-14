"use client";

import { cn } from "@/lib/utils";
import { InitialStateType } from "@/redux/activeSecSlice";
import { useSelector } from "react-redux";

const menuItems = [
  {
    id: "1",
    name: "about",
  },
  {
    id: "2",
    name: "skills",
  },
  {
    id: "3",
    name: "projects",
  },
];

const HeaderMenu = () => {
  const activeSec = useSelector(
    //@ts-ignore
    (state: InitialStateType) => state.activeSec.activeSec
  );

  return (
    <nav className="hidden lg:block mb-[150px]">
      <ul className="lg:flex flex-col">
        {menuItems.map(item => (
          <li key={item.id}>
            <a
              className="flex group items-center w-fit gap-2 py-3"
              href={`#${item.name}`}
            >
              <span
                className={cn(
                  "mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                  {
                    "bg-slate-200": activeSec === item.name,
                    "w-16": activeSec === item.name,
                  }
                )}
              ></span>
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                  {
                    "text-slate-200": activeSec === item.name,
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
