import ThemeSwitch from "../components/ThemeSwitch";
// icons for opening and closing navigation when on mobile
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { useThemeContext } from '../hooks/useThemeContext';

// Link for menu items
const Link = ({ page, activePage, setActivePage }) => {

    const pageLowerCase = page.toLowerCase();
    const { darkTheme } = useThemeContext();

  // go to specified part of the page
  return (
    
      <AnchorLink
          className={`
              ${darkTheme ? 'hover:text-blue ' : 'hover:text-gold '}
              transition
              duration-500
          `}
          href={`#${pageLowerCase}`}
          onClick={() => setActivePage(pageLowerCase)}
      >
          {page}
      </AnchorLink>
  )
};

// Link t0 scroll to the top when clicking initials
const LinkInitials = ({ page }) => {
  return (
      <AnchorLink
          className={`font-crimson text-5xl font-bold`}
          href={`#${page}`}
      >
          VP
      </AnchorLink>
  )
};

const NavBar = ({ topOfPage, activePage, setActivePage }) => {

  // mobile screens
  const [ isNavToggled, setIsNavToggled ] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 1024px)");
  const { darkTheme } = useThemeContext();

  // changing navbar opacity on scroll
  const navBackgroundLight = topOfPage ? "bg-light" : "bg-light bg-opacity-80";
  const navBackgroundDark = topOfPage ? "bg-dark" : "bg-dark bg-opacity-80";

  return (
    <nav 
      className={
        (!darkTheme ? `${navBackgroundLight} ` : `${navBackgroundDark} `) + 
        (isNavToggled && !isAboveSmallScreen ? 'z-40 w-full fixed top-0 py-6' : `z-40 w-full fixed top-0 py-6`)
        }
    >
    
    {/* INITIALS DESKTOP */}
    <div className="hidden lg:block absolute top-5 left-20">
        {/* Scroll to the top when user clicks on initials */}
        <LinkInitials 
                    page="about"
        />
    </div>

      <div
        className="flex flex-col xs:flex-row items-center justify-between lg:justify-end mx-auto w-4/6"
      >
        {/* INITIALS MOBILE */}
        <div className="lg:hidden">
            <LinkInitials 
                        page="about"
            />
        </div>
        
        {/* DESKTOP vs MOBILE */}


        {/* DESKTOP */}  
        {isAboveSmallScreen ? 
                (
                    <div
                        className="flex justify-between gap-16 md:gap-32 font-muktaam text-2xl m-2 sm:m-2"
                    >
                        <Link 
                            page="About"
                            activePage={activePage}
                            setActivePage={setActivePage}
                        />
                        <Link 
                            page="Projects"
                            activePage={activePage}
                            setActivePage={setActivePage}
                        />
                        <Link 
                            page="Resume"
                            activePage={activePage}
                            setActivePage={setActivePage}
                        />
                        <Link 
                            page="Contact"
                            activePage={activePage}
                            setActivePage={setActivePage}
                        />
                    </div>
                ) 
                : 
                (
                    <button
                        className={'m-2 sm:m-2' + (isNavToggled ? 'hidden' : '')}
                        // this resets nav based on user clicking on nav on mobile
                        onClick = {() => setIsNavToggled(!isNavToggled)}
                    >
                        <AiOutlineMenu className={`${(darkTheme ? 'hover:text-blue' : 'hover:text-gold')}`} size={32} />
                    </button>
                )
            }

        {/* MOBILE */}
        {!isAboveSmallScreen && isNavToggled &&
                (
                    <div 
                        className={`
                            ${(darkTheme ? 'bg-dark' : 'bg-light')}
                            fixed right-0 bottom-0 h-full bg-opacity-90 w-full
                        `}
                    >
                        {/* ICON FOR CLOSING NAV ON MOBILE */}
                        <div className="flex justify-end p-12">
                            <button
                                onClick={() => setIsNavToggled(!isNavToggled)}
                            >
                                <AiOutlineClose className={`${(darkTheme ? 'hover:text-blue' : 'hover:text-gold')}`} size={26} />
                            </button>
                        </div>
                        
                        {/* ITEMS ON MOBILE */}
                        <div className="flex flex-col justify-center items-center gap-10 text-2xl text-deep-blue">
                            <button
                                onClick={() => setIsNavToggled(!isNavToggled)}
                            >
                                <Link 
                                    page="About"
                                    activePage={activePage}
                                    setActivePage={setActivePage}
                                />
                            </button>
                            <button
                                onClick={() => setIsNavToggled(!isNavToggled)}
                            >
                                <Link 
                                    page="Projects"
                                    activePage={activePage}
                                    setActivePage={setActivePage}
                                />
                            </button>
                            <button
                                onClick={() => setIsNavToggled(!isNavToggled)}
                            >
                                <Link 
                                    page="Resume"
                                    activePage={activePage}
                                    setActivePage={setActivePage}
                                />
                            </button>
                            <button
                                onClick={() => setIsNavToggled(!isNavToggled)}
                            >
                                <Link 
                                    page="Contact"
                                    activePage={activePage}
                                    setActivePage={setActivePage}
                                />
                            </button>
                        </div>
                    </div>
                )        
            }

            {/* SWITCH THEME ON MOBILE */}
            <div className="lg:hidden m-2 sm:m-2">
                <ThemeSwitch />
            </div>
      </div>

      {/* SWITCH THEME ON DESKTOP */}
        <div className={`
            hidden lg:block absolute top-7 right-20
        `}>
            <ThemeSwitch />
        </div>      

    </nav>
  )
}

export default NavBar;
