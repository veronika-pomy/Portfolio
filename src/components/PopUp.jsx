import { AiOutlineClose } from 'react-icons/ai';

import { useThemeContext } from '../hooks/useThemeContext';
import { usePopUpContext } from '../hooks/usePopUpContext';

const PopUp = ( ) => {

    const { darkTheme } = useThemeContext();

    const { popUp, triggerPopUp } = usePopUpContext();

    return (popUp) ? (
        <div className={`
            ${(darkTheme ?
                    ' shadow-light shadow backdrop-brightness-300'
                    :
                    ' shadow-dark shadow backdrop-brightness-700'
            )}
                transparent
        
                p-1
                rounded-[4px]
                flex
                flex-row-reverse
                font-muktaam
                backdrop-blur-md
                drop-shadow
                fixed
                top-28
                right-4
                z-40
        `}>
            <div
                className='pb-4 pr-1 '
            >  
                <button
                        className='self-end'
                        onClick={() => triggerPopUp()}
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
