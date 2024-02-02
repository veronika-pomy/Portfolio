import Project from '../components/Project';
import ProjectSolidCover from '../components/ProjectSolidCover';
import petServicesIcon from '../assets/projects/pet-services-icon.jpg';
import personalTrainerIcon from '../assets/projects/personal-trainer-icon.jpg';
import hikeIcon from '../assets/projects/hike-icon.jpg';
import issueTrackerIcon from '../assets/projects/issue-tracker-icon.jpg';
import projectBlue from '../assets/projects/project-blue.jpg';
import projectGold from '../assets/projects/project-gold.jpg';

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
            <section id="projects" className="pt-48 pb-10">
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
                        <ProjectSolidCover
                            projectIcon={darkTheme ? projectBlue : projectGold}
                            iconAlt={'Solid blank cover for a future project'}
                        />
                        <Project 
                            projectIcon={hikeIcon}
                            iconAlt={'Cover image for a hike planning app'}
                            name={'Hike'}
                            description={'A MERN planning app features a Chakra UI design, Google Maps, OpenWeather and YouTube APIs.'}
                            deployed={'https://hike-app-60979479bbde.herokuapp.com'}
                            github={'https://github.com/veronika-pomy/Hike'} 
                        />
                        <Project 
                            projectIcon={issueTrackerIcon}
                            iconAlt={'Cover image for an Issue Tracker Next app'}
                            name={'Issue Tracker'}
                            description={'A Next/MySQL issue tracker for managing team progress and facilitating collaboration.'}
                            deployed={'https://issue-tracker-azure-nine.vercel.app'}
                            github={'https://github.com/veronika-pomy/Issue-Tracker'} 
                        />
                        <Project 
                            projectIcon={personalTrainerIcon}
                            iconAlt={'Cover image for a Personal Trainer portfolio website'}
                            name={'Personal Trainer Website'}
                            description={'A front-end React portfolio website for a personal trainer.'}
                            deployed={'https://veronika-pomy.github.io/Personal-Trainer-Website'}
                            github={'https://github.com/veronika-pomy/Personal-Trainer-Website'} 
                        />
                        <Project 
                            projectIcon={petServicesIcon}
                            iconAlt={'Cover image for Pet Services web app'}
                            name={'Pet Services'}
                            description={'A MERN application uses Apollo/GraphQL for backend and Tailwind for styling.'}
                            deployed={'https://pet-services.herokuapp.com/'}
                            github={'https://github.com/dltorrise/Pet-Services'} 
                        />
                        <ProjectSolidCover
                            projectIcon={darkTheme ? projectBlue : projectGold}
                            iconAlt={'Solid blank cover for a future project'}
                        />
                    </motion.div>
                </div>      
            </section>
        </>
    );
};

export default Projects;
