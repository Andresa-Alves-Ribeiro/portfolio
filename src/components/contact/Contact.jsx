import React from 'react'
import './contact.css'
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <h2>Fale Comigo</h2>
      <p>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados e entre em contato comigo.</p>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("nome", { required: true })} placeholder="Nome" />
          {errors.nome && <span>Este campo é obrigatório</span>}

          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
          {errors.email && <span>Por favor, insira um email válido</span>}

          <input {...register("assunto", { required: true })} placeholder="Assunto" />
          {errors.assunto && <span>Este campo é obrigatório</span>}

          <textarea {...register("mensagem", { required: true })} placeholder="Mensagem"></textarea>
          {errors.mensagem && <span>Este campo é obrigatório</span>}

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
