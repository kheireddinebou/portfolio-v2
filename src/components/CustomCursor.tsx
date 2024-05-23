"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateAuraPosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        cursorRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("pointermove", updateAuraPosition);

    return () => {
      window.removeEventListener("pointermove", updateAuraPosition);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ "--mouse-x": 0, "--mouse-y": 0 } as any}
      className="lg:mouse-effect"
    />
  );
};

export default CustomCursor;
