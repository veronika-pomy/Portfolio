import NavBar from './pages/NavBar';

import { useEffect, useState } from 'react';

function App() {

  // use state default 'about'
  const [ activePage, setActivePage ] = useState('about');

  // changes navbar attrs when scrolling 
  const [ topOfPage, setTopOfPage ] = useState(true);

  // set up context for theme switch

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
    <div className="app bg-light">
      <NavBar
        topOfPage={topOfPage}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
}

export default App;
