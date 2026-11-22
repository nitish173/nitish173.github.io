"use client";

import { useEffect, useMemo, useRef, type FC } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Box3, type Group, Vector3 } from "three";
import { type HeroModelProps } from "@/types/portfolio-types";
import { asset } from "@/helpers/asset-helpers";

export const HeroModel: FC<HeroModelProps> = ({
  url,
  targetHeight = 2.2,
  rotationY = 0,
  ...props
}) => {
  const sway = useRef<Group>(null);
  const { scene, animations } = useGLTF(asset(url));
  const { actions } = useAnimations(animations, sway);

  useEffect(() => {
    const first = animations[0];
    if (!first) return;
    const action = actions[first.name];
    action?.play();
    return () => {
      action?.stop();
    };
  }, [actions, animations]);

  // Normalise any source model: scale it to a predictable height and centre it
  // on the group origin, so scene positioning does not depend on the asset's
  // own units or pivot.
  const fit = useMemo(() => {
    const bounds = new Box3().setFromObject(scene);
    const size = bounds.getSize(new Vector3());
    const center = bounds.getCenter(new Vector3());
    const scale = targetHeight / (size.y || 1);

    return {
      scale,
      position: [
        -center.x * scale,
        -bounds.min.y * scale - targetHeight / 2,
        -center.z * scale,
      ] as [number, number, number],
    };
  }, [scene, targetHeight]);

  useFrame((state) => {
    if (!sway.current || animations.length > 0) return;
    sway.current.rotation.y =
      rotationY + Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
  });

  return (
    <group {...props} dispose={null}>
      <group ref={sway} rotation={[0, rotationY, 0]}>
        <group scale={fit.scale} position={fit.position}>
          <primitive object={scene} />
        </group>
      </group>
    </group>
  );
};
