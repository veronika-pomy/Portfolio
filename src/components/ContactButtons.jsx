import { motion } from 'framer-motion';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useThemeContext } from '../hooks/useThemeContext';

const ContactButtons = ({ setActivePage }) => {

    const { darkTheme } = useThemeContext();

    return (
    <motion.div
        className="flex flex-col md:flex-row mt-5 gap-x-2 justify-center items-center lg:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible:{ opacity: 1, x: 0 }
        }}
    >
    {/* Link to the contact section  */}
    <AnchorLink
        className={`
        ${(darkTheme ? 'text-light border-light hover:text-blue ': 'text-dark border-dark hover:text-gold ')}
        transparent border py-4 px-7 font-muktaam text-xl font-semibold transition duration-500
        `}
        onClick={() => setActivePage('contact')}
        href="#contact"
    >
        Message
    </AnchorLink>
    {/* Email Option */}
    <a
        className="rounded-sm bg-deep-blue py-0.5 px-0.5 mt-7 md:mt-0"
        href="mailto:pomyateevav@gmail.com?subject=Website Inquiry"
    >
        <div
            className={`
                ${(darkTheme ? 'bg-blue border-blue text-dark hover:text-light' : 'bg-gold border-gold text-light hover:text-black ')}
                    transition duration-500 w-full h-full flex items-center justify-center font-muktam text-xl px-10 py-4 border
            `}
        >
                Email
        </div>
    </a>
    </motion.div>
    )
}   

export default ContactButtons;