import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init('Tw8ngKBs_rBEXpZQ-');
  }, []);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      company: formData.company,
      message: formData.message,
      phone: formData.phone,
      email: formData.email,
    };

    emailjs.sendForm('gitly_service_public_key', 'template_78yoxqc', e.target, 'Tw8ngKBs_rBEXpZQ-')
      .then((result) => {
        console.log('E-mail enviado com sucesso!', result.text);
        // Limpa os campos de input
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        // Exibe uma notificação de sucesso
        toast.success('Mensagem enviada com sucesso!');
      }, (error) => {
        console.error('Erro ao enviar o e-mail:', error);
        // Exibe uma notificação de erro
        toast.error('Erro ao enviar a mensagem.');
      });
  };

  return (
    <div id="wrapper" style={{ position: 'relative' }}>
      <div className='hidden bg-[#000015] lg:bg-[#000015] xl:block'><div style={rocketStyle}></div>
        <DynamicSpline
          scene="https://prod.spline.design/yAkmlGVHSluwfBKa/scene.splinecode"
          camera={{
            position: { x: mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1) - 0.5, y: -mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1) + 0.5, z: 3 },
            rotation: { x: 0, y: 0, z: 0 },
            fov: 75,
          }}
        />
      </div>
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
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="flex flex-wrap text-[20px] pb-4 justify-between">
                <div className="flex flex-col w-full 2xl:w-[18.7em]">
                  <label htmlFor="name" className='pb-[0.35em]'>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-[#3E3E3E] border border-white py-[0.32em] px-5"
                  />
                </div>
                <div className="pt-4 2xl:pt-0 flex flex-col w-full 2xl:w-[18.7em]">
                  <label htmlFor="email" className='pb-[0.35em]'>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-[#3E3E3E] border border-white py-[0.32em] px-5"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-[20px] pb-4 justify-between">
                <div className="flex flex-col w-full 2xl:w-[18.75em]">
                  <label htmlFor="phone" className='pb-[0.35em]'>Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9()-]*"
                    className="w-full rounded-lg bg-[#3E3E3E] border border-white py-[0.32em] px-5"
                  />
                </div>
                <div className="flex flex-col w-full 2xl:w-[18.75em]">
                  <label htmlFor="company" className='pb-[0.35em]'>Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-[#3E3E3E] border border-white py-[0.32em] px-5"
                  />
                </div>
              </div>
              <div className="text-[20px] flex flex-col pb-4">
                <label htmlFor="message" className='pb-[0.35em]'>Your Message</label>
                <input
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-lg w-full bg-[#3E3E3E] border border-white py-12"
                />
              </div>
              <button className="text-[16px] bg-[#11562F] py-3 mx-48" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Adiciona o ToastContainer para exibir as mensagens */}
    </div>
  );
};

export default Contact;
