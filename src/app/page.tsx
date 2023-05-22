import LeftHeader from "@/components/LeftHeader";
import RightMain from "@/components/RightMain";



export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-[1330px] px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-6">
        <LeftHeader />
        <RightMain />
      </div>
    </div>
  );
}
