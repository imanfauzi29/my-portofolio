"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function MoveSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 40, 1000], {
    clamp: false,
    mixer: (from, to) => (v) => {
      const easedV = Math.pow(v, 3.5);
      return from + (to - from) * easedV;
    },
  });

  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.on("change", (latest) => {
  //     if (typeof window !== "undefined") {
  //       console.log(latest);
  //       if (latest > 0.907966) {
  //         document.body.style.backgroundColor = "#fff";
  //       } else {
  //         document.body.style.backgroundColor = "#000";
  //       }
  //     }
  //   });
  //   return () => unsubscribe();
  // }, []);
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
