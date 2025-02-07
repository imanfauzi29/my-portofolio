import { CursorWrapper } from "@/components/ui/CustomCursor"
import OverlayCard from "@/components/ui/OverlayCard"
import Image from "next/image"
import Magnetic from "@/components/ui/Magnetic"
import { FoldImageType } from "@/components/image/foldImage.type"
import { StackList } from "@/lib/helper/stackList"

export type ProjectListType = {
  id: number
  title: string
  description: string
  shortDescription: string
  image: FoldImageType[]
  url: string | null
  tech: StackList[] | string[]
}

export default function ProjectList({
  id,
  title,
  image,
  shortDescription,
}: ProjectListType) {
  return (
    <Magnetic>
      <CursorWrapper color="bg-white !text-black" type="button" text="View">
        <button
          className="flex cursor-pointer flex-col gap-4"
          type="button"
          data-id={id}
        >
          <OverlayCard className="h-[520px] min-w-64 rounded-4xl">
            <Image
              src={image[0].image}
              alt=""
              data-id={image[0].id}
              width={0}
              height={0}
              sizes="100vw"
              className="size-full object-cover"
            />
          </OverlayCard>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-medium">
                <span className="font-kanit">{title} - </span>
                <span className="font-kanit !text-xl !font-light">
                  {shortDescription}
                </span>
              </h3>
            </div>
          </div>
        </button>
      </CursorWrapper>
    </Magnetic>
  )
}
