"use client"

import ProjectList from "@/app/component/ProjectList"
import ProjectDialog from "@/app/component/ProjectDialog"
import { projects } from "@/lib/helper/data"

export default function ProjectSection() {
  return (
    <div className="mx-auto flex max-w-3/4 flex-col py-32">
      <h1 className="mb-44 text-8xl leading-tight font-bold italic">
        <div>Project</div>
        <div className="ml-20">Showcase</div>
      </h1>

      <div className="mx-auto mb-32 grid max-w-3/4 grid-cols-1 gap-x-22 gap-y-8 md:grid-cols-2 2xl:gap-x-56">
        <div className="flex flex-col gap-10">
          <ProjectDialog lists={projects.filter((_, i) => i % 2 === 0)}>
            {(data) => <ProjectList {...data} />}
          </ProjectDialog>
        </div>
        <div className="mt-44 flex flex-col gap-10">
          <ProjectDialog lists={projects.filter((_, i) => i % 2 === 1)}>
            {(data) => <ProjectList {...data} />}
          </ProjectDialog>
        </div>
      </div>
    </div>
  )
}
