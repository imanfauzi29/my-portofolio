"use client";

import ReactLenis from "lenis/react";
import React from "react";

export default function LenisWrapper({ children }: React.PropsWithChildren) {
  return (
    <ReactLenis options={{ smoothWheel: true }} root>
      {children}
    </ReactLenis>
  );
}
