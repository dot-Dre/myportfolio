import React, { useRef } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

import cloud from './stylized_clouds.glb';

const Cloud = ({props, pos, zoom}) => {
  const { nodes, materials } = useGLTF(cloud);
  const cloudRef = useRef();

  const adjustIslandForScreenSize = () => {
    let screenScale = null;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    screenScale = [1, 1, 1];

    return screenScale;
  };

  const screenScale = adjustIslandForScreenSize();

  // Add the rotation and wiggle effect using useFrame
  useFrame(({ clock }) => {
    if (cloudRef.current) {
      // Continuous rotation
      cloudRef.current.rotation.y += 0;
      // Wiggle effect
      const time = clock.getElapsedTime();
      cloudRef.current.position.y = Math.sin(time * 2) * 0.5; // Adjust wiggle amplitude and speed as needed
    }
  });

  return (
    <>
      <a.group ref={cloudRef} {...props} position={pos}>
        <a.group rotation={[-Math.PI / 2, 0, 0]} scale={0.056}>
          <mesh
            position={[300, 0,-70]} // Center the model within its group
            scale={screenScale}
            geometry={nodes.defaultMaterial.geometry}
            material={materials.base1}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </a.group>
      </a.group>
      <OrbitControls enableZoom={zoom} zoomSpeed={5} />
      {/* <OrbitControls /> */}
    </>
  );
};

export default Cloud;

// useGLTF.preload('/stylized_clouds.glb')
