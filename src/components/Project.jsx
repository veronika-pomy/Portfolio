import { AiFillGithub } from "react-icons/ai";

import { motion } from "framer-motion";
import { useThemeContext } from '../hooks/useThemeContext';

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
const overlayStyle = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-500 z-30 flex flex-col justify-center items-center text-center p-10 md:p-16 `;

const Project = ({projectIcon, iconAlt, name, description, deployed, ghub}) => {
  
  const { darkTheme } = useThemeContext();

    return (
        <motion.div
            variants={projectTransition}
            className="relative m-4"
        >
            <div className={`${overlayStyle}` + (darkTheme ? ` bg-blue text-dark` : ` bg-gold text-light`)}>
                <p className="text-2xl font-playfair">
                    {name}
                </p>
                {

                }
                <p className="mt-4 mb-4 py-0.5">
                    {description}
                </p>
                <div className="flex">
                    <a
                        className="hover:opacity-50 selftransition duration-500 mr-3"
                        href={ghub}
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <AiFillGithub size={28} />
                    </a>
                    <a
                        href={deployed}
                        target="_blank" 
                        rel="noreferrer" 
                        className="underline py-0.5"
                    >
                        Deployed App
                    </a>
                </div>
            </div>
            <img 
                alt={iconAlt}
                src={`${projectIcon}`}
                className={darkTheme ? 
                    "invert-[.99] sepia-[.05] saturate-[.08] hue-rotate-[313deg] brightness-[1.18] contrast-[.88]" 
                : 
                    "invert-[.12] sepia-[.02] saturate-[39.35] hue-rotate-[169deg] brightness-[.95] contrast-[.81]"}
            />
        </motion.div>
    );
};

export default Project;
