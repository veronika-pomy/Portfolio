import React from 'react'
import { motion } from "framer-motion";

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

const ProjectSolidCover = ({ projectIcon, iconAlt }) => {
  return (
    <motion.div
        variants={projectTransition}
        className="relative m-12 md:w-3/6 lg:w-3/6 xl:w-full 2xl:w-5/6"
    >
    <div
        className="flex justify-center"
    >
        <img 
            alt={iconAlt}
            src={`${projectIcon}`}
            />
        </div>
    </motion.div>
  )
}

export default ProjectSolidCover;