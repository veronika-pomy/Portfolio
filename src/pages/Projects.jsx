import { motion } from "framer-motion";
import fashinStoreIcon from '../assets/projects/fashion-store-icon.jpg';
import personalTrainerIcon from '../assets/projects/fitness-portfolio-icon.jpg';
import hikeIcon from '../assets/projects/hike-icon.jpg';
import issueTrackerIcon from '../assets/projects/issue-tracker-icon.jpg';
// import mediaPortfolioIcon from '../assets/projects/media-portfolio-icon.jpg';
import petServicesIcon from '../assets/projects/pet-services-icon.jpg';
import wordPressWebsiteIcon from '../assets/projects/wordpress-website-icon.jpg';
import Project from '../components/Project';
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
                        <Project 
                            projectIcon={fashinStoreIcon}
                            iconAlt={'Cover image for an online shopping app'}
                            name={'Fashion Store'}
                            description={'A MERN e-commerce application integrated with Stripe and styled with Bootstrap.'}
                            deployed={'https://fashion-shop-66a46d161c61.herokuapp.com/'}
                            github={'https://github.com/veronika-pomy/Fashion-Store'} 
                        />
                        <Project 
                            projectIcon={issueTrackerIcon}
                            iconAlt={'Cover image for an Issue Tracker Next app'}
                            name={'Issue Tracker'}
                            description={'A NextJS/MySQL application for managing team progress and facilitating collaboration.'}
                            deployed={'https://issue-tracker-azure-nine.vercel.app'}
                            github={'https://github.com/veronika-pomy/Issue-Tracker'} 
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
                            projectIcon={petServicesIcon}
                            iconAlt={'Cover image for Pet Services web app'}
                            name={'Pet Services'}
                            description={'A MERN application utilizes Apollo/GraphQL for backend and Tailwind for styling.'}
                            deployed={'https://pet-services.herokuapp.com/'}
                            github={'https://github.com/dltorrise/Pet-Services'} 
                        />
                        <Project 
                            projectIcon={personalTrainerIcon}
                            iconAlt={'Cover image for a Fitness Portfolio portfolio website'}
                            name={'Fitness Portfolio'}
                            description={'A front-end React portfolio website for a personal trainer.'}
                            deployed={'https://veronika-pomy.github.io/Fitness-Portfolio'}
                            github={'https://github.com/veronika-pomy/Fitness-Portfolio'} 
                        />
                        <Project 
                            projectIcon={wordPressWebsiteIcon}
                            iconAlt={'Cover image for an e-commerce webiste built with WordPress'}
                            name={'WordPress Store'}
                            description={'Demo WordPress e-commerce site with secure Stripe payments, SEO blog, and reviews.'}
                            deployed={'https://drive.google.com/file/d/1l-Wnsz4WerdPObgmLh7VHDZ0eiVacIq9/view?usp=sharing'}
                            github={'https://github.com/veronika-pomy/WordPress-E-commerce-Website'} 
                        />
                    </motion.div>
                </div>      
            </section>
        </>
    );
};

export default Projects;
