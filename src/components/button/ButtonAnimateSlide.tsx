"use client"

import { motion } from "framer-motion"
import React from "react"
import { CursorWrapper } from "@/components/ui/CustomCursor"
import Magnetic from "@/components/ui/Magnetic"

interface ButtonAnimateSlideProps {
  text?: string
  url?: string
  target?: string
  icon?: React.ElementType
}

export default function ButtonAnimateSlide({
  url,
  text,
  target,
  icon: Icon,
}: ButtonAnimateSlideProps) {
  const handleClickButton = () => {
    if (!url) return
    if (typeof window === "undefined") return

    window.open(url, target, "noopener,noreferrer")
  }
  return (
    <CursorWrapper type="default">
      <Magnetic>
        <motion.button
          type="button"
          className="group relative flex flex-col overflow-hidden rounded-full border border-white px-4 py-2"
          initial={{ scale: 1 }}
          whileHover={{
            scale: [1, 1.1, 1],
            transition: { duration: 0.4, ease: "linear" },
          }}
          onClick={handleClickButton}
        >
          <span className="font-kanit flex items-center justify-center gap-1 text-sm text-white transition-all group-hover:-translate-y-10">
            {Icon && <Icon />} {text && text}
          </span>
          <span className="font-kanit absolute top-0 left-0 flex h-full w-full translate-y-10 items-center justify-center gap-1 rounded-full bg-white text-black transition-all group-hover:-translate-y-0">
            {Icon && <Icon />} {text && text}
          </span>
        </motion.button>
      </Magnetic>
    </CursorWrapper>
  )
}
