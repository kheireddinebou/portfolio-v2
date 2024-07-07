import Paragraph from "../ui/Paragraph";
import SectionTitle from "../ui/SectionTitle";

const AboutSec = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionTitle>about</SectionTitle>
      <Paragraph className="mb-4 lg:mt-1">
        As a Front End Developer with real-world experience in crafting robust
        web applications using React, JavaScript, and industry-leading tools, I
        excel in enhancing user interaction through innovative features.
      </Paragraph>
      <Paragraph className="mb-4">
        My expertise lies in merging design with functionality to create
        seamless user interactions, following industry best practices and UI/UX
        design principles. I am passionate about continuous learning and sharing
        knowledge, consistently working to improve and share my skills.
      </Paragraph>
      <Paragraph>
        When I'm not at the computer, you can usually find me reading books,
        spending time with friends, or possibly out for a run.
      </Paragraph>
    </section>
  );
};

export default AboutSec;
