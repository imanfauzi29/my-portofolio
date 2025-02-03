import { RefObject, useEffect } from "react";
import { frame, SpringOptions, useMotionValue, useSpring } from "framer-motion";

const spring: SpringOptions = { damping: 30, stiffness: 300, restDelta: 0.1 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", handlePointerMove);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, []);

  return { x, y };
}
