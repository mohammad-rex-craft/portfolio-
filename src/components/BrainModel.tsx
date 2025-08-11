import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

export function BrainModel() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  // Generate brain-like neural network points
  const [positions, connections] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const connections: Array<[number, number]> = [];
    
    // Generate points in a brain-like structure
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      
      // Create brain-like distribution
      const phi = Math.acos(1 - 2 * Math.random());
      const theta = 2 * Math.PI * Math.random();
      
      // Brain shape modulation
      const r = 1.5 + 0.5 * Math.sin(phi * 3) * Math.cos(theta * 2);
      
      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.cos(phi);
      positions[i3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    
    // Create connections between nearby points
    for (let i = 0; i < 500; i++) {
      const a = Math.floor(Math.random() * 2000);
      const b = Math.floor(Math.random() * 2000);
      if (a !== b) connections.push([a, b]);
    }
    
    return [positions, connections];
  }, []);
  
  useFrame((state) => {
    if (ref.current) {
      // Rotate based on mouse position (invert Y so up moves model up)
      const targetRotationX = -mouse.y * 0.3;
      const targetRotationY = mouse.x * 0.3;
      
      // Smooth interpolation for natural movement
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetRotationX, 0.05);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetRotationY, 0.05);
      
      // Add subtle animation
      ref.current.rotation.z = state.clock.elapsedTime * 0.1;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
      ref.current.scale.setScalar(scale);
      
      // Mouse proximity effect
      const mouseDistance = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
      const proximityScale = 1 + (1 - mouseDistance) * 0.1;
      ref.current.scale.multiplyScalar(proximityScale);
    }
  });

  return (
    <group>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {/* Main brain points */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={new THREE.Color().setHSL(0.55 + Math.sin(Date.now() * 0.001) * 0.1, 0.8, 0.6)}
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Neural connections */}
      {connections.slice(0, 100).map(([a, b], index) => (
        <NeuralConnection
          key={index}
          start={[positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2]]}
          end={[positions[b * 3], positions[b * 3 + 1], positions[b * 3 + 2]]}
        />
      ))}
    </group>
  );
}

function NeuralConnection({ start, end }: { start: number[]; end: number[] }) {
  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  }, [start, end]);
  
  return (
    <Line
      points={points}
      color="#8b5cf6"
      transparent
      opacity={0.3}
    />
  );
}