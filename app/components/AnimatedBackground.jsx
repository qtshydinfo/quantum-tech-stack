"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#3b82f6",
            },
            links: {
              enable: true,
              distance: 150,
              color: "#3b82f6",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
            size: {
              value: { min: 1, max: 4 },
            },
            opacity: {
              value: 0.5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
