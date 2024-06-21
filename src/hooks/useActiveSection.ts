import { useState, useEffect } from "react";

interface Section {
  name: string;
  threshold: number;
}

const useActiveSection = (sections: Section[]) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ name, threshold }) => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold }
      );

      const section = document.getElementById(name);
      if (section) {
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sections]);

  return { activeSection, setActiveSection };
};

export default useActiveSection;
