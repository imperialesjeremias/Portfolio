import React, { useContext } from 'react';
import profileIMG from '../../assets/profile.png';
import AboutMeContext from '../../context/AboutMeContext';
import { aboutMeData } from '../../data/aboutMeData';
import Footer from '../Elements/Footer';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    const { about } = useContext(AboutMeContext);
    return (
        <div className='flex flex-col sm:gap-10 mt-10 pl-20 sm:mt-20'>
            <div className=' self-center sm:w-1/4 mb-7 sm:mb-0 ml-4'>
                <img src={profileIMG} className='w-36' alt="profile" />
            </div>
            <div className='font-general-regular mr-12 self-center text-center sm:w-3/4' >
                {aboutMeData.map((bio) => (
                    <p className='mb-4 text-ternary-dark dark:text-ternary-light text-lg' key={bio.id}>{bio.bio}</p>
                ))}
            </div>
            <div className='self-center mr-20'>
            <Link to='/projects'
                className='font-general-medium flex items-center py-3 px-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500  hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300'
                aria-label='More Projects'>
                    <button>Proyectos</button>
            </Link>
            </div>
        </div>
        
    )
}

export default AboutMe