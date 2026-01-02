import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import ProjectCards from "@/components/ProjectsCard";
import ContactForm from "@/components/ContactForm";

import { Badge } from "@/components/ui/badge";
import {
  User2,
  Heart,
  Circle,
  LightbulbIcon,
  Layers,
  Briefcase,
  Phone,
} from "lucide-react";

import { portfolioConfig } from "@/config/portfolio.config";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">

      {/* ================= HOME (FULL SCREEN ONLY) ================= */}
      <section
        id="home"
        className="h-screen snap-start flex items-center justify-between px-10"
      >
        <FramerWrapper className="flex flex-col gap-6" x={-100}>
          <HeroTexts />
          <SocialLinks />
          <DownLoadResumeBtn />
        </FramerWrapper>

        <FramerWrapper className="w-[47%] max-lg:hidden" x={100}>
          <HeroImage />
        </FramerWrapper>

        <GithubBtn />
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="snap-start py-40 px-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <Badge variant="secondary" className="w-fit gap-2">
            <User2 className="h-4 w-4" /> About Me
          </Badge>

          <Heading>
            Software Engineer And Web Developer, Based In{" "}
            {portfolioConfig.about.personalInfo.nationality}.
          </Heading>

          <p className="text-xl text-primary max-w-4xl leading-relaxed">
            {portfolioConfig.about.bio}
          </p>

          <Aboutfooter />

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold flex gap-2 items-center">
              <Heart /> Hobbies
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {portfolioConfig.about.hobbies.map((hobby, i) => (
                <div key={i} className="flex items-center gap-2 text-lg">
                  <Circle className="h-3 w-3" />
                  {hobby}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="snap-start py-40 px-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <Badge variant="secondary" className="w-fit gap-2">
            <LightbulbIcon className="h-4 w-4" /> My Skills
          </Badge>

          <Heading>Technical Skills & Experience</Heading>

          <p className="text-xl max-w-4xl leading-relaxed">
            I am a Computer Science student with a good understanding of
            programming languages such as Java, Python, and C++. I enjoy
            learning by building real-world projects.
          </p>

          <div className="flex flex-col gap-12">
            <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
            <SkillsFooter items={portfolioConfig.skills.frameworks} />
            <SkillsFooter items={portfolioConfig.skills.tools} />
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="snap-start py-40 px-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <Badge variant="secondary" className="w-fit gap-2">
            <Layers className="h-4 w-4" /> Projects
          </Badge>

          <Heading>My Projects</Heading>

          <div className="grid md:grid-cols-2 gap-10">
            {portfolioConfig.projects.map((project, i) => (
              <ProjectCards key={i} value={project} num={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section
        id="education"
        className="snap-start py-40 px-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <Badge variant="secondary" className="w-fit gap-2">
            <Briefcase className="h-4 w-4" /> Education
          </Badge>

          <Heading>My Education</Heading>

          <div className="flex flex-col gap-14">
            {portfolioConfig.education.map((edu, i) => (
              <div key={i} className="flex gap-10 max-md:flex-col">
                <div className="w-1/4 font-medium max-md:w-full">
                  {edu.period}
                </div>

                <div className="w-3/4 border-l-4 pl-6 max-md:w-full max-md:border-l-0 max-md:pl-0">
                  <h3 className="text-2xl font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="mt-2">{edu.institution}</p>
                  <p className="mt-4 text-lg leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="snap-start py-40 px-10"
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-14">
          <Badge variant="secondary" className="w-fit gap-2">
            <Phone className="h-4 w-4" /> Contact
          </Badge>

          <Heading>Contact Me</Heading>

          <ContactForm />
        </div>
      </section>

    </main>
  );
}
