import React from 'react';
import './contact.css';
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/enviar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Email enviado com sucesso!');
      } else {
        console.error('Erro ao enviar o email.');
      }
    } catch (error) {
      console.error('Erro ao enviar o email:', error);
    }
  };

  return (
    <div>
      <h2>Fale Comigo</h2>
      <p>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados e entre em contato comigo.</p>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome:
            <input {...register("nome", { required: true })} />
            {errors.nome && <span>Este campo é obrigatório</span>}
          </label>

          <label>
            Email:
            <input {...register("email", { required: true })} />
            {errors.email && <span>Este campo é obrigatório</span>}
          </label>

          <label>
            Assunto:
            <input {...register("assunto", { required: true })} />
            {errors.assunto && <span>Este campo é obrigatório</span>}
          </label>

          <label>
            Mensagem:
            <textarea {...register("mensagem", { required: true })} />
            {errors.mensagem && <span>Este campo é obrigatório</span>}
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
