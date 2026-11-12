import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import type { Group } from "three";

function Brackets({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);
  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = pointer.x * 0.3;
    group.current.rotation.x = pointer.y * 0.12;
    if (!reduced) group.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.12;
  });
  return <group ref={group} rotation={[0, -0.2, 0.12]}>
    <Line points={[[-0.55, 0.45, 0], [-1, 0, 0], [-0.55, -0.45, 0]]} color="cyan" lineWidth={4} />
    <Line points={[[0.55, 0.45, 0], [1, 0, 0], [0.55, -0.45, 0]]} color="cyan" lineWidth={4} />
    <Line points={[[0.2, 0.6, 0], [-0.2, -0.6, 0]]} color="lightseagreen" lineWidth={3} />
  </group>;
}

export default function SpatialAccent() {
  const [ready, setReady] = useState(false);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return <div className="spatial-accent" data-scene-ready={ready || undefined} aria-hidden="true">
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 40 }} onCreated={() => setReady(true)} gl={{ alpha: true }}>
      <Brackets reduced={reduced} />
    </Canvas>
  </div>;
}