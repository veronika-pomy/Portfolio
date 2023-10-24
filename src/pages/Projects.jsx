import Project from '../components/Project';
import petServicesIcon from '../assets/projects/pet-services-icon.jpg';
import fitnessGramIcon from '../assets/projects/fitnessgram-icon.jpg';
import hikeIcon from '../assets/projects/hike-icon.jpg';

import { motion } from "framer-motion";
import { useThemeContext } from '../hooks/useThemeContext';

// abstract animations out to make sure transitions happen for each child (project) one after another
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Projects = () => {

    const { darkTheme } = useThemeContext();

    return (
        <>
            <section id="projects" className="pt-48 pb-36">
                {/* HEADER */}
                <motion.div
                    className=" mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible:{ opacity: 1, y: 0 }
                    }}
                >
                    <div>
                        <p className="font-crimson font-semibold text-5xl mb-32">
                            <span 
                                className={darkTheme ? 'text-blue' : 'text-gold'}
                            >
                                PROJECTS
                            </span>
                        </p>
                    </div>
                </ motion.div>
                {/* PROJECTS */}
                <div className="flex flex-col xl:flex-row justify-center">
                    
                    {/* set grid system for sceens above small to align project screenshots */}
                    
                    <motion.div
                        className="xl:grid xl:grid-cols-3 flex flex-col place-items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={
                            container
                        }
                    >
                        {/* child behaves based on what it detect from parent el */}
                        <Project 
                            projectIcon={hikeIcon}
                            iconAlt={'Landing page for a hike planning app'}
                            name={'Hike'}
                            description={'A MERN-based hike planning app features a Chakra UI design, Google Maps, OpenWeather and YouTube APIs.'}
                            deployed={'https://hike-app-60979479bbde.herokuapp.com/'}
                            ghub={'https://github.com/veronika-pomy/Hike'} 
                        />

                        <Project 
                            projectIcon={petServicesIcon}
                            iconAlt={'Landing page for Pet Services web app featuring a map, a dog and a cat, and a link to log in or create an account'}
                            name={'Pet Services'}
                            description={'MERN application uses Apollo/GraphQL for backend and Tailwind for styling.'}
                            deployed={'https://pet-services.herokuapp.com/'}
                            ghub={'https://github.com/dltorrise/Pet-Services'} 
                        />

                        <Project 
                            projectIcon={fitnessGramIcon}
                            iconAlt={'Login and Signup page for FitnessGram web app'}
                            name={'FitnessGram'}
                            description={'Social media application built with Node, Express and MySQL. Styled with Bootstrap.'}
                            deployed={'https://fitnessgram.herokuapp.com/login'}
                            ghub={'https://github.com/veronika-pomy/FitnessGram'} 
                        />
                    </motion.div>
                </div>      
            </section>
        </>
    );
};

export default Projects;
