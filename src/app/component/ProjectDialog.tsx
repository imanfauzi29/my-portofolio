import { ProjectListType } from "@/app/component/ProjectList"
import Link from "next/link"
import { MdOpenInNew } from "react-icons/md"
import FoldImages from "@/components/image/FoldImage"
import PopupLayout from "@/components/ui/PopupLayout"
import { motion } from "framer-motion"

interface ProjectDialogProps {
  lists: ProjectListType[]
  children: (data: ProjectListType) => React.ReactNode
}

export default function ProjectDialog({ children, lists }: ProjectDialogProps) {
  return (
    <PopupLayout lists={lists} render={children} layoutId="id" close="dblclick">
      {({ title, image, description, url }) => (
        <>
          <div className="flex gap-12">
            <div className="relative rounded-xl shadow-md">
              <FoldImages images={image} />
            </div>
            <div className="flex flex-1 flex-col gap-8">
              <h1 className="font-kanit text-6xl font-semibold">{title}</h1>
              {url && (
                <Link
                  href={url}
                  target="_blank"
                  className="font-kanit flex items-center gap-2 text-gray-400 decoration-dotted underline-offset-4 hover:underline"
                >
                  {url} <MdOpenInNew />
                </Link>
              )}
              <div
                className="font-kanit font-light text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div
              className="relative overflow-hidden text-xs font-bold text-gray-300"
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                repeatDelay: 1,
                ease: "linear",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent, gray, transparent)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Double click to close
            </motion.div>
          </div>
        </>
      )}
    </PopupLayout>
  )
}
