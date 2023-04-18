const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Configurar o transporte de email com o nodemailer
const transporter = nodemailer.createTransport({
  service: 'hotmail', // ou o provedor de email de sua preferência
  auth: {
    user: 'seu_email@hotmail.com', // substitua com seu email
    pass: 'sua_senha_do_email' // substitua com sua senha do email
  }
});

// Rota para receber os dados do formulário
app.post('/enviar-email', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  // Configurar o email a ser enviado
  const mailOptions = {
    from: 'seu_email@hotmail.com', // substitua com seu email
    to: 'andresa_15ga@hotmail.com', // substitua com seu email pessoal
    subject: assunto,
    html: `<p><strong>Nome:</strong> ${nome}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Assunto:</strong> ${assunto}</p>
           <p><strong>Mensagem:</strong> ${mensagem}</p>`
  };

  // Enviar o email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao enviar o email.');
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send('Email enviado com sucesso!');
    }
  });
});

// Iniciar o servidor na porta 3001 (ou outra porta de sua preferência)
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
