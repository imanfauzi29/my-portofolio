"use client";

import { motion } from "framer-motion";
import React from "react";
import { CursorWrapper } from "@/components/ui/CustomCursor";
import Magnetic from "@/components/ui/Magnetic";

interface ButtonAnimateSlideProps {
  text?: string;
  url?: string;
  target?: string;
  icon?: React.ElementType;
}

export default function ButtonAnimateSlide({
  url,
  text,
  target,
  icon: Icon,
}: ButtonAnimateSlideProps) {
  const handleClickButton = () => {
    if (!url) return;
    if (typeof window === "undefined") return;

    window.open(url, target, "noopener,noreferrer");
  };
  return (
    <CursorWrapper type="default">
      <Magnetic>
        <motion.button
          type="button"
          className="overflow-hidden relative flex-col py-2 px-4 border border-white rounded-full group flex"
          initial={{ scale: 1 }}
          whileHover={{
            scale: [1, 1.1, 1],
            transition: { duration: 0.4, ease: "linear" },
          }}
          onClick={handleClickButton}
        >
          <span className="font-kanit flex gap-1 items-center justify-center transition-all group-hover:-translate-y-10 text-white">
            {Icon && <Icon />} {text && text}
          </span>
          <span className="font-kanit bg-white gap-1 absolute translate-y-10 group-hover:-translate-y-0 text-black transition-all w-full h-full left-0 top-0 rounded-full flex justify-center items-center">
            {Icon && <Icon />} {text && text}
          </span>
        </motion.button>
      </Magnetic>
    </CursorWrapper>
  );
}
