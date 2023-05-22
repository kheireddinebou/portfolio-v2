"use client";

import React, { useRef, ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveSec } from "../../redux/activeSecSlice";

interface IsInViewPortProps {
  children: ReactNode;
  className?: string;
  id: string;
  threshold: number;
}

const IsInViewPort = ({
  children,
  className,
  id,
  threshold,
}: IsInViewPortProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSec(entry.target.id));
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [dispatch, threshold]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
};

export default IsInViewPort;
