"use client";

import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/hook/useFollowPointer";
import { cn } from "@/lib/helper/utils/util";

const CustomCursor: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y, tagType } = useFollowPointer(ref);

  const cursorStyle = useMemo(() => {
    switch (tagType.type) {
      case "text":
        return {
          class: "w-1",
          style: {
            height: `${(tagType.additional as { height: string })?.height}px`,
          },
        };
      case "button":
        return { class: "size-4 rounded-full", style: {} };
      default:
        return { class: "size-2 rounded-full", style: {} };
    }
  }, [tagType]);
  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        x,
        y,
      }}
    >
      <div
        className={cn("bg-purple-500 transition-all", cursorStyle.class)}
        style={cursorStyle.style}
      />
    </motion.div>
  );
};

export default CustomCursor;
