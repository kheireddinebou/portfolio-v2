import React, { ReactNode } from "react";

const Tool = ({ children }: { children: ReactNode }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
        {children}
      </div>
    </li>
  );
};

export default Tool;
