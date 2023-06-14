import AboutSec from "./sections/AboutSec";
import Footer from "./Footer";
import ProjectsSec from "./sections/ProjectsSec";
import SkillsSec from "./sections/SkillsSec";
import SocialMediaLinks from "./SocialMediaLinks";

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
