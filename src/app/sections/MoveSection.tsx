"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useMemo, useRef } from "react"
import tailwindThemes from "tailwindcss/defaultTheme"

interface MoveSectionProps {
  reverse?: boolean
}

export default function MoveSection({ reverse }: MoveSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: true })

  const [inputRange, outputRange] = useMemo(() => {
    const scale = tailwindThemes.screens.md ? 200 : 220
    return reverse
      ? [
          [0, 1],
          [scale, 1],
        ]
      : [
          [0, 1],
          [1, 210],
        ]
  }, [reverse, tailwindThemes])
  const scale = useTransform(scrollYProgress, inputRange, outputRange, {
    mixer: (from, to) => (v) => {
      const easedV = Math.pow(v, 2.5)
      return from + (to - from) * easedV
    },
  })

  return (
    <section ref={ref} className="relative h-[500vh]">
      <div className="sticky top-0 mx-auto h-screen overflow-hidden">
        <div className="flex h-full">
          <motion.h1
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-black text-white uppercase md:text-8xl"
            style={{ scale }}
          >
            Showvance
          </motion.h1>
        </div>
      </div>
    </section>
  )
}
