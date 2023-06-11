import Project from '../components/Project';
import project1 from '../assets/projects/pet-services-icon.png';
import project2 from '../assets/projects/fitnessgram-icon.png';
import project3 from '../assets/projects/sous-chef-icon.png';
import { AiFillGithub } from "react-icons/ai";
import accentLight from '../assets/color-accents/accent-projects-light.png';
import accentDark from '../assets/color-accents/accent-projects-dark.png';

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

// specify transition for a single project child
    // hidden is initial state of item for each child
    // visible is final state item for each child
const projectTransition = {
    hidden: { 
        opacity: 0, 
        scale: 0.8
    },
    visible: {
        opacity: 1, 
        scale: 1
    }
};

// style overlay over project el on hover (text over image)
const overlayStyleLight = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-500 bg-gold z-30 flex flex-col justify-center items-center text-center p-10 md:p-16 text-light`;
const overlayStyleDark = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-500 bg-blue z-30 flex flex-col justify-center items-center text-center p-10 md:p-16`;

const Projects = () => {

    const { darkTheme } = useThemeContext();

    return (
        <>
            <div>
                <img
                    alt="Color accent for the Projects page"
                    className="
                                 absolute left-0 
                            "
                    src={`${(darkTheme ? accentDark : accentLight)}`}
                />
            </div>
            <section id="projects" className="pt-48 pb-48">
                
                {/* HEADER */}
                <motion.div
                    className="md:w-2/4 mx-auto text-center"
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
                        <p className="font-crimson font-semibold text-5xl">
                            MY <span className="text-gold">PROJECTS</span>
                        </p>
                    </div>
                </ motion.div>
                {/* PROJECTS */}
                <div className="flex felx-col md:flex-row justify-center">
                    {/* set grid system for sceens above small to align project screenshots */}
                    <motion.div
                        className="md:grid md:grid-cols-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={
                            container
                        }
                    >
                        {/* child behaves based on what it detect from parent el */}
                        <motion.div
                            variants={projectTransition}
                            className="relative m-4"
                        >
                            <div className={overlayStyleLight}>
                                <p className="text-2xl font-playfair">
                                    Pet Services
                                </p>
                                <p className="mt-7 py-0.5">
                                    MERN / GraphQl / Tailwind
                                </p>
                                <a
                                    href='https://pet-services.herokuapp.com/'
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="underline py-0.5"
                                >
                                    Deployed App
                                </a>
                                <div className="flex justify-center py-0.5">
                                    <a
                                        className="hover:opacity-50 selftransition duration-500"
                                        href="https://github.com/dltorrise/Pet-Services"
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <AiFillGithub size={24} />
                                    </a>
                                </div>
                                
                            </div>
                            <img 
                                alt='Landing page for Pet Services web app featuring a map, a dog and a cat, and a link to log in or create an account'
                                src={`${project1}`}
                            />
                        </motion.div>
                        <motion.div
                            variants={projectTransition}
                            className="relative m-4"
                        >
                            <div className={overlayStyleLight}>
                                <p className="text-2xl font-playfair">
                                    FitnessGram
                                </p>
                                <p className="mt-7 py-0.5">
                                    Node / Express / MySQL / Bootstrap
                                </p>
                                <a
                                    href='https://fitnessgram.herokuapp.com/login'
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="underline py-0.5"
                                >
                                    Deployed App
                                </a>
                                <div className="flex justify-center py-0.5">
                                    <a
                                        className="hover:opacity-50 selftransition duration-500"
                                        href="https://github.com/veronika-pomy/FitnessGram"
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <AiFillGithub size={24} />
                                    </a>
                                </div>
                                
                            </div>
                            <img 
                                alt='Login/Signup page for FitnessGram web app'
                                src={`${project2}`}
                            />
                        </motion.div>
                        <motion.div
                            variants={projectTransition}
                            className="relative m-4"
                        >
                            <div className={overlayStyleLight}>
                                <p className="text-2xl font-playfair">
                                    Sous Chef
                                </p>
                                <p className="mt-7 py-0.5">
                                    Javascript / Youtube API / Google Fonts
                                </p>
                                <a
                                    href='https://veronika-pomy.github.io/Sous-Chef/'
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="underline py-0.5"
                                >
                                    Deployed App
                                </a>
                                <div className="flex justify-center py-0.5">
                                    <a
                                        className="hover:opacity-50 selftransition duration-500"
                                        href="https://github.com/veronika-pomy/Sous-Chef"
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <AiFillGithub size={24} />
                                    </a>
                                </div>
                                
                            </div>
                            <img 
                                alt='Landing page for Sous Chef web app with a search bar to enter a desired dish'
                                src={`${project3}`}
                            />
                        </motion.div>
                    </motion.div>
                </div>      
            </section>
        </>
    )
    }

export default Projects;
