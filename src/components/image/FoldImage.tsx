"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/helper/utils/util"
import { FoldImageType } from "@/components/image/foldImage.type"

const MotionImage = motion.create(Image)
interface FoldImageProps {
  image: FoldImageType
  images: FoldImageType[]
  setImages: React.Dispatch<React.SetStateAction<FoldImageType[]>>
}
function FoldImage({ image, setImages, images }: FoldImageProps) {
  const x = useMotionValue(0)
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18])

  const isFront = image.id === images[0].id

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : image.id % 2 ? 6 : -6
    return `${rotateRaw.get() + offset}deg`
  })

  const handleSwipe = (direction: "left" | "right") => {
    if (Math.abs(x.get()) > 50) {
      setImages((prev) =>
        direction === "left"
          ? [...prev.slice(1), prev[0]]
          : [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)],
      )
    }
  }

  return (
    <MotionImage
      src={image.image}
      width="0"
      height="0"
      sizes="100vw"
      data-testid="fold-image"
      className={cn(
        "h-96 w-80 origin-bottom overflow-hidden rounded-2xl object-cover",
        isFront ? "shadow-xl" : undefined,
      )}
      alt="image"
      style={{
        zIndex: images.length - images.indexOf(image),
        gridColumn: 1,
        gridRow: 1,
        x,
        rotate,
        transition: "0.125s transform",
      }}
      drag={isFront ? "x" : false}
      animate={{ scale: isFront ? 1 : 0.98 }}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => handleSwipe(info.offset.x < 0 ? "left" : "right")}
    />
  )
}

interface FoldImagesProps {
  images: FoldImageType[]
}
export default function FoldImages({ images }: FoldImagesProps) {
  const [rawImages, setRawImages] = useState<FoldImageType[]>(images)

  return (
    <div className="grid place-items-center">
      {rawImages.map((image, index) => (
        <FoldImage
          key={index}
          image={image}
          setImages={setRawImages}
          images={rawImages}
        />
      ))}
    </div>
  )
}
