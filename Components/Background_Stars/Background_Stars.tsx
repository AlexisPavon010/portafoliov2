import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Points, PointMaterial, Preload } from "@react-three/drei";

function BackgroundStars(props: any) {
  const [colourData, setcolourData] = useState<string>("#473080");
  const ref: any = useRef();
  const [sphere] = useState(() =>
    // @ts-ignore
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state: any, delta: any) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={colourData}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export const StarsCanvas = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        overflow: "hidden",
        position: 'fixed',
        pointerEvents: 'auto',
        inset: 0,
        zIndex: 0
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <BackgroundStars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};