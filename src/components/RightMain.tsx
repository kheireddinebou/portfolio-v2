import AboutSec from "./AboutSec";
import Footer from "./Footer";
import ProjectsSec from "./ProjectsSec";
import SkillsSec from "./SkillsSec";

const RightMain = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <AboutSec />
      <SkillsSec />
      <ProjectsSec />
      <Footer />
    </main>
  );
};

export default RightMain;
