import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lsw2x8e',
      'template_6iosw5y',
      form.current,
      'yvd3cHCCTyYJJvH65'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Mensagem enviada com sucesso!');
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        alert('Erro ao enviar a mensagem. Tente novamente.');
      }
    );
  };

  return (
    <section id="contact">
      <h2>Entre em contato</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Seu nome" required />
        <input type="email" name="reply_to" placeholder="Seu email" required />
        <textarea name="message" placeholder="Sua mensagem" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
