import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Contact from '../components/contact'; 

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      console.log('Mouse position updated:', { x: event.clientX, y: event.clientY });
    };

    const wrapper = document.getElementById('wrapper'); 

    wrapper.addEventListener('mousemove', updateMousePosition);

    return () => {
      wrapper.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const windowInnerWidth = typeof window !== 'undefined' ? window.innerWidth : 1;
  const windowInnerHeight = typeof window !== 'undefined' ? window.innerHeight : 1;

  console.log('Current mouse position:', mousePosition);

  return (
    <div style={{ position: 'relative' }}>
      <div id="wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <DynamicSpline
          scene="https://prod.spline.design/yAkmlGVHSluwfBKa/scene.splinecode"
          camera={{
            position: { 
              x: (mousePosition.x - windowInnerWidth / 2) / windowInnerWidth * 10, 
              y: (mousePosition.y - windowInnerHeight / 2) / windowInnerHeight * -10,   
              z: 3 
            },
            rotation: { x: 0, y: 0, z: 0 },
            fov: 75,
          }}
        />
      </div>
      <Contact />
    </div>
  );
}
