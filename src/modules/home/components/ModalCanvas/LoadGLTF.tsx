import { useLoader } from "@react-three/fiber";
import { FC } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { IGLTFLoader } from "./interfaces";

const LoadGLTF: FC<IGLTFLoader> = (props) => {
  const { url } = props;
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
};

export default LoadGLTF;
