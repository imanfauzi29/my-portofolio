"use client";

import React, { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { IOptions, RecursivePartial } from "@tsparticles/engine";
import { particle } from "@/components/particles/particle";

export default function StarParticles({
  color = "#757575",
  id = "tsParticle",
}: {
  color?: string;
  id?: string;
}) {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  const options: RecursivePartial<IOptions> = useMemo(
    () => particle(color),
    [],
  );
  return <Particles id={id} style={{ zIndex: "-1" }} options={options} />;
}
