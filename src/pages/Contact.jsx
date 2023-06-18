import Icons from '../components/Icons';
import PopUp from '../components/PopUp';

import { useRef, useState } from 'react';
import { set, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useThemeContext } from '../hooks/useThemeContext';

const Contact = () => {

    const { darkTheme } = useThemeContext();

    const [ popUp, setPopUp ] = useState(true);

    // identify inputs, validate inputs, give errors if any
    const { register, trigger, formState: { errors } } = useForm();

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        } else {
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUB_KEY)
            .then((result) => {
                console.log(result.text); 
                setPopUp(true);
            }, (error) => {
                console.log(error.text);
            });
        };
    };
    
      return (
        <section id="contact" className="py-44 md:flex md:flex-col md:items-center">
            <PopUp popUp={popUp} setPopUp={setPopUp} />
        
            {/* HEADER */}
            <motion.div
                className="w-full mx-auto text-center md:text-start"
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
                    <p className="font-crimson font-semibold text-4xl xs:5xl mb-12">
                        CONTACT <span className={`${(darkTheme ? 'text-blue' : 'text-gold')}`}>ME</span>
                    </p>
                </div>
            </ motion.div>
             {/* FORM */}
             <motion.div
                className="w-full mt-10 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible:{ opacity: 1, y: 0 }
                }}
            >   
                <form
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <input 
                        className="w-full border-2 border-dark bg-light placeholder-dark text-dark p-3 font-muktaam text-lg rounded"
                        type="text"
                        placeholder="Name"
                        name="user_name"
                        // setting how to register input and valdiate it using react hook form
                        {...register("name",
                            {
                                required: true,
                            }
                        )}
                    />
                    {/* ERROR CONDITIONAL  */}
                    {errors.name && (
                        <p
                            className="mt-1"
                        >
                            {errors.name.type === "required" && "This field is required."}
                        </p>
                    )
                    }
                    <input 
                        className="w-full border-2 border-dark bg-light placeholder-dark text-dark p-3 mt-5 font-muktaam text-lg rounded"
                        type="text"
                        name="user_email"
                        placeholder="Email"
                        {...register("email",
                            {
                                required: true,
                                // regex to validate email
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            }
                        )}
                    />
                    {errors.email && (
                        <p
                            className="mt-1"
                        >
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email. Please try again."}
                        </p>
                    )
                    }
                     <textarea
                        className="w-full border-2 border-dark bg-light placeholder-dark text-dark p-3 mt-5 font-muktaam text-lg rounded"
                        type="text"
                        name="message"
                        placeholder="Message"
                        rows="10"
                        cols="50"
                        {...register("message",
                            {
                                required: true,
                                maxLength: 2500,
                            }
                        )}
                    />
                    {errors.message && (
                        <p
                            className="mt-1"
                        >
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "You exeeded the maximum number of characters please try again."}
                        </p>
                    )
                    }
                    <div
                        className='flex flex-col items-center gap-10 md:flex-row md:justify-between mt-8 lg:mt-0'
                    >
                        <div>
                            <button
                                type="submit"
                                value='Send'
                                className={`
                                    ${(darkTheme ? 
                                    'bg-blue border-light text-dark hover:text-light'
                                    : 
                                    'bg-gold border-dark text-light hover:text-dark'
                                    )}
                                    border
                                    text-xl
                                    px-8
                                    py-3
                                    font-muktaam
                                    mt-5
                                    transituon
                                    duration-500
                                `}
                            >
                                Send
                            </button>
                        </div>
                        <div
                            className='mt-5'
                        >
                            <Icons />
                        </div>
                    </div>
                </form>
            </motion.div>
        </section>
      );
    };
    
    export default Contact;