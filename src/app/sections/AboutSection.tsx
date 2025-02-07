"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-22 md:py-44">
      <div className="flex flex-col items-center gap-20 px-8 md:max-w-3/4 md:flex-row md:gap-20">
        <div className="top-1/3 self-start break-words md:sticky">
          <motion.div
            className="absolute hidden h-full w-2 md:block"
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
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl leading-tight text-white md:ml-8"
          >
            {["Turning", "Ideas", "into", "Interface"].map((text) => (
              <span key={text} className="block">
                {text}
              </span>
            ))}
          </motion.h1>
        </div>

        <div className="font-kanit relative space-y-20 md:mt-56 md:space-y-96">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-4xl font-medium text-white md:text-5xl">
              Introduction
            </h3>
            <motion.p className="font-kanit text-justify font-light hyphens-auto text-white md:text-2xl md:tracking-wide md:text-balance">
              Hey! I&#39;m Iman Fauzi, a Frontend Developer who loves refining
              web designs to be not just functional but also visually appealing.
              I specialize in React.js and Next.js, and I enjoy experimenting
              with animations and UI/UX to make websites feel more alive.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-light tracking-wide text-balance text-white"
          >
            <h2 className="mb-8 text-5xl font-medium">Why Me?</h2>

            <ul className="space-y-6">
              <li>
                <h5 className="block text-xl font-medium">Frontend Freak</h5>
                <span className="text-gray-300">
                  Coding UI isn’t just a job, it’s a hobby.
                </span>
              </li>
              <li>
                <h5 className="block text-xl font-medium">
                  Pixel Perfect Enthusiast
                </h5>
                <span className="text-gray-300">
                  If something’s slightly off, I’ll refactor it immediately.
                </span>
              </li>
              <li>
                <h5 className="block text-xl font-medium">Fast & Optimized</h5>
                <span className="text-gray-300">
                  It’s not just about coding fast—website performance must be
                  top-notch!
                </span>
              </li>
              <li>
                <h5 className="block text-xl font-medium">Always Learning</h5>
                <span className="text-gray-300">
                  Currently exploring Docker & interested in becoming a
                  pentester.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
