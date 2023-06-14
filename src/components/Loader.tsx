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

  if (isLoaded) {
    return <LoaderAnimation />;
  }

  return <>{children}</>;
};

export default Loader;
