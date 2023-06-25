import resume from "../assets/veronika-pomyateeva-resume-2023.pdf";

import { AiOutlineHtml5 } from "react-icons/ai";

import { RiCss3Line } from "react-icons/ri";

import {
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiGraphql,
    SiMongodb,
    SiRedux,
    SiTailwindcss,
    SiBootstrap,
    SiWebpack,
    SiHandlebarsdotjs,
} from "react-icons/si";

import { GrMysql } from "react-icons/gr";

import { motion } from "framer-motion";
import { useThemeContext } from '../hooks/useThemeContext';

const Resume = () => {

    const { darkTheme } = useThemeContext();

    return (
    <>
        <section id="resume" className="pt-36 pb-24">
            <div className="md:flex md:flex-col md:justify-between items-center md:gap-4">
            {/* HEADER */}
            <motion.div
                className="md:w-1/3 md:mx-0 mx-auto text-center z-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible:{ opacity: 1, x: 0 }
                }}
            >
                <p className="font-crimson font-semibold text-5xl mb-8">
                    <span 
                        className={darkTheme ? 'text-blue' : 'text-gold'}
                    >
                        RESUME
                    </span>
                </p>
            </ motion.div>
            {/* SKILLS & DOWNLOAD RESUME */}
            <motion.div
                className=" mt-10 md:mt-36 flex flex-col-reverse md:flex-col z-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible:{ opacity: 1, x: 0 }
                }}
            >
                <ul
                    className="
                        grid
            ]
                        grid-cols-2
                        md:grid-cols-7
                        gap-8
                        w-full 
                        pt-6 
                        pb-6
                    "
                >
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiJavascript size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <RiCss3Line size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <AiOutlineHtml5 size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiReact size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiNodedotjs size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiExpress size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiGraphql size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"                
                    >
                        <GrMysql size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiMongodb size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiRedux size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiTailwindcss size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiBootstrap size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiWebpack size={36} />
                    </li>
                    <li
                        className="p-6 justify-self-center"
                    >
                        <SiHandlebarsdotjs size={36} />
                    </li>
                </ul>
                <div
                    className="flex justify-center mt-10 md:mt-36"
                >
                <a 
                    className="
                            rounded-sm 
                            bg-red
                            py-0.5 
                            px-0.5 
                            mt-7 
                            md:mt-0
                            mb-12
                        "
                    href={resume} 
                    download="Veronika-Pomyateeva-Resume" 
                    target='_blank' 
                    rel="noreferrer"
                >
                    <div
                        className={`
                            ${(darkTheme ?
                                'hover:text-blue text-light border-light'
                            :
                                ' hover:text-gold text-dark  border-dark'
                            )}
                            transparent
                            border
                            transition 
                            duration-500
                            font-murkaam
                            text-lg
                            font-semibold
                            px-10
                            py-2.5
                        `}
                    >
                        Download
                    </div>
                    
                </a>
                </div>
            </motion.div>
            </div>
        </section>
    </>
    );
};

export default Resume;