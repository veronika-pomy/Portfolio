import Icons from '../components/Icons';
import profileImage from '../assets/profile-photo.jpg';
import accentLight from '../assets/color-accents/accent-about-light.png';
import accentDark from '../assets/color-accents/accent-about-dark.png';

import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useThemeContext } from '../hooks/useThemeContext';

const About = ({ setActivePage }) => {

    const isAboveMediumScreen = useMediaQuery("(min-width: min-width: 1024px)");
    const { darkTheme } = useThemeContext();

    return (
        <section id='home' className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">    
            {/* IMAGE */}
            {/* order two allow it to be on the right of text when screen is large but on top when screen is small */}
            <div className="md:order-2 flex justify-center md:justify-end basis-4/6 z-10 mt-16 mb-10 md:mt-32 md:mb-24">
                {isAboveMediumScreen ? 
                    (
                        <div>
                            <img
                                alt="Veronika's Developer Profile"
                                className="
                                            w-96
                                            hover:filter 
                                            hover:brightness-110
                                            transition 
                                            duration-500 
                                            z-10 
                                            max-w-[400px] 
                                            md:max-w-[600px]
                                        "
                                src={`${profileImage}`}
                            />
                        </div>
                    )
                    :
                    (
                        <div>
                            <img
                                alt="Veronika's Developer Profile"
                                className="
                                            w-96
                                            hover:filter 
                                            hover:brightness-110
                                            transition 
                                            duration-500 
                                            z-10 
                                            max-w-full
                                        "
                                src={`${profileImage}`}
                            />
                        </div>
                    )
                }
            </div>

            
            <div className="md:order-1 md:justify-end basis-4/6 z-10 mt-16 mb-10 md:mt-32 md:mb-24 md:h-84">
                {/* ABOUT */}
                {/* use motion for simple animation of text  */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible:{ opacity: 1, x: 0 }
                    }}
                >
                    <p className="text-4xl sm:text-7xl font-crimson z-10 text-center md:text-start">
                        Veronika {" "}
                        <span
                            className={(darkTheme ? 'xs:relative xs:text-blue' : 'xs:relative xs:text-gold')}
                        >
                            Pomyateeva
                        </span>
                    </p>
                    <p
                        className="mt-10 mb-7 text-3xl text-center md:text-start"
                    >
                        Full-Stack Developer passionate about delivering excellent user experience and leveraging my psychology background when building value-driven applications.
                    </p>
                </motion.div>

                {/* CONTACT */}
                <motion.div
                    className="flex flex-col md:flex-row mt-5 justify-center items-center md:justify-start"
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
                        Get in touch
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
                                Email me
                        </div>
                    </a>
                </motion.div>

                {/* SOCIAL ICONS DESKTOP */}
                 <motion.div
                    className='md:hidden'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible:{ opacity: 1, x: 0 }
                    }}
                >
                    <Icons />
                </motion.div>

            </div>

             {/* SOCIAL ICONS ABOVE MEDIUM SCREENS */}
             <motion.div
                    className='hidden md:block absolute bottom-0 right-24 z-40'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible:{ opacity: 1, x: 0 }
                    }}
                >
                    <Icons />
            </motion.div>
            <div>
                <img
                    alt="Color accent for the About page"
                    className="
                                hidden md:block absolute bottom-0 left-0
                            "
                    src={`${(darkTheme ? accentDark : accentLight)}`}
                    />
            </div>
        </section>
    );
};

export default About;