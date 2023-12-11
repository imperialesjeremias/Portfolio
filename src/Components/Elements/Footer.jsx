import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import React from 'react';


const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/imperialesjeremias',
	},
	{
		id: 2,
		icon: <FiTwitter />,
		url: 'https://twitter.com/Jeremias_dev',
	},
	
	{
		id: 4,
		icon: <FiInstagram />,
		url: 'https://instagram.com/leonjeeremias',
	},
	{
		id: 5,
		icon: <FiLinkedin/>,
		url: 'https://www.linkedin.com/in/jeremiasleonimperiales/',
	}
];

const Footer = () => {
  return (
    <div className="container mx-auto">
			<div className="pt-10 sm:pt-30 pb-1 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Sigueme en las redes
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				{/* <AppFooterCopyright /> */}
			</div>
		</div>
  )
}

export default Footer