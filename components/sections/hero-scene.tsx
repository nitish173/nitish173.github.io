"use client";

import { Suspense, useRef, type FC } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { HeroModel } from "@/components/portfolio/hero-model";
import { Loader } from "@/components/portfolio/loader";
import { useSceneActive } from "@/hooks/use-scene-active";
import { HERO_MODEL_URL } from "@/constants/portfolio-constants";
import { asset } from "@/helpers/asset-helpers";

const Rig: FC = () => {
  useFrame((state: RootState, delta: number) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
  return null;
};

export const HeroScene: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const frame = useRef<HTMLElement>(null);
  const active = useSceneActive({ whenVisible: frame });

  return (
    <figure
      ref={frame}
      className="absolute inset-0"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Canvas
        camera={{ position: [0, 1, 3] }}
        frameloop={active ? "always" : "never"}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1.6} />
          <directionalLight position={[4, 6, 5]} intensity={2.4} />
          <directionalLight
            position={[-5, 2, -3]}
            intensity={0.8}
            color="#8b5cf6"
          />
          <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.9}>
            <HeroModel
              url={HERO_MODEL_URL}
              targetHeight={isMobile ? 1.25 : 2.25}
              position={isMobile ? [0, -1.6, 0] : [1.15, -0.7, 0]}
              rotationY={-0.35}
            />
          </Float>
          <Rig />
        </Suspense>
      </Canvas>
    </figure>
  );
};

useGLTF.preload(asset(HERO_MODEL_URL));
