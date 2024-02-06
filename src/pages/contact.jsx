import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    message: '',
  });
  const [formValues, setFormValues] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://resendemail.onrender.com/send', formValues);
      setAlert({
        show: true,
        type: 's',
        message: response.data,
      });
    } catch (error) {
      setAlert({
        show: true,
        type: 'e',
        message: 'Error al enviar el formulario',
      });
    }
  };

  return (
    <section id='cont'>
      <article id='cocont' className='w-full h-20 flex items-center bg-[--txt] text-[--sme] overflow-hidden z-40'>
        <h1 id='coti' className='text-nowrap text-2xl lg:text-4xl xl:text-5xl font-semibold'>
          Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto Contacto
        </h1>
      </article>
      <article id='ccont' className='w-full py-16 px-[5%] flex-col center relative'>
        <form id='formulario' onSubmit={handleSubmit} className='w-full max-w-[600px] h-[50svh] flex-col justify-evenly text-[--txt]'>
          <label htmlFor='nombre'>
            Nombre:
            <div className='w-full flex items-center relative'>
              <input type='text' id='nombre' name='nombre' value={formValues.nombre} onChange={handleChange} required className='w-full h-10 px-10 bg-[--txt] text-[--sme] rounded-lg' />
              <img src='/name.svg' alt='name' className='w-6 h-6 absolute left-2 inv' />
            </div>
          </label>
          <label htmlFor='correo'>
            Correo:{' '}
            <div className='w-full flex items-center relative'>
              <input type='email' id='correo' name='correo' value={formValues.correo} onChange={handleChange} required className='w-full h-10 px-10 bg-[--txt] text-[--sme] rounded-lg' />
              <img src='/email.svg' alt='email' className='w-6 h-6 absolute left-2 inv' />
            </div>
          </label>
          <label htmlFor='nombre'>
            Asunto:
            <div className='w-full flex items-center relative'>
              <input type='text' id='asunto' name='asunto' value={formValues.asunto} onChange={handleChange} required className='w-full h-10 px-10 bg-[--txt] text-[--sme] rounded-lg' />
              <img src='/title.svg' alt='title' className='w-6 h-6 absolute left-2 inv' />
            </div>
          </label>
          <label htmlFor='mensaje'>
            Mensaje:
            <div className='w-full flex items-center relative'>
              <input type='text' id='mensaje' name='mensaje' value={formValues.mensaje} onChange={handleChange} required className='w-full h-10 px-10 bg-[--txt] text-[--sme] rounded-lg'></input>
              <img src='/text.svg' alt='text' className='w-6 h-6 absolute left-2 inv' />
            </div>
          </label>
          <button type='submit'>Enviar</button>
        </form>
        {alert.show && (
          <article className='w-full h-full flex center bg-[--sdw] absolute top-0 left-0'>
            <div className='w-1/3 h-20 bg-[--sme] opacity-100 border rounded-xl overflow-hidden'>
              <div className={`w-full h-5 flex justify-end items-center border text-black ${alert.type === 'e' ? 'bg-red-300' : 'bg-green-300'}`}>
                <button title='Cerrar' onClick={() => setAlert({ ...alert, show: false })} className='w-4 h-full flex center hover:cursor-pointer hover:bg-gray-200 hover:scale-120 duration-200'>
                  x
                </button>
              </div>
              <div className='w-full h-[60px] flex center text-[--txt]'>{alert.message}</div>
            </div>
          </article>
        )}
      </article>
    </section>
  );
};

export default Contact;