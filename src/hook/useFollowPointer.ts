import { RefObject, useEffect, useState } from "react";
import { frame, useMotionValue, useSpring } from "framer-motion";

const spring = { damping: 8, stiffness: 40, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);
  const [tagType, setTagType] = useState<{
    type: string;
    additional: null | unknown;
  }>({
    type: "default",
    additional: null,
  });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    const handlePointerEnter = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        // if (/[P|H1]/.test(e.target.tagName)) {
        //   setTagType({
        //     type: "text",
        //     additional: { height: e.target.clientHeight },
        //   });
        //   return;
        // }
        if (/[BUTTON]/.test(e.target.tagName)) {
          setTagType({
            type: "button",
            additional: null,
          });
        }

        setTagType({ type: "default", additional: null });
      }
    };

    if (typeof window !== "undefined") {
      document.body.addEventListener("pointerenter", handlePointerEnter, true);
      window.addEventListener("pointermove", handlePointerMove);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, []);

  return { x, y, tagType };
}
