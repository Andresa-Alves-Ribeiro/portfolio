import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { useForm } from 'react-hook-form';
import { contactService } from '../../services/api';

/**
 * Componente de formulário de contato futurista
 * @returns {JSX.Element} Seção de contato com formulário
 */
const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState(null);
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
      setErrorMessage(error.message || 'Error sending email. Please try again.');
      
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
    <div className="flex flex-col justify-center items-center py-16 md:py-24 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1a] to-[#0a0a0f]" id='contact'>
      {/* Efeitos de luz suaves */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 md:px-8">
        {/* Título da seção */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                Contact Me
              </span>
            </h1>
            
            {/* Linha decorativa */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500/50 to-pink-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-pink-500/60 animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-pink-500/50 to-pink-500/50"></div>
            </div>
          </div>
        </div>

        <p className="text-center text-white/70 text-base md:text-lg mb-8 px-4">
          Still have questions? Fill in the fields below with the following information and get in touch with me.
        </p>

        {/* Formulário */}
        <form 
          className="glass-effect rounded-2xl p-6 md:p-8 border border-pink-500/20 transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(255,20,147,0.2)]" 
          onSubmit={handleSubmit(onSubmit)} 
          ref={aboutRef}
        >
          {/* Campo Nome */}
          <label className="flex flex-col mb-6">
            <span className="text-white/90 font-medium mb-2 text-sm md:text-base">Your name:</span>
            <div className="relative">
              <input 
                className={`w-full py-3 px-4 bg-white/5 border-2 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-white/30 font-medium ${
                  focusedField === 'nome' 
                    ? 'border-pink-500 shadow-[0_0_20px_rgba(255,20,147,0.3)]' 
                    : 'border-pink-500/30'
                }`}
                type="text" 
                {...register('nome', { 
                  required: 'This field is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters'
                  }
                })} 
                placeholder='Your name here' 
                disabled={isLoading}
                onFocus={() => setFocusedField('nome')}
                onBlur={() => setFocusedField(null)}
              />
              {focusedField === 'nome' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              )}
            </div>
            {errors.nome && (
              <span className="text-sm text-pink-400 mt-1.5">
                {errors.nome.message}
              </span>
            )}
          </label>

          {/* Campo Email */}
          <label className="flex flex-col mb-6">
            <span className="text-white/90 font-medium mb-2 text-sm md:text-base">Your email:</span>
            <div className="relative">
              <input 
                className={`w-full py-3 px-4 bg-white/5 border-2 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-white/30 font-medium ${
                  focusedField === 'email' 
                    ? 'border-pink-500 shadow-[0_0_20px_rgba(255,20,147,0.3)]' 
                    : 'border-pink-500/30'
                }`}
                type="email" 
                {...register('email', { 
                  required: 'This field is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email'
                  }
                })} 
                placeholder='email@example.com' 
                disabled={isLoading}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />
              {focusedField === 'email' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              )}
            </div>
            {errors.email && (
              <span className="text-sm text-pink-400 mt-1.5">
                {errors.email.message}
              </span>
            )}
          </label>

          {/* Campo Assunto */}
          <label className="flex flex-col mb-6">
            <span className="text-white/90 font-medium mb-2 text-sm md:text-base">Subject:</span>
            <div className="relative">
              <input 
                className={`w-full py-3 px-4 bg-white/5 border-2 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-white/30 font-medium ${
                  focusedField === 'assunto' 
                    ? 'border-pink-500 shadow-[0_0_20px_rgba(255,20,147,0.3)]' 
                    : 'border-pink-500/30'
                }`}
                type="text" 
                {...register('assunto', { 
                  required: 'This field is required',
                  minLength: {
                    value: 3,
                    message: 'Subject must be at least 3 characters'
                  }
                })} 
                placeholder='Subject' 
                disabled={isLoading}
                onFocus={() => setFocusedField('assunto')}
                onBlur={() => setFocusedField(null)}
              />
              {focusedField === 'assunto' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              )}
            </div>
            {errors.assunto && (
              <span className="text-sm text-pink-400 mt-1.5">
                {errors.assunto.message}
              </span>
            )}
          </label>

          {/* Campo Mensagem */}
          <label className="flex flex-col mb-6">
            <span className="text-white/90 font-medium mb-2 text-sm md:text-base">Sua mensagem:</span>
            <div className="relative">
              <textarea 
                className={`w-full py-3 px-4 bg-white/5 border-2 rounded-lg h-32 resize-none focus:outline-none transition-all duration-300 text-white placeholder-white/30 font-medium ${
                  focusedField === 'mensagem' 
                    ? 'border-pink-500 shadow-[0_0_20px_rgba(255,20,147,0.3)]' 
                    : 'border-pink-500/30'
                }`}
                {...register('mensagem', { 
                  required: 'This field is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters'
                  }
                })} 
                placeholder='Write your message here' 
                disabled={isLoading}
                onFocus={() => setFocusedField('mensagem')}
                onBlur={() => setFocusedField(null)}
              />
              {focusedField === 'mensagem' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500"></div>
              )}
            </div>
            {errors.mensagem && (
              <span className="text-sm text-pink-400 mt-1.5">
                {errors.mensagem.message}
              </span>
            )}
          </label>

          {/* Botão de envio */}
          <button 
            className={`group relative w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,20,147,0.5)] hover:scale-105 overflow-hidden ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : ''
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="relative z-10">Send Message</span>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Mensagens de status */}
          {formStatus === 'success' && (
            <div className="mt-6 p-4 glass-effect border border-green-500/50 rounded-lg text-center">
              <p className="text-green-400 font-semibold text-base">
                ✓ Email sent successfully!
              </p>
            </div>
          )}

          {formStatus === 'error' && (
            <div className="mt-6 p-4 glass-effect border border-red-500/50 rounded-lg text-center">
              <p className="text-red-400 font-semibold text-base">Error sending email.</p>
              {errorMessage && (
                <p className="text-sm mt-2 text-red-300 opacity-90">{errorMessage}</p>
              )}
            </div>
          )}
        </form>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
