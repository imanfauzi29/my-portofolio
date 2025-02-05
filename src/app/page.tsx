import MainSection from "@/app/sections/MainSection";
import AboutSection from "@/app/sections/AboutSection";
import TaglineSection from "@/app/sections/TaglineSection";
import ContactSection from "@/app/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <MainSection />
      <AboutSection />
      <TaglineSection />
      {/*<MoveSection />*/}
      {/*<div className="bg-white">*/}
      {/*  <ProjectSection />*/}
      {/*</div>*/}
      {/*<MoveSection reverse />*/}
      <ContactSection />
    </main>
  );
}
