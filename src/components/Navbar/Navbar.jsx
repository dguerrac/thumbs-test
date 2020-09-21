import React, { useState } from 'react';
import { useWindowWidth } from '../../utils/hooks'
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

import './Navbar.scss';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const width = useWindowWidth();

  const handleShowNav = () => setShowNav(!showNav);
  return (
    <header className={'header'}>
      <div className={'header__title'}>
        <h1>
          <NavLink to={'/'} activeClassName={'selected'} onClick={() => setShowNav(false)}>
            Rule of Thumb
          </NavLink>  
        </h1>
        {width < 768 && (
          <button ariaLabel={'menu hamburguer'} className={'header__title_button'} onClick={handleShowNav}>
            <AiOutlineMenu/>
          </button>
        )}
      </div>
      <nav className={`header__nav ${showNav && 'show-nav'}`}>
        { width < 768 && (
          <button ariaLabel={'close nav'} className={'header__nav_button'} onClick={handleShowNav}>
            <FiChevronRight/>
          </button>
        )}
        <ul>
          <li>
            <NavLink to={'/past-trials'} activeClassName={'selected'} onClick={handleShowNav}>
              Past Trials
            </NavLink>  
          </li>
          <li>
            <NavLink to={'/how-it-works'} activeClassName={'selected'} onClick={handleShowNav}>
              How It Works
            </NavLink>  
          </li>
          <li>
            <NavLink to={'/login'} activeClassName={'selected'} onClick={handleShowNav}>
              Log In/Sign Up
            </NavLink>  
          </li>
          <li className={'last-child'}>
            <AiOutlineSearch/>  
          </li>  
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
