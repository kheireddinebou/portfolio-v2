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
        As a Front End Developer passionate about design and User Experience
        (UX), I specialize in building pixel-perfect, engaging, and accessible
        digital experiences. I merge design with functionality to create
        seamless user interactions.
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
    </section>
  );
};

export default AboutSec;
