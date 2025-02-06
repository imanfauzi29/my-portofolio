"use client"

import ProjectList, { ProjectListType } from "@/app/component/ProjectList"
import ProjectDialog from "@/app/component/ProjectDialog"

const projects: ProjectListType[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Test applikasi untuk membuat aplikasi test",
    image: "/images/portofolio/OIP.jpeg",
  },
  {
    id: 2,
    title: "Project 1",
    description: "Test applikasi untuk membuat aplikasi test",
    image: "/images/portofolio/OIP.jpeg",
  },
  {
    id: 3,
    title: "Project 1",
    description: "Test applikasi untuk membuat aplikasi test",
    image: "/images/portofolio/OIP.jpeg",
  },
  {
    id: 4,
    title: "Project 1",
    description: "Test applikasi untuk membuat aplikasi test",
    image: "/images/portofolio/OIP.jpeg",
  },
]

export default function ProjectSection() {
  return (
    <div className="mx-auto flex max-w-3/4 flex-col py-32">
      <h1 className="mb-44 text-8xl leading-tight font-bold italic">
        <div>Project</div>
        <div className="ml-20">Showcase</div>
      </h1>

      <ProjectDialog>
        {(setState) => (
          <div className="mx-auto mb-32 grid max-w-3/4 grid-cols-1 gap-x-22 gap-y-8 md:grid-cols-2 2xl:gap-x-56">
            <div className="flex flex-col gap-10">
              {projects
                .filter((_, i) => i % 2 === 0)
                .map((project, j) => (
                  <ProjectList {...project} key={j} onClick={setState} />
                ))}
            </div>
            <div className="mt-44 flex flex-col gap-10">
              {projects
                .filter((_, i) => i % 2 === 1)
                .map((project, j) => (
                  <ProjectList {...project} key={j} onClick={setState} />
                ))}
            </div>
          </div>
        )}
      </ProjectDialog>
    </div>
  )
}
