import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <Link to='/' className='navbar-logo'>
          Product.com <i className="fa-brands fa-product-hunt"></i>
        </Link>
        {/*--- Menu Icon -----*/}
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/more'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              More
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>

          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
