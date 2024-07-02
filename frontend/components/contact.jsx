import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ButtonGreenSend from './button/buttonGreenSend';
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
    console.log('Telefone:', value); // Acesse o valor atualizado diretamente de 'value'
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verifica se algum campo está vazio
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.message) {
      // Exibe uma notificação de aviso
      toast.warning('Por favor, preencha todos os campos.');
      console.log(formData.name, formData.email, formData.phone, formData.company, formData.message)
      return;
    }
  
    // Se todos os campos estiverem preenchidos, continua com o envio do e-mail
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
    <div>
        <h1 className="text-[36px] pb-3 font-title">Conecte-se conosco agora!</h1>
        <p className="text-[20px] pb-7 font-text">
            Tem uma ideia ou precisa de ajuda? Conte-nos! Envie sua mensagem explicando sua situação ou o que você precisa. Nossos especialistas estão prontos para desenvolver soluções personalizadas para você.
        </p>
    </div>
    <div>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row flex-wrap text-[20px] pb-4 justify-between">
                    <div className="flex flex-col w-full md:w-[48%]">
                        <label htmlFor="name" className='pb-[0.35em] font-text'>Nome *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-[#3E3E3E] border border-white py-[0.32em] px-5"
                        />
                    </div>
                    <div className="pt-4 md:pt-0 flex flex-col w-full md:w-[48%]">
                        <label htmlFor="email" className='pb-[0.35em] font-text'>E-mail *</label>
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
                <div className="flex flex-col md:flex-row flex-wrap gap-3 text-[20px] pb-4 justify-between">
                    <div className="flex flex-col w-full md:w-[48%]">
                        <label htmlFor="phone" className='pb-[0.35em] font-text'>Telefone *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            pattern="[0-9 ()-]*"
                            value={formData.phone}
                            onChange={handleChange}
                            onKeyPress={(e) => {
                                const pattern = /[0-9 ()-]/;
                                const inputChar = String.fromCharCode(e.charCode);
                                if (!pattern.test(inputChar)) {
                                    e.preventDefault();
                                }
                            }}
                            className="w-full rounded-lg bg-[#3E3E3E] border border-white py-[0.32em] px-5"
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-[48%]">
                        <label htmlFor="company" className='pb-[0.35em] font-text'>Empresa *</label>
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
                    <label htmlFor="message" className='pb-[0.35em] font-text'>Sua Mensagem</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-lg w-full bg-[#3E3E3E] border border-white py-12 px-5"
                    />
                </div>
                <div className="flex justify-center items-center mt-6">
                    <ButtonGreenSend />
                </div>
            </div>
        </form>
    </div>
</div>

      <ToastContainer /> 
    </div>
  );
};

export default Contact;
