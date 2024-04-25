import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Contact from '../components/contact'; // Importando o componente Contact

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const wrapper = document.getElementById('wrapper');

    wrapper.addEventListener('mousemove', updateMousePosition);

    return () => {
      wrapper.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const rocketStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url('url_da_imagem_do_foguete') center center / cover no-repeat`, // Substitua 'url_da_imagem_do_foguete' pela URL da imagem do foguete
  };

  return (
    <div id="wrapper" style={{ position: 'relative' }}>
      <div style={rocketStyle}></div>
      <DynamicSpline
        scene="https://prod.spline.design/yAkmlGVHSluwfBKa/scene.splinecode"
        camera={{
          position: { x: mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5, y: -mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1) + 0.5, z: 3 },
          rotation: { x: 0, y: 0, z: 0 },
          fov: 75,
        }}
      />
      <Contact /> {/* Renderizando o componente Contact */}
    </div>
  );
}
