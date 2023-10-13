"use client";
import { Bounds, Center, Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import LoadGLTF from "./LoadGLTF";
import { Wrapper } from "./styles";

const ModalCanvas = () => {
  return (
    <Wrapper>
      <Canvas shadows>
        <OrbitControls makeDefault />
        <ambientLight intensity={1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={<Html>Loading ...</Html>}>
          <Bounds fit clip damping={6} margin={1.2}>
            <Center>
              <LoadGLTF url={process.env.HOME_PAGE_MODAL_URL!} />
            </Center>
          </Bounds>
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default ModalCanvas;
