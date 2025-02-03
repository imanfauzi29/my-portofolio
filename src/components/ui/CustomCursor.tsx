"use client";

import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/hook/useFollowPointer";
import { cn } from "@/lib/helper/utils/util";
import { CursorType, useCursorStore } from "@/lib/store/useCursorStore";
import { classVariant } from "@/lib/helper/utils/cva";

const cursorStyle = classVariant({
  variants: {
    type: {
      button: "size-20",
      default: "size-4",
    },
  },
  defaultVariants: {
    type: "default",
  },
});

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);
  const { type } = useCursorStore((store) => store);

  const additionalClass: string = useMemo(() => {
    if (!type.additional || !Object.keys(type.additional).length) return "";

    return Object.values(type.additional).join(" ");
  }, [type.additional]);

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      style={{
        x,
        y,
      }}
    >
      <div
        className={cn(
          "transition-all duration-700 rounded-full flex justify-center items-center font-medium bg-black text-white z-10",
          cursorStyle({ type: type.type }),
          additionalClass,
        )}
      >
        {type?.text}
      </div>
      <div
        className={cn(
          "absolute inset-0  rounded-full",
          type?.text ? "bg-transparent" : "bg-white",
        )}
      />
    </motion.div>
  );
}

interface CursorProps {
  type?: CursorType;
  text?: string;
  color?: string;
}

export function CursorWrapper({
  children,
  type,
  text,
  color,
}: React.PropsWithChildren<CursorProps>) {
  const { setType } = useCursorStore((store) => store);

  return (
    <motion.div
      onMouseEnter={() =>
        type && setType({ type, text, additional: { color } })
      }
      onMouseLeave={() =>
        setType({ type: "default", text: undefined, additional: undefined })
      }
    >
      {children}
    </motion.div>
  );
}
