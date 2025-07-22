// StarsCanvas.jsx

"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import StarBackground from "./StarBackground";

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[0]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      {/* Màu nền canvas rõ ràng là đen */}
      <color attach="background" args={["#000000"]} />

      <Suspense fallback={null}>
        <StarBackground />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
