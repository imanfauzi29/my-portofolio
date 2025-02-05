"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

interface MoveSectionProps {
  reverse?: boolean;
}

export default function MoveSection({ reverse }: MoveSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, layoutEffect: true });

  const [inputRange, outputRange] = useMemo(
    () =>
      reverse
        ? [
            [0, 1],
            [200, 1],
          ]
        : [
            [0, 1],
            [1, 200],
          ],
    [reverse],
  );
  const scale = useTransform(scrollYProgress, inputRange, outputRange, {
    mixer: (from, to) => (v) => {
      const easedV = Math.pow(v, 2.5);
      return from + (to - from) * easedV;
    },
  });

  return (
    <section ref={ref} className="h-[500vh] relative">
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
    </section>
  );
}
