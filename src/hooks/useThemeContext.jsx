import React, { useState, useContext } from 'react';

export const ThemeContext = React.createContext();

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider ({children}) {
    
    const [ darkTheme, setDarkTheme ] = useState(false);

    //method to update theme state
    const toggleTheme = () => {
        // console.log(`Dark theme is on: ${darkTheme} `);
        return setDarkTheme((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};