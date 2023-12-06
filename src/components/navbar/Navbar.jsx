import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

//Import Images
import logoNafal from '../../assets/images/nafal/logo/nafal-logo.png';
import { useState } from 'react';
import { useEffect } from 'react';

const navItems = [
  { id: 1, idnm: '/', navheading: 'Home' },
  { id: 2, idnm: '/about', navheading: 'About Us' },
  { id: 3, idnm: '/services', navheading: 'Services' },
  { id: 4, idnm: '/contact', navheading: 'Contact Us' },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQueryDesktop = window.matchMedia('(min-width: 992px)');
    const handelMediaQuerry = (mediaQuerry) => {
      setIsDesktop(mediaQueryDesktop.matches);
    };
    handelMediaQuerry(mediaQueryDesktop);
    mediaQueryDesktop.addListener(handelMediaQuerry);
    const handelScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handelScroll);

    return () => {
      window.removeEventListener('scroll', handelScroll);
      mediaQueryDesktop.removeListener(handelMediaQuerry);
    };
  }, []);

  const handelNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <React.Fragment>
      <header
        id="topnav"
        className={`defaultscroll sticky ${window.location.pathname == '/' ? scroll > 120 && 'bg-light' : 'bg-light'} `}
      >
        <Container>
          <div>
            <Link className="logo" to="/">
              <img src={logoNafal} height="26" alt="Nafal" />
            </Link>
          </div>
          {/* Dekstop Nav */}
          <div
            id="navigation"
            style={{ display: isDesktop ? 'block' : 'none' }}
          >
            <ul className="navigation-menu">
              {navItems.map((item, key) => (
                <li key={key} className={window.location.pathname === item.idnm ? 'has-submenu active' : 'has-submenu'}
                >
                  <Link
                    key={key}
                    to={item?.idnm}
                    onClick={() => {
                      if (item.navheading) {
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                      }
                    }}
                  >
                    {' '}
                    {item?.navheading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Nav */}
          <div
            className="menu-extras"
            style={{ display: isDesktop ? 'none' : 'block' }}
          >
            <div className="menu-item mt-3" onClick={handelNavMenu}>
              <Link to="#" onClick={handelNavMenu} className={isNavMenuOpen ? 'navbar-toggle open' : 'navbar-toggle'}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          {isNavMenuOpen && (
            <div id="navigation" style={{ display: 'block' }}>
              <ul className="navigation-menu">
                {navItems.map((item, key) => (
                  <li key={key} className={window.location.pathname === item?.idnm ? 'has-submenu active' : 'has-submenu'}>
                    <Link key={key} to={item?.idnm} className={window.location.pathname === item?.idnm ? 'has-submenu-active' : ''}>
                      {' '}{item?.navheading}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
