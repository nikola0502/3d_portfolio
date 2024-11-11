import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";



const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
 
  return (
    <mesh>
      <hemisphereLight intensity={1.75} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        decay={-0.15}
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024} 
      />
      <primitive
        object={computer.scene} 
        scale={isMobile ? 0.65 : 0.70}
        position={isMobile ? [0, -3, -2.2] : [0, -3.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  //Add event listener for changes to the screen size 
  const mediaQuery = window.matchMedia('(max-width: 500px)');
  // set the initial value of the 'isMobile' state variable
  setIsMobile(mediaQuery.matches);

  // Define a callback function to handle changes to the media query
  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  }

  // add the callback function as a listener for changes to the media query
  mediaQuery.addEventListener('change', handleMediaQueryChange);

  //remove listener when component is unmounted
  return () => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange); 
   }
 }, [])
 
  return (
    <Canvas shadows camera={{position: [20,3,5], fov: 25}} gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
  
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas