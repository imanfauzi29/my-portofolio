"use client"

import React, { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/helper/utils/util"

interface PopupLayoutProps<T extends string | Record<string, unknown>> {
  lists: T[] | T
  render: (data: T) => React.ReactNode
  layoutId?: keyof T
  children: (data: T) => React.ReactNode
  close?: "click" | "dblclick"
  className?: string
}

export default function PopupLayout<
  T extends string | Record<string, unknown>,
>({
  render,
  lists,
  layoutId,
  children,
  close = "click",
  className,
}: PopupLayoutProps<T>) {
  const [selectedLayout, setSelectedLayout] = useState<T | null>(null)

  const layoutList = useMemo(
    () => (Array.isArray(lists) ? lists : [lists]),
    [lists],
  )

  useEffect(() => {
    if (selectedLayout) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedLayout])

  const layoutIdName = useCallback(
    (layout: T): string => {
      if (typeof layout === "string") return layout

      if (!layoutId && typeof layoutId !== "object")
        throw new Error("Fatal error: layoutId is required!")

      return layout[layoutId] as string
    },
    [layoutId],
  )

  return (
    <>
      {layoutList.map((layout, i) => (
        <motion.div
          key={i}
          layoutId={layoutIdName(layout)}
          data-testid="popup-layout"
          className="cursor-zoom-in"
          onClick={() => setSelectedLayout(layout)}
        >
          {render(layout)}
        </motion.div>
      ))}
      <AnimatePresence mode="wait">
        {selectedLayout && (
          <motion.div
            className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => close === "click" && setSelectedLayout(null)}
            onDoubleClick={() =>
              close === "dblclick" && setSelectedLayout(null)
            }
          >
            <motion.div
              layoutId={layoutIdName(selectedLayout)}
              data-testid="popup-layout-content"
              className={cn(
                "flex max-h-[80vh] w-full max-w-3/4 flex-col gap-12 overflow-auto rounded-2xl bg-white p-12",
                className,
              )}
            >
              {children(selectedLayout)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
