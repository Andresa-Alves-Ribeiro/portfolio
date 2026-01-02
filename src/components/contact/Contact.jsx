import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { useForm } from 'react-hook-form';
import { contactService } from '../../services/api';

/**
 * Componente de formulário de contato
 * Permite que visitantes enviem mensagens através do formulário
 * @returns {JSX.Element} Seção de contato com formulário
 */
const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const aboutRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    if (aboutRef.current) {
      scrollReveal.reveal(aboutRef.current, {
        duration: 2000,
        delay: 500,
        easing: 'ease-in-out',
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
      });
    }

    return () => {
      if (scrollReveal && aboutRef.current) {
        scrollReveal.clean(aboutRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setFormStatus('');
    setErrorMessage('');

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      await contactService.sendMessage(data);
      setFormStatus('success');
      reset();
      
      timeoutRef.current = setTimeout(() => {
        setFormStatus('');
        timeoutRef.current = null;
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error.message || 'Erro ao enviar o email. Por favor, tente novamente.');
      
      timeoutRef.current = setTimeout(() => {
        setFormStatus('');
        setErrorMessage('');
        timeoutRef.current = null;
      }, 8000);
    } finally {
      setIsLoading(false);
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
              {...register('nome', { 
                required: 'Este campo é obrigatório',
                minLength: {
                  value: 2,
                  message: 'Nome deve ter pelo menos 2 caracteres'
                }
              })} 
              placeholder='Seu nome aqui' 
              disabled={isLoading}
            />
            <span className="text-sm font-normal mt-1.5 text-[#ff88e4]">
              {errors.nome && errors.nome.message}
            </span>
          </label>

          <label className="flex flex-col mb-5 w-full">
            <input 
              className="py-2.5 px-2.5 text-base bg-transparent text-white mt-2.5 border-b-2 border-[#ff88e4] focus:outline-none focus:bg-transparent focus:border-[#ff00c1]" 
              type="email" 
              {...register('email', { 
                required: 'Este campo é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido'
                }
              })} 
              placeholder='email@exemplo.com.br' 
              disabled={isLoading}
            />
            <span className="text-sm font-normal mt-1.5 text-[#ff88e4]">
              {errors.email && errors.email.message}
            </span>
          </label>

          <label className="flex flex-col mb-5 w-full">
            <input 
              className="py-2.5 px-2.5 text-base bg-transparent text-white mt-2.5 border-b-2 border-[#ff88e4] focus:outline-none focus:bg-transparent focus:border-[#ff00c1]" 
              type="text" 
              {...register('assunto', { 
                required: 'Este campo é obrigatório',
                minLength: {
                  value: 3,
                  message: 'Assunto deve ter pelo menos 3 caracteres'
                }
              })} 
              placeholder='Assunto' 
              disabled={isLoading}
            />
            <span className="text-sm font-normal mt-1.5 text-[#ff88e4]">
              {errors.assunto && errors.assunto.message}
            </span>
          </label>

          <label className="flex flex-col mb-5 w-full">
            <textarea 
              className="py-2.5 px-2.5 text-base bg-transparent text-white mt-2.5 border-2 border-[#ff88e4] h-24 resize-none font-['Roboto',sans-serif] focus:outline-none focus:bg-transparent focus:border-[#ff00c1]" 
              {...register('mensagem', { 
                required: 'Este campo é obrigatório',
                minLength: {
                  value: 10,
                  message: 'Mensagem deve ter pelo menos 10 caracteres'
                }
              })} 
              placeholder='Escreva sua mensagem aqui' 
              disabled={isLoading}
            />
            <span className="text-sm font-normal mt-1.5 text-[#ff88e4]">
              {errors.mensagem && errors.mensagem.message}
            </span>
          </label>

          <button 
            className={`mt-5 bg-primary text-white text-lg py-2.5 px-5 border-none rounded-[10px] cursor-pointer relative overflow-hidden transition-all duration-300 focus:outline-none ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#ff3ad2] hover:animate-[pulseContact_0.5s_cubic-bezier(0.5,0,0.5,1)_infinite_alternate] hover:shadow-[0_0_10px_10px_rgba(255,0,193,0.7)] active:bg-[#ff88e4]'
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : (
              <span>Enviar</span>
            )}
          </button>

          {formStatus === 'success' && (
            <p className="mt-[5vh] text-green-500 font-medium animate-fade-in">
              ✓ Email enviado com sucesso!
            </p>
          )}

          {formStatus === 'error' && (
            <div className="mt-[5vh] text-red-500 font-medium animate-fade-in">
              <p>✗ Erro ao enviar o email.</p>
              {errorMessage && (
                <p className="text-sm mt-2 opacity-90">{errorMessage}</p>
              )}
            </div>
          )}
        </form>
    </div>


  );
};

export default Contact;
