import { AiOutlineClose } from 'react-icons/ai';

import { motion } from "framer-motion";
import { useThemeContext } from '../hooks/useThemeContext';

const PopUp = ({popUp, setPopUp}) => {

    const { darkTheme } = useThemeContext();

    return (popUp) ? (
        <div className={`
            ${(darkTheme ?
                    'border-light shadow-light shadow-sm'
                    :
                    'border-dark shadow-dark shadow-sm'
            )}
                transparent
                border
                p-2
                rounded-[18px]
                flex
                flex-row-reverse
                font-muktaam
                
                drop-shadow
        `}>
            <div
                className='pb-4 pr-1 '
            >  
                <button
                        className='self-end'
                        onClick={() => setPopUp(false)}
                >
                        <AiOutlineClose className={`${(darkTheme ? 'hover:text-blue' : 'hover:text-gold')}`} size={14} />
                </button>
            </div>
            <div
                className='pb-3 pt-4 pl-4'
            >
                <p>
                    Thank you for your message! I'll be in touch shortly.
                </p>
            </div>
        </div>
    ) 
    :
    ''
};

export default PopUp;
