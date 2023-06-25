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
            className="relative m-12 md:w-3/6 lg:w-3/6 xl:w-full 2xl:w-5/6"
        >
            <div className={`${overlayStyle}` + (darkTheme ? ` bg-blue text-dark` : ` bg-gold text-light`)}>
                <p className="text-2xl xl:text-sm font-crimson5">
                    <a
                        href={deployed}
                        target="_blank" 
                        rel="noreferrer" 
                        className="underline"
                    >
                        {name}
                    </a>  
                </p>
                {

                }
                <p className="mt-3 mb-3 py-0.5 font-muktaam hidden xs:block">
                    {description}
                </p>
                <div className="flex items-center ">
                    <a
                        className="hover:opacity-50 selftransition duration-500"
                        href={ghub}
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <AiFillGithub size={28} />
                    </a>
                </div>
            </div>
            <div
                className="flex justify-center"
            >
                <img 
                    alt={iconAlt}
                    src={`${projectIcon}`}
                    className={darkTheme ? 
                        "invert-[.64] sepia-[.15] saturate-[1.95] hue-rotate-[154deg] brightness-[.88] contrast-[.85] p-6" 
                    : 
                        "invert-[.12] sepia-[.02] saturate-[39.35] hue-rotate-[169deg] brightness-[.95] contrast-[.81] p-6"}
                />
            </div>
        </motion.div>
    );
};

export default Project;
