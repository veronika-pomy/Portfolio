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

  // go to specified part of the page
  return (
      <AnchorLink
          className={`
              ${activePage === pageLowerCase ? "blue" : ""}
              hover:text-blue
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
          className={`font-crimson text-4xl font-bold`}
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
  const navBackgroundLight = topOfPage ? "bg-light" : "bg-light";
  const navBackgroundDark = topOfPage ? "bg-dark" : "bg-dark";

  return (
    <nav 
      className={
        (!darkTheme ? `${navBackgroundDark} ` : `${navBackgroundLight} `) + 
        (isNavToggled && !isAboveSmallScreen ? 'z-40 w-full fixed top-0 py-6' : `z-40 w-full fixed top-0 py-6`)
        }
    >
      <div
        className="flex items-center justify-between mx-auto w-4/6"
      >
        {/* Scroll to the top when user clicks on initials */}
        <LinkInitials 
                page="about"
        />

        {/* DESKTOP vs MOBILE */}


        {/* DESKTOP */}  
        {isAboveSmallScreen ? 
                (
                    <div
                        className="flex justify-between gap-16 md:gap-32 font-muktaam text-xl"
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
                        className={(isNavToggled ? 'hidden' : '')}
                        // this resets nav based on user clicking on nav on mobile
                        onClick = {() => setIsNavToggled(!isNavToggled)}
                    >
                        <AiOutlineMenu size={32} />
                    </button>
                )
            }

        {/* MOBILE */}
        {! isAboveSmallScreen && isNavToggled &&
                (
                    <div className="fixed right-0 bottom-0 h-full bg-grey bg-opacity-90 w-full">
                        {/* ICON FOR CLOSING NAV ON MOBILE */}
                        <div className="flex justify-end p-12">
                            <button
                                onClick={() => setIsNavToggled(!isNavToggled)}
                            >
                                <AiOutlineClose size={26} />
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

            {/* Switch Theme */}
            <ThemeSwitch />
      </div>
      
    </nav>
  )
}

export default NavBar;
