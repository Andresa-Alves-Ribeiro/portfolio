import React, { useState } from 'react';
import axios from 'axios';
import './contact.scss';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formStatus, setFormStatus] = useState('');

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3001/enviar-email', data);
      setFormStatus('success');
    } catch (error) {
      console.error(error.response.data);
      setFormStatus('error');
    }
  };

  return (
    <div className="contact-form">
      <div id="wrapper">
        <h1 className="glitch-contact" data-text="Fale Comigo">Fale Comigo</h1>
      </div>
      <p>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados e entre em contato comigo.</p>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label class="form__label">
          <input className="form__input" type="text" {...register('nome', { required: true })} placeholder='Seu nome aqui' />
          <span className="form__error">{errors.nome && 'Este campo é obrigatório'}</span>
        </label>

        <label className="form__label">
          <input className="form__input" type="email" {...register('email', { required: true })} placeholder='email@exemplo.com.br' />
          <span className="form__error">{errors.email && 'Este campo é obrigatório'}</span>
        </label>

        <label className="form__label">
          <input className="form__input" type="text" {...register('assunto', { required: true })} placeholder='Assunto' />
          <span className="form__error">{errors.assunto && 'Este campo é obrigatório'}</span>
        </label>

        <label className="form__label">
          <textarea className="form__textarea" {...register('mensagem', { required: true })} placeholder='Escreva sua mensagem aqui' />
          <span className="form__error">{errors.mensagem && 'Este campo é obrigatório'}</span>
        </label>

        <button className="form__submit" type="submit">
          <span>Enviar</span>
          <div className="form__submit__circle"></div>
        </button>

        {formStatus === 'success' && (
          <p className="form__status form__status--success">Email enviado com sucesso!</p>
        )}

        {formStatus === 'error' && (
          <p className="form__status form__status--error">Erro ao enviar o email.</p>
        )}
      </form>
    </div>


  );
};

export default Contact;
