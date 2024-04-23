import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div>
      <DynamicSpline
        scene="https://prod.spline.design/yAkmlGVHSluwfBKa/scene.splinecode"
        camera={{
          position: { x: mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5, y: -mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1) + 0.5, z: 3 },
          rotation: { x: 0, y: 0, z: 0 },
          fov: 75,
        }}
      />
    </div>
  );
}
