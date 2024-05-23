import Footer from "./Footer";
import AboutSec from "./sections/AboutSec";
import ExperienceSec from "./sections/ExperienceSec";
import ProjectsSec from "./sections/ProjectsSec";
import SkillsSec from "./sections/SkillsSec";

const RightMain = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-12 lg:h-md:py-24">
      <AboutSec />
      <SkillsSec />
      <ExperienceSec />
      <ProjectsSec />
      <Footer />
    </main>
  );
};

export default RightMain;
