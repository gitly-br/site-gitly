import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import Bgleft from '../assets/bg-left.svg';
import Computer from '../assets/computer.svg';
import Image from 'next/image';
import 'react-toastify/dist/ReactToastify.css';

// const DynamicSpline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init('4fgdW_f5nEDE3QXbd'); // Public Key
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
  
    emailjs.sendForm('service_zqecyoh', 'template_vws4c1r', e.target, '4fgdW_f5nEDE3QXbd') // nessa ordem: serviceID, templateID, userID
    .then((result) => {
      toast.success('Mensagem enviada com sucesso!');
      console.log('E-mail enviado com sucesso!', result.text);
    }, (error) => {
      console.error('Erro ao enviar o e-mail:', error);
      toast.error('Erro ao enviar a mensagem.');
    });  
  };  

  const openLink = (url) => {
    window.open(url, "_blank");
  };
  
  return (
    <div
  id="wrapper"
  className="relative flex flex-col lg:flex-row items-center justify-center h-screen gap-20 px-5 xl:px-20 py-20 font-text"
>
  {/* Background SVGs */}
  <div className="absolute top-0 left-0 hidden-on-small2">
    <Image src={Bgleft} alt="Background Left" layout="fixed" width={620} height={700} />
  </div>

  {/* Coluna da esquerda */}
  <div className="z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-white response">
    <h1 className="text-3xl font-semibold mb-6">
      Fale com um dos nossos especialistas e inicie o projeto hoje!
    </h1>
    <p className="mb-8">
      Na Gitly, estamos prontos para ajudar sua empresa a transformar dados em decisões inteligentes. 
      Se você deseja mais informações sobre nossos serviços, precisa de ajuda para começar um projeto 
      ou simplesmente quer explorar possibilidades de parceria, entre em contato conosco!
    </p>
    <button className="btn-verde" onClick={() => openLink("https://api.whatsapp.com/send/?phone=5511919447777&text&type=phone_number&app_absent=0")}>Fale Conosco</button>
  </div>

  {/* Coluna da direita: formulário */}
  <div className="z-10 w-full lg:w-1/2 bg-[#202020] text-white p-10 rounded-[32px]">
    <h2 className="text-[36px] pb-3 font-title">Conecte-se conosco agora!</h2>
    <p className="text-[20px] pb-7 font-text">
      Tem uma ideia ou precisa de ajuda? Conte-nos! Envie sua mensagem explicando sua situação 
      ou o que você precisa. Nossos especialistas estão prontos para desenvolver soluções personalizadas para você.
    </p>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="name" className="pb-1 font-text">Nome *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#3E3E3E] border border-white py-2 px-4"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="email" className="pb-1 font-text">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#3E3E3E] border border-white py-2 px-4"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="phone" className="pb-1 font-text">Telefone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9 ()-]*"
              value={formData.phone}
              onChange={handleChange}
              onKeyPress={(e) => {
                const pattern = /[0-9 ()-]/;
                const char = String.fromCharCode(e.charCode);
                if (!pattern.test(char)) e.preventDefault();
              }}
              className="w-full rounded-lg bg-[#3E3E3E] border border-white py-2 px-4"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="company" className="pb-1 font-text">Empresa *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#3E3E3E] border border-white py-2 px-4"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="pb-1 font-text">Sua Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg bg-[#3E3E3E] border border-white py-4 px-4"
          />
        </div>

        <button type="submit" className="btn-verde mt-4">
          Enviar Mensagem
        </button>
      </div>
    </form>
  </div>

  <ToastContainer />

  <style jsx>{`
    @media (max-width: 1560px) {
      .hidden-on-small2 {
        display: none;
      }
    }
    @media (max-width: 1024px) {
      .response {
        padding-top: 100px;
      }
    }
  `}</style>
</div>
  );
};

export default Contact;
