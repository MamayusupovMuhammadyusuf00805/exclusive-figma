import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Suspense } from 'react';

function Model({ url }) {
  // Fallback 3D box if model not available
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#DB4444" 
        metalness={0.8} 
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
}

function ProductModel3D({ modelUrl, ...props }) {
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }} {...props}>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment="city" intensity={0.6} contactShadow={false}>
              <Model url={modelUrl} />
            </Stage>
          </PresentationControls>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default ProductModel3D;
