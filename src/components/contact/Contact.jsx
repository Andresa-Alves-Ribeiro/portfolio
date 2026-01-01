import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formStatus, setFormStatus] = useState('');
  const aboutRef = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    scrollReveal.reveal(aboutRef.current, {
      duration: 2000,
      delay: 500,
      easing: 'ease-in-out',
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
    });
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.post('https://backend-portfolio-efg8.onrender.com/enviar-email', data);
      setFormStatus('success');
    } catch (error) {
      console.error(error.response.data);
      setFormStatus('error');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center border-t-4 border-primary" id='contact'>
        <div id="wrapper" className="text-center mb-7">
          <h1 className="glitch-contact" data-text="Fale Comigo">Fale Comigo</h1>
        </div>
        <p className="text-lg md:text-xl font-normal mb-8 text-white px-5 md:px-10">Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados e entre em contato comigo.</p>

        <form className="flex flex-col justify-center items-center py-8 mt-[5vh] rounded-lg border-4 border-primary bg-clip-padding w-[90vw] md:w-[60vw] relative transition-all duration-300 hover:scale-105 hover:animate-[border-animate_5s_ease-in-out_infinite]" onSubmit={handleSubmit(onSubmit)} ref={aboutRef}>
          <label className="flex flex-col mb-5 w-full">
            <input 
              className="py-2.5 px-2.5 text-base bg-transparent text-white mt-2.5 border-b-2 border-[#ff88e4] focus:outline-none focus:bg-transparent focus:border-[#ff00c1]" 
              type="text" 
              {...register('nome', { required: true })} 
              placeholder='Seu nome aqui' 
            />
            <span className="text-sm font-normal mt-1.5 text-[#ff88e4]">{errors.nome && 'Este campo é obrigatório'}</span>
          </label>

          <label className="flex flex-col mb-5 w-full">
            <input 
              className="py-2.5 px-2.5 text-base bg-transparent text-white mt-2.5 border-b-2 border-[#ff88e4] focus:outline-none focus:bg-transparent focus:border-[#ff00c1]" 
              type="email" 
              {...register('email', { required: true })} 
              placeholder='email@exemplo.com.br' 
            />
            <span className="text-sm font-normal mt-1.5 text-[#ff88e4]">{errors.email && 'Este campo é obrigatório'}</span>
          </label>

          <label className="flex flex-col mb-5 w-full">
            <input 
              className="py-2.5 px-2.5 text-base bg-transparent text-white mt-2.5 border-b-2 border-[#ff88e4] focus:outline-none focus:bg-transparent focus:border-[#ff00c1]" 
              type="text" 
              {...register('assunto', { required: true })} 
              placeholder='Assunto' 
            />
            <span className="text-sm font-normal mt-1.5 text-[#ff88e4]">{errors.assunto && 'Este campo é obrigatório'}</span>
          </label>

          <label className="flex flex-col mb-5 w-full">
            <textarea 
              className="py-2.5 px-2.5 text-base bg-transparent text-white mt-2.5 border-2 border-[#ff88e4] h-24 resize-none font-['Roboto',sans-serif] focus:outline-none focus:bg-transparent focus:border-[#ff00c1]" 
              {...register('mensagem', { required: true })} 
              placeholder='Escreva sua mensagem aqui' 
            />
            <span className="text-sm font-normal mt-1.5 text-[#ff88e4]">{errors.mensagem && 'Este campo é obrigatório'}</span>
          </label>

          <button 
            className="mt-5 bg-primary text-white text-lg py-2.5 px-5 border-none rounded-[10px] cursor-pointer relative overflow-hidden hover:bg-[#ff3ad2] hover:animate-[pulseContact_0.5s_cubic-bezier(0.5,0,0.5,1)_infinite_alternate] hover:shadow-[0_0_10px_10px_rgba(255,0,193,0.7)] active:bg-[#ff88e4] focus:outline-none" 
            type="submit"
          >
            <span>Enviar</span>
          </button>

          {formStatus === 'success' && (
            <p className="mt-[5vh] text-green-500">Email enviado com sucesso!</p>
          )}

          {formStatus === 'error' && (
            <p className="mt-[5vh] text-red-500">Erro ao enviar o email.</p>
          )}
        </form>
    </div>


  );
};

export default Contact;
