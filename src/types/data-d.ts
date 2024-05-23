interface Skill {
  name: string;
  img: string;
  link: string;
}

interface Project {
  title: string;
  desc: string;
  img: string;
  githubLink: string;
  demoLink: string;
  tools: string[];
}

interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
  companyUrl: string;
}
