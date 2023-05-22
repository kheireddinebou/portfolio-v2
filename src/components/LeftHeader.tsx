import SocialMediaLinks from "./SocialMediaLinks";
import LargeHeading from "./ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import HeaderMenu from "./HeaderMenu";

const LeftHeader = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col gap-3">
        <LargeHeading>
          <a href="#">Kheiereddin Boukhatem</a>
        </LargeHeading>
        <LargeHeading size="sm">
          Front End Developer (React / Next.js)
        </LargeHeading>
        <Paragraph className='max-w-xs'>
          I enjoy creating solid, inclusive products and digital
          experiences for the web.
        </Paragraph>
      </div>

      <HeaderMenu />
      <SocialMediaLinks />
    </header>
  );
};

export default LeftHeader;
