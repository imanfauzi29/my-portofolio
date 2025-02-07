"use client"

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/helper/utils/util"
import { FoldImageType } from "@/components/image/foldImage.type"
import { CursorWrapper } from "@/components/ui/CustomCursor"

const MotionImage = motion.create(Image)
interface FoldImageProps {
  image: FoldImageType
  images: FoldImageType[]
  setImages: React.Dispatch<React.SetStateAction<FoldImageType[]>>
  onClick?: (image: FoldImageType) => void
}
function FoldImage({ image, setImages, images, onClick }: FoldImageProps) {
  const [isDrag, setIsDrag] = useState(false)

  const x = useMotionValue(0)
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18])

  const isFront = image.id === images[0].id

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : image.id % 2 ? 6 : -6
    return `${rotateRaw.get() + offset}deg`
  })

  const handleSwipe = (direction: "left" | "right") => {
    setIsDrag(false)
    if (Math.abs(x.get()) > 50) {
      setImages((prev) =>
        direction === "left"
          ? [...prev.slice(1), prev[0]]
          : [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)],
      )
    }
  }

  const handleClickImage = (image: FoldImageType) => {
    if (!onClick) return
    if (isDrag) return

    onClick(image)
  }

  return (
    <MotionImage
      src={image.image}
      width="0"
      height="0"
      sizes="100vw"
      layoutId={image.id.toString()}
      data-testid={image.id}
      onClick={() => isFront && handleClickImage(image)}
      className={cn(
        "h-96 w-80 origin-bottom cursor-grab overflow-hidden rounded-2xl object-cover active:cursor-grabbing",
        isFront ? "shadow-xl" : undefined,
      )}
      alt={image.alt}
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
      onDragStart={() => setIsDrag(true)}
      onDragEnd={(_, info) => handleSwipe(info.offset.x < 0 ? "left" : "right")}
    />
  )
}

interface FoldImagesProps {
  images: FoldImageType[]
}
export default function FoldImages({ images }: FoldImagesProps) {
  const [selectedImage, setSelectedImage] = useState<FoldImageType | null>(null)
  const [rawImages, setRawImages] = useState<FoldImageType[]>(images || [])

  return (
    <>
      <CursorWrapper type="button" color="bg-white !text-black" text="view">
        <div className="grid place-items-center">
          {!!rawImages.length &&
            rawImages.map((image, index) => (
              <FoldImage
                key={index}
                image={image}
                setImages={setRawImages}
                onClick={setSelectedImage}
                images={rawImages}
              />
            ))}
        </div>
      </CursorWrapper>

      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            className="bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div className="relative">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
