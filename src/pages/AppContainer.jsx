import { useEffect, useState } from 'react';
import PopUp from '../components/PopUp';
import { useThemeContext } from '../hooks/useThemeContext';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Projects from './Projects';
import Resume from './Resume';

const AppContainer = () => {
    
  // use state default 'about'
  const [ activePage, setActivePage ] = useState('about');

  // changes navbar attrs when scrolling 
  const [ topOfPage, setTopOfPage ] = useState(true);

  // theme context
  const { darkTheme } = useThemeContext();

  const favicon = document.getElementById('favicon');

  // change favicon path based on theme
  darkTheme ? favicon.href = '/Portfolio/favicon-dark.ico' : favicon.href = '/Portfolio/favicon-light.ico';

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
          <div className={(!darkTheme ? 'bg-light text-dark app' : 'bg-dark text-light app' )}>
            <NavBar
              topOfPage={topOfPage}
              activePage={activePage}
              setActivePage={setActivePage}
            />
            <PopUp />
            <div className="w-4/6 mx-auto">
              <div className="w-full mx-auto mb-1">
                <About setActivePage={setActivePage} />
              </div>
              <div className="w-full mx-auto mt-16">
                <Projects />
              </div>
              <div className="w-full mx-auto md:h-full">
                <Resume />
              </div>
              <div className="w-5/6 mx-auto md:h-full">
                <Contact />
              </div>
            </div>
          </div>
  );
}

export default AppContainer;
