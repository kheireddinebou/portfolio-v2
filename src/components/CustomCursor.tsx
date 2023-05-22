"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isMouseInViewport, setIsMouseInViewport] = useState(true);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  const onMouseDown = (e: MouseEvent) => {
    if (e.button === 0 || e.button === 2) {
      setIsClicked(true);
    }
  };

  const onMouseUp = () => {
    setIsClicked(false);
  };

  const onMouseEnter = () => {
    setIsMouseInViewport(true);
  };

  const onMouseLeave = () => {
    setIsMouseInViewport(false);
  };

  return (
    <div
      className={cn("hidden lg:block pointer-events-none", {
        visible: isMouseInViewport,
        invisible: !isMouseInViewport,
      })}
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="cursor"
      ></div>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: isClicked ? "40px" : "15px", // Adjust the width to your desired size
          height: isClicked ? "40px" : "15px", // Adjust the height to your desired size
        }}
        className="cursor-follower"
      ></div>
    </div>
  );
};

export default CustomCursor;
