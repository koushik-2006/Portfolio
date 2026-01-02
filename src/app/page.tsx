import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <main
      className="
        h-screen
        overflow-y-scroll
        snap-y
        snap-mandatory
        scroll-smooth
      "
    >
      {/* ================= HOME SECTION ================= */}
      <section
        id="home"
        className="h-screen snap-start flex items-center justify-between px-10"
      >
        {/* LEFT SIDE */}
        <FramerWrapper
          className="h-full w-auto flex flex-col justify-start gap-4"
          y={0}
          x={-100}
        >
          <HeroTexts />

          <div className="h-fit w-full p-4 flex gap-4">
            <SocialLinks />
          </div>

          <DownLoadResumeBtn />
        </FramerWrapper>

        {/* RIGHT SIDE */}
        <FramerWrapper
          className="h-full w-[47%] relative block max-lg:hidden"
          y={0}
          x={100}
        >
          <HeroImage />
        </FramerWrapper>

        {/* GITHUB BUTTON */}
        <GithubBtn />
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="h-screen snap-start flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">About Section</h1>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section
        id="skills"
        className="h-screen snap-start flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Skills Section</h1>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section
        id="projects"
        className="h-screen snap-start flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Projects Section</h1>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="h-screen snap-start flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
    </main>
  );
}
