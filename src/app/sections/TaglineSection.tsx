"use client"

import { CursorWrapper } from "@/components/ui/CustomCursor"
import Magnetic from "@/components/ui/Magnetic"
import { motion } from "framer-motion"

export default function TaglineSection() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        className="px-8 md:max-w-4/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <CursorWrapper type="button">
          <Magnetic>
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #ff00ff, #00ffff, #ffcc00, #ff00ff)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "2px 2px 10px rgba(255, 255, 255, 0.5)",
              }}
              className="font-kanit text-5xl font-black text-white md:text-9xl"
            >
              Focused on Crafting Smooth, User-Centered Experiences
            </motion.h1>
          </Magnetic>
        </CursorWrapper>
      </motion.div>
    </div>
  )
}
