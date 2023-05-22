import React from "react";
import IsInViewPort from "./ui/IsInViewPort";
import Paragraph from "./ui/Paragraph";
import SectionTitle from "./ui/SectionTitle";

const AboutSec = () => {
  return (
    <IsInViewPort
      threshold={1}
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <SectionTitle>about</SectionTitle>
      <Paragraph className="mb-4 lg:mt-1">
        As a Front End Developer, I am proficient in the MERN Stack and
        specialize in creating visually appealing and user-friendly websites
        using React. I am also experienced in developing cross-platform mobile
        applications using React Native, ensuring that users have a seamless
        experience across all devices.
      </Paragraph>
      <Paragraph className="mb-4">
        I prioritize meeting deadlines and value the importance of time. I
        believe that open communication and collaboration are key to achieving
        the best possible results.
      </Paragraph>
      <Paragraph>
        When I&apos;m not at the computer, you can usually find me reading
        books, hanging out with friends, or keeping up with the latest car news.
      </Paragraph>
    </IsInViewPort>
  );
};

export default AboutSec;
