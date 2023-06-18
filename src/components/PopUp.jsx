import { AiOutlineClose } from 'react-icons/ai';

import { useThemeContext } from '../hooks/useThemeContext';

const PopUp = ({popUp, setPopUp}) => {

    const { darkTheme } = useThemeContext();

    return (popUp) ? (
        <div className='bg-indigo-500'>
            <div
                className=''    
            >
                <button
                    className=''
                    onClick={() => setPopUp(false)}
                >
                    <AiOutlineClose className={`${(darkTheme ? 'hover:text-blue' : 'hover:text-gold')}`} size={12} />
                </button>
                <p>
                    Thank you for your message! I'll get in touch with you shortly.
                </p>
            </div>
        </div>
    ) 
    :
    ''
};

export default PopUp;
