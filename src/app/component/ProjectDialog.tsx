import { ProjectListType } from "@/app/component/ProjectList"
import Link from "next/link"
import { MdOpenInNew } from "react-icons/md"
import FoldImages from "@/components/image/FoldImage"
import PopupLayout from "@/components/ui/PopupLayout"
import { motion } from "framer-motion"
import { StackList, stackList } from "@/lib/helper/stackList"
import Image from "next/image"
import Magnetic from "@/components/ui/Magnetic"

interface ProjectDialogProps {
  lists: ProjectListType[]
  children: (data: ProjectListType) => React.ReactNode
}

export default function ProjectDialog({ children, lists }: ProjectDialogProps) {
  return (
    <PopupLayout lists={lists} render={children} layoutId="id">
      {({ title, image, description, url, tech }) => (
        <>
          <div className="flex flex-col gap-24 lg:flex-row">
            <div className="relative rounded-xl">
              <FoldImages images={image} />
            </div>
            <div className="font-kanit flex flex-1 flex-col gap-8">
              <h1 className="text-2xl font-semibold md:text-6xl">{title}</h1>
              {url && (
                <Link
                  href={url}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-400 decoration-dotted underline-offset-4 hover:underline"
                >
                  {url} <MdOpenInNew />
                </Link>
              )}
              <div
                className="list-disc text-justify font-light hyphens-auto text-gray-800 md:text-balance"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
              <div className="flex flex-wrap gap-4">
                {!!tech.length &&
                  tech.map((item, i) => (
                    <Magnetic key={i}>
                      <div
                        key={i}
                        className="flex cursor-default gap-2 rounded-full border border-gray-400 px-3 py-1 text-sm text-gray-700"
                      >
                        {stackList[item as StackList] && (
                          <Image
                            src={stackList[item as StackList]}
                            alt={item}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="size-5"
                          />
                        )}
                        <span>{item}</span>
                      </div>
                    </Magnetic>
                  ))}
              </div>
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
