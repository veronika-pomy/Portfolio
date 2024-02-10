import { motion } from 'framer-motion';
import profileImage from '../assets/profile-photo.png';
import ContactButtons from '../components/ContactButtons';
import Icons from '../components/Icons';
import { useThemeContext } from '../hooks/useThemeContext';

const About = ({ setActivePage }) => {

    const { darkTheme } = useThemeContext();

    return (
        <section id='about' className="lg:flex md:justify-between md:items-center lg:h-full gap-16 py-5">    
            {/* IMAGE */}
            {/* order two allow it to be on the right of text when screen is large but on top when screen is small */}
            <div className="md:order-2 flex justify-center lg:justify-end basis-4/6 z-10 mt-40 xs:mt-16 mb-10 md:mt-32 md:mb-24">
                        <div>
                            <img
                                alt="Veronika's Developer Profile"
                                className="
                                            w-96
                                            hover:filter 
                                            hover:brightness-105
                                            transition 
                                            duration-500 
                                            z-10 
                                            max-w-[400px] 
                                            md:max-w-[600px]
                                        "
                                src={`${profileImage}`}
                            />
                        </div>
            </div>

            
            <div className="lg:justify-end basis-4/6 z-10 mt-16 mb-10 md:mt-32 md:mb-24 md:h-84">
                {/* ABOUT */}
                {/* use motion for simple animation */}
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
                    <p className="text-5xl sm:text-7xl font-crimson z-10 text-center lg:text-start">
                        Veronika {" "}
                        <span
                            className={(darkTheme ? 'xs:relative text-blue' : 'xs:relative text-gold')}
                        >
                            Pomyateeva
                        </span>
                    </p>
                    <p
                        className="mt-10 mb-7 text-3xl text-center lg:text-start"
                    >
                        Full-Stack Developer passionate about delivering excellent user experience and leveraging my psychology background when building value-driven applications.
                    </p>
                </motion.div>

                {/* CONTACT */}
                <ContactButtons setActivePage={setActivePage}/>
                
                {/* SOCIAL ICONS MOBILE */}
                 <motion.div
                    className='lg:hidden mt-5 '
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
                    className='hidden lg:block absolute bottom-0 right-20 z-10 my-14'
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
        </section>
    );
};

export default About;