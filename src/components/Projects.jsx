
import React from "react";
import vpn from '../assets/vpn.png'
import eniac from '../assets/eniac.jpg'
import PostCare from '../assets/PostCare.png'

import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='PostCare' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={PostCare} alt="" />
            </a>}
            {title=='Eniac' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={eniac} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Linkedin</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Eniac',
        description:'ENIAC is an AI robot developed using Raspberry Pi 4B and Python, created by a team of Computer Science and Design students. It features advanced speech recognition and text-to-speech capabilities through Google’s AI modules and AIML for natural language processing. ENIAC showcases the integration of hardware and software for interactive, intelligent robotics solutions.',
        image: {eniac},
        git:'https://www.linkedin.com/posts/ziyad-ahammed-12995b212_excited-to-share-our-latest-achievement-activity-7224309957150588928-Fx73?utm_source=share&utm_medium=member_desktop',
        technologies:['Raspberry Pi 4B' ,'RRaspberry Pi OS' , 'Python' , 'AIML' , 'GTTS']
    },
    {
        title:'PostCare',
        description:'PostCare is a platform designed to support individuals experiencing postpartum depression. It offers anonymous chat, therapist appointments, personalized exercise and diet plans, and essential resources. Our goal is to create a safe, inclusive space for healing, raise awareness, reduce stigma, and empower new mothers through comprehensive support.',
        image: {copeople},
        git:"https://www.linkedin.com/posts/ziyad-ahammed-12995b212_wiehack-40-a-36-hour-hybrid-hackathon-activity-7224326583388401664-OeVd?utm_source=share&utm_medium=member_desktop",
        technologies:[ 'HTML', 'CSS' , 'Node.js' , 'Socket.io' , 'AI and Machine Learning']
    }
]

export default Projects