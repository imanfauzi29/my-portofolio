"use client"

import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from "react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
}

const childVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function MainSection() {
  const texts = ["Hello,", "Welcome to my space!"]
  const refs = useRef<(HTMLParagraphElement | null)[]>([])

  const { scrollYProgress } = useScroll()
  const opacityOnScroll = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mx-auto flex w-full max-w-3/4 flex-1 items-center justify-center">
        <motion.div className="text-6xl leading-tight font-bold text-white md:text-8xl md:leading-32 2xl:text-9xl">
          <motion.h1
            className="glow-text overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {texts.map((text, index) => (
              <motion.div
                style={{ height: refs?.current[index]?.clientHeight }}
                key={index}
                variants={childVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p
                  ref={(el) => {
                    refs.current[index] = el
                  }}
                >
                  {text}
                </motion.p>
              </motion.div>
            ))}
          </motion.h1>
        </motion.div>
      </div>
      <div className="flex justify-between p-8">
        <motion.div
          className="relative max-w-32"
          style={{ opacity: opacityOnScroll }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div
            className="absolute h-full w-1 bg-purple-500"
            animate={{
              backgroundColor: [
                "rgb(11, 13, 23)",
                "rgb(25, 29, 49)",
                "rgb(48, 35, 74)",
                "rgb(76, 40, 89)",
                "rgb(11, 13, 23)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <p className="ml-4 font-semibold text-white">
            Scroll to explore more
          </p>
        </motion.div>
      </div>
    </div>
  )
}
