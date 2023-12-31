import React from 'react'

export const ContactForm = () => {
  return (
    <div className='w-full lg:w-1/2'>
    <div className='leading-lose'>
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log('Form Submitted');
        }}
            className='max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left'
            >
                <p className='font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8'>Formulario de Contacto</p>
                <div className='font-general-regular'>
                    <label className='block text-lg text-primary-dark dark:text-primary-light mb-2' htmlFor='name'>Nombre</label>
                    <input 
                    className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'
                    id='name'
                    name='name'
                    type="text"
                    required
                    placeholder='Tu Nombre'
                    aria-label='Name' />
                </div>
                <div className='mt-6 font-general-regular'>
                    <label className='block text-lg text-primary-dark dark:text-primary-light mb-2' htmlFor='email'>
                        Email
                    </label>
                    <input className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'
                     id='email'
                     name='email'
                     type="text" 
                     required
                     placeholder='Tu Email' 
                     aria-label='Email'/>
                </div>
                <div className='mt-6 font-general-regular'>
                    <label className='block text-lg text-primary-dark dark:text-primary-light mb-2' htmlFor='subjet'>Asunto</label>
                    <input type="text" className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md' 
                    id='subject'
                    name='subject'
                    
                    required
                    placeholder='Asunto'
                    aria-label='Subject'
                    />
                </div>
                <div className='mt-6 font-general-regular'>
                    <label className='block text-lg text-primary-dark dark:text-primary-light mb-2' htmlFor="Message">Mensaje</label>
                    <textarea className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'
                    id='message'
                    name='message'
                    cols='14'
                    rows='6'
                    type="text" ></textarea>
                </div>
                <div className='font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500'>
                    <button title='Send Message' type='submit' aria-label='Send Message'>Enviar Mensaje</button>
                </div>

        </form>
    </div>

</div>
  )
}
export default ContactForm;