import { ProjectListProps } from "@/app/component/ProjectList"
import { AnimatePresence, motion } from "framer-motion"
import { Dispatch, SetStateAction, useState } from "react"
import Link from "next/link"
import { MdOpenInNew } from "react-icons/md"
import FoldImages from "@/components/image/FoldImage"
import { imagesData } from "@/lib/helper/data"

interface ProjectDialogProps {
  children: (
    setProject: Dispatch<SetStateAction<ProjectListProps | null>>,
  ) => React.ReactNode
}

export default function ProjectDialog({ children }: ProjectDialogProps) {
  const [selectedProject, setSelectedProject] =
    useState<ProjectListProps | null>(null)

  return (
    <>
      {children(setSelectedProject)}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={selectedProject.id}
              className="flex max-h-[80vh] w-full max-w-3/4 overflow-auto rounded-2xl bg-white p-12"
            >
              <div className="flex gap-24">
                <div className="relative rounded-xl shadow-md">
                  <FoldImages images={imagesData} />
                </div>
                <div className="flex flex-1 flex-col gap-8">
                  <h1 className="font-kanit text-6xl font-semibold">
                    Project 1
                  </h1>
                  <Link
                    href="#"
                    target="_blank"
                    className="font-kanit flex items-center gap-2 text-gray-400 decoration-dotted underline-offset-4 hover:underline"
                  >
                    www.test.com <MdOpenInNew />
                  </Link>
                  <div className="font-kanit">
                    Built a responsive PROB web Dashboard with ReactJS,
                    TailwindCSS, and Redux Toolkit, ensuring cross-device
                    compatibility and 3s load times. Developed SIM Blast
                    dashboard frontend with HTML, CSS, and Vanilla JS. Created
                    landing pages with Laravel (https://lumoshive.com) and
                    enhanced Kanban features using jQuery and Laravel Blade in
                    another project.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
