"use client";

import { ReactNode, useEffect, useState } from "react";
import LoaderAnimation from "./LoaderAnimation";

const Loader = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(false);
    }, 3400);

    return () => clearTimeout(timer);
  }, []);

  return isLoaded ? <LoaderAnimation /> : children;
};

export default Loader;
