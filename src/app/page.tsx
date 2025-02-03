import MainSection from "@/app/sections/MainSection";
import AboutSection from "@/app/sections/AboutSection";
import MoveSection from "@/app/sections/MoveSection";
import ProjectSection from "@/app/sections/ProjectSection";
import TaglineSection from "@/app/sections/TaglineSection";

export default function Home() {
  return (
    <main>
      <MainSection />
      <AboutSection />
      <TaglineSection />
      <MoveSection />
      <div className="bg-white">
        <ProjectSection />
      </div>
      <MoveSection reverse />
    </main>
  );
}
