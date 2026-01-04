import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

export default function Home() {
  const items = portfolioConfig.about.hobbies.map((hobby) => ({ hobby }));

  return (
    <div className="flex flex-col w-full h-fit gap-20">
      {/* HERO SECTION */}
      <div className="flex flex-row w-full justify-between items-center min-h-[80vh]">
        {/* LEFT SIDE  */}
        <FramerWrapper
          className=" h-full w-auto flex flex-col justify-start gap-4"
          y={0}
          x={-100}
        >
          <HeroTexts />
          <div className="h-fit w-full p-4 flex gap-4">
            <SocialLinks />
          </div>
          <DownLoadResumeBtn />
        </FramerWrapper>
        {/* RIGHT SIDE image  */}
        <FramerWrapper
          className="h-full w-[47%] relative block   max-lg:hidden"
          y={0}
          x={100}
        >
          {/* IMAGE  */}
          <HeroImage />
        </FramerWrapper>

        {/* GITHUB BUTTON  */}
        <GithubBtn />
      </div>

      {/* ABOUT SECTION */}
      <div
        className="h-fit w-full relative flex flex-col items-start gap-5 overflow-hidden"
        id="about"
      >
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <User2 className="h-4 w-4" />
          About me
        </Badge>
        <div className="flex flex-col gap-5">
          <Heading>
            {portfolioConfig.title} And Web <br /> Developer, Based In{" "}
            {portfolioConfig.about.personalInfo.nationality}.
          </Heading>

          <FramerWrapper y={0} x={100}>
            <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg ">
              {portfolioConfig.about.bio}
            </p>
          </FramerWrapper>
        </div>
        <FramerWrapper
          className="w-full flex flex-row justify-between max-lg:flex-col "
          y={100}
          delay={0.3}
        >
          <Aboutfooter />
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.31}>
          <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
            {" "}
            <Heart className="h-8 w-8" /> Hobbies
          </h1>
          <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
            {items.map((val, indx) => {
              return (
                <div
                  key={indx}
                  className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
                >
                  <Circle className="h-3 w-3" /> {val.hobby}
                </div>
              );
            })}
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
}
