import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    emailjs
    .sendForm('service_qp97t0w', 'template_eobtvhw', form.current, {
      publicKey: 'rTfcb-OLlJEQ3giOt',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        alert('Your message has been sent successfully!');
        setName('');
        setSubject('');
        setDescription('');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again later.');
      },
    );
  };

  return (
    <section id='contact' className=' flex flex-col justify-center items-center h-full py-8 bg-custom-white'>
      <h1 className='text-4xl font-bold border-b-2 border-solid  border-custom-blue text-custom-blue mb-8'>Get in touch</h1>
     
      <form onSubmit={handleSubmit} ref={form} className='flex flex-col w-full  p-8 rounded-lg  md:max-w-lg '>
        <input
          type="text"
          placeholder='Name'
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='p-3 border text-custom-blue border-custom-blue rounded mb-4 focus:outline-none focus:ring-2 focus:ring-custom-lt-green'
        />
        <input
          type="text"
          placeholder='Subject'
          name="user_subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className='p-3 border  text-custom-blue border-custom-blue rounded mb-4 focus:outline-none focus:ring-2 focus:ring-custom-lt-green'
        />
        <textarea
          placeholder='Description'
          name="message"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={6}
          className='p-3 border  text-custom-blue font-normal border-custom-blue rounded mb-4 focus:outline-none focus:ring-2 focus:ring-custom-lt-green resize-none'
        ></textarea>
        <button type="submit" className='bg-custom-lt-green text-custom-white px-4 py-3 rounded-lg transition-all duration-300 self-start  hover:bg-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-lt-green'>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
