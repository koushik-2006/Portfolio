import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import {
  Circle,
  Heart,
  User2,
  LightbulbIcon,
  Briefcase,
  Layers,
  Phone,
  PackagePlus,
  ExternalLink,
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import SkillsFooter from "@/components/SkillsFotter";
import ProjectCards from "@/components/ProjectsCard";
import ContactForm from "@/components/ContactForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

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

      {/* SKILLS SECTION */}
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <LightbulbIcon className="w-4 h-4" />
          My Skills
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>Technical Skills & Experience</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
              I am a Computer Science student with a good understanding of
              programming languages such as Java, Python, and C++. I enjoy
              learning how software and applications work by writing code and
              building small projects. Along with programming, I have basic
              knowledge of web technologies like HTML, CSS, and JavaScript. I
              continuously improve my skills by practicing regularly, exploring
              new concepts, and applying what I learn in real projects..
            </p>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.3} className="block w-full">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Programming Languages
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter
                items={portfolioConfig.skills.programmingLanguages}
              />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.32}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Framework/Libraries
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.frameworks} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.34}>
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Tools & Technologies
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.tools} />
            </div>
          </FramerWrapper>
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <Briefcase className="h-4 w-4" />
          Education
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>My Education</Heading>
        </div>
        <div className="w-full h-fit flex flex-col">
          {portfolioConfig.education.map((edu, index) => (
            <div className="w-full h-fit flex" key={index}>
              <FramerWrapper
                y={0}
                x={-100}
                delay={0.35 + index * 0.1}
                className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
              >
                {edu.period}
              </FramerWrapper>
              <FramerWrapper
                y={0}
                x={100}
                delay={0.35 + index * 0.1}
                className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
              >
                <div className="text-2xl font-rubik max-sm:text-xl">
                  {edu.degree}, <br /> {edu.institution}
                </div>
                <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                  {edu.description}
                </p>
              </FramerWrapper>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <Layers className="h-4 w-4" />
          Projects
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>My Projects</Heading>
          <FramerWrapper y={0} x={200}>
            <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
              I build projects to practice my skills and explore new web
              technologies. Each project reflects my interest in problem
              solving, learning new things, and creating applications that are
              simple and easy to use
            </p>
          </FramerWrapper>
        </div>

        <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
          {portfolioConfig.projects.map((val, indx) => {
            return <ProjectCards key={indx} value={val} num={indx} />;
          })}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <Phone className="h-4 w-4" />
          Contact Us
        </Badge>
        <div className="flex flex-col gap-3 w-full">
          <Heading>Contact Me!</Heading>
          <div className="h-auto w-full flex justify-center items-center">
            <FramerWrapper y={0} scale={0.8}>
              <ContactForm />
            </FramerWrapper>
          </div>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base"></p>
        </div>
      </div>

      {/* MORE SECTION */}
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <PackagePlus className="h-4 w-4" />
          More
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>More</Heading>
        </div>
        <div className="h-auto w-full flex flex-wrap gap-3 p-2">
          {portfolioConfig.moreLinks.map((value, indx) => {
            return (
              <FramerWrapper
                key={indx}
                className="max-w-[32%] max-lg:max-w-full"
                y={0}
                scale={0.8}
                delay={indx / 4}
                duration={0.15}
              >
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-poppins ">
                      {value.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={value.link}
                      target="blank"
                      className={cn(
                        buttonVariants({ variant: "default", size: "lg" }),
                        "w-full gap-3"
                      )}
                    >
                      {" "}
                      <ExternalLink />
                      Visit here
                    </Link>
                  </CardFooter>
                </Card>
              </FramerWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
