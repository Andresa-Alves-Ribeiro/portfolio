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
    <div className="flex flex-col justify-center items-center py-16" id='contact'>
        <div id="wrapper" className="text-center mb-7">
          <div className="relative inline-block">
            {/* Container principal do título sem bordas e background */}
            <div className="relative px-10 py-8">
              
              {/* Título principal */}
              <div className="relative z-10 flex items-center justify-center">
                <h1 
                  className="diary-title text-4xl md:text-6xl lg:text-7xl font-handwriting relative z-10"
                  data-text="Fale Comigo"
                >
                  Fale Comigo
                </h1>
              </div>
              
              {/* Linha decorativa moderna melhorada */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-pink-300/80 to-pink-400/80 rounded-full decorative-line"></div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 decorative-dot"></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-rose-300 to-pink-300 decorative-dot"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 decorative-dot"></div>
                </div>
                <div className="h-1 w-16 bg-gradient-to-l from-transparent via-rose-300/80 to-rose-400/80 rounded-full decorative-line" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
        <p className="diary-text text-lg md:text-xl mb-8 px-5 md:px-10">Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados e entre em contato comigo.</p>

        <form className="diary-page flex flex-col justify-center items-center py-8 mt-[5vh] w-[90vw] md:w-[60vw] relative transition-all duration-300 hover:scale-105" onSubmit={handleSubmit(onSubmit)} ref={aboutRef}>
          <label className="flex flex-col mb-5 w-full">
            <span className="diary-text font-handwriting mb-2">Seu nome:</span>
            <input 
              className="py-2.5 px-2.5 text-base bg-white mt-2.5 border-2 border-primary-light rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light text-primary-dark font-handwriting" 
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
            <span className="text-sm font-handwriting mt-1.5 text-primary-dark">
              {errors.nome && errors.nome.message}
            </span>
          </label>

          <label className="flex flex-col mb-5 w-full">
            <span className="diary-text font-handwriting mb-2">Seu email:</span>
            <input 
              className="py-2.5 px-2.5 text-base bg-white mt-2.5 border-2 border-primary-light rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light text-primary-dark font-handwriting" 
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
            <span className="text-sm font-handwriting mt-1.5 text-primary-dark">
              {errors.email && errors.email.message}
            </span>
          </label>

          <label className="flex flex-col mb-5 w-full">
            <span className="diary-text font-handwriting mb-2">Assunto:</span>
            <input 
              className="py-2.5 px-2.5 text-base bg-white mt-2.5 border-2 border-primary-light rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light text-primary-dark font-handwriting" 
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
            <span className="text-sm font-handwriting mt-1.5 text-primary-dark">
              {errors.assunto && errors.assunto.message}
            </span>
          </label>

          <label className="flex flex-col mb-5 w-full">
            <span className="diary-text font-handwriting mb-2">Sua mensagem:</span>
            <textarea 
              className="py-2.5 px-2.5 text-base bg-white mt-2.5 border-2 border-primary-light rounded-lg h-24 resize-none font-handwriting focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-light text-primary-dark" 
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
            <span className="text-sm font-handwriting mt-1.5 text-primary-dark">
              {errors.mensagem && errors.mensagem.message}
            </span>
          </label>

          <button 
            className={`pink-button mt-5 text-lg py-2.5 px-5 ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : ''
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
            <p className="mt-[5vh] text-primary-dark font-handwriting font-bold text-lg animate-fade-in">
              Email enviado com sucesso!
            </p>
          )}

          {formStatus === 'error' && (
            <div className="mt-[5vh] text-primary-dark font-handwriting font-bold animate-fade-in">
              <p>Erro ao enviar o email.</p>
              {errorMessage && (
                <p className="text-sm mt-2 opacity-90 font-normal">{errorMessage}</p>
              )}
            </div>
          )}
        </form>
    </div>


  );
};

export default Contact;
