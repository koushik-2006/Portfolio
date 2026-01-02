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
    <main className="w-full min-h-screen overflow-y-auto scroll-smooth">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-14">
        <div className="grid grid-cols-2 gap-20 max-lg:grid-cols-1 w-full">

          {/* LEFT */}
          <div className="flex flex-col gap-8 pt-24">
            {/* NAME FIXED (VISIBLE) */}
            <HeroTexts />

            {/* SOCIAL ICONS HORIZONTAL */}
            <div className="flex gap-4">
              <SocialLinks />
            </div>

            {/* RESUME */}
            <DownLoadResumeBtn />
          </div>

          {/* RIGHT */}
          <div className="flex justify-center max-lg:hidden">
            <HeroImage />
          </div>

          <GithubBtn />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-36 px-14">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">

          <Badge variant="secondary" className="w-fit gap-2">
            <User2 className="h-4 w-4" /> About Me
          </Badge>

          <Heading>
            Software Engineer & Web Developer, Based in{" "}
            {portfolioConfig.about.personalInfo.nationality}
          </Heading>

          <p className="text-xl max-w-4xl leading-relaxed">
            {portfolioConfig.about.bio}
          </p>

          {/* ABOUT INFO — ONE HORIZONTAL LINE */}
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
            <div>
              <h4 className="font-semibold">Language</h4>
              <p>English, Tamil</p>
            </div>
            <div>
              <h4 className="font-semibold">Nationality</h4>
              <p>India</p>
            </div>
            <div>
              <h4 className="font-semibold">Gender</h4>
              <p>Male</p>
            </div>
          </div>

          <Aboutfooter />

          {/* HOBBIES */}
          <div>
            <h3 className="text-3xl font-semibold flex gap-2 items-center mb-6">
              <Heart /> Hobbies
            </h3>
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2">
              {portfolioConfig.about.hobbies.map((hobby, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Circle className="h-3 w-3" />
                  {hobby}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-36 px-14 bg-muted/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">

          <Badge variant="secondary" className="w-fit gap-2">
            <LightbulbIcon className="h-4 w-4" /> Skills
          </Badge>

          <Heading>Technical Skills</Heading>

          {/* SKILLS — NEAT HORIZONTAL ROWS */}
          <div className="flex flex-col gap-12">
            <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
            <SkillsFooter items={portfolioConfig.skills.frameworks} />
            <SkillsFooter items={portfolioConfig.skills.tools} />
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-36 px-14">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">

          <Badge variant="secondary" className="w-fit gap-2">
            <Layers className="h-4 w-4" /> Projects
          </Badge>

          <Heading>My Projects</Heading>

          {/* PROJECT CARDS — CLEAN GRID */}
          <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
            {portfolioConfig.projects.map((project, i) => (
              <ProjectCards key={i} value={project} num={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="py-36 px-14 bg-muted/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">

          <Badge variant="secondary" className="w-fit gap-2">
            <Briefcase className="h-4 w-4" /> Education
          </Badge>

          <Heading>My Education</Heading>

          {/* TIMELINE STYLE */}
          <div className="flex flex-col gap-14">
            {portfolioConfig.education.map((edu, i) => (
              <div key={i} className="grid grid-cols-4 gap-8 max-md:grid-cols-1">
                <div className="font-semibold">{edu.period}</div>

                <div className="col-span-3 border-l-4 pl-6">
                  <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                  <p className="mt-1">{edu.institution}</p>
                  <p className="mt-4 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-36 px-14">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">

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
