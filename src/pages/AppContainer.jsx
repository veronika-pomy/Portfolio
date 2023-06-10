import NavBar from "./NavBar";
import { useEffect, useState } from 'react';
import { useThemeContext } from '../hooks/useThemeContext'

const AppContainer = () => {
      // use state default 'about'
  const [ activePage, setActivePage ] = useState('about');

  // changes navbar attrs when scrolling 
  const [ topOfPage, setTopOfPage ] = useState(true);

  // theme context
  const { darkTheme } = useThemeContext();


  // handle scrolling page down, navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
      } else {
        setTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
          <div className={(darkTheme ? 'bg-light text-dark app' : 'bg-dark text-light app' )}>
            <NavBar
              topOfPage={topOfPage}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </div>
  )
}

export default AppContainer;