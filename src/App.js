import NavBar from './pages/NavBar';

import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';

function App() {

  // use state default 'about'
  const [ activePage, setActivePage ] = useState('about');

  // changes navbar attrs when scrolling 
  const [ topOfPage, setTopOfPage ] = useState(true);

  // determine current browser size 
  const isAboveMediumScreen = useMediaQuery("(min-width: 768px)");

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
    <div className="app">
  
    </div>
  );
}

export default App;
