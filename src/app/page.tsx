import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

/* ABOUT */
import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2, LightbulbIcon, Layers, Phone, Briefcase } from "lucide-react";
import SkillsFooter from "@/components/SkillsFotter";
import ProjectCards from "@/components/ProjectsCard";
import ContactForm from "@/components/ContactForm";
import { portfolioConfig } from "@/config/portfolio.config";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      {/* ================= HOME ================= */}
      <section id="home" className="h-screen snap-start flex items-center justify-between px-10">
        <FramerWrapper className="flex flex-col gap-4" x={-100}>
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
      <section id="about" className="h-screen snap-start px-10 flex items-center">
        <div className="w-full flex flex-col gap-5">
          <Badge variant="secondary" className="gap-1.5 py-1">
            <User2 className="h-4 w-4" /> About me
          </Badge>

          <Heading>
            {portfolioConfig.title} And Web <br />
            Developer, Based In {portfolioConfig.about.personalInfo.nationality}.
          </Heading>

          <FramerWrapper x={100}>
            <p className="text-xl text-primary">{portfolioConfig.about.bio}</p>
          </FramerWrapper>

          <Aboutfooter />

          <h1 className="flex gap-2 text-3xl font-semibold">
            <Heart /> Hobbies
          </h1>

          <div className="flex flex-wrap gap-6">
            {portfolioConfig.about.hobbies.map((h, i) => (
              <div key={i} className="flex gap-2 text-xl">
                <Circle className="h-3 w-3" /> {h}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="h-screen snap-start px-10 flex items-center">
        <div className="w-full flex flex-col gap-5">
          <Badge variant="secondary"><LightbulbIcon className="h-4 w-4" /> My Skills</Badge>

          <Heading>Technical Skills & Experience</Heading>

          <FramerWrapper x={200}>
            <p className="text-xl text-primary">
              I am a Computer Science student with good knowledge of Java, Python, C++ and web technologies.
            </p>
          </FramerWrapper>

          <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
          <SkillsFooter items={portfolioConfig.skills.frameworks} />
          <SkillsFooter items={portfolioConfig.skills.tools} />
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="h-screen snap-start px-10 flex items-center">
        <div className="w-full flex flex-col gap-5">
          <Badge variant="secondary"><Layers className="h-4 w-4" /> Projects</Badge>
          <Heading>My Projects</Heading>

          <div className="flex flex-wrap gap-4">
            {portfolioConfig.projects.map((p, i) => (
              <ProjectCards key={i} value={p} num={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="h-screen snap-start px-10 flex items-center">
        <div className="w-full flex flex-col gap-5">
          <Badge variant="secondary"><Briefcase className="h-4 w-4" /> Education</Badge>
          <Heading>My Education</Heading>

          {portfolioConfig.education.map((edu, i) => (
            <div key={i} className="flex">
              <div className="w-1/4">{edu.period}</div>
              <div className="w-3/4 border-l-4 p-4">
                <h3>{edu.degree} – {edu.institution}</h3>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="h-screen snap-start px-10 flex items-center">
        <div className="w-full flex flex-col gap-5">
          <Badge variant="secondary"><Phone className="h-4 w-4" /> Contact</Badge>
          <Heading>Contact Me</Heading>

          <FramerWrapper scale={0.8}>
            <ContactForm />
          </FramerWrapper>
        </div>
      </section>

    </main>
  );
}
