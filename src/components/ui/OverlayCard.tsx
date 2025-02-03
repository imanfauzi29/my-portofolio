"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/helper/utils/util";

interface OverlayCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function OverlayCard({ children, className }: OverlayCardProps) {
  const [hoverPos, setHoverPos] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setHoverPos({
          x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
          y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
        });
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {" "}
      {children}
      <motion.div
        className="absolute left-0 top-0 w-full h-full bg-black/60 rounded-xl"
        style={{
          clipPath: `circle(${isHovered ? "150%" : "0%"} at ${hoverPos.x} ${hoverPos.y})`,
        }}
        initial={{
          clipPath: `circle(0% at ${hoverPos.x} ${hoverPos.y})`,
        }}
        animate={{
          clipPath: isHovered
            ? `circle(150% at ${hoverPos.x} ${hoverPos.y})`
            : `circle(0% at ${hoverPos.x} ${hoverPos.y})`,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}
