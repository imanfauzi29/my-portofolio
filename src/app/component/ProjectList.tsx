import { CursorWrapper } from "@/components/ui/CustomCursor";
import Link from "next/link";
import OverlayCard from "@/components/ui/OverlayCard";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";

export interface ProjectListProps {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectList({
  image,
  title,
  link,
  description,
}: ProjectListProps) {
  return (
    <Magnetic>
      <CursorWrapper color="bg-white !text-black" type="button" text="View">
        <Link href={link} className="flex gap-4 flex-col">
          <OverlayCard className="rounded-4xl h-[520px]">
            <Image
              src={image}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover"
            />
          </OverlayCard>
          <div>
            <div className="flex gap-2 items-center">
              <h3 className="text-2xl font-medium">
                <span className="font-kanit">{title} - </span>
                <span className="font-kanit !text-xl !font-light">
                  {description}
                </span>
              </h3>
            </div>
          </div>
        </Link>
      </CursorWrapper>
    </Magnetic>
  );
}
