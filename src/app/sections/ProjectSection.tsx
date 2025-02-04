"use client";

import ProjectList, { ProjectListProps } from "@/app/component/ProjectList";

const projects: ProjectListProps[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Test applikasi untuk membuat aplikasi test",
    image: "/images/portofolio/OIP.jpeg",
    link: "#",
  },
  {
    id: 2,
    title: "Project 1",
    description: "Test applikasi untuk membuat aplikasi test",
    image: "/images/portofolio/OIP.jpeg",
    link: "#",
  },
  {
    id: 3,
    title: "Project 1",
    description: "Test applikasi untuk membuat aplikasi test",
    image: "/images/portofolio/OIP.jpeg",
    link: "#",
  },
  {
    id: 4,
    title: "Project 1",
    description: "Test applikasi untuk membuat aplikasi test",
    image: "/images/portofolio/OIP.jpeg",
    link: "#",
  },
];

export default function ProjectSection() {
  return (
    <div className="flex max-w-3/4 mx-auto flex-col py-32">
      <h1 className="text-8xl font-bold leading-tight italic mb-44">
        <div>Project</div>
        <div className="ml-20">Showcase</div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-22 2xl:gap-x-56 gap-y-8 max-w-3/4 mx-auto mb-32">
        <div className="flex flex-col gap-10">
          {projects
            .filter((_, i) => i % 2 === 0)
            .map((project, j) => (
              <ProjectList {...project} key={j} />
            ))}
        </div>
        <div className="flex flex-col gap-10 mt-44">
          {projects
            .filter((_, i) => i % 2 === 1)
            .map((project, j) => (
              <ProjectList {...project} key={j} />
            ))}
        </div>
      </div>
    </div>
  );
}
