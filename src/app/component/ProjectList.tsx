import { CursorWrapper } from "@/components/ui/CustomCursor"
import OverlayCard from "@/components/ui/OverlayCard"
import Image from "next/image"
import Magnetic from "@/components/ui/Magnetic"

export type ProjectListType = {
  id: number
  title: string
  description: string
  image: string
}
interface ProjectListProps extends ProjectListType {
  onClick: (list: ProjectListType) => void
}

export default function ProjectList({ onClick, ...rest }: ProjectListProps) {
  const { id, title, image, description } = rest
  return (
    <Magnetic>
      <CursorWrapper color="bg-white !text-black" type="button" text="View">
        <button
          className="flex cursor-pointer flex-col gap-4"
          type="button"
          data-id={id}
          onClick={() => onClick(rest)}
        >
          <OverlayCard className="h-[520px] rounded-4xl">
            <Image
              src={image}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </OverlayCard>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-medium">
                <span className="font-kanit">{title} - </span>
                <span className="font-kanit !text-xl !font-light">
                  {description}
                </span>
              </h3>
            </div>
          </div>
        </button>
      </CursorWrapper>
    </Magnetic>
  )
}
