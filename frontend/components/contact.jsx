import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const Contact = () => {
  return (
    <div className="bg-[#202020] text-white p-10 rounded-[32px] xl:w-5/12 xl:z-1 lg:absolute xl:right-[10%] xl:top-1/2 xl:translate-y-[-50%] xl:block">
      <div className="">
        <h1 className="text-[36px] pb-3">Get in touch today</h1>
        <p className="text-[20px] pb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          eum facere natus enim adipisci delectus alias et nihil ex ipsa
          ratione, eaque distinctio qui deleniti perspiciatis, temporibus
          dolores amet vel!
        </p>
      </div>
      <div>
        <form>
          <div className="flex flex-col">
            <div className="flex flex-wrap text-[20px] pb-4 justify-between">
              <div className="flex flex-col w-full xl:w-80">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg bg-[#3E3E3E] border border-white py-1 px-5"
                />
              </div>
              <div className="flex flex-col w-full xl:w-80">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg bg-[#3E3E3E] border border-white py-1 px-5"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-[20px] pb-4 justify-between">
              <div className="flex flex-col w-full xl:w-80">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg bg-[#3E3E3E] border border-white py-1 px-5"
                />
              </div>
              <div className="flex flex-col w-full xl:w-80">
                <label htmlFor="company">Company *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full rounded-lg bg-[#3E3E3E] border border-white py-1 px-5"
                />
              </div>
            </div>
            <div className="text-[20px] flex flex-col pb-4">
              <label htmlFor="message">Your Message</label>
              <input
                id="message"
                name="message"
                className="rounded-lg w-full bg-[#3E3E3E] border border-white py-6"
              />
            </div>
            <button className="text-[16px] bg-[#11562F] py-3 mx-48" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event) => {
      updateMousePosition(event);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const rocketStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, 
  };

  return (
    <div id="wrapper" style={{ position: 'relative' }}>
      <div className='hidden bg-black lg:bg-black xl:block'><div style={rocketStyle}></div>
      <DynamicSpline
        scene="https://prod.spline.design/yAkmlGVHSluwfBKa/scene.splinecode"
        camera={{
          position: { x: mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5, y: -mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1) + 0.5, z: 3 },
          rotation: { x: 0, y: 0, z: 0 },
          fov: 75,
        }}
      /></div>
      <Contact />
    </div>
  );
}
