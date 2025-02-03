"use client";

import { CursorWrapper } from "@/components/ui/CustomCursor";
import Magnetic from "@/components/ui/Magnetic";
import { motion } from "framer-motion";

export default function TaglineSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full">
      <div className="max-w-4/5">
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
              className="text-9xl font-kanit text-white font-black"
            >
              Focused on Crafting Smooth, User-Centered Experiences
            </motion.h1>
          </Magnetic>
        </CursorWrapper>
      </div>
    </div>
  );
}
