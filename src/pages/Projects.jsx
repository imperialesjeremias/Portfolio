import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import fooodiePreview from '../assets/foodiePreview.png';

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			exit={{ opacity: 0 }}
			className="flex flex-col sm:gap-10 p-10 sm:mt-20 h-[55vh]"
        >
            <div className='flex flex-col lg:flex-row gap-14 border border-primary-light p-10 rounded-lg dark:border-secondary-dark'>
                <a href="https://github.com/imperialesjeremias/foodie-frontend" target='__blank' className='hover:scale-105'>
                <img src={fooodiePreview} className='lg:w-[30rem]' alt="foodie_preview image" />
                </a>
                <div className='dark:text-ternary-light'>
                <h1 className='text-2xl mb-3'>Foodie - En Desarrollo</h1>
                <p >
                    Proyecto final realizado para el bootcamp de Santander, <br/>
                    es una SPA informativa en un futuro se añadirán nuevas funciones orientadas a un e-commerce acerca de restaurantes con platos sin tacc.
                </p>
                <p className='mt-3 mb-2'>Responsabilidades: <br />
                    Creación del backend, base de datos y la comunicación entre cliente servidor .
                </p>
                    <a className='text-blue-600' href="https://github.com/imperialesjeremias/foodie-frontend">Click para ir al repositorio</a>
                </div>
                
                
            </div>
        </motion.div>
    )
}

export default Projects;