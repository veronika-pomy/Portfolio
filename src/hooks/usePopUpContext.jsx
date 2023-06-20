import React, { useState, useContext } from 'react';

export const PopUpContext = React.createContext();

export const usePopUpContext = () => useContext(PopUpContext);

export default function PopUpProvider ({children}) {
    
    const [ popUp, setPopUp ] = useState(true);

    //method to update theme state
    const triggerPopUp = () => {
        return setPopUp((prev) => !prev);
    };

    return (
        <PopUpContext.Provider value={{ popUp, triggerPopUp }}>
            {children}
        </PopUpContext.Provider>
    );
};