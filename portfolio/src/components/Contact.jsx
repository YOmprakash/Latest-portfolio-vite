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
    <div id='contact' className='flex flex-col items-center justify-center min-h-screen p-12 bg-gradient-to-r from-teal-200 via-teal-300 to-teal-500'>
      <h1 className='text-4xl font-bold text-blue-600 mb-8'>Get in touch</h1>
     
      <form onSubmit={handleSubmit} ref={form} className='flex flex-col w-full max-w-lg bg-white p-8 rounded-lg shadow-lg'>
        <input
          type="text"
          placeholder='Name'
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500'
        />
        <input
          type="text"
          placeholder='Subject'
          name="user_subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className='p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500'
        />
        <textarea
          placeholder='Description'
          name="message"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={6}
          className='p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none'
        ></textarea>
        <button type="submit" className='bg-blue-600 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
