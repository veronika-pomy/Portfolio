import React, { useState, useContext } from 'react';

export const PopUpContext = React.createContext();

export const usePopUpContext = () => useContext(PopUpContext);

export default function PopUpProvider ({ children }) {
    
    const [ popUp, setPopUp ] = useState(false);

    //method to update theme state
    const triggerPopUp = () => {
        return setPopUp(true);
    };

    const hidePopUp = () => {
        return setPopUp(false);
    };

    return (
        <PopUpContext.Provider value={{ popUp, triggerPopUp, hidePopUp }}>
            {children}
        </PopUpContext.Provider>
    );
};