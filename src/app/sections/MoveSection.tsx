"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useCursorStore } from "@/lib/store/useCursorStore";

export default function MoveSection() {
  const { setMode } = useCursorStore((store) => store);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.7, 0.8], [1, 40, 800], {
    clamp: false,
    mixer: (from, to) => (v) => {
      const easedV = Math.pow(v, 3.5);
      return from + (to - from) * easedV;
    },
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (typeof window !== "undefined") {
        if (latest > 0.8) {
          setMode("light");
        } else {
          setMode("dark");
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="h-[1000vh] relative">
      <div className="h-screen sticky overflow-hidden top-0 mx-auto">
        <div className="flex h-full">
          <motion.h1
            className="text-8xl text-white font-black absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center uppercase"
            style={{ scale }}
          >
            Showvance
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
